import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, LayoutTemplate, Lock } from 'lucide-react';
import { Github } from '@/components/ui/icons';
import { Badge } from '@/components/ui/Badge';
import { SocialButton } from '@/components/ui/SocialButton';
import { ProjectSlideshow } from '@/components/ui/ProjectSlideshow';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all projects to enable static export/building
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12 md:py-24">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="accent" className="text-sm px-4 py-1.5">{project.type}</Badge>
            <span className="text-sm font-medium text-muted-foreground">Role: {project.role}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {project.name}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {project.overview}
          </p>

          {/* External Links */}
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
        </header>

        {/* Mockup / Image Section */}
        {project.images && project.images.length > 0 ? (
          <section className="mb-20">
            <ProjectSlideshow images={project.images} projectName={project.name} />
          </section>
        ) : (
          <section className="mb-20 rounded-2xl overflow-hidden border border-border bg-card w-full h-64 md:h-80 flex items-center justify-center relative">
            {/* Abstract Background Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
              style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
            />
            
            {/* Glowing Orbs */}
            <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-primary/10 blur-3xl opacity-50 mix-blend-screen" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-blue-500/10 blur-3xl opacity-50 mix-blend-screen" />
            
            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              <div className="w-20 h-20 rounded-2xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center mb-6 shadow-2xl">
                <LayoutTemplate className="w-10 h-10 text-primary/80" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{project.name}</h3>
              <p className="text-muted-foreground font-medium">{project.type}</p>
            </div>
          </section>
        )}
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Key Contribution</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.keyContribution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-4 text-muted-foreground">
                    <span className="text-primary mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Solution & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {project.architecture && (
              <section>
                <h3 className="text-lg font-bold text-foreground mb-4">Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.architecture}
                </p>
              </section>
            )}

            <section>
              <h3 className="text-lg font-bold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-accent/30">{tech}</Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
