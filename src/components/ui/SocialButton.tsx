import React from 'react';
import Link from 'next/link';

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SocialButton({ href, icon, label, variant = 'outline', size = 'md', className = '' }: SocialButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-3 transition-all group rounded-full border shadow-sm font-medium";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const variants = {
    solid: "bg-primary border-primary text-primary-foreground hover:opacity-90 hover:shadow-md",
    outline: "bg-background border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
    ghost: "bg-accent border-border text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5"
  };

  const isExternal = href.startsWith('http') || href.startsWith('mailto');
  const externalProps = isExternal ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Link href={href} {...externalProps} className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}>
      <span className="shrink-0 transition-transform group-hover:scale-110 duration-300">
        {icon}
      </span>
      {label && <span>{label}</span>}
      {!label && <span className="sr-only">Social Link</span>}
    </Link>
  );
}
