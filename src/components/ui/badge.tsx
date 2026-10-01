import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border font-mono text-[0.6875rem] leading-none tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-surface px-2 py-1.5 text-muted-foreground",
        solid: "border-transparent bg-primary px-2 py-1.5 text-primary-foreground",
        outline: "border-border-strong px-2 py-1.5 text-foreground",
        secondary: "border-transparent bg-secondary px-2 py-1.5 text-secondary-foreground",
        destructive: "border-transparent bg-destructive px-2 py-1.5 text-destructive-foreground",
        status: "border-border px-2 py-1.5 text-muted-foreground before:size-1.5 before:rounded-full before:bg-foreground before:content-['']",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
