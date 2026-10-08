"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Github } from "@/components/ui/icons";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.type)))] as const;

export default function AllProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "All" || project.type === filter;
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12 md:py-24">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A comprehensive overview of the web applications, mobile apps, and
            enterprise platforms I&apos;ve built throughout my career.
          </p>
        </header>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between border-b border-border/50 pb-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-accent/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">No projects found matching your search.</p>
            <button 
              onClick={() => { setSearchQuery(""); setFilter("All"); }}
              className="mt-4 text-primary hover:underline font-medium text-sm"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
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
      </main>
    </div>
  );
}
