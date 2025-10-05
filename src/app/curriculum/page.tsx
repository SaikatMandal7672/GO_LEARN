import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Rocket,
  Zap,
  Clock,
  BookOpen,
  CheckCircle2,
  Lock,
  Play,
  ArrowRight,
} from "lucide-react";
import { allModules, type Module } from "@/lib/data/curriculum";

const moduleIcons = {
  beginner: GraduationCap,
  intermediate: Rocket,
  advanced: Zap,
};

const moduleColors = {
  beginner: {
    border: "border-green-500/30",
    bg: "from-green-500/10 to-green-500/5",
    badge: "bg-green-500/20 text-green-500",
    icon: "text-green-500",
    iconBg: "bg-green-500/20",
  },
  intermediate: {
    border: "border-yellow-500/30",
    bg: "from-yellow-500/10 to-yellow-500/5",
    badge: "bg-yellow-500/20 text-yellow-500",
    icon: "text-yellow-500",
    iconBg: "bg-yellow-500/20",
  },
  advanced: {
    border: "border-red-500/30",
    bg: "from-red-500/10 to-red-500/5",
    badge: "bg-red-500/20 text-red-500",
    icon: "text-red-500",
    iconBg: "bg-red-500/20",
  },
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="h-3 w-3 mr-1" />
                60 Lessons • 62 Hours
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Learning <span className="gradient-text">Curriculum</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A structured learning path from Go basics to production-ready
                microservices. Master backend development step by step.
              </p>
              <Link href="/lessons/beginner/setup">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Start First Lesson
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Learning Path Visualization */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              {allModules.map((module, index) => {
                const Icon = moduleIcons[module.difficulty];
                const colors = moduleColors[module.difficulty];
                return (
                  <div key={module.id} className="flex items-center">
                    <div className={`flex items-center gap-3 px-6 py-3 rounded-full border ${colors.border} bg-gradient-to-r ${colors.bg}`}>
                      <div className={`w-8 h-8 rounded-full ${colors.iconBg} flex items-center justify-center`}>
                        <Icon className={`h-4 w-4 ${colors.icon}`} />
                      </div>
                      <span className="font-semibold">{module.title}</span>
                    </div>
                    {index < allModules.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-muted-foreground mx-2 hidden md:block" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Module Cards */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {allModules.map((module) => (
                <ModuleCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ModuleCard({ module }: { module: Module }) {
  const Icon = moduleIcons[module.difficulty];
  const colors = moduleColors[module.difficulty];
  const progress = 0; // This would come from user data

  return (
    <Card className={`${colors.border} overflow-hidden`}>
      <CardHeader className={`bg-gradient-to-r ${colors.bg}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
              <Icon className={`h-6 w-6 ${colors.icon}`} />
            </div>
            <div>
              <CardTitle className="text-2xl">{module.title} Module</CardTitle>
              <p className="text-muted-foreground">{module.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge className={colors.badge}>
              {module.lessons.length} lessons
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              {module.estimatedHours} hours
            </Badge>
          </div>
        </div>
        {progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="lessons" className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-sm font-medium">View all lessons</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-6 pb-4 space-y-2">
                {module.lessons.map((lesson, index) => {
                  const isLocked = module.difficulty !== "beginner" && index > 0;
                  const isCompleted = false;
                  return (
                    <Link
                      key={lesson.id}
                      href={isLocked ? "#" : `/lessons/${module.id}/${lesson.id}`}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                        isLocked
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-accent"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : isLocked
                          ? "bg-muted text-muted-foreground"
                          : colors.iconBg + " " + colors.icon
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : isLocked ? (
                          <Lock className="h-4 w-4" />
                        ) : (
                          lesson.order
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{lesson.title}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {lesson.duration} min
                      </div>
                    </Link>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

