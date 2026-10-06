"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, Loader2, Mail } from "lucide-react";
import toast from "react-hot-toast";

import { Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, isPlaceholder } from "@/data/profile";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Keep it under 100 characters"),

  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255, "Enter a valid email address"),

  message: z
    .string()
    .trim()
    .min(10, "A little more detail, please (10+ characters)")
    .max(1000, "Keep it under 1000 characters"),
});

type Fields = z.infer<typeof schema>;

const links = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "GitHub",
    value: contact.github,
    href: contact.github,
  },
  {
    label: "LinkedIn",
    value: contact.linkedin,
    href: contact.linkedin,
  },
  {
    label: "X",
    value: contact.x,
    href: contact.x,
  },
];

export function Contact() {
  const [errors, setErrors] = useState<
    Partial<Record<keyof Fields, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const parsed = schema.safeParse(
      Object.fromEntries(new FormData(form)),
    );

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Fields, string>> = {};

      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof Fields;

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);

      const firstError = Object.keys(
        fieldErrors,
      )[0] as keyof Fields | undefined;

      if (firstError) {
        form
          .querySelector<HTMLElement>(`[name="${firstError}"]`)
          ?.focus();
      }

      return;
    }

    if (isPlaceholder(contact.email)) {
      toast.error("Contact email is not configured.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ?? "Failed to send message",
        );
      }

      form.reset();

      toast.success("Message sent successfully.");
    } catch {
      toast.error(
        "Couldn't send your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const field = (name: keyof Fields) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name]
      ? `contact-${name}-error`
      : undefined,
  });

  const errorMessage = (name: keyof Fields) =>
    errors[name] ? (
      <p
        id={`contact-${name}-error`}
        className="font-mono text-xs text-destructive"
      >
        {errors[name]}
      </p>
    ) : null;

  return (
    <Section id="contact">
      <SectionHeading
        index="04"
        label="Contact"
        title={
          <>
            Have an idea?{" "}
            <span className="text-muted-foreground">
              Let&apos;s talk it through.
            </span>
          </>
        }
        description="Send a note about what you're building — a rough description is a fine place to start."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-8 md:col-span-4 md:col-start-1 lg:col-span-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs">
            <span
              aria-hidden
              className={
                contact.available
                  ? "pulse-dot size-1.5 rounded-full bg-foreground"
                  : "size-1.5 rounded-full bg-subtle"
              }
            />

            {contact.available
              ? contact.availabilityNote
              : "Not taking new work right now"}
          </p>

          <ul className="divide-y divide-border border-y border-border">
            {links.map((link) => {
              const placeholder = isPlaceholder(link.value);

              return (
                <li key={link.label}>
                  {placeholder ? (
                    <span className="flex items-center justify-between py-3 font-mono text-xs text-subtle">
                      <span>{link.label}</span>
                      <span>{link.value}</span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target={
                        link.label === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        link.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center justify-between py-3 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal
          delay={80}
          className="md:col-span-8 lg:col-span-8 lg:col-start-5"
        >
          <form
            noValidate
            onSubmit={onSubmit}
            className="relative space-y-5 rounded-lg border border-border bg-card p-6 shadow-soft md:p-8"
          >
            {/* Honeypot field for simple bot protection */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-px w-px opacity-0"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>

                <Input
                  {...field("name")}
                  autoComplete="name"
                  maxLength={100}
                />

                {errorMessage("name")}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>

                <Input
                  {...field("email")}
                  type="email"
                  autoComplete="email"
                  maxLength={255}
                />

                {errorMessage("email")}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>

              <Textarea
                {...field("message")}
                rows={6}
                maxLength={1000}
                placeholder="What are you building?"
              />

              {errorMessage("message")}
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="font-mono text-xs text-subtle">
                your message goes straight to my inbox
              </p>

              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail />
                    Send message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
