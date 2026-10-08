"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-24 px-4 bg-accent/5 dark:bg-background border-t border-border/50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
            EXPERIENCE
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 leading-tight">
            Professional Journey
          </h2>

          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                isLast={index === experiences.length - 1}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.position}
                  </h3>
                  <Badge
                    variant="default"
                    className="shrink-0 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {exp.startDate} — {exp.endDate}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {exp.company}
                  </span>
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
                      <div
                        key={i}
                        className="group relative p-5 rounded-xl bg-card/40 backdrop-blur-sm border border-border hover:bg-card hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="font-bold text-foreground mb-2 relative z-10">
                          {project.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-border text-muted-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                    <span className="text-sm text-foreground font-medium flex items-center mr-2">
                      Tech:
                    </span>
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border text-muted-foreground"
                      >
                        {tech}
                      </Badge>
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
