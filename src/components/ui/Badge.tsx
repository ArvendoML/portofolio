import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "px-3 py-1 text-xs font-medium rounded-full transition-colors";
  
  const variants = {
    default: "bg-primary/10 text-primary border border-primary/20",
    accent: "bg-accent text-accent-foreground border border-border",
    outline: "border border-border text-muted-foreground bg-accent/50"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
