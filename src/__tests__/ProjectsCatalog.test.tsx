import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsCatalog } from "@/components/projects/ProjectsCatalog";

describe("ProjectsCatalog", () => {
  it("filters projects by search query matching technology", async () => {
    render(<ProjectsCatalog />);

    const searchInput = screen.getByPlaceholderText("Search projects or tech...");
    fireEvent.change(searchInput, { target: { value: "Flutter" } });

    expect(
      screen.getByText("CCU Bank – Premier Mobile Banking"),
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.queryByText("Bank Mandiri – KOPRA"),
      ).not.toBeInTheDocument();
    });
  });

  it("shows empty state and clears filters cleanly", async () => {
    render(<ProjectsCatalog />);

    const searchInput = screen.getByPlaceholderText("Search projects or tech...");
    fireEvent.change(searchInput, { target: { value: "nonexistent-stack" } });

    expect(
      await screen.findByText("No projects found matching your search."),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));

    expect(
      await screen.findByText("Bank Mandiri – KOPRA"),
    ).toBeInTheDocument();
  });
});
