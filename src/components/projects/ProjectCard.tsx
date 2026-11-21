import Link from "next/link";
import { ArrowRight, ArrowUpRight, Images } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Github } from "@/components/ui/icons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imageCount = project.images?.length ?? 0;

  return (
    <article className="group flex flex-col h-full rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8 hover:bg-card hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex justify-between items-center gap-3 mb-5">
        <Badge
          variant="outline"
          className="bg-background/50 text-muted-foreground border-border/80"
        >
          {project.type}
        </Badge>
        <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground">
          {imageCount > 0 && (
            <span className="inline-flex items-center gap-1 text-primary">
              <Images className="w-3.5 h-3.5" />
              <span>{imageCount} screens</span>
            </span>
          )}
          <span>{project.status}</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        <Link
          href={`/projects/${project.id}`}
          className="after:absolute after:inset-0 focus:outline-none focus-visible:underline"
        >
          {project.name}
        </Link>
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="border-border/60 bg-transparent text-muted-foreground"
          >
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge
            variant="outline"
            className="border-border/60 bg-transparent text-muted-foreground"
          >
            +{project.technologies.length - 4}
          </Badge>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-border/50">
        <span className="text-primary group-hover:text-primary/80 transition-colors inline-flex items-center gap-2 text-sm font-medium">
          View case study <ArrowRight className="w-4 h-4" />
        </span>

        <div className="flex items-center gap-4 relative z-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Live <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
