import type { Metadata } from "next";

import { SiteNav } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/abouts/About";
import { Projects } from "@/components/projects/Projects";
import { Container } from "@/components/layout/primitives";

export const metadata: Metadata = {
  title: "Abdulrahman — Full-Stack & Blockchain Developer",
  description:
    "Abdulrahman turns ideas into complete digital products — interface, backend and smart contracts, shipped end to end.",
  openGraph: {
    title: "Abdulrahman — Full-Stack & Blockchain Developer",
    description:
      "I turn ideas into complete digital products — interface, backend and smart contracts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const upcoming = [
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        <Hero />
        <About />
        <Projects />

        {upcoming.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-t border-border py-20"
          >
            <Container>
              <p className="text-label">
                <span className="text-foreground">
                  0{index + 3}
                </span>

                <span className="mx-2 text-subtle">/</span>

                {section.label} — coming soon
              </p>
            </Container>
          </section>
        ))}
      </main>

      <footer className="border-t border-border py-8">
        <Container className="flex justify-between font-mono text-xs text-subtle">
          <span>© 2026 Abdulrahman</span>
          <span>built end to end</span>
        </Container>
      </footer>
    </div>
  );
}
