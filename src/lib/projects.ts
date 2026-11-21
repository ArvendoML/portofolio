import { projects } from "@/data/projects";
import type { Project } from "@/types";

export const PROJECT_CATEGORIES = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.type))),
] as const;

export type ProjectFilterCategory = (typeof PROJECT_CATEGORIES)[number];

export function filterProjects(
  category: string,
  searchQuery = "",
): Project[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === "All" || project.type === category;
    const matchesSearch =
      !normalizedQuery ||
      project.name.toLowerCase().includes(normalizedQuery) ||
      project.shortDescription.toLowerCase().includes(normalizedQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(normalizedQuery),
      );

    return matchesCategory && matchesSearch;
  });
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAdjacentProjects(id: string): {
  prevProject: Project | null;
  nextProject: Project | null;
} {
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) {
    return { prevProject: null, nextProject: null };
  }

  return {
    prevProject: index > 0 ? projects[index - 1] : null,
    nextProject: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
