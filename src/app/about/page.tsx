import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/primitives";
import { PageTransition, Reveal } from "@/components/motion/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About — Abdulrahman",
  description:
    "About Abdulrahman, a full-stack & blockchain developer focused on building complete digital products from idea to deployment.",
  openGraph: {
    title: "About — Abdulrahman",
    description:
      "Full-stack & blockchain developer building complete digital products from idea to deployment.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const principles = [
  {
    index: "01",
    label: "Product first",
    text: "Start from the problem and the user, not the framework. Technology should serve the product rather than define it.",
  },
  {
    index: "02",
    label: "Own the whole path",
    text: "Work across the interface, API, data, authentication and deployment so the pieces form one dependable system.",
  },
  {
    index: "03",
    label: "Build for the next person",
    text: "Prefer clear architecture, predictable behaviour and maintainable code over unnecessary complexity.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            back home
          </Link>

          <ThemeToggle />
        </Container>
      </header>

      <main>
        {/* Intro */}
        <Container className="section-y">
          <p className="mb-5 text-label">
            {`// about`} · full-stack & blockchain developer
          </p>

          <h1 className="text-display">About</h1>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-label">01 / Profile</p>
            </div>

            <div className="space-y-6 md:col-span-8 md:col-start-5">
              <Reveal>
                <p className="text-lg leading-relaxed md:text-2xl">
                  I&apos;m Abdulrahman, a full-stack developer who takes ideas
                  from a rough description to a working product people can use.
                </p>
              </Reveal>

              <Reveal delay={80}>
                <p className="text-lead">
                  Most of my work sits where product decisions meet engineering
                  ones: shaping interfaces, designing APIs and data models,
                  building real-time systems, handling authentication, and
                  shipping applications that feel considered.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-lead">
                  I care about the details that make software dependable —
                  clear architecture, predictable behaviour, good performance,
                  accessibility, and code that the next person can understand.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="text-lead">
                  Alongside full-stack development, I work with blockchain and
                  Web3 technologies, exploring how smart contracts, wallets,
                  and decentralized systems can fit into useful products.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Principles */}
        <Container className="pb-24 md:pb-32">
          <div className="border-y border-border">
            <div className="grid gap-8 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-label">02 / Principles</p>
              </div>

              <div className="md:col-span-9">
                <div className="divide-y divide-border">
                  {principles.map((principle, index) => (
                    <Reveal key={principle.index} delay={index * 80}>
                      <div className="grid gap-4 py-7 md:grid-cols-12 md:gap-8">
                        <p className="font-mono text-xs text-muted-foreground md:col-span-2">
                          {principle.index}
                        </p>

                        <div className="md:col-span-3">
                          <h2 className="font-semibold tracking-tight">
                            {principle.label}
                          </h2>
                        </div>

                        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:col-span-7">
                          {principle.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Full stack */}
        <Container className="pb-24 md:pb-32">
          <div className="border-y border-border">
            <div className="grid gap-8 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-label">03 / Stack</p>
              </div>

              <div className="md:col-span-9">
                <div className="mb-10 max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    The tools behind the work.
                  </h2>

                  <p className="mt-4 text-lead">
                    A broad technical toolkit across frontend, backend, data,
                    infrastructure and Web3. I choose technologies around the
                    needs of the product rather than forcing every project
                    into the same stack.
                  </p>
                </div>

                <div className="divide-y divide-border border-y border-border">
                  {skillGroups.map((group, index) => (
                    <Reveal key={group.id} delay={index * 40}>
                      <section className="py-8">
                        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                          <div className="md:col-span-4">
                            <p className="text-label">
                              <span className="text-foreground">
                                {group.index}
                              </span>{" "}
                              <span className="text-subtle">/</span>{" "}
                              {group.label}
                            </p>

                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                              {group.summary}
                            </p>
                          </div>

                          <div className="md:col-span-8">
                            <ul className="divide-y divide-border border-y border-border">
                              {group.skills.map((skill) => (
                                <li
                                  key={skill.id}
                                  className="flex items-baseline justify-between gap-6 py-3"
                                >
                                  <span className="text-sm font-medium">
                                    {skill.name}
                                  </span>

                                  <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">
                                    {skill.note}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </section>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Closing */}
        <Container className="section-y">
          <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="text-label">04 / What&apos;s next</p>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <Reveal>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Have an idea worth building?
                </h2>

                <p className="mt-5 max-w-2xl text-lead">
                  Whether it&apos;s a product that needs engineering from the
                  ground up or an existing system that needs to move forward,
                  I&apos;m open to thoughtful collaborations and interesting
                  problems.
                </p>

                <Link
                  href="/#contact"
                  className="group mt-8 inline-flex items-center gap-2 text-label text-foreground"
                >
                  Let&apos;s work together
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}
