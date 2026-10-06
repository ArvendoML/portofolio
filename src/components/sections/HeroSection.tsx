'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { SocialButton } from '@/components/ui/SocialButton';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 pb-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-5">
        <Terminal className="w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] text-primary" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Hi, I'm Arvendo Manuel Lextian.<br/>
            Software <span className="text-primary">Engineer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Building reliable and scalable web applications with React, Angular, TypeScript, and modern frontend architecture. 
            I focus on performance, accessibility, and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground border border-border font-medium hover:bg-accent/80 transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-4 sm:ml-4 mt-4 sm:mt-0">
              <SocialButton 
                href="https://github.com" 
                icon={<Github className="w-5 h-5" />} 
                label="GitHub" 
                variant="ghost" 
              />
              
              <SocialButton 
                href="https://linkedin.com" 
                icon={<Linkedin className="w-5 h-5" />} 
                label="LinkedIn" 
                variant="ghost"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
