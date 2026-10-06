"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { Container } from "@/components/layout/primitives";
import { navItems } from "@/components/navbar/Navbar";
import { contact, isPlaceholder } from "@/data/profile";
import { OlayinkaLogo } from "../brand/OlayinkaLogo";

const socials = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "X", href: contact.x },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-12 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        {/* Identity */}
        <div className="md:col-span-5">
          <Link
            href="#home"
            aria-label="Olayinka Dev — home"
            className="group inline-flex items-center gap-2"
          >
            <OlayinkaLogo className="size-7 transition-opacity group-hover:opacity-70" />
            <span className="font-mono text-sm font-medium tracking-tight">
              olayinka.dev
            </span>
          </Link>

          <p className="mt-2 text-muted-foreground">
            Full-Stack &amp; Blockchain Developer
          </p>

          <p className="mt-6 hidden font-mono text-xs text-subtle md:block">
            psst — try typing{" "}
            <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 text-foreground">
              sudo
            </kbd>
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="md:col-span-3">
          <p className="text-label mb-4">{`// index`}</p>

          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={`/${item.href}`}
                  className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="md:col-span-4">
          <p className="text-label mb-4">{`// elsewhere`}</p>

          <ul className="space-y-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                {isPlaceholder(social.href) ? (
                  <span className="font-mono text-xs text-subtle">
                    {social.label} · {social.href}
                  </span>
                ) : (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <Container className="flex flex-col gap-4 border-t border-border py-6 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Abdulrahman · built end to end</span>

        <a
          href="#home"
          className="group inline-flex w-fit items-center gap-1.5 transition-colors hover:text-foreground"
        >
          back to top
          <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
}
