import Link from "next/link";
import { ArrowLeft, FolderKanban } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grow flex items-center justify-center px-4 py-24 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-border bg-card text-primary font-mono font-bold text-lg">
          404
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          The page or case study you&apos;re looking for doesn&apos;t exist or
          has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-accent transition-colors text-sm font-medium"
          >
            <FolderKanban className="w-4 h-4" />
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
