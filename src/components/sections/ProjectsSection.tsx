"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/icons";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const CATEGORIES = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.type))),
] as const;
type FilterCategory = (typeof CATEGORIES)[number];

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.type === filter,
  );

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24 px-4 bg-accent/5 dark:bg-background border-t border-border/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
              PROJECTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Selected Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 border-b border-border/50 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                filter === category
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {filter === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={project.liveUrl || `/projects/${project.id}`}
                  className="group flex flex-col h-full rounded-xl border border-border bg-card p-8 hover:bg-accent/40 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <Badge
                      variant="outline"
                      className="bg-background/50 text-muted-foreground border-border/80"
                    >
                      {project.type}
                    </Badge>
                    <div className="p-2 rounded-full bg-background border border-border opacity-0 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 grow">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/60 bg-transparent text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="border-border/60 bg-transparent text-muted-foreground"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <span className="text-primary group-hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium">
                      View case study <ArrowRight className="w-4 h-4" />
                    </span>

                    {project.githubUrl && (
                      <span
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <Github className="w-4 h-4" /> View code
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
