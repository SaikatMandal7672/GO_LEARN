import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Github,
  CheckCircle2,
  Circle,
  BookOpen,
  Code2,
  GraduationCap,
  Rocket,
  Zap,
} from "lucide-react";
import { getProjectById } from "@/lib/data/projects";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

const difficultyConfig = {
  beginner: {
    color: "bg-green-500/20 text-green-500 border-green-500/30",
    icon: GraduationCap,
    iconColor: "text-green-500",
  },
  intermediate: {
    color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    icon: Rocket,
    iconColor: "text-yellow-500",
  },
  advanced: {
    color: "bg-red-500/20 text-red-500 border-red-500/30",
    icon: Zap,
    iconColor: "text-red-500",
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const config = difficultyConfig[project.difficulty];
  const DifficultyIcon = config.icon;
  const completedMilestones = 0; // Would come from user data
  const progress = (completedMilestones / project.milestones.length) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className={config.color}>
                    <DifficultyIcon className="h-3 w-3 mr-1" />
                    {project.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {project.estimatedHours} hours
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-3">
                <a href={project.githubTemplate} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Template
                  </Button>
                </a>
                <Button className="gap-2">
                  <Code2 className="h-4 w-4" />
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Your Progress</span>
                      <span className="text-sm font-normal text-muted-foreground">
                        {completedMilestones} / {project.milestones.length} milestones
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={progress} className="h-2 mb-6" />

                    <div className="space-y-4">
                      {project.milestones.map((milestone, index) => {
                        const isCompleted = index < completedMilestones;
                        const isCurrent = index === completedMilestones;

                        return (
                          <div
                            key={index}
                            className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                              isCurrent ? "bg-primary/5 border border-primary/20" : ""
                            }`}
                          >
                            <div className={`mt-0.5 ${isCompleted ? "text-green-500" : isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5" />
                              ) : (
                                <Circle className="h-5 w-5" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-medium ${isCompleted ? "line-through text-muted-foreground" : ""}`}>
                                {milestone.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {milestone.description}
                              </p>
                            </div>
                            {isCurrent && (
                              <Button size="sm">Start</Button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href={project.githubTemplate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="flex-1">Starter Template</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                    <Link href="/curriculum" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <BookOpen className="h-5 w-5" />
                      <span className="flex-1">Related Lessons</span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

