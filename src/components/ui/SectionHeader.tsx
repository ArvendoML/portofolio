import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 ${className}`}
    >
      <div>
        {eyebrow && (
          <div className="text-sm font-semibold tracking-wider text-primary mb-4 uppercase font-mono">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
