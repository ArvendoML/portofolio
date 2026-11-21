import { describe, expect, it } from "vitest";
import {
  PROJECT_CATEGORIES,
  filterProjects,
  getAdjacentProjects,
  getProjectById,
} from "@/lib/projects";
import { projects } from "@/data/projects";

describe("lib/projects", () => {
  it("exposes All plus distinct project categories", () => {
    expect(PROJECT_CATEGORIES[0]).toBe("All");
    expect(PROJECT_CATEGORIES).toContain("Web Application");
    expect(PROJECT_CATEGORIES).toContain("Mobile Application");
  });

  it("filters by category and search query", () => {
    const mobile = filterProjects("Mobile Application");
    expect(mobile.every((p) => p.type === "Mobile Application")).toBe(true);

    const byTech = filterProjects("All", "angular");
    expect(byTech.some((p) => p.id === "kopra-mandiri")).toBe(true);
  });

  it("returns adjacent projects for first, middle, and missing IDs", () => {
    const first = getAdjacentProjects(projects[0].id);
    expect(first.prevProject).toBeNull();
    expect(first.nextProject?.id).toBe(projects[1].id);

    const last = getAdjacentProjects(projects[projects.length - 1].id);
    expect(last.prevProject?.id).toBe(projects[projects.length - 2].id);
    expect(last.nextProject).toBeNull();

    expect(getProjectById("missing-id")).toBeUndefined();
    expect(getAdjacentProjects("missing-id")).toEqual({
      prevProject: null,
      nextProject: null,
    });
  });
});
