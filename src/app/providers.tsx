"use client";

import { ThemeProvider } from "@/lib/theme";
import { Cursor } from "@/components/ui/cursor";
import { EasterEggs } from "@/components/ui/easter-eggs";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div aria-hidden className="bg-atmosphere" />

      {children}

      <Cursor />
      <EasterEggs />
    </ThemeProvider>
  );
}
