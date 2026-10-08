import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative ml-6">
      {/* Continuous Timeline Line */}
      <div className="absolute left-0 top-3.5 bottom-0 w-[1px] neon-line-v -translate-x-1/2" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ children, isLast = false }: TimelineItemProps) {
  return (
    <div className={`relative pl-8 md:pl-12 group ${isLast ? '' : 'mb-12'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full bg-background border-[3px] border-primary/30 group-hover:border-primary transition-colors duration-300 shadow-sm z-10" />
      {children}
    </div>
  );
}
