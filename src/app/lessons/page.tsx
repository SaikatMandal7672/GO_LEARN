import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Rocket,
  Zap,
  Clock,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { allModules } from "@/lib/data/curriculum";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

const moduleIcons: Record<string, React.ElementType> = {
  GraduationCap,
  Rocket,
  Zap,
};

const moduleColors: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  beginner: {
    bg: "from-green-500/10 to-green-500/5",
    border: "border-green-500/30 hover:border-green-500/50",
    icon: "text-green-500",
    badge: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  intermediate: {
    bg: "from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/30 hover:border-yellow-500/50",
    icon: "text-yellow-500",
    badge: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },
  advanced: {
    bg: "from-red-500/10 to-red-500/5",
    border: "border-red-500/30 hover:border-red-500/50",
    icon: "text-red-500",
    badge: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="h-3 w-3 mr-1" />
              All Lessons
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Browse All Lessons
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete curriculum with {allModules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons
              across {allModules.length} modules.
            </p>
          </div>

          {/* Modules with Lessons */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {allModules.map((module) => {
              const Icon = moduleIcons[module.icon] || BookOpen;
              const colors = moduleColors[module.difficulty];

              return (
                <Card key={module.id} className={`${colors.border} transition-colors`}>
                  <CardHeader className={`bg-gradient-to-r ${colors.bg}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${colors.icon}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {module.lessons.length} lessons • {module.estimatedHours} hours
                          </p>
                        </div>
                      </div>
                      <Badge className={colors.badge}>
                        {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-2">
                      {module.lessons.map((lesson, index) => (
                        <Link
                          key={lesson.id}
                          href={`/lessons/${module.id}/${lesson.id}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium group-hover:text-primary transition-colors">
                                {lesson.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {lesson.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {lesson.duration} min
                            </span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

