'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Briefcase } from 'lucide-react';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Badge } from '@/components/ui/Badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            title="Experience" 
            icon={<Briefcase className="w-6 h-6" />} 
          />
          
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} isLast={index === experiences.length - 1}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                  <Badge variant="default" className="shrink-0">{exp.startDate} — {exp.endDate}</Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <span className="font-semibold text-foreground">{exp.company}</span>
                  <span>•</span>
                  <span className="text-sm">{exp.location}</span>
                </div>
                
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mb-6 space-y-4">
                    {exp.projects.map((project, i) => (
                      <div key={i} className="p-5 rounded-xl bg-accent/30 border border-border">
                        <h4 className="font-bold text-foreground mb-2">{project.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <Badge key={tech} variant="outline" className="bg-background">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </section>
  );
}
