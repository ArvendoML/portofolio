import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ContactSection } from "@/components/sections/ContactSection";
import { personalInfo } from "@/data/personal";

describe("ContactSection", () => {
  it("opens Send Email menu with Gmail and Outlook links and closes on Escape", () => {
    render(<ContactSection />);

    const trigger = screen.getByRole("button", { name: /Send Email/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const gmailItem = screen.getByRole("menuitem", { name: "Open in Gmail" });
    const outlookItem = screen.getByRole("menuitem", {
      name: "Open in Outlook",
    });

    expect(gmailItem).toHaveAttribute(
      "href",
      expect.stringContaining("mail.google.com"),
    );
    expect(outlookItem).toHaveAttribute(
      "href",
      expect.stringContaining("outlook.office.com"),
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(
      screen.queryByRole("menu", { name: "Choose email client" }),
    ).not.toBeInTheDocument();
  });

  it("copies email address to clipboard and updates button state", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText },
    });

    render(<ContactSection />);

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Copy Email" }));
    });

    expect(writeText).toHaveBeenCalledWith(personalInfo.email);
    expect(screen.getByText("Email Copied")).toBeInTheDocument();
  });
});
