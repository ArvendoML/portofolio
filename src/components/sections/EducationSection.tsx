'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/education';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Badge } from '@/components/ui/Badge';

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative bg-accent/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            title="Education" 
            icon={<GraduationCap className="w-6 h-6" />} 
          />
          
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id} isLast={index === education.length - 1}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.school}</h3>
                  <Badge variant="default" className="shrink-0">{edu.startDate} — {edu.endDate}</Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <span className="font-semibold text-foreground">{edu.degree} in {edu.fieldOfStudy}</span>
                  <span>•</span>
                  <span className="text-sm">{edu.location}</span>
                </div>
                
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
                
                {edu.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </section>
  );
}
