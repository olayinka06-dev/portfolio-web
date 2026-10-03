/**
 * Experience, testimonials and contact details. Only verified facts belong here.
 * Replace bracketed placeholders with real values; never invent quotes or duties.
 */
export type ExperienceItem = {
  company: string;
  role: string;
  period?: string;
  location?: string;
  summary?: string;
  responsibilities: string[];
  projects?: string[];
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "MSMEs Ecosystem Ltd",
    role: "Frontend Developer",
    // Dates, location and duties pending confirmation — left empty rather than invented.
    responsibilities: [],
  },
];

export type Testimonial = { quote: string; name: string; role: string; company?: string };

/** Add verified testimonials here. The section stays hidden while this is empty. */
export const testimonials: Testimonial[] = [];

export const contact = {
  email: "[EMAIL]",
  github: "[GITHUB URL]",
  linkedin: "[LINKEDIN URL]",
  x: "[X URL]",
  available: true,
  availabilityNote: "Open to new projects and full-time roles",
};

export const isPlaceholder = (v: string) => v.startsWith("[");
