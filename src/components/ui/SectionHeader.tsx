import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, description, icon, align = 'left', className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {icon ? (
        <div className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''} mb-6`}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
        </div>
      ) : (
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">{title}</h2>
      )}
      
      {description && (
        <p className={`text-muted-foreground max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
