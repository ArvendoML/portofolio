"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { technicalSkills, engineeringApproach, SkillCategory } from "@/data/skills";

function SkillCategoryCard({ category, icon: Icon, skills }: SkillCategory) {
  return (
    <div className="p-8 border-b sm:border-b-0 sm:border-r border-border/50 hover:bg-accent/10 transition-colors">
      <div className="flex items-center gap-3 mb-6 text-foreground">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-background border-border/60 text-muted-foreground">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function ApproachCard({ id, title, description }: { id: string; title: string; description: string }) {
  return (
    <div className="group relative p-10 bg-card hover:bg-accent/20 transition-all duration-300 overflow-hidden">
      <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-primary/3 group-hover:text-primary/8 transition-colors pointer-events-none select-none">
        {id}
      </div>
      <h3 className="text-xl text-foreground font-bold mb-4 relative z-10">{title}</h3>
      <p className="text-muted-foreground leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 px-4 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
            SKILLS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 leading-tight">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border/50 rounded-xl overflow-hidden bg-card">
            {technicalSkills.map((item, index) => (
              <SkillCategoryCard
                key={index}
                category={item.category}
                icon={item.icon}
                skills={item.skills}
              />
            ))}
          </div>
        </motion.div>

        {/* Engineering Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
            ENGINEERING APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 leading-tight">
            How I Build Software
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
            {engineeringApproach.map((approach) => (
              <ApproachCard 
                key={approach.id}
                id={approach.id}
                title={approach.title}
                description={approach.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
