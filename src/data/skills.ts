// /** Single source of truth for the stack. Project case studies reference skills by `id`. */
// export type Skill = { id: string; name: string; note: string };
// export type SkillGroup = { id: string; index: string; label: string; summary: string; skills: Skill[] };

// export const skillGroups: SkillGroup[] = [
//   {
//     id: "frontend",
//     index: "01",
//     label: "Frontend",
//     summary: "Interfaces that are fast, accessible and typed end to end.",
//     skills: [
//       { id: "nextjs", name: "Next.js", note: "app router · ssr" },
//       { id: "react", name: "React", note: "components · state" },
//       { id: "typescript", name: "TypeScript", note: "strict types" },
//       { id: "tailwind", name: "Tailwind CSS", note: "design systems" },
//     ],
//   },
//   {
//     id: "backend",
//     index: "02",
//     label: "Backend",
//     summary: "APIs and real-time services that hold the product together.",
//     skills: [
//       { id: "nodejs", name: "Node.js", note: "runtime · services" },
//       { id: "rest", name: "REST APIs", note: "design · auth" },
//       { id: "socketio", name: "Socket.IO", note: "real-time events" },
//     ],
//   },
//   {
//     id: "data",
//     index: "03",
//     label: "Database / Data",
//     summary: "Data models shaped around how the product actually works.",
//     skills: [
//       { id: "mongodb", name: "MongoDB", note: "document store" },
//       { id: "prisma", name: "Prisma", note: "orm · schema" },
//     ],
//   },
//   {
//     id: "infra",
//     index: "04",
//     label: "Infrastructure / Tools",
//     summary: "From first commit to a live, deployed product.",
//     skills: [
//       { id: "git", name: "Git", note: "version control" },
//       { id: "github", name: "GitHub", note: "repos · reviews" },
//       { id: "vercel", name: "Vercel", note: "frontend deploys" },
//       { id: "render", name: "Render", note: "service hosting" },
//       { id: "cloudinary", name: "Cloudinary", note: "media pipeline" },
//     ],
//   },
// ];

// export const allSkills = skillGroups.flatMap((g) => g.skills);


export type Skill = {
  id: string;
  name: string;
  note: string;
};

