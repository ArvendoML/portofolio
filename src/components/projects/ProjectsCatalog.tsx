"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import {
  PROJECT_CATEGORIES,
  filterProjects,
  type ProjectFilterCategory,
} from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsCatalog() {
  const [filter, setFilter] = useState<ProjectFilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(
    () => filterProjects(filter, searchQuery),
    [filter, searchQuery],
  );

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between border-b border-border/50 pb-8">
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
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

        <div className="relative w-full md:w-72 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <label htmlFor="project-search" className="sr-only">
            Search projects or technologies
          </label>
          <input
            id="project-search"
            type="search"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-accent/30 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground text-lg">
            No projects found matching your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setFilter("All");
            }}
            className="mt-4 text-primary hover:underline font-medium text-sm"
          >
            Clear filters
          </button>
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
