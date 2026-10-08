import { motion } from "framer-motion";

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

export function StatsGrid({ stats, className = "", columns = 4 }: StatsGridProps) {
  const isFourCols = columns === 4;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`grid grid-cols-2 ${isFourCols ? 'md:grid-cols-4' : 'md:grid-cols-2'} ${className}`}
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
            key={index}
            className="flex flex-col py-8 md:py-12 px-4 sm:px-8 relative"
          >
            {/* Right Line */}
            {rightLine && (
              <div className="absolute right-0 top-0 bottom-0 w-[1px] neon-line-v" />
            )}
            {rightLineDesktop && (
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] neon-line-v" />
            )}
            
            {/* Bottom Line */}
            {bottomLine && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] neon-line-h" />
            )}
            {bottomLineMobile && (
              <div className="block md:hidden absolute bottom-0 left-0 right-0 h-[1px] neon-line-h" />
            )}

            <div className="text-3xl font-bold text-foreground mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </div>
            {stat.subtext && (
              <div className="text-xs text-muted-foreground mt-1">
                {stat.subtext}
              </div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
