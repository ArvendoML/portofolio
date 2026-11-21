import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { projects } from "@/data/projects";

describe("ProjectsSection", () => {
  it("renders category tabs and deterministic pagination state when > 4 projects exist", () => {
    render(<ProjectsSection />);

    expect(screen.getByRole("tab", { name: "All" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    if (projects.length > 4) {
      expect(screen.getByText(/Page 1 \//)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Previous projects page" }),
      ).toBeDisabled();
      expect(
        screen.getByRole("button", { name: "Next projects page" }),
      ).not.toBeDisabled();
    }
  });

  it("filters projects by category and hides pagination when <= 4 items", () => {
    render(<ProjectsSection />);

    const mobileTab = screen.getByRole("tab", { name: "Mobile Application" });
    fireEvent.click(mobileTab);

    expect(mobileTab).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByText("CCU Bank – Premier Mobile Banking"),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Bank Mandiri – KOPRA"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/Page 1 \//)).not.toBeInTheDocument();
  });

  it("shows screenshot count badge for projects with images", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("6 screens")).toBeInTheDocument();
  });
});
