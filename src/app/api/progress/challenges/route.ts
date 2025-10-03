import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

// GET - Fetch user's challenge progress
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const progress = await prisma.challengeProgress.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error fetching challenge progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

// POST - Update challenge progress
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { challengeId, completed, code, timeSpent } = body;

    if (!challengeId) {
      return NextResponse.json(
        { error: "challengeId is required" },
        { status: 400 }
      );
    }

    const existingProgress = await prisma.challengeProgress.findUnique({
      where: {
        userId_challengeId: {
          userId,
          challengeId,
        },
      },
    });

    const progress = await prisma.challengeProgress.upsert({
      where: {
        userId_challengeId: {
          userId,
          challengeId,
        },
      },
      update: {
        completed: completed ?? existingProgress?.completed ?? false,
        completedAt: completed && !existingProgress?.completed ? new Date() : existingProgress?.completedAt,
        attempts: { increment: 1 },
        code: code ?? existingProgress?.code,
        bestTime: timeSpent && (!existingProgress?.bestTime || timeSpent < existingProgress.bestTime)
          ? timeSpent
          : existingProgress?.bestTime,
      },
      create: {
        userId,
        challengeId,
        completed: completed ?? false,
        completedAt: completed ? new Date() : null,
        attempts: 1,
        code,
        bestTime: timeSpent,
      },
    });

    // Update user XP if challenge completed for the first time
    if (completed && !existingProgress?.completed) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: { increment: 100 },
          lastActiveAt: new Date(),
        },
      });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error updating challenge progress:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}

