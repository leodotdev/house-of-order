"use client";

import { useRef, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CONTACT_EMAIL = "nicole@house-of-order.com";
export const CONTACT_PHONE = "(305) 815-6931";
export const CONTACT_PHONE_TEL = "+13058156931";

const SERVICES = [
  { value: "home-organizing", label: "Home Organizing" },
  { value: "full-space-overhaul", label: "Full Space Overhaul" },
  { value: "seasonal-reset", label: "Seasonal Reset" },
  { value: "not-sure", label: "Not Sure Yet" },
];

// The request usually resolves in well under a second. Holding the sending
// state briefly keeps it legible instead of a flash the eye can't parse.
const MIN_SENDING_MS = 900;
const LEAVE_MS = 200;

const fieldClass =
  "bg-transparent border-0 border-b border-border rounded-none px-0 text-teal h-12 focus-visible:ring-0 focus-visible:border-teal";

type Status = "idle" | "sending" | "leaving" | "sent" | "error" | "mailto";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function MailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-teal">
      {CONTACT_EMAIL}
    </a>
  );
}

function SuccessPanel({ name, onReset }: { name: string; onReset: () => void }) {
  const firstName = name.split(/\s+/)[0];
  return (
    <div className="flex flex-1 flex-col items-start justify-center gap-6 py-6" role="status">
      <span
        className="contact-rise-in flex size-14 items-center justify-center rounded-full border border-terracotta/40"
        style={{ "--i": 0 } as React.CSSProperties}
      >
        <svg
          className="contact-check size-7 text-terracotta"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" pathLength={1} />
        </svg>
      </span>
      <div className="space-y-3">
        <h3
          className="contact-rise-in text-3xl font-[family-name:var(--font-cormorant)] font-light text-teal"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Thank you{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p
          className="contact-rise-in max-w-sm leading-relaxed text-teal/70"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          Your message is on its way. Nicole will be in touch within one
          business day.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="contact-rise-in text-sm tracking-wide text-teal/60 underline-offset-4 transition-colors hover:text-teal hover:underline"
        style={{ "--i": 3 } as React.CSSProperties}
      >
        Send another message
      </button>
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");
  const [minHeight, setMinHeight] = useState<number>();
  const formRef = useRef<HTMLFormElement>(null);

  const busy = status === "sending" || status === "leaving";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const serviceValue = String(data.get("service") ?? "");
    const service =
      SERVICES.find((s) => s.value === serviceValue)?.label ?? "Not specified";
    const message = String(data.get("message") ?? "").trim();
    const company = String(data.get("company") ?? "");

    setStatus("sending");
    const startedAt = Date.now();

    let outcome: "sent" | "error" | "mailto";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message, company }),
      });
      outcome = res.ok ? "sent" : res.status === 503 ? "mailto" : "error";
    } catch {
      outcome = "error";
    }

    await wait(Math.max(0, MIN_SENDING_MS - (Date.now() - startedAt)));

    if (outcome === "sent") {
      // Hold the card's height so the swap doesn't make the page jump.
      setMinHeight(formRef.current?.offsetHeight);
      setSentName(name);
      setStatus("leaving");
      await wait(LEAVE_MS);
      setStatus("sent");
      return;
    }

    if (outcome === "mailto") {
      const subject = `Consultation request from ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Service interest: ${service}`,
        "",
        "About the space:",
        message,
      ].join("\n");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    }
    setStatus(outcome);
  };

  const reset = () => {
    setMinHeight(undefined);
    setSentName("");
    setStatus("idle");
  };

  return (
    <Card className="bg-cream border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-teal">
          {status === "sent" ? "Message Sent" : "Book a Consultation"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ minHeight }} className="flex flex-col">
          {status === "sent" ? (
            <SuccessPanel name={sentName} onReset={reset} />
          ) : (
            <form
              ref={formRef}
              className={`relative space-y-6 ${status === "leaving" ? "contact-form-leave" : ""}`}
              onSubmit={handleSubmit}
              aria-busy={busy}
            >
              <fieldset disabled={busy} className="contact-fields space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-teal text-sm tracking-wide">
                    Name
                  </Label>
                  <Input type="text" id="name" name="name" autoComplete="name" required className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-teal text-sm tracking-wide">
                    Email
                  </Label>
                  <Input type="email" id="email" name="email" autoComplete="email" required className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-teal text-sm tracking-wide">
                    Service Interest
                  </Label>
                  <Select name="service">
                    <SelectTrigger id="service" className="bg-transparent border-0 border-b border-border rounded-none px-0 text-teal h-12 focus:ring-0">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-teal text-sm tracking-wide">
                    Tell us about your space
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 text-teal resize-none focus-visible:ring-0 focus-visible:border-teal"
                  />
                </div>
                {/* Honeypot: hidden from people, filled in by bots */}
                <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>
              </fieldset>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full mt-8 disabled:opacity-100"
                disabled={busy}
              >
                {busy ? (
                  <>
                    Sending
                    <LoaderCircle className="w-4 h-4 ml-2 animate-spin" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="min-h-5 text-sm text-teal/70" aria-live="polite">
                {status === "error" && (
                  <span className="contact-rise-in block">
                    Something went wrong sending your message. Please email us
                    directly at <MailLink />.
                  </span>
                )}
                {status === "mailto" && (
                  <span className="contact-rise-in block">
                    Your email app should open with your message. If it
                    didn&apos;t, write to us at <MailLink />.
                  </span>
                )}
                {status === "idle" && "We reply within one business day."}
              </p>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
