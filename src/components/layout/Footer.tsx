import Link from "next/link";
import { FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { personalInfo } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="font-mono font-semibold text-foreground">
            &lt;aml /&gt;
          </span>
          <span>•</span>
          <span>{personalInfo.name}</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </Link>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <span className="text-xs sm:text-sm">
            © {new Date().getFullYear()}
          </span>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}
