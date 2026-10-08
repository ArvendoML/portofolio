"use client";

import { motion } from "framer-motion";
import { engineeringApproach } from "@/data/skills";

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
    <div className="group relative p-10 bg-card transition-all duration-500 overflow-hidden border-border/50">
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
    <section
      id="approach"
      className="scroll-mt-20 py-24 px-4 bg-accent/5 dark:bg-background border-t border-border/50"
    >
      <div className="container mx-auto max-w-6xl">
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
        </motion.div>
      </div>
    </section>
  );
}
