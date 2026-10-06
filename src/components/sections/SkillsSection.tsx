'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { SkillCategory } from '@/types';

const CATEGORIES: SkillCategory[] = ['Frontend', 'Mobile', 'Engineering', 'Tools'];

import { SectionHeader } from '@/components/ui/SectionHeader';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            title="Technical Skills" 
            description="Technologies and tools I use to build modern software. I prefer deep expertise in a few core tools over surface-level knowledge of many." 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((category, idx) => {
            const categorySkills = skills.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {categorySkills.map(skill => (
                    <li key={skill.name} className="flex items-center text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
