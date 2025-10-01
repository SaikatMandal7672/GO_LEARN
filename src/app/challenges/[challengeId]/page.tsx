import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import { getChallengeById } from "@/lib/data/challenges";
import { ChallengeContent } from "./challenge-content";
import { Clock, Trophy, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

interface ChallengePageProps {
  params: Promise<{ challengeId: string }>;
}

const difficultyColors = {
  easy: "bg-green-500/20 text-green-500 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
  hard: "bg-red-500/20 text-red-500 border-red-500/30",
};

export default async function ChallengePage({ params }: ChallengePageProps) {
  const { challengeId } = await params;
  const challenge = getChallengeById(challengeId);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/challenges">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="outline"
                    className={difficultyColors[challenge.difficulty]}
                  >
                    {challenge.difficulty}
                  </Badge>
                  <Badge variant="secondary">{challenge.category}</Badge>
                </div>
                <h1 className="text-2xl font-bold">{challenge.title}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{challenge.estimatedTime} min</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span>+10 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <ChallengeContent challenge={challenge} />
      </main>
    </div>
  );
}

