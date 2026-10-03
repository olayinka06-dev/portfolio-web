import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/projects/case-study";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found — Abdulrahman",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.name} Case Study — Abdulrahman`;
  const description = project.caseStudy.overview;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length] ?? project;

  return (
    <CaseStudy
      project={project}
      nextProject={nextProject}
    />
  );
}
