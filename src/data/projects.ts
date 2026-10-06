/**
 * Project data.
 * Only verified facts belong here — no invented metrics, users, clients or outcomes.
 *
 * - `image`: drop in a real screenshot URL/import to replace the placeholder visual.
 * - `stack`: ids from src/data/skills.ts.
 * - `live` / `github`: leave undefined until a real public link exists.
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
  architecture: CaseStudySection & {
    flow?: ArchitectureStep[];
  };
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
      "A collaborative platform for developers — a shared space to find collaborators, discover projects, organise work and build together.",
    stack: [
      "nextjs",
      "react",
      "typescript",
      "tailwind",
      "nodejs",
      "rest",
      "socketio",
      "mongodb",
      "prisma",
    ],
    live: undefined,
    image: undefined,
    github: "https://github.com/olayinka06-dev/dev-collab",
    year: "2026",
    featured: true,
    caseStudy: {
      overview:
        "DevCollab is a collaborative platform for developers — a shared space to find collaborators, discover projects, organise work and build together.",

      challenge: {
        label: "Challenge",
        body: "Finding suitable developers or collaborators for a project can be difficult. DevCollab approaches this through structured developer profiles, project discovery and a weighted matching system.",
      },

      contribution: {
        label: "My contribution",
        body: "I worked across the product as a full-stack engineer, contributing to the frontend, backend, data layer, authentication, matching and real-time collaboration experience.",
      },

      architecture: {
        label: "Architecture",
        body: "The application separates the frontend experience, backend services and data layer while connecting them through APIs and real-time communication.",
        flow: [
          {
            label: "Frontend",
            detail: "Next.js, React, TypeScript and Tailwind CSS",
          },
          {
            label: "API",
            detail: "Node.js REST services",
          },
          {
            label: "Real-time",
            detail: "Socket.IO for real-time collaboration features",
          },
          {
            label: "Data",
            detail: "Prisma with MongoDB",
          },
        ],
      },

      implementation: {
        label: "Implementation",
        body: "The platform includes developer profiles, project discovery, collaboration workflows, authentication, APIs, data management and real-time functionality. A weighted matching system ranks potential collaborators using six factors: skill (35%), reputation (25%), recent activity (15%), experience (10%), availability (10%), and context (5%). This gives technical skill the strongest influence while still considering a developer's broader activity, experience and availability.",
      },

      engineeringChallenge: {
        label: "Engineering challenge",
        body: "One of the main engineering challenges was evolving DevCollab from its original TanStack Start/Vite foundation toward a modern Next.js architecture while keeping the existing product functionality intact. The project spans authentication, developer profiles, project discovery, weighted matching, APIs, database operations and real-time features, so changes to the application structure had to be made without unnecessarily disrupting the systems already in place.",
      },

      solution: {
        label: "Solution",
        body: "I approached the migration incrementally by first analysing the existing architecture and identifying the responsibilities of each part of the system. I then mapped the existing routes, components, API interactions and data layer into the Next.js App Router architecture, keeping the core product logic intact while modernising the frontend structure. I followed an analyse → plan → implement → verify workflow so each migration step could be tested before moving on to the next part of the application.",
      },

      outcome: {
        label: "Outcome",
        body: "The project is in active development and engineering refinement. No unverified user, revenue, scale or performance metrics are claimed.",
      },
    },
  },

  {
    slug: "atemy",
    name: "Atemy",
    category: "Social / community",
    summary:
      "A full-stack social platform built around communities, profiles, posts, interaction and real-time communication.",
    stack: [
      "react",
      "typescript",
      "tailwind",
      "nodejs",
      "rest",
      "socketio",
      "mongodb",
      "prisma",
      "cloudinary",
    ],
    featured: true,
    github: "https://github.com/olayinka06-dev/atemy-frontend",
    live: "https://atemy.vercel.app",
    image: undefined,
    year: "2026",
    caseStudy: {
      overview:
        "Atemy is a full-stack social platform built around community, with profiles, communities, posts, interaction and real-time communication.",

      challenge: {
        label: "Challenge",
        body: "The platform provides a structured environment for communities and their members to create content, interact and communicate.",
      },

      contribution: {
        label: "My contribution",
        body: "I worked across the full stack, contributing to the frontend experience, backend services, community and post functionality, media handling, permissions and real-time features.",
      },

      architecture: {
        label: "Architecture",
        body: "Atemy uses a full-stack architecture connecting the frontend to Node.js services, Prisma and MongoDB, with Socket.IO handling real-time functionality and Cloudinary handling uploaded media.",
        flow: [
          {
            label: "Frontend",
            detail: "React and TypeScript",
          },
          {
            label: "API",
            detail: "Node.js REST services",
          },
          {
            label: "Real-time",
            detail:
              "Socket.IO for community, post and messaging-related real-time events",
          },
          {
            label: "Data",
            detail: "Prisma with MongoDB",
          },
          {
            label: "Media",
            detail: "Cloudinary for uploaded images and media",
          },
        ],
      },

      implementation: {
        label: "Implementation",
        body: "The platform includes profiles, communities, membership, posts, interactions, messaging, media uploads, authentication and role-based permissions. Simple interactions can use optimistic local updates to keep the interface responsive.",
      },

      engineeringChallenge: {
        label: "Engineering challenge",
        body: "One of the main engineering challenges was keeping community and post interactions responsive while coordinating changes across the frontend, backend and real-time layer. Actions such as creating or updating content, interacting with posts and communicating within communities needed to provide immediate feedback without allowing local UI state to drift from the server state or real-time events.",
      },

      solution: {
        label: "Solution",
        body: "I combined optimistic local updates for straightforward interactions with Socket.IO for real-time events and server-backed updates. The frontend could respond immediately to user actions while the backend remained the source of truth, and real-time events kept relevant users and communities synchronised. This approach helped make the interface feel responsive while maintaining consistency across connected clients.",
      },

      outcome: {
        label: "Outcome",
        body: "Atemy is deployed with its backend infrastructure and continues to undergo product and engineering refinement. No unverified user, engagement, revenue or scale metrics are claimed.",
      },
    },
  },

  {
    slug: "tulu",
    name: "Tulu",
    category: "Fintech ecosystem",
    summary:
      "A fintech ecosystem spanning payments, exchange, digital assets, wallets and transaction infrastructure across multiple products.",
    stack: ["nextjs", "typescript", "nodejs", "prisma"],
    products: [
      "Voucher Pay",
      "TuluPay Exchange",
      "Tulu Asset",
      "Tulu Purse",
      "Tulu Switch",
    ],
    featured: true,
    caseStudy: {
      overview:
        "Tulu is a fintech ecosystem made up of multiple products covering payments, exchange, digital assets, wallets and transaction infrastructure.",

      challenge: pending(
        "Challenge",
        "The specific business problems, target users and product constraints for the individual Tulu products are awaiting confirmation.",
      ),

      contribution: {
        label: "My contribution",
        body: "I contributed to frontend development across Tulu's fintech product ecosystem, working on interfaces and product experiences within the applications.",
      },

      architecture: pending(
        "Architecture",
        "The exact frontend, backend, API and data relationships used across the individual Tulu products are awaiting confirmation.",
      ),

      implementation: pending(
        "Implementation",
        "The specific products, screens, workflows and implementation decisions personally handled are awaiting confirmation.",
      ),

      engineeringChallenge: pending(
        "Engineering challenge",
        "A specific engineering challenge personally handled within Tulu is still needed.",
      ),

      solution: pending(
        "Solution",
        "The technical solution will be documented once the corresponding engineering challenge is confirmed.",
      ),

      outcome: {
        label: "Outcome",
        body: "Tulu represents professional fintech product experience across a multi-product ecosystem. No unverified transaction, user, revenue or performance metrics are claimed.",
      },
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
