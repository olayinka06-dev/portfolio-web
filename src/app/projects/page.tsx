import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
    "Explore Abdulrahman's software projects, including fintech products, full-stack applications, and collaborative platforms.",
  openGraph: {
    title: "Projects — Abdulrahman",
    description:
      "Selected software projects, product experiences, and engineering work by Abdulrahman.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const tuluContributions = [
  "Frontend development",
  "API integrations",
  "Application logic",
];

export default function ProjectsPage() {
  const tulu = projects.find((project) => project.slug === "tulu");
  const tuluProducts = tulu?.products ?? [];

  const otherProjects = projects.filter((project) => project.slug !== "tulu");

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
        {/* Page introduction */}
        <Container className="section-y">
          <Reveal>
            <p className="mb-5 text-label">
              {"// selected work"} <span className="text-subtle">·</span>{" "}
              {projects.length} projects
            </p>

            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <h1 className="text-display">
                  Projects<span className="text-muted-foreground">.</span>
                </h1>
              </div>

              <p className="max-w-md text-sm leading-7 text-muted-foreground md:col-span-4 md:justify-self-end">
                A collection of products and applications shaped through
                frontend development, backend integration, and product-focused
                engineering.
              </p>
            </div>
          </Reveal>
        </Container>

        {/* Flagship project */}

        {tulu && (
          <Container className="pb-20">
            <Reveal>
              <section
                aria-labelledby="featured-tulu-heading"
                className="overflow-hidden border-y border-border"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <p className="text-label">01 / Featured project</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {tulu.category}
                  </p>
                </div>

                <div className="grid gap-8 py-6 md:grid-cols-12 md:gap-10 md:py-10">
                  <div className="flex flex-col md:col-span-7">
                    <div className="relative flex-1 overflow-hidden border border-border bg-muted/20 md:min-h-112">
                      <ProjectVisual
                        project={tulu}
                        className="h-full min-h-80 w-full transition-transform duration-500 motion-reduce:transition-none md:min-h-0"
                      />
                    </div>

                    {/* <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-label text-muted-foreground">
                        Five-product ecosystem
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        05 PRODUCTS
                      </span>
                    </div> */}
                  </div>

                  {/* Project details */}
                  <div className="flex flex-col md:col-span-5">
                    <div>
                      <p className="mb-3 font-mono text-xs text-muted-foreground">
                        PROFESSIONAL EXPERIENCE
                      </p>

                      <h2
                        id="featured-tulu-heading"
                        className="text-4xl font-semibold tracking-tight sm:text-5xl"
                      >
                        Tulu<span className="text-muted-foreground">.</span>
                      </h2>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {tulu.summary}
                      </p>
                    </div>

                    {/* Product ecosystem */}
                    {tuluProducts.length > 0 && (
                      <div className="mt-8">
                        <p className="mb-3 text-label">PRODUCT ECOSYSTEM</p>

                        <ul className="grid grid-cols-2 gap-2">
                          {tuluProducts.map((product, index) => (
                            <li
                              key={product}
                              className={`flex min-h-14 items-center gap-3 border border-border px-3 py-3 ${
                                tuluProducts.length % 2 === 1 &&
                                index === tuluProducts.length - 1
                                  ? "col-span-2"
                                  : ""
                              }`}
                            >
                              <span
                                aria-hidden="true"
                                className="font-mono text-[10px] text-muted-foreground"
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-xs font-medium leading-5">
                                {product}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Confirmed contributions */}
                    <div className="mt-8">
                      <p className="mb-3 text-label">MY CONTRIBUTION</p>

                      <div className="flex flex-wrap gap-2">
                        {tuluContributions.map((contribution) => (
                          <Badge key={contribution}>{contribution}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Single, explicit navigation target */}
                    <div className="mt-8 border-t border-border pt-5">
                      <Link
                        href={`/projects/${tulu.slug}`}
                        className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
                      >
                        View case study
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          </Container>
        )}

        {/* Remaining projects */}
        <Container className="pb-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
            <div>
              <p className="mb-3 text-label">THE COLLECTION</p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                More projects<span className="text-muted-foreground">.</span>
              </h2>
            </div>

            <p className="text-xs text-muted-foreground">
              {otherProjects.length}{" "}
              {otherProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {otherProjects.length > 0 ? (
            <div className="divide-y divide-border border-y border-border">
              {otherProjects.map((project, index) => (
                <Reveal key={project.slug}>
                  <article className="group grid gap-6 py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
                    {/* Project visual */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block self-start md:col-span-5"
                      aria-label={`Read ${project.name} case study`}
                    >
                      <div className="overflow-hidden border border-border bg-muted/20">
                        <ProjectVisual
                          project={project}
                          className="aspect-16/10 transition-transform duration-500 group-hover:scale-[1.015]"
                        />
                      </div>
                    </Link>

                    {/* Project information */}
                    <div className="flex flex-col md:col-span-7">
                      <p className="text-label">
                        <span className="text-foreground">
                          {String(index + (tulu ? 2 : 1)).padStart(2, "0")}
                        </span>{" "}
                        <span className="text-subtle">/</span>{" "}
                        {project.category}
                      </p>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="transition-colors hover:text-muted-foreground"
                        >
                          {project.name}
                        </Link>
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {project.summary}
                      </p>

                      {/* Product names, where applicable */}
                      {project.products && project.products.length > 0 && (
                        <p className="mt-4 font-mono text-xs leading-6 text-muted-foreground">
                          {project.products.join(" · ")}
                        </p>
                      )}

                      {/* Technology stack */}
                      {project.stack.length > 0 && (
                        <div className="mt-5">
                          <p className="mb-3 text-label">TECHNOLOGIES</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((id) => (
                              <Badge key={id}>
                                {allSkills.find((skill) => skill.id === id)
                                  ?.name ?? id}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-6">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 text-label transition-colors hover:text-muted-foreground"
                        >
                          Read case study
                          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-10 text-sm text-muted-foreground">
              More projects will be added here.
            </p>
          )}
        </Container>

        {/* Closing CTA */}
        <Container className="pb-20">
          <div className="flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-label">HAVE A PROJECT IN MIND?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Let&apos;s talk about what you&apos;re building.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit items-center gap-2 border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Get in touch
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}
