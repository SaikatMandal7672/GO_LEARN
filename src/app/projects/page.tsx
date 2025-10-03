import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FolderGit2,
  Clock,
  ExternalLink,
  ArrowRight,
  Terminal,
  Server,
  Cloud,
  GraduationCap,
  Rocket,
  Zap,
} from "lucide-react";
import { projects } from "@/lib/data/projects";

const difficultyConfig = {
  beginner: {
    color: "bg-green-500/20 text-green-500 border-green-500/30",
    icon: GraduationCap,
    iconColor: "text-green-500",
    bgGradient: "from-green-500/10 to-green-500/5",
  },
  intermediate: {
    color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    icon: Rocket,
    iconColor: "text-yellow-500",
    bgGradient: "from-yellow-500/10 to-yellow-500/5",
  },
  advanced: {
    color: "bg-red-500/20 text-red-500 border-red-500/30",
    icon: Zap,
    iconColor: "text-red-500",
    bgGradient: "from-red-500/10 to-red-500/5",
  },
};

const projectIcons = {
  "cli-todo": Terminal,
  "rest-blog": Server,
  "social-backend": Cloud,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <FolderGit2 className="h-3 w-3 mr-1" />
                {projects.length} Capstone Projects
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build Real <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Apply your Go knowledge by building production-ready applications.
                Each project comes with starter code, requirements, and step-by-step guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => {
                const config = difficultyConfig[project.difficulty];
                const ProjectIcon = projectIcons[project.id as keyof typeof projectIcons] || FolderGit2;

                return (
                  <Card
                    key={project.id}
                    className={`overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* Header with gradient */}
                    <div className={`p-6 bg-gradient-to-br ${config.bgGradient}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center`}>
                          <ProjectIcon className={`h-6 w-6 ${config.iconColor}`} />
                        </div>
                        <Badge variant="outline" className={config.color}>
                          {project.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <CardContent className="p-6">
                      {/* Technologies */}
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Clock className="h-4 w-4" />
                        <span>{project.estimatedHours} hours estimated</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link href={`/projects/${project.id}`} className="flex-1">
                          <Button className="w-full gap-2">
                            View Project
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                        <a
                          href={project.githubTemplate}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-muted-foreground mb-6">
                Start with the CLI project if you&apos;re new to Go, or jump straight
                to the REST API if you have some experience.
              </p>
              <Link href="/curriculum">
                <Button variant="outline" size="lg" className="gap-2">
                  View Full Curriculum
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

