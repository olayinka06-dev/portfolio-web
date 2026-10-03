"use client";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/layout/primitives";
import { PageTransition, Reveal } from "@/components/motion/reveal";
import { ProjectVisual } from "@/components/projects/Projects";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allSkills } from "@/data/skills";
import type { CaseStudySection, Project } from "@/data/projects";

const skillName = (id: string) =>
  allSkills.find((skill) => skill.id === id)?.name ?? id;

function DetailSection({
  index,
  section,
}: {
  index: string;
  section: CaseStudySection;
}) {
  return (
    <Reveal
      as="section"
      className="grid gap-5 border-t border-border py-12 md:grid-cols-12 md:gap-8 md:py-16"
    >
      <div className="md:col-span-3">
        <p className="text-label">
          <span className="text-foreground">{index}</span>
          <span className="mx-2 text-subtle">/</span>
          {section.label}
        </p>
      </div>

      <div className="md:col-span-8 md:col-start-5">
        {section.body ? (
          <p className="text-lead text-foreground">{section.body}</p>
        ) : (
          <div className="border-l border-border-strong pl-5">
            <p className="font-mono text-xs uppercase text-subtle">
              Details pending
            </p>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {section.pending}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Architecture({ project }: { project: Project }) {
  const { architecture } = project.caseStudy;
  const flow = architecture.flow;

  return (
    <Reveal as="section" className="border-t border-border py-12 md:py-16">
      <div className="grid gap-5 md:grid-cols-12 md:gap-8">
        <p className="text-label md:col-span-3">
          <span className="text-foreground">04</span>
          <span className="mx-2 text-subtle">/</span>
          {architecture.label}
        </p>

        <div className="md:col-span-8 md:col-start-5">
          {architecture.body ? (
            <p className="text-lead text-foreground">{architecture.body}</p>
          ) : (
            <div className="border-l border-border-strong pl-5">
              <p className="font-mono text-xs uppercase text-subtle">
                Details pending
              </p>
              <p className="mt-3 text-muted-foreground">
                {architecture.pending}
              </p>
            </div>
          )}

          {flow && (
            <ol className="mt-10 grid border-y border-border md:grid-cols-3">
              {flow.map((step, index) => (
                <li
                  key={step.label}
                  className="relative border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <span className="font-mono text-[0.6875rem] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-6 font-medium">{step.label}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.detail}
                  </p>

                  {index < flow.length - 1 && (
                    <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden size-5 bg-background p-0.5 text-subtle md:block" />
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function CaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  return (
    <PageTransition>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              <ArrowLeft />
              Projects
            </Link>
          </Button>

          <ThemeToggle />
        </Container>
      </header>

      <main>
        <Container className="pb-12 pt-16 md:pb-16 md:pt-24">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <p className="text-label">Case study / {project.category}</p>

                <h1 className="text-display mt-5">{project.name}</h1>

                <p className="text-lead mt-7 max-w-3xl">
                  {project.caseStudy.overview}
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-5 gap-y-6 border-t border-border pt-5 md:col-span-3 md:col-start-10 md:block md:border-t-0 md:pt-1">
                <div className="md:border-b md:border-border md:pb-5">
                  <dt className="text-label">Type</dt>
                  <dd className="mt-2 text-sm">{project.category}</dd>
                </div>

                <div className="md:py-5">
                  <dt className="text-label">Year</dt>
                  <dd className="mt-2 text-sm">
                    {project.year ?? "Not provided"}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>

        <Container>
          <Reveal>
            <ProjectVisual
              project={project}
              className="aspect-video min-h-80 md:min-h-144"
            />
          </Reveal>
        </Container>

        <Container className="pb-16 pt-14 md:pb-24 md:pt-20">
          <DetailSection
            index="01"
            section={{
              label: "Overview",
              body: project.caseStudy.overview,
            }}
          />

          <DetailSection index="02" section={project.caseStudy.challenge} />

          <DetailSection index="03" section={project.caseStudy.contribution} />

          <Architecture project={project} />

          <Reveal
            as="section"
            className="grid gap-5 border-t border-border py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <p className="text-label md:col-span-3">
              <span className="text-foreground">05</span>
              <span className="mx-2 text-subtle">/</span>
              Technologies
            </p>

            <div className="md:col-span-8 md:col-start-5">
              <p className="mb-7 max-w-2xl text-muted-foreground">
                Technologies currently associated with this project. The
                reasoning behind each choice is awaiting confirmation.
              </p>

              <ul className="grid border-t border-border sm:grid-cols-2">
                {project.stack.map((id, index) => (
                  <li
                    key={id}
                    className="flex items-center justify-between border-b border-border py-4 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
                  >
                    <span className="font-medium">{skillName(id)}</span>

                    <span className="font-mono text-[0.6875rem] text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <DetailSection
            index="06"
            section={project.caseStudy.implementation}
          />

          <DetailSection
            index="07"
            section={project.caseStudy.engineeringChallenge}
          />

          <DetailSection index="08" section={project.caseStudy.solution} />

          <DetailSection index="09" section={project.caseStudy.outcome} />

          <Reveal
            as="section"
            className="grid gap-5 border-y border-border py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <p className="text-label md:col-span-3">
              <span className="text-foreground">10</span>
              <span className="mx-2 text-subtle">/</span>
              Links
            </p>

            <div className="flex flex-wrap gap-2 md:col-span-8 md:col-start-5">
              {project.live && (
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Visit live project
                    <ArrowUpRight />
                  </a>
                </Button>
              )}

              {project.github && (
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="size-5 text-foreground"
                      fill="currentColor"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.624-5.373-12-12-12" />
                    </svg>
                    View source
                  </a>
                </Button>
              )}

              {!project.live && !project.github && (
                <Badge>Project links pending</Badge>
              )}
            </div>
          </Reveal>
        </Container>

        <section className="border-t border-border bg-surface">
          <Container className="py-14 md:py-20">
            <p className="text-label">Next case study</p>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-5 flex items-end justify-between gap-6"
            >
              <span className="text-heading transition-colors group-hover:text-muted-foreground">
                {nextProject.name}
              </span>

              <ArrowRight className="mb-1 size-7 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </Container>
        </section>
      </main>
    </PageTransition>
  );
}
