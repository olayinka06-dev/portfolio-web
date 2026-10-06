import { useEffect, useState } from "react";

/**
 * Two optional easter eggs:
 * 1. A note in the browser console (with a `hire()` helper).
 * 2. Typing "sudo" anywhere outside a field opens a tiny terminal toast.
 */
export function EasterEggs() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(
      "%colayinka.dev %c— you opened the console. Respect.\n%cTry: hire()",
      "font:600 13px monospace",
      "font:13px monospace;color:gray",
      "font:12px monospace;color:gray",
    );
    (window as unknown as { hire: () => string }).hire = () => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return "→ scrolling to #contact. Let's build something.";
    };

    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, [contenteditable]") || e.metaKey || e.ctrlKey) return;
      if (e.key === "Escape") return setOpen(false);
      buf = (buf + e.key.toLowerCase()).slice(-4);
      if (buf === "sudo") setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(id);
  }, [open]);

  if (!open) return null;
  return (
    <div role="status" className="page-enter fixed bottom-5 left-5 z-60 w-[min(22rem,calc(100vw-2.5rem))] rounded-lg border border-border-strong bg-popover p-4 font-mono text-xs text-popover-foreground shadow-lift">
      <p className="text-subtle">$ sudo make portfolio</p>
      <p className="mt-1">[sudo] password for visitor: ••••••</p>
      <p className="mt-1 text-muted-foreground">permission granted. you already have root here.</p>
      <p className="mt-2 text-subtle">
        esc to close <span className="caret ml-1" />
      </p>
    </div>
  );
}
