"use client";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/layout/primitives";
import { navItems } from "@/components/navbar/Navbar";
import { contact, isPlaceholder } from "@/data/profile";

const socials = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "X", href: contact.x },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-sm">
            <span className="text-subtle">~/</span>abdulrahman
          </p>
          <p className="mt-2 text-muted-foreground">Full-Stack & Blockchain Developer</p>
          <p className="mt-6 hidden font-mono text-xs text-subtle md:block">
            psst — try typing <kbd className="rounded border border-border px-1">sudo</kbd>
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="text-label mb-4">{`// index`}</p>
          <ul className="space-y-2">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="link-underline text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-label mb-4">{`// elsewhere`}</p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                {isPlaceholder(s.href) ? (
                  <span className="font-mono text-xs text-subtle">{s.label} · {s.href}</span>
                ) : (
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline text-sm text-muted-foreground hover:text-foreground">{s.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="flex items-center justify-between border-t border-border py-6 font-mono text-xs text-subtle">
        <span>© {new Date().getFullYear()} Abdulrahman · built end to end</span>
        <a href="#home" className="group inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          back to top <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  );
}
