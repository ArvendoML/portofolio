"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { aboutData } from "@/data/about";
import { StatsGrid } from "@/components/ui/StatsGrid";

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-32 px-4 bg-background relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-16 items-start"
        >
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Hi, I&apos;m {personalInfo.name.split(" ")[0]}.<br />
              {personalInfo.role.split(" ")[0]}{" "}
              <span className="text-primary">
                {personalInfo.role.split(" ")[1]}
              </span>
            </h1>

            <div className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed space-y-6 max-w-2xl">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={personalInfo.resumeUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <StatsGrid stats={aboutData.stats} className="mt-24" />
      </div>
    </section>
  );
}
