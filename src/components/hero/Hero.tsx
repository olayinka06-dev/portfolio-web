"use client"
import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/layout/primitives";
import { RESUME_URL } from "@/components/navbar/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const line1 = ["Ideas", "in."];
const line2 = ["Complete", "products", "out."];

function Words({ words, start }: { words: string[]; start: number }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={w} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className="word-rise" style={{ "--d": `${start + i * 90}ms` } as CSSProperties}>
            {w}
          </span>
          {i < words.length - 1 && "\u00a0"}
        </span>
      ))}
    </>
  );
}

/** Pointer-driven 3D tilt via CSS variables — no re-renders, no 3D library. */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      el.style.setProperty("--rx", "8deg");
      el.style.setProperty("--ry", "-14deg");
    };
    const host = el.parentElement ?? el;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return ref;
}

const code = [
  [{ t: "export async function ", c: "text-muted-foreground" }, { t: "ship", c: "text-foreground" }, { t: "(idea) {", c: "text-muted-foreground" }],
  [{ t: "  const ui = await ", c: "text-muted-foreground" }, { t: "design", c: "text-foreground" }, { t: "(idea);", c: "text-muted-foreground" }],
  [{ t: "  const api = ", c: "text-muted-foreground" }, { t: "server", c: "text-foreground" }, { t: "(ui, db);", c: "text-muted-foreground" }],
  [{ t: "  const chain = ", c: "text-muted-foreground" }, { t: "deploy", c: "text-foreground" }, { t: "(contracts);", c: "text-muted-foreground" }],
  [{ t: "  return ", c: "text-muted-foreground" }, { t: "product", c: "text-foreground" }, { t: "({ ui, api, chain });", c: "text-muted-foreground" }],
  [{ t: "}", c: "text-muted-foreground" }],
];

function EditorVisual() {
  const ref = useTilt();
  return (
    <div className="relative mx-auto aspect-5/4 w-full max-w-lg [perspective:1400px]">
      <div
        ref={ref}
        className="relative size-full transition-transform duration-700 ease-out-expo [transform-style:preserve-3d]"
        style={{ transform: "rotateX(var(--rx, 8deg)) rotateY(var(--ry, -14deg))" } as CSSProperties}
      >
        {/* back plane: grid */}
        <div className="bg-grid absolute inset-0 rounded-xl border border-border [transform:translateZ(-80px)_scale(1.08)]" />

        {/* wireframe rings */}
        <div className="absolute -right-6 -top-8 size-40 rounded-full border border-border-strong [transform:translateZ(-40px)]" />
        <div className="absolute -right-2 -top-4 size-28 rounded-full border border-dashed border-border-strong [transform:translateZ(-20px)]" />

        {/* editor window */}
        <div className="absolute inset-x-0 top-[8%] overflow-hidden rounded-xl border border-border-strong bg-surface-raised shadow-lift [transform:translateZ(20px)]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full border border-border-strong" />
            <span className="size-2.5 rounded-full border border-border-strong" />
            <span className="size-2.5 rounded-full border border-border-strong" />
            <span className="ml-3 font-mono text-[0.6875rem] text-muted-foreground">product.ts</span>
            <span className="ml-auto font-mono text-[0.6875rem] text-subtle">TS · main</span>
          </div>
          <pre className="overflow-hidden px-4 py-4 font-mono text-[0.6875rem] leading-6 sm:text-xs sm:leading-7">
            {code.map((line, i) => (
              <div key={i} className="fade-up flex" style={{ "--d": `${700 + i * 90}ms` } as CSSProperties}>
                <span className="mr-4 w-4 select-none text-right text-subtle">{i + 1}</span>
                <span>
                  {line.map((s, j) => (
                    <span key={j} className={s.c}>{s.t}</span>
                  ))}
                  {i === code.length - 1 && <span className="caret ml-1" />}
                </span>
              </div>
            ))}
          </pre>
        </div>

        {/* floating chips */}
        <div className="float-slow absolute -left-4 bottom-[14%] rounded-lg border border-border bg-background/90 px-3 py-2 font-mono text-[0.6875rem] shadow-lift backdrop-blur transform-[translateZ(70px)] sm:-left-8">
          <span className="text-subtle">deploy</span> <span className="text-foreground">✓ 0x7a…f3c</span>
        </div>
        <div
          className="float-slow absolute -right-3 bottom-[4%] rounded-lg border border-border bg-background/90 px-3 py-2 font-mono text-[0.6875rem] shadow-lift backdrop-blur transform-[translateZ(50px)] sm:-right-6"
          style={{ animationDelay: "-4s" }}
        >
          <span className="text-subtle">build</span> <span className="text-foreground">passed · 1.2s</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="fade-up mb-8 flex flex-wrap items-center gap-3" style={{ "--d": "0ms" } as CSSProperties}>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="pulse-dot size-1.5 rounded-full bg-foreground" />
              Open to freelance & collaboration
            </span>
          </div>

          <p className="text-label fade-up mb-5" style={{ "--d": "80ms" } as CSSProperties}>
            Full-Stack & Blockchain Developer
          </p>

          <h1 className="text-display">
            <span className="block"><Words words={line1} start={150} /></span>
            <span className="block text-muted-foreground"><Words words={line2} start={330} /></span>
          </h1>

          <p className="text-lead fade-up mt-8 max-w-xl" style={{ "--d": "650ms" } as CSSProperties}>
            I turn ideas into complete digital products — interface, backend and smart contracts,
            designed and shipped end to end by one developer.
          </p>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-3" style={{ "--d": "780ms" } as CSSProperties}>
            <Button asChild size="lg" className="group">
              <a href="#projects">
                Explore Projects
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Let&apos;s Work Together</a>
            </Button>
            <Button asChild variant="link" className="ml-1">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <Download /> CV
              </a>
            </Button>
          </div>

          <div className="fade-up mt-12 flex flex-wrap gap-2" style={{ "--d": "900ms" } as CSSProperties}>
            {["Next.js", "TypeScript", "Node.js", "Socket.IO", "MongoDB", "Prisma"].map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        <div className="fade-up lg:col-span-5" style={{ "--d": "400ms" } as CSSProperties}>
          <EditorVisual />
        </div>
      </Container>

      <a
        href="#about"
        className="fade-up absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[0.6875rem] text-subtle transition-colors hover:text-foreground md:block"
        style={{ "--d": "1200ms" } as CSSProperties}
      >
        scroll ↓
      </a>
    </section>
  );
}
