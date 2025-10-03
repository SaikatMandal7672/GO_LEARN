import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();
    const clerkUser = await currentUser();

    if (!userId || !clerkUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Ensure user exists in database
    let user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        lessonProgress: {
          orderBy: { updatedAt: "desc" },
        },
        challengeProgress: {
          orderBy: { updatedAt: "desc" },
        },
        achievements: {
          include: { achievement: true },
          orderBy: { earnedAt: "desc" },
        },
      },
    });

    // Create user if doesn't exist
    if (!user) {
      user = await prisma.user.create({
        data: {
          id: userId,
          email: clerkUser.emailAddresses[0]?.emailAddress || "",
          name: clerkUser.firstName
            ? `${clerkUser.firstName} ${clerkUser.lastName || ""}`.trim()
            : "Learner",
          image: clerkUser.imageUrl,
        },
        include: {
          lessonProgress: true,
          challengeProgress: true,
          achievements: {
            include: { achievement: true },
          },
        },
      });
    }

    // Calculate streak
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const lastActive = user.lastActiveAt ? new Date(user.lastActiveAt) : null;
    let streak = user.streak;

    if (lastActive) {
      lastActive.setHours(0, 0, 0, 0);
      const diffDays = Math.floor(
        (today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays > 1) {
        // Streak broken
        streak = 0;
      }
    }

    // Get completed counts
    const lessonsCompleted = user.lessonProgress.filter((lp) => lp.completed).length;
    const challengesSolved = user.challengeProgress.filter((cp) => cp.completed).length;

    // Build recent activity
    const recentActivity: Array<{
      type: string;
      title: string;
      time: string;
      xp: number;
      id: string;
    }> = [];

    // Add lessons
    for (const lp of user.lessonProgress.slice(0, 5)) {
      if (lp.completed && lp.completedAt) {
        recentActivity.push({
          type: "lesson",
          title: lp.lessonId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          time: formatTimeAgo(lp.completedAt),
          xp: 50,
          id: lp.id,
        });
      }
    }

    // Add challenges
    for (const cp of user.challengeProgress.slice(0, 5)) {
      if (cp.completed && cp.completedAt) {
        recentActivity.push({
          type: "challenge",
          title: cp.challengeId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          time: formatTimeAgo(cp.completedAt),
          xp: 100,
          id: cp.id,
        });
      }
    }

    // Add achievements
    for (const ua of user.achievements.slice(0, 5)) {
      recentActivity.push({
        type: "achievement",
        title: ua.achievement.title,
        time: formatTimeAgo(ua.earnedAt),
        xp: ua.achievement.xpReward,
        id: ua.id,
      });
    }

    // Sort by time
    recentActivity.sort((a, b) => {
      return new Date(b.time).getTime() - new Date(a.time).getTime();
    });

    // Get next lesson to continue
    const completedLessons = new Set(
      user.lessonProgress.filter((lp) => lp.completed).map((lp) => `${lp.moduleId}/${lp.lessonId}`)
    );

    return NextResponse.json({
      user: {
        name: user.name || "Learner",
        email: user.email,
        image: user.image,
        xp: user.xp,
        level: user.level,
        streak,
        joinedDate: user.createdAt,
      },
      lessonsCompleted,
      challengesSolved,
      completedLessons: Array.from(completedLessons),
      completedChallenges: user.challengeProgress
        .filter((cp) => cp.completed)
        .map((cp) => cp.challengeId),
      achievements: user.achievements.map((ua) => ({
        id: ua.achievement.slug,
        title: ua.achievement.title,
        description: ua.achievement.description,
        icon: ua.achievement.icon,
        earnedAt: ua.earnedAt,
      })),
      recentActivity: recentActivity.slice(0, 5),
    });
  } catch (error) {
    console.error("Dashboard API error:", error);
    return NextResponse.json({ error: "Failed to fetch dashboard data" }, { status: 500 });
  }
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - new Date(date).getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  return new Date(date).toLocaleDateString();
}

