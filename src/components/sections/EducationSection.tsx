import { education } from "@/data/education";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function EducationSection() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeader eyebrow="EDUCATION" title="Academic Background" />

        <Timeline>
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.id}
              isLast={index === education.length - 1}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {edu.school}
                </h3>
                <Badge
                  variant="default"
                  className="shrink-0 w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {edu.startDate} — {edu.endDate}
                </Badge>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {edu.degree}{" "}
                  {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}
                </span>
                <span>•</span>
                <span className="text-sm">{edu.location}</span>
              </div>

              {edu.description && (
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              )}

              {edu.achievements.length > 0 && (
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Reveal>
    </Section>
  );
}
