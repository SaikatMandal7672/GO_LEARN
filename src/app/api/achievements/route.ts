import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

// GET - Fetch user's achievements
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get all achievements with user's earned status
    const allAchievements = await prisma.achievement.findMany({
      include: {
        users: {
          where: { userId },
        },
      },
    });

    const achievements = allAchievements.map((achievement: {
      id: string;
      slug: string;
      title: string;
      description: string;
      icon: string;
      xpReward: number;
      category: string;
      requirement: unknown;
      createdAt: Date;
      users: { earnedAt: Date }[];
    }) => ({
      ...achievement,
      earned: achievement.users.length > 0,
      earnedAt: achievement.users[0]?.earnedAt || null,
    }));

    return NextResponse.json(achievements);
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return NextResponse.json(
      { error: "Failed to fetch achievements" },
      { status: 500 }
    );
  }
}

// POST - Check and award achievements
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user stats
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        lessonProgress: { where: { completed: true } },
        challengeProgress: { where: { completed: true } },
        achievements: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get all achievements user hasn't earned yet
    const earnedIds = user.achievements.map((a: { achievementId: string }) => a.achievementId);
    const unearnedAchievements = await prisma.achievement.findMany({
      where: {
        id: { notIn: earnedIds },
      },
    });

    const newlyEarned: string[] = [];

    // Check each unearned achievement
    for (const achievement of unearnedAchievements) {
      const req = achievement.requirement as Record<string, number>;
      let earned = false;

      switch (achievement.category) {
        case "learning":
          if (req.lessonsCompleted && user.lessonProgress.length >= req.lessonsCompleted) {
            earned = true;
          }
          break;
        case "streak":
          if (req.streakDays && user.streak >= req.streakDays) {
            earned = true;
          }
          break;
        case "challenge":
          if (req.challengesSolved && user.challengeProgress.length >= req.challengesSolved) {
            earned = true;
          }
          break;
        case "xp":
          if (req.totalXp && user.xp >= req.totalXp) {
            earned = true;
          }
          break;
      }

      if (earned) {
        await prisma.userAchievement.create({
          data: {
            userId,
            achievementId: achievement.id,
          },
        });

        // Award XP for achievement
        await prisma.user.update({
          where: { id: userId },
          data: {
            xp: { increment: achievement.xpReward },
          },
        });

        newlyEarned.push(achievement.id);
      }
    }

    return NextResponse.json({
      newlyEarned,
      message: newlyEarned.length > 0
        ? `Earned ${newlyEarned.length} new achievement(s)!`
        : "No new achievements earned",
    });
  } catch (error) {
    console.error("Error checking achievements:", error);
    return NextResponse.json(
      { error: "Failed to check achievements" },
      { status: 500 }
    );
  }
}

