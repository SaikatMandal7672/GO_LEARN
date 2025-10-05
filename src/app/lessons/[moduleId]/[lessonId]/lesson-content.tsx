"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeEditor } from "@/components/code-editor";
import { Lightbulb, AlertTriangle, CheckCircle2, Code2, FileText, ChevronRight, Loader2 } from "lucide-react";
import type { Lesson, Module } from "@/lib/data/curriculum";
import { lessonContents } from "@/lib/data/lesson-contents";
import { allModules } from "@/lib/data/curriculum";

// Default content for lessons without specific content
const defaultContent = {
  content: "# Coming Soon\n\nThis lesson content is being developed. Check back soon!",
  code: `package main

import "fmt"

func main() {
    fmt.Println("Hello from GoLearn!")
    // Try writing some Go code here
}`,
  keyPoints: ["This lesson is coming soon"],
  commonMistakes: ["Stay tuned for content"],
  bestPractices: ["Keep practicing!"],
};

interface LessonContentProps {
  lesson: Lesson;
  module: Module;
}

export function LessonContent({ lesson, module }: LessonContentProps) {
  const content = lessonContents[lesson.id] || defaultContent;
  const [activeTab, setActiveTab] = useState<"lesson" | "editor">("lesson");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkingProgress, setCheckingProgress] = useState(true);
  const router = useRouter();

  // Check if lesson is already completed
  useEffect(() => {
    async function checkProgress() {
      try {
        const res = await fetch("/api/progress/lessons");
        if (res.ok) {
          const progress = await res.json();
          const lessonProgress = progress.find(
            (p: { moduleId: string; lessonId: string; completed: boolean }) =>
              p.moduleId === module.id && p.lessonId === lesson.id
          );
          if (lessonProgress?.completed) {
            setIsCompleted(true);
          }
        }
      } catch (error) {
        console.error("Failed to check progress:", error);
      } finally {
        setCheckingProgress(false);
      }
    }
    checkProgress();
  }, [module.id, lesson.id]);

  // Find next lesson
  const findNextLesson = () => {
    const currentModuleIndex = allModules.findIndex((m) => m.id === module.id);
    const currentLessonIndex = module.lessons.findIndex((l) => l.id === lesson.id);

    // Try next lesson in current module
    if (currentLessonIndex < module.lessons.length - 1) {
      return { moduleId: module.id, lessonId: module.lessons[currentLessonIndex + 1].id };
    }

    // Try first lesson of next module
    if (currentModuleIndex < allModules.length - 1) {
      const nextModule = allModules[currentModuleIndex + 1];
      if (nextModule.lessons.length > 0) {
        return { moduleId: nextModule.id, lessonId: nextModule.lessons[0].id };
      }
    }

    return null;
  };

  const handleCompleteLesson = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/progress/lessons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moduleId: module.id,
          lessonId: lesson.id,
          completed: true,
        }),
      });

      if (res.ok) {
        setIsCompleted(true);
        // Navigate to next lesson after a short delay
        const nextLesson = findNextLesson();
        if (nextLesson) {
          setTimeout(() => {
            router.push(`/lessons/${nextLesson.moduleId}/${nextLesson.lessonId}`);
          }, 1000);
        }
      }
    } catch (error) {
      console.error("Failed to mark lesson complete:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Mobile Tabs */}
      <div className="lg:hidden">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "lesson" | "editor")}>
          <TabsList className="w-full">
            <TabsTrigger value="lesson" className="flex-1 gap-2">
              <FileText className="h-4 w-4" />
              Lesson
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex-1 gap-2">
              <Code2 className="h-4 w-4" />
              Code Editor
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Left Panel - Lesson Content */}
      <div className={`space-y-6 ${activeTab === "editor" ? "hidden lg:block" : ""}`}>
        <div>
          <Badge variant="secondary" className="mb-4 capitalize">
            {module.difficulty}
          </Badge>
          <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-muted-foreground">{lesson.description}</p>
        </div>

        {/* Main Content */}
        <Card>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none p-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-2xl font-bold mt-6 mb-4 first:mt-0">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-semibold mt-5 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                code: ({ className, children, ...props }) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto" {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse border border-border">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-border px-4 py-2">{children}</td>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content.content}
            </ReactMarkdown>
          </CardContent>
        </Card>

        {/* Expandable Sections */}
        <Accordion type="multiple" className="space-y-2">
          <AccordionItem value="key-concepts" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">Key Concepts</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pb-4">
                {content.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="common-mistakes" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">Common Mistakes</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pb-4">
                {content.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 shrink-0" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="best-practices" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="font-semibold">Best Practices</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pb-4">
                {content.bestPractices.map((practice, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Complete Lesson Button */}
        <div className="pt-6 border-t">
          {checkingProgress ? (
            <Button disabled className="w-full gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </Button>
          ) : isCompleted ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Lesson Completed!</span>
                <Badge variant="secondary">+50 XP</Badge>
              </div>
              {findNextLesson() && (
                <Button
                  onClick={() => {
                    const next = findNextLesson();
                    if (next) router.push(`/lessons/${next.moduleId}/${next.lessonId}`);
                  }}
                  className="gap-2"
                >
                  Next Lesson
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <Button
              onClick={handleCompleteLesson}
              disabled={isLoading}
              className="w-full gap-2"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Mark as Complete
                  <Badge variant="secondary" className="ml-2">+50 XP</Badge>
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Right Panel - Code Editor */}
      <div className={`lg:sticky lg:top-24 lg:h-fit ${activeTab === "lesson" ? "hidden lg:block" : ""}`}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Try it yourself</h2>
            <Badge variant="outline">Live Editor</Badge>
          </div>
          <CodeEditor initialCode={content.code} height="500px" />
        </div>
      </div>
    </div>
  );
}

