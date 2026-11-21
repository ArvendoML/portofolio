import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { StatsGrid } from "@/components/ui/StatsGrid";
import { personalInfo } from "@/data/personal";
import { aboutData } from "@/data/about";

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative overflow-hidden bg-background min-h-[calc(100vh-4rem)] flex items-center py-16 md:py-24 px-4"
    >
      {/* Subtle architectural grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 100%)",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column */}
          <Reveal immediate className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/80 text-xs font-mono text-muted-foreground mb-6">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>
                {personalInfo.name} · {personalInfo.location}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.08]">
              Software Engineer building{" "}
              <span className="text-primary">reliable</span> web &amp; mobile
              systems.
            </h1>

            <div className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={personalInfo.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border bg-background/60 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume <Download className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors font-mono text-xs"
              >
                <Github className="w-4 h-4 text-primary" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors font-mono text-xs"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors font-mono text-xs"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </Reveal>

          {/* Right Column: Current Role + 2x2 Stats */}
          <Reveal immediate delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-xl overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b border-border/70 bg-accent/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                      Current Role
                    </div>
                    <div className="text-sm font-semibold text-foreground truncate">
                      {personalInfo.company}
                    </div>
                  </div>
                </div>
                <Link
                  href="#experience"
                  className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline shrink-0"
                >
                  Experience
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <StatsGrid stats={aboutData.stats} columns={2} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
