import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PolyProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = "div">({ as, className, ...props }: PolyProps<T>) {
  const Comp = as ?? "div";
  return <Comp className={cn("container-page", className)} {...props} />;
}

export function Section({
  id,
  className,
  children,
  bordered = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={cn("section-y scroll-mt-20", bordered && "border-t border-border", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-12 grid gap-5 md:mb-16 md:grid-cols-12 md:gap-8", className)}>
      <p className="text-label md:col-span-3 md:pt-2">
        {index && <span className="text-foreground">{index}</span>}
        {index && <span className="mx-2 text-subtle">/</span>}
        {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="text-heading max-w-3xl">{title}</h2>
        {description && <p className="text-lead mt-5 max-w-2xl">{description}</p>}
      </div>
    </header>
  );
}

export function Card({ className, interactive, ...props }: ComponentPropsWithoutRef<"div"> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 text-card-foreground shadow-soft",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lift",
        className,
      )}
      {...props}
    />
  );
}
