// "use client";
// import { Section, SectionHeading } from "@/components/layout/primitives";
// import { Reveal } from "@/components/motion/reveal";
// import { experience } from "@/data/profile";

// export function Experience() {
//   return (
//     <Section id="experience">
//       <SectionHeading
//         index="03"
//         label="Experience"
//         title={
//           <>
//             Where I&apos;ve shipped. <span className="text-muted-foreground">Real teams, real products.</span>
//           </>
//         }
//       />
//       <div className="grid md:grid-cols-12 md:gap-8">
//         <div className="hidden md:col-span-3 md:block" />
//         <ol className="relative md:col-span-9">
//           <span aria-hidden className="absolute bottom-0 left-1.75 top-2 w-px bg-border" />
//           {experience.map((item, i) => (
//             <Reveal as="li" key={item.company + item.role} delay={i * 80} className="relative pb-12 pl-10 last:pb-0">
//               <span aria-hidden className="absolute left-0 top-2 grid size-3.75 place-items-center rounded-full border border-border-strong bg-background">
//                 <span className="pulse-dot size-1.5 rounded-full bg-foreground" />
//               </span>
//               <p className="font-mono text-xs text-muted-foreground">
//                 {item.period ?? "[DATES]"}
//                 {item.location && <span className="text-subtle"> · {item.location}</span>}
//               </p>
//               <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">{item.role}</h3>
//               <p className="mt-1 text-lg text-muted-foreground">{item.company}</p>
//               {item.summary && <p className="text-lead mt-4 max-w-2xl">{item.summary}</p>}
//               {item.responsibilities.length > 0 ? (
//                 <ul className="mt-5 space-y-2">
//                   {item.responsibilities.map((r) => (
//                     <li key={r} className="flex gap-3 text-muted-foreground">
//                       <span className="font-mono text-subtle">→</span>
//                       {r}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="mt-5 inline-flex rounded-md border border-dashed border-border px-3 py-2 font-mono text-xs text-subtle">
//                   details pending — responsibilities and projects awaiting confirmation
//                 </p>
//               )}
//               {item.stack && item.stack.length > 0 && (
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {item.stack.map((s) => (
//                     <span key={s} className="tag rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{s}</span>
//                   ))}
//                 </div>
//               )}
//             </Reveal>
//           ))}
//         </ol>
//       </div>
//     </Section>
//   );
// }





"use client";

import { Section, SectionHeading } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        label="Experience"
        title={
          <>
            Where I&apos;ve shipped.{" "}
            <span className="text-muted-foreground">
              Real teams, real products.
            </span>
          </>
        }
      />

      <div className="grid md:grid-cols-12 md:gap-8">
        <div className="hidden md:col-span-3 md:block" />

        <ol className="relative md:col-span-9">
          <span
            aria-hidden
            className="absolute bottom-0 left-1.75 top-2 w-px bg-border"
          />

          {experience.map((item, i) => (
            <Reveal
              as="li"
              key={`${item.company}-${item.role}`}
              delay={i * 80}
              className="relative pb-12 pl-10 last:pb-0"
            >
              {/* Timeline marker */}
              <span
                aria-hidden
                className="absolute left-0 top-2 grid size-3.75 place-items-center rounded-full border border-border-strong bg-background"
              >
                <span className="pulse-dot size-1.5 rounded-full bg-foreground" />
              </span>

              {/* Meta */}
              {(item.period || item.location) && (
                <p className="font-mono text-xs text-muted-foreground">
                  {item.period}
                  {item.period && item.location && (
                    <span className="text-subtle"> · </span>
                  )}
                  {item.location && (
                    <span className="text-subtle">{item.location}</span>
                  )}
                </p>
              )}

              {/* Role */}
              <h3 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
                {item.role}
              </h3>

              {/* Company */}
              <p className="mt-1 text-lg text-muted-foreground">
                {item.company}
              </p>

              {/* Summary */}
              {item.summary && (
                <p className="text-lead mt-4 max-w-2xl">{item.summary}</p>
              )}

              {/* Responsibilities */}
              {item.responsibilities.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="font-mono text-subtle"
                      >
                        →
                      </span>

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack */}
              {item.stack && item.stack.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <span
                      key={technology}
                      className="tag rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
