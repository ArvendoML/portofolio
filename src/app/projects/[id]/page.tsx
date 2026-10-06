import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, LayoutTemplate } from 'lucide-react';
import { Github } from '@/components/ui/icons';
import { Badge } from '@/components/ui/Badge';
import { SocialButton } from '@/components/ui/SocialButton';

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
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
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
        <section className="mb-20 rounded-2xl overflow-hidden border border-border bg-accent/20 aspect-video flex items-center justify-center relative">
           {/* If images exist, map through them. Otherwise show placeholder */}
           {project.images && project.images.length > 0 ? (
             <img 
                src={project.images[0]} 
                alt={`${project.name} preview`} 
                className="w-full h-full object-cover"
             />
           ) : (
             <div className="text-center p-8">
                <LayoutTemplate className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Detailed Mockups Available Upon Request</p>
                <p className="text-sm text-muted-foreground/70 mt-2">(Proprietary Interface)</p>
             </div>
           )}
        </section>

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
