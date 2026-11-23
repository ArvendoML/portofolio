import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectsCatalog } from "@/components/projects/ProjectsCatalog";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Explore enterprise web applications, consumer mobile apps, and personal engineering projects built by Arvendo Manuel Lextian.",
};

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <header className="mb-12">
          <div className="text-sm font-semibold tracking-wider text-primary mb-4 uppercase font-mono">
            PROJECTS ARCHIVE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            All Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A complete overview of enterprise web applications, consumer mobile
            apps, and personal engineering projects.
          </p>
        </header>

        <ProjectsCatalog />
      </div>
    </div>
  );
}
