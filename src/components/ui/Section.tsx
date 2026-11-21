import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  variant?: "default" | "muted";
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  variant = "default",
  className = "",
  children,
}: SectionProps) {
  const bgClass =
    variant === "muted"
      ? "bg-accent/5 dark:bg-background"
      : "bg-background";

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-24 px-4 border-t border-border/50 ${bgClass} ${className}`}
    >
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
