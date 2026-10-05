// "use client";
// import { Card, Section, SectionHeading } from "@/components/layout/primitives";
// import { Reveal } from "@/components/motion/reveal";
// import { skillGroups, allSkills } from "@/data/skills";

// const principles = [
//   { k: "product", v: "Start from the problem and the user, not the framework." },
//   { k: "full-stack", v: "Own the whole path — interface, API, data and deploy." },
//   { k: "systems", v: "Break messy requirements into parts that actually work together." },
// ];

// export function About() {
//   return (
//     <Section id="about">
//       <SectionHeading
//         index="01"
//         label="About"
//         title={
//           <>
//             I build products, <span className="text-muted-foreground">not just pages.</span>
//           </>
//         }
//       />

//       <div className="grid gap-12 md:grid-cols-12 md:gap-8">
//         <div className="hidden md:col-span-3 md:block" />
//         <div className="space-y-6 md:col-span-9 lg:col-span-6">
//           <Reveal>
//             <p className="text-lg leading-relaxed md:text-xl">
//               I&apos;m Abdulrahman, a full-stack developer who takes ideas from a rough description to a
//               working system people can use.
//             </p>
//           </Reveal>
//           <Reveal delay={80}>
//             <p className="text-lead">
//               Most of my work sits where product decisions meet engineering ones: shaping what should
//               be built, designing the data behind it, wiring up the APIs and real-time pieces, and
//               shipping an interface that feels considered. I care about the details that make
//               software dependable — clear structure, predictable behaviour, and code the next person
//               can understand.
//             </p>
//           </Reveal>
//         </div>

//         <div className="md:col-span-9 md:col-start-4 lg:col-span-3 lg:col-start-auto">
//           <Reveal delay={160}>
//             <dl className="divide-y divide-border border-y border-border">
//               {principles.map((p) => (
//                 <div key={p.k} className="py-4">
//                   <dt className="text-label">{p.k}</dt>
//                   <dd className="mt-1.5 text-sm leading-relaxed">{p.v}</dd>
//                 </div>
//               ))}
//             </dl>
//           </Reveal>
//         </div>
//       </div>

//       <div id="skills" className="mt-24 scroll-mt-24 md:mt-32">
//         <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
//           <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Stack</h3>
//           <p className="font-mono text-xs text-muted-foreground">
//             {skillGroups.length} areas · {allSkills.length} tools
//           </p>
//         </div>

//         <div className="grid gap-3 sm:grid-cols-2">
//           {skillGroups.map((g, gi) => (
//             <Reveal key={g.id} delay={gi * 60} className={gi === skillGroups.length - 1 && skillGroups.length % 2 ? "sm:col-span-2" : ""}>
//               <Card className="group h-full p-0 transition-colors duration-300 hover:border-border-strong">
//                 <header className="flex items-start justify-between gap-4 border-b border-border p-5 md:p-6">
//                   <div>
//                     <p className="text-label">
//                       <span className="text-foreground">{g.index}</span>
//                       <span className="mx-2 text-subtle">/</span>
//                       {g.label}
//                     </p>
//                     <p className="mt-2 text-sm text-muted-foreground">{g.summary}</p>
//                   </div>
//                   <span className="shrink-0 font-mono text-[0.6875rem] text-subtle">
//                     [{String(g.skills.length).padStart(2, "0")}]
//                   </span>
//                 </header>
//                 <ul>
//                   {g.skills.map((s) => (
//                     <li
//                       key={s.id}
//                       className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-3 transition-colors last:border-b-0 hover:bg-accent md:px-6"
//                     >
//                       <span className="text-[0.9375rem] font-medium">{s.name}</span>
//                       <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">{s.note}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { skillGroups } from "@/data/skills";

const principles = [
  {
    k: "product",
    v: "Start from the problem and the user, not the framework.",
  },
  {
    k: "full-stack",
    v: "Own the whole path — interface, API, data, authentication and deployment.",
  },
  {
    k: "systems",
    v: "Break complex requirements into systems that are clear, maintainable and reliable.",
  },
];

const featuredGroupIds = [
  "frontend",
  "backend",
  "database",
  "auth",
  "web3",
];

export function About() {
  const featuredGroups = featuredGroupIds
    .map((id) => skillGroups.find((group) => group.id === id))
    .filter(Boolean)
    .map((group) => ({
      ...group!,
      skills: group!.skills.slice(0, 5),
    }));

  return (
    <Section id="about">
      <SectionHeading
        index="01"
        label="About"
        title={
          <>
            I build products,{" "}
            <span className="text-muted-foreground">not just pages.</span>
          </>
        }
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="hidden md:col-span-3 md:block" />

        <div className="space-y-6 md:col-span-9 lg:col-span-6">
          <Reveal>
            <p className="text-lg leading-relaxed md:text-xl">
              I&apos;m Abdulrahman, a full-stack developer who takes ideas from
              a rough description to a working product people can use.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-lead">
              Most of my work sits where product decisions meet engineering
              ones: shaping interfaces, designing APIs and data models,
              building real-time systems, handling authentication, and
              shipping applications that feel considered. I care about the
              details that make software dependable — clear architecture,
              predictable behaviour, good performance, and code the next
              person can understand.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lead">
              Alongside full-stack development, I work with blockchain and
              Web3 technologies, exploring how smart contracts, wallets and
              decentralized systems can fit into useful products.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-9 md:col-start-4 lg:col-span-3 lg:col-start-auto">
          <Reveal delay={160}>
            <dl className="divide-y divide-border border-y border-border">
              {principles.map((p) => (
                <div key={p.k} className="py-4">
                  <dt className="text-label">{p.k}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed">
                    {p.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Featured Stack */}
      <div id="skills" className="mt-24 scroll-mt-24 md:mt-32">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Stack
            </h3>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              A focused look at the technologies I use most across the stack.
            </p>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            05 core areas
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {featuredGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 60}
              className={
                index === featuredGroups.length - 1
                  ? "sm:col-span-2"
                  : undefined
              }
            >
              <Card className="group h-full p-0 transition-colors duration-300 hover:border-border-strong">
                <header className="flex items-start justify-between gap-4 border-b border-border p-5 md:p-6">
                  <div>
                    <p className="text-label">
                      <span className="text-foreground">
                        {group.index}
                      </span>

                      <span className="mx-2 text-subtle">/</span>

                      {group.label}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {group.summary}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-[0.6875rem] text-subtle">
                    [05]
                  </span>
                </header>

                <ul>
                  {group.skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-3 transition-colors last:border-b-0 hover:bg-accent md:px-6"
                    >
                      <span className="text-[0.9375rem] font-medium">
                        {skill.name}
                      </span>

                      <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">
                        {skill.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-muted-foreground">
              More technologies, tools and engineering capabilities in the
              full stack.
            </p>

            <Button asChild variant="outline" className="group">
              <Link href="/about">
                View full stack
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}



