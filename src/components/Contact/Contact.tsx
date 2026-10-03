"use client";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, Check, Loader2, Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, isPlaceholder } from "@/data/profile";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Keep it under 100 characters"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(10, "A little more detail, please (10+ characters)").max(1000, "Keep it under 1000 characters"),
});
type Fields = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "GitHub", value: contact.github, href: contact.github },
  { label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
  { label: "X", value: contact.x, href: contact.x },
];

export function Contact() {
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const fe: typeof errors = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as keyof Fields] ??= i.message));
      setErrors(fe);
      form.querySelector<HTMLElement>(`[name="${Object.keys(fe)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      // Free, serverless delivery: opens the visitor's email app with the message prefilled.
      if (isPlaceholder(contact.email)) throw new Error("Contact email not configured");
      const { name, email, message } = parsed.data;
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      await new Promise((r) => setTimeout(r, 400));
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = (name: keyof Fields) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": !!errors[name] || undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });
  const err = (name: keyof Fields) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="font-mono text-xs text-destructive">{errors[name]}</p>
    );

  return (
    <Section id="contact">
      <SectionHeading
        index="04"
        label="Contact"
        title={
          <>
            Have an idea? <span className="text-muted-foreground">Let&apos;s talk it through.</span>
          </>
        }
        description="Send a note about what you're building — a rough description is a fine place to start."
      />
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-8 md:col-span-4 md:col-start-1 lg:col-span-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs">
            <span className={contact.available ? "pulse-dot size-1.5 rounded-full bg-foreground" : "size-1.5 rounded-full bg-subtle"} />
            {contact.available ? contact.availabilityNote : "Not taking new work right now"}
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {links.map((l) => {
              const ph = isPlaceholder(l.value);
              return (
                <li key={l.label}>
                  {ph ? (
                    <span className="flex items-center justify-between py-3 font-mono text-xs text-subtle">
                      <span>{l.label}</span><span>{l.value}</span>
                    </span>
                  ) : (
                    <a href={l.href} target={l.label === "Email" ? undefined : "_blank"} rel="noreferrer"
                      className="group flex items-center justify-between py-3 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground">
                      <span>{l.label}</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={80} className="md:col-span-8 lg:col-span-8 lg:col-start-5">
          {status === "success" ? (
            <div role="status" className="rounded-lg border border-border bg-card p-8 shadow-soft">
              <Check className="size-6" />
              <h3 className="mt-4 text-2xl font-medium tracking-tight">Message ready to send.</h3>
              <p className="text-lead mt-2">Your email app should have opened with the note prefilled — hit send there and I&apos;ll get back to you.</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Write another</Button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-soft md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input {...field("name")} autoComplete="name" maxLength={100} />
                  {err("name")}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input {...field("email")} type="email" autoComplete="email" maxLength={255} />
                  {err("email")}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea {...field("message")} rows={6} maxLength={1000} placeholder="What are you building?" />
                {err("message")}
              </div>
              {status === "error" && (
                <p role="alert" className="rounded-md border border-destructive/40 px-3 py-2 font-mono text-xs text-destructive">
                  Couldn&apos;t open your email app. Please try again or reach out directly via the links.
                </p>
              )}
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="font-mono text-xs text-subtle">opens your email app</p>
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? <><Loader2 className="animate-spin" /> Sending</> : <><Mail /> Send message</>}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
