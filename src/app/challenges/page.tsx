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
  Trophy,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  Circle,
  Zap,
  Target,
  Code2,
} from "lucide-react";
import { challenges } from "@/lib/data/challenges";

const difficultyColors = {
  easy: "bg-green-500/20 text-green-500 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  hard: "bg-red-500/20 text-red-500 border-red-500/30",
};

const difficultyIcons = {
  easy: Circle,
  medium: Target,
  hard: Zap,
};

export default function ChallengesPage() {
  const easyCount = challenges.filter((c) => c.difficulty === "easy").length;
  const mediumCount = challenges.filter((c) => c.difficulty === "medium").length;
  const hardCount = challenges.filter((c) => c.difficulty === "hard").length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Trophy className="h-3 w-3 mr-1 text-yellow-500" />
                {challenges.length} Challenges
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Coding <span className="gradient-text">Challenges</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Practice your Go skills with real-world coding challenges.
                From easy warm-ups to advanced algorithms.
              </p>

              {/* Stats */}
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <Badge className={difficultyColors.easy}>{easyCount} Easy</Badge>
                </div>
                <div className="text-center">
                  <Badge className={difficultyColors.medium}>{mediumCount} Medium</Badge>
                </div>
                <div className="text-center">
                  <Badge className={difficultyColors.hard}>{hardCount} Hard</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search challenges..." className="pl-10" />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  All
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-green-500">
                  <Circle className="h-4 w-4" />
                  Easy
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-yellow-500">
                  <Target className="h-4 w-4" />
                  Medium
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-red-500">
                  <Zap className="h-4 w-4" />
                  Hard
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge) => {
                const DifficultyIcon = difficultyIcons[challenge.difficulty];
                const isCompleted = false; // Would come from user data

                return (
                  <Link key={challenge.id} href={`/challenges/${challenge.id}`}>
                    <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <Badge
                            variant="outline"
                            className={difficultyColors[challenge.difficulty]}
                          >
                            <DifficultyIcon className="h-3 w-3 mr-1" />
                            {challenge.difficulty}
                          </Badge>
                          {isCompleted && (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {challenge.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {challenge.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {challenge.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {challenge.estimatedTime} min
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

