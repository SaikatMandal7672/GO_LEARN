import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

// GET - Fetch user's lesson progress
export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const progress = await prisma.lessonProgress.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error fetching lesson progress:", error);
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    );
  }
}

// POST - Update lesson progress
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { moduleId, lessonId, completed, timeSpent } = body;

    if (!moduleId || !lessonId) {
      return NextResponse.json(
        { error: "moduleId and lessonId are required" },
        { status: 400 }
      );
    }

    const progress = await prisma.lessonProgress.upsert({
      where: {
        userId_moduleId_lessonId: {
          userId,
          moduleId,
          lessonId,
        },
      },
      update: {
        completed: completed ?? undefined,
        completedAt: completed ? new Date() : undefined,
        timeSpent: timeSpent ? { increment: timeSpent } : undefined,
      },
      create: {
        userId,
        moduleId,
        lessonId,
        completed: completed ?? false,
        completedAt: completed ? new Date() : null,
        timeSpent: timeSpent ?? 0,
      },
    });

    // Update user XP if lesson completed
    if (completed) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          xp: { increment: 50 },
          lastActiveAt: new Date(),
        },
      });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Error updating lesson progress:", error);
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    );
  }
}

