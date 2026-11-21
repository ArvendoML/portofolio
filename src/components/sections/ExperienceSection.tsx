import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <Section id="experience" variant="muted">
      <Reveal>
        <SectionHeader eyebrow="EXPERIENCE" title="Professional Journey" />

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
                  className="shrink-0 w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {exp.startDate} — {exp.endDate}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4 text-muted-foreground">
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
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed text-sm sm:text-base">
                        {resp}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.projects.map((project, i) => (
                    <div
                      key={i}
                      className="group relative p-5 rounded-xl bg-card/40 backdrop-blur-sm border border-border hover:bg-card hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-foreground relative z-10">
                          {project.name}
                        </h4>
                        {project.projectId && (
                          <Link
                            href={`/projects/${project.projectId}`}
                            className="text-muted-foreground hover:text-primary transition-colors shrink-0 p-1 -m-1"
                            aria-label={`View case study for ${project.name}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
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
      </Reveal>
    </Section>
  );
}
