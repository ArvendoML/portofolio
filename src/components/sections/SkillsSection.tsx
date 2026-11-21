import {
  Cpu,
  Monitor,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { technicalSkills } from "@/data/skills";
import type { SkillCategory, SkillGroupName } from "@/types";

const SKILL_ICONS: Record<SkillGroupName, LucideIcon> = {
  Frontend: Monitor,
  Backend: Server,
  Mobile: Smartphone,
  Engineering: Cpu,
  Tools: Wrench,
};

function SkillCategoryCard({
  category,
  skills,
  className = "",
}: SkillCategory & { className?: string }) {
  const Icon = SKILL_ICONS[category];

  return (
    <div
      className={`group relative p-7 sm:p-8 bg-card hover:bg-accent/15 transition-colors overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-center gap-3 mb-5 text-foreground">
        <Icon className="w-5 h-5 text-primary shrink-0" />
        <h3 className="font-bold text-lg">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="bg-background border-border/70 text-muted-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeader eyebrow="SKILLS" title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-border/60 rounded-xl overflow-hidden border border-border/60">
          {technicalSkills.map((item, index) => {
            const spanClass = index < 3 ? "md:col-span-2" : "md:col-span-3";
            return (
              <SkillCategoryCard
                key={item.category}
                category={item.category}
                skills={item.skills}
                className={spanClass}
              />
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
