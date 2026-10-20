import type { Metadata } from "next";

import { SiteNav } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/abouts/About";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/Contact/Contact";
import { SiteFooter } from "@/components/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://olayinkadev-portfolio.vercel.app"),

  title:
    "Idiagbon Saadu Abdulrahman (olayinka dev) | Full-Stack Developer & Blockchain Developer",

  description:
    "I'm Idiagbon Saadu Abdulrahman, known as olayinka dev. I turns ideas into complete digital products — interface, backend and smart contracts, shipped end to end.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Idiagbon Saadu Abdulrahman (olayinka dev) | Full-Stack Developer & Blockchain Developer",
    description:
      "Full-Stack & Blockchain Developer building complete digital products from idea to deployment.",
    url: "https://olayinkadev-portfolio.vercel.app/",
    siteName: "olayinka dev",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Idiagbon Saadu Abdulrahman | olayinka dev",
    description:
      "Full-Stack & Blockchain Developer building complete digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
