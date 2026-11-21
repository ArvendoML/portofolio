import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getAdjacentProjects, getProjectById } from "@/lib/projects";
import { Github } from "@/components/ui/icons";
import { Badge } from "@/components/ui/Badge";
import { SocialButton } from "@/components/ui/SocialButton";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { ProjectSlideshow } from "@/components/projects/ProjectSlideshow";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | Case Study`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const { prevProject, nextProject } = getAdjacentProjects(id);
  const hasImages = Boolean(project.images && project.images.length > 0);

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

        <header className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Badge variant="accent" className="text-sm px-4 py-1.5">
              {project.type}
            </Badge>
            <Badge variant="default" className="font-mono">
              {project.status}
            </Badge>
            <span className="text-sm font-medium text-muted-foreground">
              Role: {project.role}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {project.name}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {project.overview}
          </p>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <SocialButton
                  href={project.liveUrl}
                  icon={<ArrowUpRight className="w-5 h-5" />}
                  label="View Live Project"
                  variant="solid"
                />
              )}
              {project.githubUrl && (
                <SocialButton
                  href={project.githubUrl}
                  icon={<Github className="w-5 h-5" />}
                  label="View Source Code"
                  variant="outline"
                />
              )}
            </div>
          )}
        </header>

        {hasImages && project.images ? (
          <section className="mb-16">
            <ProjectSlideshow
              images={project.images}
              projectName={project.name}
            />
          </section>
        ) : (
          project.architectureLayers &&
          project.architectureLayers.length > 0 && (
            <section className="mb-16">
              <ArchitectureDiagram
                layers={project.architectureLayers}
                projectName={project.name}
                status={project.status}
                showConfidentialNote
              />
            </section>
          )
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Key Contribution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.keyContribution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Technical Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-4 text-muted-foreground">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Solution &amp; Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            {hasImages &&
              project.architectureLayers &&
              project.architectureLayers.length > 0 && (
                <section>
                  <ArchitectureDiagram
                    layers={project.architectureLayers}
                    projectName={project.name}
                    status={project.status}
                  />
                </section>
              )}
          </div>

          <aside className="space-y-10">
            {project.architecture && (
              <section className="p-6 rounded-xl border border-border bg-card/40">
                <h3 className="text-base font-bold text-foreground mb-3">
                  Architecture Summary
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.architecture}
                </p>
              </section>
            )}

            <section className="p-6 rounded-xl border border-border bg-card/40">
              <h3 className="text-base font-bold text-foreground mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-accent/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-20 pt-10 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/50 transition-all flex items-center gap-4"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Previous Project
                </div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {prevProject.name}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="group p-5 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/50 transition-all flex items-center justify-end gap-4 text-right"
            >
              <div className="min-w-0">
                <div className="text-xs font-mono text-muted-foreground mb-1">
                  Next Project
                </div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {nextProject.name}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
