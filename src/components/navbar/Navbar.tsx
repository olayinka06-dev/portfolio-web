"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { OlayinkaLogo } from "../brand/OlayinkaLogo";

export const RESUME_URL = "/resume.pdf";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const els = navItems
      .map((n) => document.querySelector(n.href))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && setActive(`#${e.target.id}`),
        );
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:pt-4">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-xl border transition-[max-width,background-color,border-color,box-shadow,padding] duration-500 ease-out-expo",
            scrolled || open
              ? "max-w-4xl border-border bg-background/80 px-3 py-2 shadow-lift backdrop-blur-xl"
              : "max-w-304 border-transparent px-2 py-3 md:px-8",
          )}
        >
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

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 font-mono text-xs transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-foreground" />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              asChild
              variant="mono"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                Resume <ArrowUpRight />
              </a>
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon-sm"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {open && (
        <div className="page-enter fixed inset-0 z-40 flex flex-col bg-background px-5 pb-8 pt-24 lg:hidden">
          <p className="text-label mb-4">{`// navigate`}</p>
          <nav className="flex flex-col" aria-label="Mobile">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ "--d": `${60 + i * 50}ms` } as React.CSSProperties}
                className="fade-up group flex items-baseline justify-between border-b border-border py-4"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-subtle">
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "text-4xl font-medium tracking-tight",
                      active === item.href
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </span>
                <ArrowUpRight className="size-5 text-subtle" />
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center justify-between gap-3">
            <Button asChild variant="outline" className="flex-1">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </Button>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="pulse-dot size-1.5 rounded-full bg-foreground" />{" "}
              available
            </span>
          </div>
        </div>
      )}
    </>
  );
}
