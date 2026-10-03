/**
 * Project data. Only verified facts belong here — no invented metrics, users or clients.
 * - `image`: drop in a real screenshot URL/import to replace the placeholder visual.
 * - `stack`: ids from src/data/skills.ts (confirm per project).
 * - `live` / `github`: leave undefined until a real link exists.
 */
export type Project = {
  slug: string;
  name: string;
  category: string;
  year?: string;
  summary: string;
  stack: string[];
  image?: string;
  live?: string;
  github?: string;
  products?: string[];
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
};

export type CaseStudySection = {
  label: string;
  body?: string;
  pending?: string;
};

export type ArchitectureStep = {
  label: string;
  detail: string;
};

export type ProjectCaseStudy = {
  overview: string;
  challenge: CaseStudySection;
  contribution: CaseStudySection;
  architecture: CaseStudySection & { flow?: ArchitectureStep[] };
  implementation: CaseStudySection;
  engineeringChallenge: CaseStudySection;
  solution: CaseStudySection;
  outcome: CaseStudySection;
};

const pending = (label: string, pendingDetail: string): CaseStudySection => ({
  label,
  pending: pendingDetail,
});

export const projects: Project[] = [
  {
    slug: "devcollab",
    name: "DevCollab",
    category: "Collaboration platform",
    summary:
      "A collaborative platform for developers — a shared space to find collaborators, organise work and build together.",
    stack: ["nextjs", "typescript", "nodejs", "socketio", "mongodb"],
    featured: true,
    caseStudy: {
      overview: "DevCollab is a collaborative platform for developers: a shared space to find collaborators, organise work and build together.",
      challenge: pending("Challenge", "The specific user problem and product constraints have not been documented yet."),
      contribution: pending("My contribution", "Abdulrahman’s individual responsibilities and ownership areas are awaiting confirmation."),
      architecture: pending("Architecture", "The system boundaries, service relationships and data flow are awaiting confirmation."),
      implementation: pending("Implementation", "Key implementation decisions and trade-offs have not been documented yet."),
      engineeringChallenge: pending("Engineering challenge", "A verified account of the most difficult engineering problem is still needed."),
      solution: pending("Solution", "The technical solution will be added once the challenge and implementation details are confirmed."),
      outcome: pending("Outcome", "No verified launch results, metrics or user outcomes are currently available."),
    },
  },
  {
    slug: "atemy",
    name: "Atemy",
    category: "Social / community",
    summary:
      "A full-stack social platform built around community — profiles, posting and interaction between members.",
    stack: ["react", "nodejs", "rest", "mongodb", "cloudinary"],
    featured: true,
    caseStudy: {
      overview: "Atemy is a full-stack social platform built around community, with profiles, posting and interaction between members.",
      challenge: pending("Challenge", "The community need, target audience and original product constraints are awaiting confirmation."),
      contribution: pending("My contribution", "Abdulrahman’s individual product and engineering responsibilities are awaiting confirmation."),
      architecture: pending("Architecture", "The verified API, media and data flow has not been documented yet."),
      implementation: pending("Implementation", "Meaningful implementation choices and trade-offs are awaiting confirmation."),
      engineeringChallenge: pending("Engineering challenge", "A verified account of the most difficult engineering problem is still needed."),
      solution: pending("Solution", "The technical solution will be added when the related challenge is confirmed."),
      outcome: pending("Outcome", "No verified launch results, metrics or community outcomes are currently available."),
    },
  },
  {
    slug: "tulu",
    name: "Tulu",
    category: "Fintech",
    summary:
      "Product work across a suite of fintech services covering payments, exchange, assets, wallets and switching.",
    stack: ["nextjs", "typescript", "nodejs", "prisma"],
    products: ["Voucher Pay", "TuluPay Exchange", "Tulu Asset", "Tulu Purse", "Tulu Switch"],
    featured: true,
    caseStudy: {
      overview: "Tulu is a suite of fintech products spanning payments, exchange, assets, wallets and switching.",
      challenge: pending("Challenge", "The business problem, intended users and operational constraints are awaiting confirmation."),
      contribution: pending("My contribution", "Abdulrahman’s ownership across the five products is awaiting confirmation."),
      architecture: pending("Architecture", "The relationships between the product suite, services and data layer are awaiting confirmation."),
      implementation: pending("Implementation", "Key fintech implementation decisions and trade-offs have not been documented yet."),
      engineeringChallenge: pending("Engineering challenge", "A verified account of the most difficult engineering problem is still needed."),
      solution: pending("Solution", "The technical solution will be added once the challenge is confirmed."),
      outcome: pending("Outcome", "No verified launch results, transaction figures or product outcomes are currently available."),
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
