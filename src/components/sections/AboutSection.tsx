'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, MonitorSmartphone } from 'lucide-react';

const PRINCIPLES = [
  {
    title: 'Maintainability',
    description: 'Build reusable components and keep business logic separated from presentation.',
    icon: Code2
  },
  {
    title: 'Type Safety',
    description: 'Use TypeScript to reduce runtime errors and make large codebases easier to maintain.',
    icon: Server
  },
  {
    title: 'Accessibility',
    description: 'Build interfaces that are usable with keyboards, screen readers, and different accessibility needs.',
    icon: Smartphone
  },
  {
    title: 'User Experience',
    description: 'Prioritize clear interactions, responsive layouts, and predictable behavior.',
    icon: MonitorSmartphone
  }
];

import { SectionHeader } from '@/components/ui/SectionHeader';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-accent/30 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader title="About Me" className="mb-8" />
          
          <div className="text-lg text-muted-foreground max-w-3xl leading-relaxed space-y-4">
            <p>
              Software Engineer focused on building reliable and maintainable web and mobile applications. 
              Experienced in React, Angular, TypeScript, and Flutter, with experience contributing to 
              enterprise and financial technology projects.
            </p>
            <p>
              I bridge the gap between engineering and design, focusing on creating applications that are not 
              only visually polished but also robust, accessible, and highly performant under the hood.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
