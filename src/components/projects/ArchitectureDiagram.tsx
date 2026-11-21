import { Layers, Lock } from "lucide-react";
import type { ArchitectureLayer } from "@/types";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  projectName: string;
  status: string;
  showConfidentialNote?: boolean;
}

export function ArchitectureDiagram({
  layers,
  projectName,
  status,
  showConfidentialNote,
}: ArchitectureDiagramProps) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-primary" />
          <h2 className="text-base sm:text-lg font-bold text-foreground">
            {projectName} — Frontend Architecture
          </h2>
        </div>
        {showConfidentialNote && (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-accent/60 px-3 py-1 rounded-full border border-border">
            <Lock className="w-3.5 h-3.5 text-primary" />
            {status} UI · Architecture Overview
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, index) => (
          <div
            key={layer.layer}
            className="relative rounded-xl border border-border/80 bg-background/70 p-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                  0{index + 1}
                </span>
                <span className="text-[11px] font-mono text-muted-foreground truncate">
                  {layer.tech}
                </span>
              </div>
              <h3 className="font-bold text-sm text-foreground mb-1.5">
                {layer.layer}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {layer.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
