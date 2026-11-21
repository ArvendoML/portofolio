import { engineeringApproach } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

function ApproachCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-8 sm:p-10 bg-card transition-all duration-500 overflow-hidden">
      <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-transparent [-webkit-text-stroke:2px_rgba(59,130,246,0.1)] group-hover:[-webkit-text-stroke:2px_rgba(59,130,246,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-500 pointer-events-none select-none">
        {id}
      </div>
      <h3 className="text-xl text-foreground font-bold mb-4 relative z-10">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}

export function ApproachSection() {
  return (
    <Section id="approach" variant="muted">
      <Reveal delay={0.1}>
        <SectionHeader
          eyebrow="ENGINEERING APPROACH"
          title="How I Build Software"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50 shadow-sm">
          {engineeringApproach.map((approach) => (
            <ApproachCard
              key={approach.id}
              id={approach.id}
              title={approach.title}
              description={approach.description}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
