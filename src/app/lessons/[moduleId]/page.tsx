import { notFound, redirect } from "next/navigation";
import { allModules } from "@/lib/data/curriculum";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

interface ModulePageProps {
  params: Promise<{
    moduleId: string;
  }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { moduleId } = await params;

  const module = allModules.find((m) => m.id === moduleId);
  if (!module) notFound();

  // Redirect to first lesson of the module
  redirect(`/lessons/${moduleId}/${module.lessons[0].id}`);
}

