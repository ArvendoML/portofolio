"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/personal";

const NAV_LINKS = [
  { name: "About", href: "/#home", sectionId: "home" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Approach", href: "/#approach", sectionId: "approach" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = NAV_LINKS.map((link) => link.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string,
  ) => {
    setIsOpen(false);
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      setActiveSection(sectionId);
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const isLinkActive = (sectionId: string) => {
    if (pathname.startsWith("/projects")) {
      return sectionId === "projects";
    }
    return pathname === "/" && activeSection === sectionId;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
        >
          &lt;aml /&gt;
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6"
        >
          <div className="flex items-center gap-5 lg:gap-6">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.sectionId);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors font-mono ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="w-px h-4 bg-border" />

          <div className="flex items-center gap-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/50 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col py-4 px-6 gap-1"
            >
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.sectionId);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                    className={`py-3 text-base font-medium rounded-lg px-3 transition-colors font-mono ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 pt-4 mt-2 border-t border-border">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
