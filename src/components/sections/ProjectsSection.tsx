'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';

const CATEGORIES = ['All', ...Array.from(new Set(projects.map(p => p.type)))] as const;
type FilterCategory = typeof CATEGORIES[number];

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>('All');
  
  const filteredProjects = projects.filter(
    project => filter === 'All' || project.type === filter
  );

  return (
    <section id="projects" className="py-24 px-4 bg-accent/30 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            title="Projects" 
            description="A selection of projects I've worked on, ranging from enterprise dashboards to consumer mobile applications." 
            className="!mb-0"
          />
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/20' 
                    : 'bg-background text-muted-foreground border border-border hover:bg-accent hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group h-full relative flex flex-col justify-between p-6 rounded-2xl bg-background border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="accent">
                        {project.type}
                      </Badge>
                      <div className="p-1.5 rounded-full bg-accent text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-primary/10 group-hover:text-primary">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Role: <span className="font-normal text-muted-foreground">{project.role}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(tech => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline">+{project.technologies.length - 4} more</Badge>
                    )}
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
