"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

const fieldClass =
  "bg-transparent border-0 border-b border-border rounded-none px-0 text-teal h-12 focus-visible:ring-0 focus-visible:border-teal";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

const STATUS_COPY: Record<Status, React.ReactNode> = {
  idle: "We reply within one business day.",
  sending: "Sending…",
  sent: "Thank you. Your message is on its way and we'll be in touch soon.",
  error: (
    <>
      Something went wrong sending your message. Please email us directly at{" "}
      <MailLink />.
    </>
  ),
  mailto: (
    <>
      Your email app should open with your message. If it didn&apos;t, write to
      us at <MailLink />.
    </>
  ),
};

function MailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-teal">
      {CONTACT_EMAIL}
    </a>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message, company }),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      if (res.status !== 503) {
        setStatus("error");
        return;
      }
    } catch {
      setStatus("error");
      return;
    }

    // Server-side sending isn't configured yet: hand off to the visitor's email app.
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
    setStatus("mailto");
  };

  return (
    <Card className="bg-cream border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-[family-name:var(--font-cormorant)] font-light text-teal">
          Book a Consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6 relative" onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full mt-8"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
          <p className="text-sm text-teal/70" aria-live="polite">
            {STATUS_COPY[status]}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
