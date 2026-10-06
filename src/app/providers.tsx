"use client";

import { ThemeProvider } from "@/lib/theme";
import { Cursor } from "@/components/ui/cursor";
import { EasterEggs } from "@/components/ui/easter-eggs";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div aria-hidden className="bg-atmosphere" />

      {children}

      <Cursor />
      <EasterEggs />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--surface-raised)",
            color: "var(--foreground)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow-lift-value)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            padding: "12px 14px",
          },
          success: {
            iconTheme: {
              primary: "var(--foreground)",
              secondary: "var(--surface-raised)",
            },
          },
          error: {
            iconTheme: {
              primary: "var(--destructive)",
              secondary: "var(--surface-raised)",
            },
          },
        }}
      />
    </ThemeProvider>
  );
}
