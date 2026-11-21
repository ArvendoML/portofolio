"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  PROJECT_CATEGORIES,
  filterProjects,
  type ProjectFilterCategory,
} from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";

const PROJECTS_PER_SLIDE = 4;

function chunkProjects(items: Project[], size: number): Project[][] {
  const chunks: Project[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilterCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState<number | undefined>(
    undefined,
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const filteredProjects = useMemo(() => filterProjects(filter), [filter]);

  const slides = useMemo(
    () => chunkProjects(filteredProjects, PROJECTS_PER_SLIDE),
    [filteredProjects],
  );

  const isPrevDisabled = selectedIndex <= 0;
  const isNextDisabled = selectedIndex >= slides.length - 1;

  const syncCarouselState = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);

    const activeSlide = emblaApi.slideNodes()[index];
    if (activeSlide && activeSlide.offsetHeight > 0) {
      setViewportHeight(activeSlide.offsetHeight);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", syncCarouselState);
    emblaApi.on("reInit", syncCarouselState);
    return () => {
      emblaApi.off("select", syncCarouselState);
      emblaApi.off("reInit", syncCarouselState);
    };
  }, [emblaApi, syncCarouselState]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
  }, [emblaApi, slides.length]);

  const handleFilterChange = (category: ProjectFilterCategory) => {
    setFilter(category);
    setSelectedIndex(0);
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <Section id="projects" variant="muted">
      <SectionHeader
        eyebrow="PROJECTS"
        title="Selected Work"
        className="mb-8 md:mb-10"
        action={
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-sm font-medium"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        }
      />

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        className="relative"
      >
        {/* Tabs + Fixed-Position Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/50 mb-10">
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-6 sm:gap-8"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                onClick={() => handleFilterChange(category)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  filter === category
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                {filter === category && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {slides.length > 1 && (
            <div className="flex items-center justify-between sm:justify-end gap-4 pb-3 shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-muted-foreground">
                  Page {selectedIndex + 1} / {slides.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollTo(index)}
                      aria-label={`Go to project page ${index + 1}`}
                      aria-current={index === selectedIndex ? "true" : undefined}
                      className={`h-2 rounded-full transition-all ${
                        index === selectedIndex
                          ? "w-5 bg-primary"
                          : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={isPrevDisabled}
                  aria-label="Previous projects page"
                  className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={isNextDisabled}
                  aria-label="Next projects page"
                  className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-foreground hover:bg-accent hover:border-primary/40 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Slides */}
        <div
          ref={emblaRef}
          style={
            viewportHeight !== undefined
              ? { height: `${viewportHeight}px` }
              : undefined
          }
          className="overflow-hidden -m-1 p-1 transition-[height] duration-300 ease-out"
        >
          <div className="flex items-start">
            {slides.map((group, slideIdx) => (
              <div
                key={`${filter}-${slideIdx}`}
                className="flex-[0_0_100%] min-w-0 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {group.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
