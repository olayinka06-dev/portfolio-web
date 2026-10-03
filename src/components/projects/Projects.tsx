"use client";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allSkills } from "@/data/skills";
import { featuredProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const skillName = (id: string) =>
  allSkills.find((s) => s.id === id)?.name ?? id;

/**
 * Screenshot frame.
 * Renders `project.image` when provided,
 * otherwise a designed placeholder slot.
 */
export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-70" />

      <div className="absolute inset-[7%] bottom-0 overflow-hidden rounded-t-md border border-b-0 border-border-strong bg-surface-raised shadow-lift transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 group-hover:scale-[1.015]">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="size-2 rounded-full border border-border-strong" />
          <span className="size-2 rounded-full border border-border-strong" />
          <span className="size-2 rounded-full border border-border-strong" />

          <span className="ml-2 truncate font-mono text-[0.625rem] text-subtle">
            {project.slug}.app
          </span>
        </div>

        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="size-full object-cover object-top"
          />
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center gap-3 pb-10">
            <span className="text-5xl font-semibold tracking-tighter text-border-strong transition-colors duration-500 group-hover:text-muted-foreground md:text-7xl">
              {project.name}
            </span>

            <span className="font-mono text-[0.625rem] uppercase tracking-widest text-subtle">
              screenshot · coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  if (!project.live && !project.github) {
    return (
      <span className="font-mono text-[0.6875rem] text-subtle">
        links coming soon
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {project.live && (
        <Button asChild variant="outline" size="sm">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
            <ArrowUpRight />
          </a>
        </Button>
      )}

      {project.github && (
        <Button
          asChild
          variant="ghost"
          size="icon-sm"
          aria-label={`${project.name} on GitHub`}
        >
          <a href={project.github} target="_blank" rel="noreferrer">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 text-foreground"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.624-5.373-12-12-12" />
            </svg>
          </a>
        </Button>
      )}
    </div>
  );
}

function Meta({ project, index }: { project: Project; index: number }) {
  return (
    <p className="text-label flex items-center gap-2">
      <span className="text-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="text-subtle">/</span>

      {project.category}

      {project.year && <span className="text-subtle">· {project.year}</span>}
    </p>
  );
}

function Stack({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {project.stack.map((id, i) => (
        <li key={id}>
          <Badge
            className="transition-[color,border-color,transform] duration-300 group-hover:-translate-y-px group-hover:border-border-strong group-hover:text-foreground"
            style={
              {
                transitionDelay: `${i * 30}ms`,
              } as CSSProperties
            }
          >
            {skillName(id)}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

const shell =
  "group relative h-full overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-[border-color,box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:border-border-strong hover:shadow-lift";

/** Wide: visual left, content right. */
function FeatureCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={cn(shell, "grid lg:grid-cols-12")}>
      <Link
        href={`/projects/${project.slug}`}
        className="m-3 block lg:col-span-7 lg:m-4"
        aria-label={`Read ${project.name} case study`}
      >
        <ProjectVisual
          project={project}
          className="aspect-16/10 lg:h-full lg:min-h-104 lg:aspect-auto"
        />
      </Link>

      <div className="flex flex-col gap-6 p-6 pt-3 lg:col-span-5 lg:p-10">
        <Meta project={project} index={index} />

        <div>
          <h3 className="text-heading">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:text-muted-foreground"
            >
              {project.name}
            </Link>
          </h3>

          <p className="text-lead mt-4">{project.summary}</p>
        </div>

        <div className="mt-auto space-y-6">
          <Stack project={project} />

          <div className="flex items-center justify-between border-t border-border pt-5">
            <Links project={project} />

            <Link
              href={`/projects/${project.slug}`}
              className="text-label inline-flex items-center gap-2 text-foreground"
            >
              Case study
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Tall: visual top, content below. */
function StackedCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={cn(shell, "flex flex-col")}>
      <Link
        href={`/projects/${project.slug}`}
        className="m-3 block"
        aria-label={`Read ${project.name} case study`}
      >
        <ProjectVisual project={project} className="aspect-16/11" />
      </Link>

      <div className="flex flex-1 flex-col gap-5 p-6 pt-3">
        <div className="flex items-start justify-between gap-4">
          <Meta project={project} index={index} />

          <ArrowUpRight className="size-5 text-subtle transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>

        <h3 className="text-3xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-muted-foreground"
          >
            {project.name}
          </Link>
        </h3>

        <p className="text-muted-foreground">{project.summary}</p>

        <div className="mt-auto space-y-5 pt-2">
          <Stack project={project} />

          <div className="flex items-center justify-between border-t border-border pt-4">
            <Links project={project} />

            <Link
              href={`/projects/${project.slug}`}
              className="text-label text-foreground"
            >
              Case study
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/** Suite: product index list with no single screenshot. */
function SuiteCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={cn(shell, "flex flex-col p-6 md:p-8")}>
      <div className="flex items-start justify-between gap-4">
        <Meta project={project} index={index} />

        <span className="font-mono text-[0.6875rem] text-subtle">
          [{String(project.products?.length ?? 0).padStart(2, "0")}] products
        </span>
      </div>

      <h3 className="mt-6 text-3xl font-semibold tracking-tight">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-muted-foreground"
        >
          {project.name}
        </Link>
      </h3>

      <p className="mt-3 text-muted-foreground">{project.summary}</p>

      <ul className="my-8 border-t border-border">
        {project.products?.map((p, i) => (
          <li
            key={p}
            className="group/row flex items-center justify-between border-b border-border py-3.5 transition-[padding] duration-300 hover:pl-2"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[0.6875rem] text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="font-medium">{p}</span>
            </span>

            <ArrowRight className="size-4 -translate-x-2 text-subtle opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:opacity-100" />
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-5">
        <Stack project={project} />

        <div className="flex items-center justify-between border-t border-border pt-4">
          <Links project={project} />

          <Link
            href={`/projects/${project.slug}`}
            className="text-label text-foreground"
          >
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [first, second, third] = featuredProjects;

  return (
    <Section id="projects">
      <SectionHeading
        index="02"
        label="Selected work"
        title={<>Products, built end to end.</>}
        description="A few of the systems I've designed and shipped — from the interface down to the data layer."
      />

      <div className="grid gap-4 md:gap-5">
        {first && (
          <Reveal>
            <FeatureCard project={first} index={0} />
          </Reveal>
        )}

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {second && (
            <Reveal>
              <StackedCard project={second} index={1} />
            </Reveal>
          )}

          {third && (
            <Reveal delay={80}>
              <SuiteCard project={third} index={2} />
            </Reveal>
          )}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted-foreground">
          More work, notes and case studies in the archive.
        </p>

        <Button asChild variant="outline" className="group">
          <Link href="/projects">
            View all projects
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
