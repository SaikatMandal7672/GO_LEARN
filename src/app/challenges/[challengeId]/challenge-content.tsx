"use client";

import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeEditor } from "@/components/code-editor";
import {
  CheckCircle2,
  XCircle,
  Play,
  Lightbulb,
  Eye,
  EyeOff,
  Loader2,
  Send,
  RotateCcw,
} from "lucide-react";
import type { Challenge, TestCase } from "@/lib/data/challenges";

interface ChallengeContentProps {
  challenge: Challenge;
}

export function ChallengeContent({ challenge }: ChallengeContentProps) {
  const [code, setCode] = useState(challenge.starterCode);
  const [testResults, setTestResults] = useState<
    { passed: boolean; output?: string; error?: string }[]
  >([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const handleReset = useCallback(() => {
    setCode(challenge.starterCode);
    setTestResults([]);
    setShowSolution(false);
  }, [challenge.starterCode]);

  const handleSubmit = useCallback(async () => {
    setIsRunning(true);
    setHasAttempted(true);

    // Simulate running tests - in production, this would call a backend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock test results - in production, actually run the code
    const results = challenge.testCases.map((testCase, index) => {
      // This is a simplified mock - real implementation would execute code
      const passed = Math.random() > 0.3; // Mock pass/fail
      return {
        passed,
        output: passed ? testCase.expectedOutput : "Incorrect output",
        error: passed ? undefined : "Output does not match expected",
      };
    });

    setTestResults(results);
    setIsRunning(false);
  }, [challenge.testCases]);

  const allTestsPassed = testResults.length > 0 && testResults.every((r) => r.passed);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Panel - Problem Description */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{challenge.description}</p>

              <div className="space-y-4">
                <h3 className="font-semibold">Examples:</h3>
                {challenge.testCases.slice(0, 3).map((testCase, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Example {index + 1}</Badge>
                    </div>
                    <div className="font-mono text-sm">
                      <p>
                        <span className="text-muted-foreground">Input:</span>{" "}
                        <code className="bg-muted px-2 py-1 rounded">{testCase.input}</code>
                      </p>
                      <p className="mt-1">
                        <span className="text-muted-foreground">Output:</span>{" "}
                        <code className="bg-muted px-2 py-1 rounded">{testCase.expectedOutput}</code>
                      </p>
                      <p className="mt-1 text-muted-foreground text-xs">
                        {testCase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hints Section */}
          <Accordion type="single" collapsible>
            <AccordionItem value="hints" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">Hints ({challenge.hints.length})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pb-4">
                  {challenge.hints.map((hint, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary font-mono">{index + 1}.</span>
                      <span className="text-muted-foreground">{hint}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Test Results */}
          {testResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Test Results
                  {allTestsPassed ? (
                    <Badge className="bg-green-500">All Passed!</Badge>
                  ) : (
                    <Badge variant="destructive">Some Failed</Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {challenge.testCases.map((testCase, index) => {
                    const result = testResults[index];
                    return (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          result?.passed ? "bg-green-500/10" : "bg-red-500/10"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {result?.passed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <span className="text-sm">{testCase.description}</span>
                        </div>
                        <Badge variant={result?.passed ? "default" : "destructive"}>
                          {result?.passed ? "Passed" : "Failed"}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Panel - Code Editor */}
        <div className="lg:sticky lg:top-24 lg:h-fit space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your Solution</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
              {hasAttempted && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution ? (
                    <EyeOff className="h-4 w-4 mr-1" />
                  ) : (
                    <Eye className="h-4 w-4 mr-1" />
                  )}
                  {showSolution ? "Hide" : "Show"} Solution
                </Button>
              )}
            </div>
          </div>

          <Tabs defaultValue="editor">
            <TabsList>
              <TabsTrigger value="editor">Editor</TabsTrigger>
              {showSolution && <TabsTrigger value="solution">Solution</TabsTrigger>}
            </TabsList>
            <TabsContent value="editor" className="mt-4">
              <CodeEditor
                initialCode={code}
                onCodeChange={setCode}
                height="400px"
                showRunButton={false}
              />
            </TabsContent>
            {showSolution && (
              <TabsContent value="solution" className="mt-4">
                <CodeEditor
                  initialCode={challenge.solution}
                  readOnly
                  height="400px"
                  showRunButton={false}
                  showResetButton={false}
                />
              </TabsContent>
            )}
          </Tabs>

          <Button
            size="lg"
            className="w-full gap-2"
            onClick={handleSubmit}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Running Tests...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Submit Solution
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

