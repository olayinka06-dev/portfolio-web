import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/primitives";
import { PageTransition, Reveal } from "@/components/motion/reveal";
import { ProjectVisual } from "@/components/projects/Projects";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { projects } from "@/data/projects";
import { allSkills } from "@/data/skills";

export const metadata: Metadata = {
  title: "Projects — Abdulrahman",
  description:
    "Full collection of products built by Abdulrahman, full-stack & blockchain developer.",
  openGraph: {
    title: "Projects — Abdulrahman",
    description:
      "Products designed and shipped end to end by Abdulrahman.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            back home
          </Link>

          <ThemeToggle />
        </Container>
      </header>

      <Container className="section-y">
        <p className="mb-5 text-label">
          {`// archive`} · {projects.length} projects
        </p>

        <h1 className="text-display">Projects</h1>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8">
                <Link
                  href={`/projects/${p.slug}`}
                  className="block md:col-span-5"
                  aria-label={`Read ${p.name} case study`}
                >
                  <ProjectVisual
                    project={p}
                    className="aspect-16/10"
                  />
                </Link>

                <div className="flex flex-col gap-4 md:col-span-7">
                  <p className="text-label">
                    <span className="text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    <span className="text-subtle">/</span>{" "}
                    {p.category}
                  </p>

                  <h2 className="text-3xl font-semibold tracking-tight">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="hover:text-muted-foreground"
                    >
                      {p.name}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground">{p.summary}</p>

                  {p.products && (
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.products.join(" · ")}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.stack.map((id) => (
                      <Badge key={id}>
                        {allSkills.find((s) => s.id === id)?.name ?? id}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${p.slug}`}
                    className="mt-3 inline-flex items-center gap-2 text-label text-foreground"
                  >
                    Read case study{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
