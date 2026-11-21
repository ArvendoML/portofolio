import { Reveal } from "@/components/ui/Reveal";

export interface Stat {
  value: string;
  label: string;
  subtext?: string;
}

interface StatsGridProps {
  stats: Stat[];
  className?: string;
  columns?: 2 | 4;
}

export function StatsGrid({
  stats,
  className = "",
  columns = 4,
}: StatsGridProps) {
  const isFourCols = columns === 4;

  return (
    <Reveal
      immediate
      delay={0.15}
      className={`grid grid-cols-2 ${isFourCols ? "md:grid-cols-4" : "md:grid-cols-2"} ${className}`}
    >
      {stats.map((stat, index) => {
        let rightLine = false;
        let rightLineDesktop = false;
        let bottomLine = false;
        let bottomLineMobile = false;

        if (isFourCols) {
          if (index === 0) {
            rightLine = true;
            bottomLineMobile = true;
          }
          if (index === 1) {
            bottomLineMobile = true;
            rightLineDesktop = true;
          }
          if (index === 2) {
            rightLine = true;
          }
        } else {
          const isRightColumn = index % 2 === 1;
          const isBottomRow = index >= 2;
          if (!isRightColumn) rightLine = true;
          if (!isBottomRow) bottomLine = true;
        }

        return (
          <div
            key={stat.label}
            className={`flex flex-col relative ${
              isFourCols
                ? "py-8 md:py-12 px-4 sm:px-8"
                : "py-6 px-5 sm:px-6"
            }`}
          >
            {rightLine && (
              <div className="absolute right-0 top-0 bottom-0 w-[1px] neon-line-v" />
            )}
            {rightLineDesktop && (
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] neon-line-v" />
            )}

            {bottomLine && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] neon-line-h" />
            )}
            {bottomLineMobile && (
              <div className="block md:hidden absolute bottom-0 left-0 right-0 h-[1px] neon-line-h" />
            )}

            <div
              className={`font-bold text-foreground mb-1.5 leading-snug ${
                isFourCols ? "text-3xl" : "text-xl sm:text-2xl"
              }`}
            >
              {stat.value}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </div>
            {stat.subtext && (
              <div className="text-xs text-muted-foreground/80 mt-1 leading-relaxed">
                {stat.subtext}
              </div>
            )}
          </div>
        );
      })}
    </Reveal>
  );
}
