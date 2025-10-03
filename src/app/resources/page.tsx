import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  ExternalLink,
  FileText,
  Video,
  Github,
  Globe,
  Terminal,
  Package,
  Database,
  Server,
  Shield,
  Cpu,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    id: "official",
    title: "Official Resources",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
    resources: [
      { title: "Go Documentation", url: "https://go.dev/doc/", type: "docs", description: "Official Go documentation and tutorials" },
      { title: "Go Tour", url: "https://go.dev/tour/", type: "interactive", description: "Interactive introduction to Go" },
      { title: "Go Playground", url: "https://go.dev/play/", type: "tool", description: "Run Go code in your browser" },
      { title: "Go Blog", url: "https://go.dev/blog/", type: "blog", description: "Official Go team blog" },
    ],
  },
  {
    id: "packages",
    title: "Popular Packages",
    icon: Package,
    color: "text-green-500",
    bgColor: "bg-green-500/20",
    resources: [
      { title: "Gin Web Framework", url: "https://gin-gonic.com/", type: "framework", description: "High-performance HTTP web framework" },
      { title: "GORM", url: "https://gorm.io/", type: "orm", description: "The fantastic ORM library for Go" },
      { title: "Cobra", url: "https://cobra.dev/", type: "cli", description: "CLI application framework" },
      { title: "Viper", url: "https://github.com/spf13/viper", type: "config", description: "Configuration management" },
    ],
  },
  {
    id: "databases",
    title: "Database & Storage",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/20",
    resources: [
      { title: "database/sql", url: "https://pkg.go.dev/database/sql", type: "stdlib", description: "Standard library SQL package" },
      { title: "sqlx", url: "https://github.com/jmoiron/sqlx", type: "library", description: "Extensions to database/sql" },
      { title: "go-redis", url: "https://redis.uptrace.dev/", type: "client", description: "Redis client for Go" },
      { title: "mongo-driver", url: "https://www.mongodb.com/docs/drivers/go/", type: "client", description: "Official MongoDB driver" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    icon: Shield,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/20",
    resources: [
      { title: "testing package", url: "https://pkg.go.dev/testing", type: "stdlib", description: "Standard testing package" },
      { title: "testify", url: "https://github.com/stretchr/testify", type: "library", description: "Testing toolkit with assertions" },
      { title: "gomock", url: "https://github.com/golang/mock", type: "mocking", description: "Mocking framework for Go" },
      { title: "golangci-lint", url: "https://golangci-lint.run/", type: "linter", description: "Fast Go linters runner" },
    ],
  },
  {
    id: "concurrency",
    title: "Concurrency & Performance",
    icon: Cpu,
    color: "text-red-500",
    bgColor: "bg-red-500/20",
    resources: [
      { title: "sync package", url: "https://pkg.go.dev/sync", type: "stdlib", description: "Synchronization primitives" },
      { title: "errgroup", url: "https://pkg.go.dev/golang.org/x/sync/errgroup", type: "library", description: "Error group for goroutines" },
      { title: "pprof", url: "https://pkg.go.dev/net/http/pprof", type: "profiling", description: "Runtime profiling" },
      { title: "Go Concurrency Patterns", url: "https://go.dev/blog/pipelines", type: "article", description: "Official concurrency patterns" },
    ],
  },
  {
    id: "api",
    title: "API Development",
    icon: Server,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/20",
    resources: [
      { title: "net/http", url: "https://pkg.go.dev/net/http", type: "stdlib", description: "Standard HTTP package" },
      { title: "Echo", url: "https://echo.labstack.com/", type: "framework", description: "High performance web framework" },
      { title: "gRPC-Go", url: "https://grpc.io/docs/languages/go/", type: "rpc", description: "gRPC for Go" },
      { title: "Swagger/OpenAPI", url: "https://github.com/swaggo/swag", type: "docs", description: "Auto-generate API docs" },
    ],
  },
];

const typeColors: Record<string, string> = {
  docs: "bg-blue-500/20 text-blue-500",
  interactive: "bg-green-500/20 text-green-500",
  tool: "bg-purple-500/20 text-purple-500",
  blog: "bg-orange-500/20 text-orange-500",
  framework: "bg-cyan-500/20 text-cyan-500",
  orm: "bg-pink-500/20 text-pink-500",
  cli: "bg-yellow-500/20 text-yellow-500",
  config: "bg-indigo-500/20 text-indigo-500",
  stdlib: "bg-gray-500/20 text-gray-400",
  library: "bg-emerald-500/20 text-emerald-500",
  client: "bg-violet-500/20 text-violet-500",
  mocking: "bg-rose-500/20 text-rose-500",
  linter: "bg-amber-500/20 text-amber-500",
  profiling: "bg-red-500/20 text-red-500",
  article: "bg-teal-500/20 text-teal-500",
  rpc: "bg-fuchsia-500/20 text-fuchsia-500",
};

export default function ResourcesPage() {
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
                Curated Resources
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Go <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A curated collection of the best Go resources, libraries, and tools
                to accelerate your learning journey.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search resources..." className="pl-10 h-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.id}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.resources.map((resource) => (
                        <a
                          key={resource.url}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <Badge variant="outline" className={typeColors[resource.type] || ""}>
                                  {resource.type}
                                </Badge>
                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                              </div>
                              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                                {resource.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {resource.description}
                              </p>
                            </CardContent>
                          </Card>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-muted-foreground mb-6">
                These resources complement our structured curriculum. Start with the
                lessons and use these resources for deeper exploration.
              </p>
              <Link href="/curriculum">
                <Button size="lg" className="gap-2">
                  View Curriculum
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

