"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

import { StatsGrid } from "@/components/ui/StatsGrid";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 px-4 bg-accent/5 dark:bg-accent/10 border-t border-border/50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 relative"
        >
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-8">
            <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
              ABOUT
            </div>

            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Vertical Separator (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] neon-line-v -translate-x-1/2" />

          {/* Horizontal Separator (Mobile) */}
          <div className="block md:hidden w-full h-[1px] neon-line-h my-2" />

          {/* Right Column (Stats) */}
          <div className="md:w-1/2 md:pl-8">
            <StatsGrid stats={aboutData.stats} columns={2} className="border-t-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