export type SkillGroup = {
  id: string;
  index: string;
  label: string;
  summary: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    index: "01",
    label: "Languages",
    summary: "The foundations I use to build interfaces, services and applications.",
    skills: [
      { id: "html", name: "HTML", note: "semantic markup" },
      { id: "css", name: "CSS", note: "responsive styling" },
      { id: "javascript", name: "JavaScript", note: "modern web" },
      { id: "typescript", name: "TypeScript", note: "typed development" },
      { id: "bash", name: "Bash", note: "shell scripting" },
    ],
  },

  {
    id: "frontend",
    index: "02",
    label: "Frontend",
    summary: "Interfaces built around component architecture, usability and performance.",
    skills: [
      { id: "react", name: "React", note: "component architecture" },
      { id: "nextjs", name: "Next.js", note: "app router" },
      { id: "vite", name: "Vite", note: "frontend tooling" },
      { id: "react-router", name: "React Router", note: "client routing" },
      { id: "tanstack-router", name: "TanStack Router", note: "typed routing" },
      { id: "tanstack-start", name: "TanStack Start", note: "full-stack React" },
    ],
  },

  {
    id: "ui",
    index: "03",
    label: "UI & Styling",
    summary: "Design systems and interaction layers that keep products consistent and usable.",
    skills: [
      { id: "tailwind", name: "Tailwind CSS", note: "utility styling" },
      { id: "css-modules", name: "CSS Modules", note: "scoped styles" },
      { id: "sass", name: "Sass / SCSS", note: "stylesheet tooling" },
      { id: "styled-components", name: "Styled Components", note: "CSS-in-JS" },
      { id: "shadcn", name: "shadcn/ui", note: "component systems" },
      { id: "radix", name: "Radix UI", note: "accessible primitives" },
      { id: "framer-motion", name: "Framer Motion", note: "motion & interaction" },
      { id: "lucide", name: "Lucide", note: "icon system" },
      { id: "react-icons", name: "React Icons", note: "icon libraries" },
    ],
  },

  {
    id: "state-data",
    index: "04",
    label: "State & Data Fetching",
    summary: "Managing application state and keeping client data predictable and responsive.",
    skills: [
      { id: "context", name: "React Context", note: "shared state" },
      { id: "redux", name: "Redux", note: "global state" },
      { id: "redux-toolkit", name: "Redux Toolkit", note: "state management" },
      { id: "zustand", name: "Zustand", note: "lightweight state" },
      { id: "jotai", name: "Jotai", note: "atomic state" },
      { id: "tanstack-query", name: "TanStack Query", note: "server state" },
      { id: "swr", name: "SWR", note: "data fetching" },
      { id: "axios", name: "Axios", note: "HTTP client" },
      { id: "fetch", name: "Fetch API", note: "native HTTP" },
    ],
  },

  {
    id: "backend",
    index: "05",
    label: "Backend",
    summary: "APIs, services and real-time systems that power the product behind the interface.",
    skills: [
      { id: "nodejs", name: "Node.js", note: "runtime & services" },
      { id: "express", name: "Express.js", note: "backend framework" },
      { id: "rest", name: "REST APIs", note: "API architecture" },
      { id: "graphql", name: "GraphQL", note: "API queries" },
      { id: "websockets", name: "WebSockets", note: "real-time communication" },
      { id: "socketio", name: "Socket.IO", note: "real-time events" },
      { id: "pusher", name: "Pusher", note: "real-time infrastructure" },
      { id: "pusher-js", name: "Pusher.js", note: "client events" },
    ],
  },

  {
    id: "database",
    index: "06",
    label: "Database & Data",
    summary: "Data models and storage systems shaped around how applications actually work.",
    skills: [
      { id: "mongodb", name: "MongoDB", note: "document database" },
      { id: "mongoose", name: "Mongoose", note: "MongoDB ODM" },
      { id: "postgresql", name: "PostgreSQL", note: "relational database" },
      { id: "prisma", name: "Prisma", note: "ORM & schema" },
      { id: "supabase", name: "Supabase", note: "database platform" },
      { id: "firebase", name: "Firebase / Firestore", note: "cloud database" },
      { id: "redis", name: "Redis", note: "caching & data" },
    ],
  },

  {
    id: "auth",
    index: "07",
    label: "Authentication & Security",
    summary: "Authentication, authorization and session patterns for secure applications.",
    skills: [
      { id: "jwt", name: "JWT", note: "token authentication" },
      { id: "authjs", name: "Auth.js", note: "application auth" },
      { id: "passport", name: "Passport.js", note: "authentication middleware" },
      { id: "oauth", name: "OAuth", note: "delegated authentication" },
      { id: "google-oauth", name: "Google OAuth", note: "social authentication" },
      { id: "github-oauth", name: "GitHub OAuth", note: "social authentication" },
      { id: "rbac", name: "RBAC", note: "role permissions" },
      { id: "sessions", name: "Session Auth", note: "session management" },
      { id: "cookies", name: "Cookie Auth", note: "secure sessions" },
      { id: "refresh-tokens", name: "Refresh Tokens", note: "token lifecycle" },
    ],
  },

  {
    id: "web3",
    index: "08",
    label: "Blockchain / Web3",
    summary: "Tools and technologies for building applications that interact with blockchain networks.",
    skills: [
      { id: "ethereum", name: "Ethereum", note: "EVM ecosystem" },
      { id: "solidity", name: "Solidity", note: "smart contracts" },
      { id: "ethers", name: "ethers.js", note: "Ethereum integration" },
      { id: "wagmi", name: "Wagmi", note: "React Web3 tooling" },
      { id: "metamask", name: "MetaMask", note: "wallet integration" },
      { id: "walletconnect", name: "WalletConnect", note: "wallet connectivity" },
      { id: "smart-contracts", name: "Smart Contracts", note: "on-chain logic" },
    ],
  },

  {
    id: "cloud",
    index: "09",
    label: "Cloud & Deployment",
    summary: "Deployment, hosting and media infrastructure for taking applications into production.",
    skills: [
      { id: "vercel", name: "Vercel", note: "frontend deployment" },
      { id: "render", name: "Render", note: "service hosting" },
      { id: "netlify", name: "Netlify", note: "web deployment" },
      { id: "aws", name: "AWS", note: "cloud infrastructure" },
      { id: "cloudinary", name: "Cloudinary", note: "media pipeline" },
      { id: "firebase-storage", name: "Firebase Storage", note: "file storage" },
      { id: "supabase-storage", name: "Supabase Storage", note: "object storage" },
    ],
  },

  {
    id: "forms-validation",
    index: "10",
    label: "Forms & Validation",
    summary: "Reliable form handling and structured validation across frontend and backend boundaries.",
    skills: [
      { id: "zod", name: "Zod", note: "schema validation" },
      { id: "yup", name: "Yup", note: "schema validation" },
      { id: "react-hook-form", name: "React Hook Form", note: "form management" },
      { id: "formik", name: "Formik", note: "form management" },
    ],
  },

  {
    id: "testing",
    index: "11",
    label: "Testing & API Tools",
    summary: "Tools for testing APIs, debugging integrations and validating application behaviour.",
    skills: [
      { id: "jest", name: "Jest", note: "JavaScript testing" },
      { id: "postman", name: "Postman", note: "API testing" },
      { id: "thunder-client", name: "Thunder Client", note: "API testing" },
      { id: "insomnia", name: "Insomnia", note: "API testing" },
      { id: "rest-client", name: "REST Client", note: "API requests" },
    ],
  },

  {
    id: "workflow",
    index: "12",
    label: "Git & Collaboration",
    summary: "Version control and collaborative workflows for building software with others.",
    skills: [
      { id: "git", name: "Git", note: "version control" },
      { id: "github", name: "GitHub", note: "repositories & collaboration" },
      { id: "github-actions", name: "GitHub Actions", note: "CI/CD workflows" },
      { id: "github-issues", name: "GitHub Issues", note: "project tracking" },
      { id: "pull-requests", name: "Pull Requests", note: "code collaboration" },
      { id: "code-reviews", name: "Code Reviews", note: "engineering quality" },
      { id: "conventional-commits", name: "Conventional Commits", note: "commit standards" },
    ],
  },

  {
    id: "engineering",
    index: "13",
    label: "Engineering",
    summary: "The engineering practices I apply beyond individual technologies.",
    skills: [
      { id: "component-architecture", name: "Component Architecture", note: "scalable UI" },
      { id: "api-design", name: "API Design", note: "service boundaries" },
      { id: "database-design", name: "Database Design", note: "data modelling" },
      { id: "responsive-design", name: "Responsive Design", note: "multi-device UI" },
      { id: "accessibility", name: "Accessibility", note: "inclusive interfaces" },
      { id: "seo", name: "SEO", note: "search optimization" },
      { id: "performance", name: "Performance", note: "optimization" },
      { id: "error-handling", name: "Error Handling", note: "reliable behaviour" },
      { id: "real-time-systems", name: "Real-time Systems", note: "live interactions" },
      { id: "file-uploads", name: "File Uploads", note: "media workflows" },
      { id: "image-optimization", name: "Image Optimization", note: "media performance" },
      { id: "caching", name: "Caching", note: "faster data access" },
      { id: "pagination", name: "Pagination", note: "large datasets" },
      { id: "infinite-scrolling", name: "Infinite Scrolling", note: "progressive loading" },
      { id: "optimistic-ui", name: "Optimistic UI", note: "responsive interactions" },
      { id: "environment-secrets", name: "Environment & Secrets", note: "configuration" },
      { id: "production-deployment", name: "Production Deployment", note: "shipping software" },
    ],
  },
];

export const allSkills = skillGroups.flatMap((group) => group.skills);
