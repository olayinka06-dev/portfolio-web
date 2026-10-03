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
  title: "Abdulrahman — Full-Stack & Blockchain Developer",
  description:
    "Abdulrahman turns ideas into complete digital products — interface, backend and smart contracts, shipped end to end.",
  openGraph: {
    title: "Abdulrahman — Full-Stack & Blockchain Developer",
    description:
      "I turn ideas into complete digital products — interface, backend and smart contracts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
