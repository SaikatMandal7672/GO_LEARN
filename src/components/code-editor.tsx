"use client";

import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RotateCcw, Copy, Check, Loader2, Terminal, AlertCircle } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  readOnly?: boolean;
  height?: string;
  onCodeChange?: (code: string) => void;
  showRunButton?: boolean;
  showResetButton?: boolean;
}

export function CodeEditor({
  initialCode,
  language = "go",
  readOnly = false,
  height = "400px",
  onCodeChange,
  showRunButton = true,
  showResetButton = true,
}: CodeEditorProps) {
  const { theme } = useTheme();
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"output" | "errors">("output");

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      const newCode = value || "";
      setCode(newCode);
      onCodeChange?.(newCode);
    },
    [onCodeChange]
  );

  const handleReset = useCallback(() => {
    setCode(initialCode);
    setOutput("");
    setError(null);
    onCodeChange?.(initialCode);
  }, [initialCode, onCodeChange]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setError(null);
    setOutput("");

    try {
      // Using our API route to proxy Go Playground requests (avoids CORS)
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();

      if (result.error) {
        setError(result.error);
        setActiveTab("errors");
      } else if (result.Errors) {
        setError(result.Errors);
        setActiveTab("errors");
      } else if (result.Events) {
        const outputText = result.Events.map((e: { Message: string }) => e.Message).join("");
        setOutput(outputText || "Program executed successfully with no output.");
        setActiveTab("output");
      } else {
        setOutput("Program executed successfully with no output.");
        setActiveTab("output");
      }
    } catch (err) {
      setError("Failed to execute code. Please try again.");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
    }
  }, [code]);

  return (
    <Card className="border-border/50 overflow-hidden">
      <CardHeader className="py-3 px-4 flex flex-row items-center justify-between bg-card/50">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-xs">
            {language.toUpperCase()}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
          {showResetButton && (
            <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 px-2">
              <RotateCcw className="h-4 w-4" />
            </Button>
          )}
          {showRunButton && (
            <Button size="sm" onClick={handleRun} disabled={isRunning} className="h-8 gap-2">
              {isRunning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              Run
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Editor
          height={height}
          language={language}
          value={code}
          theme={theme === "dark" ? "vs-dark" : "light"}
          onChange={handleEditorChange}
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            tabSize: 4,
            automaticLayout: true,
            padding: { top: 16, bottom: 16 },
          }}
        />
        {/* Output Panel */}
        {showRunButton && (
          <div className="border-t border-border">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "output" | "errors")}>
              <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="output"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Output
                </TabsTrigger>
                <TabsTrigger
                  value="errors"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-destructive data-[state=active]:bg-transparent"
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Errors
                  {error && <Badge variant="destructive" className="ml-2 h-5 px-1.5">!</Badge>}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="output" className="m-0">
                <pre className="p-4 text-sm font-mono bg-muted/50 min-h-[100px] max-h-[200px] overflow-auto">
                  {output || <span className="text-muted-foreground">Run your code to see output...</span>}
                </pre>
              </TabsContent>
              <TabsContent value="errors" className="m-0">
                <pre className="p-4 text-sm font-mono bg-destructive/5 text-destructive min-h-[100px] max-h-[200px] overflow-auto">
                  {error || <span className="text-muted-foreground">No errors</span>}
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

