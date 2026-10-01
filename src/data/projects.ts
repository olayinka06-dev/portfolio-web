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
};

export const projects: Project[] = [
  {
    slug: "devcollab",
    name: "DevCollab",
    category: "Collaboration platform",
    summary:
      "A collaborative platform for developers — a shared space to find collaborators, organise work and build together.",
    stack: ["nextjs", "typescript", "nodejs", "socketio", "mongodb"],
    featured: true,
  },
  {
    slug: "atemy",
    name: "Atemy",
    category: "Social / community",
    summary:
      "A full-stack social platform built around community — profiles, posting and interaction between members.",
    stack: ["react", "nodejs", "rest", "mongodb", "cloudinary"],
    featured: true,
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
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
