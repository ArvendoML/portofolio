"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { personalInfo } from "@/data/personal";
import Link from "next/link";

export function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-accent/5 dark:bg-background border-t border-border/50 pt-24 pb-8 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 mb-24"
        >
          {/* Left Column */}
          <div>
            <div className="text-sm font-semibold tracking-wider text-primary mb-6 uppercase">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Let&apos;s build something great.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col sm:flex-row gap-12 sm:items-center justify-between">
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-sm font-bold text-foreground">Email</div>
                  <div className="text-sm">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-sm font-bold text-foreground">
                    LinkedIn
                  </div>
                  <div className="text-sm">
                    {personalInfo.linkedin
                      .replace("https://www.", "")
                      .replace("https://", "")}
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-sm font-bold text-foreground">
                    GitHub
                  </div>
                  <div className="text-sm">
                    {personalInfo.github.replace("https://", "")}
                  </div>
                </div>
              </a>
            </div>

            {/* <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-accent/50 transition-colors w-full sm:w-auto mt-6 sm:mt-0"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </a> */}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <div className="mb-4 sm:mb-0">{personalInfo.name}</div>
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-accent/50 hover:bg-accent hover:text-foreground transition-colors border border-border"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
