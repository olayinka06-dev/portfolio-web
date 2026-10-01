/** Single source of truth for the stack. Project case studies reference skills by `id`. */
export type Skill = { id: string; name: string; note: string };
export type SkillGroup = { id: string; index: string; label: string; summary: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    index: "01",
    label: "Frontend",
    summary: "Interfaces that are fast, accessible and typed end to end.",
    skills: [
      { id: "nextjs", name: "Next.js", note: "app router · ssr" },
      { id: "react", name: "React", note: "components · state" },
      { id: "typescript", name: "TypeScript", note: "strict types" },
      { id: "tailwind", name: "Tailwind CSS", note: "design systems" },
    ],
  },
  {
    id: "backend",
    index: "02",
    label: "Backend",
    summary: "APIs and real-time services that hold the product together.",
    skills: [
      { id: "nodejs", name: "Node.js", note: "runtime · services" },
      { id: "rest", name: "REST APIs", note: "design · auth" },
      { id: "socketio", name: "Socket.IO", note: "real-time events" },
    ],
  },
  {
    id: "data",
    index: "03",
    label: "Database / Data",
    summary: "Data models shaped around how the product actually works.",
    skills: [
      { id: "mongodb", name: "MongoDB", note: "document store" },
      { id: "prisma", name: "Prisma", note: "orm · schema" },
    ],
  },
  {
    id: "infra",
    index: "04",
    label: "Infrastructure / Tools",
    summary: "From first commit to a live, deployed product.",
    skills: [
      { id: "git", name: "Git", note: "version control" },
      { id: "github", name: "GitHub", note: "repos · reviews" },
      { id: "vercel", name: "Vercel", note: "frontend deploys" },
      { id: "render", name: "Render", note: "service hosting" },
      { id: "cloudinary", name: "Cloudinary", note: "media pipeline" },
    ],
  },
];

export const allSkills = skillGroups.flatMap((g) => g.skills);
