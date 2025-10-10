"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Trophy,
  Flame,
  BookOpen,
  Code2,
  Target,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Award,
} from "lucide-react";
import { allModules } from "@/lib/data/curriculum";
import { challenges } from "@/lib/data/challenges";

interface DashboardData {
  user: {
    name: string;
    email: string;
    image: string | null;
    xp: number;
    level: number;
    streak: number;
    joinedDate: string;
  };
  lessonsCompleted: number;
  challengesSolved: number;
  completedLessons: string[];
  completedChallenges: string[];
  achievements: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    earnedAt: string;
  }>;
  recentActivity: Array<{
    type: string;
    title: string;
    time: string;
    xp: number;
    id: string;
  }>;
}

const achievementDefinitions = [
  { id: "first-lesson", title: "First Steps", description: "Complete your first lesson", icon: BookOpen },
  { id: "week-streak", title: "Week Warrior", description: "7-day learning streak", icon: Flame },
  { id: "first-challenge", title: "Problem Solver", description: "Solve your first challenge", icon: Code2 },
  { id: "ten-lessons", title: "Dedicated Learner", description: "Complete 10 lessons", icon: Star },
  { id: "all-beginner", title: "Beginner Master", description: "Complete all beginner lessons", icon: Award },
  { id: "month-streak", title: "Monthly Champion", description: "30-day learning streak", icon: Trophy },
];

export function DashboardContent() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await fetch("/api/dashboard");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Failed to load dashboard");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDashboard();
  }, []);

  const totalLessons = allModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalChallenges = challenges.length;

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">{error || "Something went wrong"}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  const { user, lessonsCompleted, challengesSolved, achievements, recentActivity } = data;
  const lessonProgress = (lessonsCompleted / totalLessons) * 100;
  const challengeProgress = (challengesSolved / totalChallenges) * 100;
  const earnedAchievementIds = new Set(achievements.map((a) => a.id));

  // Find next lesson
  const nextLesson = findNextLesson(data.completedLessons);

  return (
    <>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.image || undefined} />
            <AvatarFallback className="text-xl bg-primary text-primary-foreground">
              {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user.name.split(" ")[0]}!</h1>
            <p className="text-muted-foreground">Keep up the great work on your Go journey.</p>
          </div>
        </div>
        <Link href={nextLesson ? `/lessons/${nextLesson}` : "/curriculum"}>
          <Button className="gap-2">
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={Flame} color="orange" value={user.streak} label="Day Streak" />
        <StatCard icon={Zap} color="yellow" value={user.xp.toLocaleString()} label="Total XP" />
        <StatCard icon={BookOpen} color="green" value={lessonsCompleted} label="Lessons Done" />
        <StatCard icon={Target} color="purple" value={challengesSolved} label="Challenges" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <ProgressCard title="Lessons Progress" current={lessonsCompleted} total={totalLessons} progress={lessonProgress} />
            <ProgressCard title="Challenges Progress" current={challengesSolved} total={totalChallenges} progress={challengeProgress} />
          </div>

          {/* Achievements */}
          <AchievementsCard earnedIds={earnedAchievementIds} />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <RecentActivityCard activities={recentActivity} />
          <QuickActionsCard nextLesson={nextLesson} />
        </div>
      </div>
    </>
  );
}

function StatCard({ icon: Icon, color, value, label }: { icon: React.ElementType; color: string; value: string | number; label: string }) {
  const colorClasses: Record<string, string> = {
    orange: "bg-orange-500/20 text-orange-500",
    yellow: "bg-yellow-500/20 text-yellow-500",
    green: "bg-green-500/20 text-green-500",
    purple: "bg-purple-500/20 text-purple-500",
  };
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProgressCard({ title, current, total, progress }: { title: string; current: number; total: number; progress: number }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          <Badge variant="secondary">{current}/{total}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-2 mb-2" />
        <p className="text-sm text-muted-foreground">{Math.round(progress)}% complete</p>
      </CardContent>
    </Card>
  );
}

function AchievementsCard({ earnedIds }: { earnedIds: Set<string> }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Achievements
          </span>
          <Badge variant="outline">{earnedIds.size}/{achievementDefinitions.length}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4">
          {achievementDefinitions.map((achievement) => {
            const Icon = achievement.icon;
            const earned = earnedIds.has(achievement.id);
            return (
              <div
                key={achievement.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  earned ? "bg-primary/5 border-primary/20" : "opacity-50"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  earned ? "bg-primary/20" : "bg-muted"
                }`}>
                  <Icon className={`h-5 w-5 ${earned ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{achievement.description}</p>
                </div>
                {earned && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function RecentActivityCard({ activities }: { activities: DashboardData["recentActivity"] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No activity yet. Start learning!
          </p>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  activity.type === "lesson" ? "bg-green-500/20" :
                  activity.type === "challenge" ? "bg-purple-500/20" : "bg-yellow-500/20"
                }`}>
                  {activity.type === "lesson" && <BookOpen className="h-4 w-4 text-green-500" />}
                  {activity.type === "challenge" && <Code2 className="h-4 w-4 text-purple-500" />}
                  {activity.type === "achievement" && <Trophy className="h-4 w-4 text-yellow-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="secondary" className="text-xs shrink-0">+{activity.xp} XP</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function QuickActionsCard({ nextLesson }: { nextLesson: string | null }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Link href={nextLesson ? `/lessons/${nextLesson}` : "/curriculum"} className="block">
          <Button variant="outline" className="w-full justify-start gap-2">
            <BookOpen className="h-4 w-4" />
            {nextLesson ? "Continue Learning" : "Start Curriculum"}
          </Button>
        </Link>
        <Link href="/challenges" className="block">
          <Button variant="outline" className="w-full justify-start gap-2">
            <Target className="h-4 w-4" />
            Practice Challenges
          </Button>
        </Link>
        <Link href="/projects" className="block">
          <Button variant="outline" className="w-full justify-start gap-2">
            <Code2 className="h-4 w-4" />
            Start a Project
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function findNextLesson(completedLessons: string[]): string | null {
  const completed = new Set(completedLessons);
  for (const module of allModules) {
    for (const lesson of module.lessons) {
      const key = `${module.id}/${lesson.id}`;
      if (!completed.has(key)) {
        return key;
      }
    }
  }
  return null;
}

function DashboardSkeleton() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <Skeleton className="h-10 w-40" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <div>
                  <Skeleton className="h-8 w-16 mb-1" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

