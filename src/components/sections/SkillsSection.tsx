"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import {
  technicalSkills,
  SkillCategory,
} from "@/data/skills";

function SkillCategoryCard({ category, icon: Icon, skills }: SkillCategory) {
  return (
    <div className="group relative p-8 border-b sm:border-b-0 sm:border-r border-border/50 hover:bg-accent/10 transition-colors overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-center gap-3 mb-6 text-foreground">
        <Icon className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="bg-background border-border/60 text-muted-foreground"
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
    <section
      id="skills"
      className="scroll-mt-20 py-24 px-4 bg-background border-t border-border/50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
      </div>
    </section>
  );
}
