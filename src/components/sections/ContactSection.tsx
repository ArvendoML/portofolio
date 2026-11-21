"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/personal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  const encodedEmail = encodeURIComponent(personalInfo.email);
  const emailOptions = [
    {
      label: "Open in Gmail",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}`,
    },
    {
      label: "Open in Outlook",
      href: `https://outlook.office.com/mail/deeplink/compose?to=${encodedEmail}`,
    },
  ];

  return (
    <Section id="contact" variant="muted">
      <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Let's build something great."
            description="Open to discussing frontend, mobile, and fullstack software engineering roles or technical collaborations."
            className="mb-8 md:mb-8"
          />

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  aria-label="Choose email client"
                  className="absolute left-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-xl py-1.5 z-20"
                >
                  {emailOptions.map((option) => (
                    <a
                      key={option.label}
                      role="menuitem"
                      href={option.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <span>{option.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border bg-card/60 text-foreground hover:bg-accent transition-colors text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-foreground" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground">Email</div>
                <div className="text-sm text-muted-foreground truncate">
                  {personalInfo.email}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground">
                  LinkedIn
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  {personalInfo.linkedin
                    .replace("https://www.", "")
                    .replace("https://", "")}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/40 group-hover:text-primary transition-colors shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground">GitHub</div>
                <div className="text-sm text-muted-foreground truncate">
                  {personalInfo.github.replace("https://", "")}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
