import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

const TO_EMAIL = "nicole@house-of-order.com";
const FROM_EMAIL = "House of Order <forms@house-of-order.com>";

type Payload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot, must stay empty
};

function getApiKey(): string | undefined {
  try {
    const env = getRequestContext().env as { RESEND_API_KEY?: string };
    if (env.RESEND_API_KEY) return env.RESEND_API_KEY;
  } catch {
    // Not running under Cloudflare (e.g. `next dev`); fall through.
  }
  return process.env.RESEND_API_KEY;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill every field, people never see this one.
  if (body.company) {
    return Response.json({ ok: true });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const service = (body.service ?? "Not specified").trim().slice(0, 100);
  const message = (body.message ?? "").trim().slice(0, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  // Local development: `CONTACT_DRY_RUN=1` in .env.local skips the real send.
  if (process.env.CONTACT_DRY_RUN === "1") {
    console.log("[contact] dry run", { name, email, service });
    return Response.json({ ok: true });
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service interest: ${service}`,
    "",
    "About the space:",
    message || "(no message)",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Consultation request from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
