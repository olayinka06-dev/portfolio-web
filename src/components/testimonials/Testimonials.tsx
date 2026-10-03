"use client";
import { Card, Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/data/profile";

/** Renders nothing until verified testimonials are added to src/data/profile.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <Section id="testimonials">
      <SectionHeading label="Testimonials" title="In their words." />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <Card className="h-full">
              <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
              <p className="mt-6 font-medium">{t.name}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {t.role}
                {t.company && ` · ${t.company}`}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
