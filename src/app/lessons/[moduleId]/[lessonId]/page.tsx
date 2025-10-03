import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  CheckCircle2,
  Home,
} from "lucide-react";
import { allModules } from "@/lib/data/curriculum";
import { LessonContent } from "./lesson-content";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

interface LessonPageProps {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { moduleId, lessonId } = await params;

  const module = allModules.find((m) => m.id === moduleId);
  if (!module) notFound();

  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) notFound();

  const lesson = module.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;

  // Check if next lesson is in next module
  const moduleIndex = allModules.findIndex((m) => m.id === moduleId);
  const nextModule = moduleIndex < allModules.length - 1 ? allModules[moduleIndex + 1] : null;
  const nextModuleFirstLesson = nextModule?.lessons[0] || null;

  // Calculate progress
  const progress = Math.round(((lessonIndex + 1) / module.lessons.length) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Progress Bar */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/curriculum" className="hover:text-foreground">
                Curriculum
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href={`/lessons/${moduleId}`} className="hover:text-foreground capitalize">
                {module.title}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate max-w-[200px]">{lesson.title}</span>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Lesson {lessonIndex + 1} of {module.lessons.length}
              </span>
              <Badge variant="outline" className="gap-1">
                <Clock className="h-3 w-3" />
                {lesson.duration} min
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <LessonContent lesson={lesson} module={module} />
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {prevLesson ? (
              <Link href={`/lessons/${moduleId}/${prevLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevLesson.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}

            <Button className="gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Mark as Complete
            </Button>

            {nextLesson ? (
              <Link href={`/lessons/${moduleId}/${nextLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <span className="hidden sm:inline">{nextLesson.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : nextModuleFirstLesson && nextModule ? (
              <Link href={`/lessons/${nextModule.id}/${nextModuleFirstLesson.id}`}>
                <Button className="gap-2">
                  Start {nextModule.title} Module
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href="/curriculum">
                <Button variant="outline" className="gap-2">
                  Back to Curriculum
                  <BookOpen className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

