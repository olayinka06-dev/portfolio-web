// /**
//  * Experience, testimonials and contact details. Only verified facts belong here.
//  * Replace bracketed placeholders with real values; never invent quotes or duties.
//  */
// export type ExperienceItem = {
//   company: string;
//   role: string;
//   period?: string;
//   location?: string;
//   summary?: string;
//   responsibilities: string[];
//   projects?: string[];
//   stack?: string[];
// };

// export const experience: ExperienceItem[] = [
//   {
//     company: "MSMEs Ecosystem Ltd",
//     role: "Frontend Developer",
//     // Dates, location and duties pending confirmation — left empty rather than invented.
//     responsibilities: [],
//   },
// ];

// export type Testimonial = { quote: string; name: string; role: string; company?: string };

// /** Add verified testimonials here. The section stays hidden while this is empty. */
// export const testimonials: Testimonial[] = [];

// export const contact = {
//   email: "[EMAIL]",
//   github: "[GITHUB URL]",
//   linkedin: "[LINKEDIN URL]",
//   x: "[X URL]",
//   available: true,
//   availabilityNote: "Open to new projects and full-time roles",
// };

// export const isPlaceholder = (v: string) => v.startsWith("[");

/**
 * Professional experience.
 * Only verified facts should be added here.
 */
export type ExperienceItem = {
  company: string;
  role: string;
  period?: string;
  location?: string;
  summary?: string;
  responsibilities: string[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "MSMEs Ecosystem Ltd",
    role: "Frontend Developer",
    period: "2023",
    summary:
      "Worked on fintech products within the Tulu ecosystem, contributing to frontend development and user-facing product experiences.",
    responsibilities: [
      "Developed and refined responsive user interfaces for fintech products.",
      "Translated product requirements and designs into functional frontend experiences.",
      "Worked across multiple products within the Tulu ecosystem, including Voucher Pay, TuluPay Exchange, Tulu Asset, Tulu Purse and Tulu Switch.",
      "Collaborated with the development team to improve product functionality and user experience.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Prisma"],
  },

  {
    company: "Toshconsult LTD",
    role: "Full-Stack Developer",
    period: "2022",
    summary:
      "After completing my developer training, I transitioned into a full-stack development role, working across both frontend and backend applications while also supporting other developers through tutoring and mentorship.",
    responsibilities: [
      "Worked across frontend and backend development to build and maintain web applications.",
      "Tutored and mentored other developers, helping them understand development concepts and improve their practical skills.",
      "Contributed to notable projects, including Alpha Bills and Gited Brainz.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  },
];

/**
 * Verified testimonials only.
 * Keep empty until genuine testimonials are available.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Thanks so much for collaborating with me on the website for my store. Your approach and implementation were flawless.",
    name: "Adeshina Mubarak",
    role: "Full-Stack Developer",
    company: "Opeyemi's Store",
  },
];

/**
 * Contact information.
 * Replace placeholders with actual links before launch.
 */
export const contact = {
  email: "olayinkaconsult06@gmail.com",
  github: "https://github.com/olayika06-dev",
  linkedin: "https://www.linkedin.com/in/olayinka-dev",
  x: "https://x.com/olayinkadev",
  available: true,
  availabilityNote: "Open to new projects and full-time roles",
};

export const isPlaceholder = (value: string) => value.startsWith("[");
