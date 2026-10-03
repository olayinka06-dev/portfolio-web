import { useEffect, useRef } from "react";

/** Subtle trailing ring on fine pointers only. Native cursor stays visible for accessibility. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.dataset["on"] = "true";
      const t = e.target as Element | null;
      el.dataset["hover"] = String(!!t?.closest("a, button, [role='button'], input, textarea, label"));
    };
    const leave = () => (el.dataset["on"] = "false");
    const down = () => (el.dataset["down"] = "true");
    const up = () => (el.dataset["down"] = "false");
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-ring hidden md:block" />;
}
