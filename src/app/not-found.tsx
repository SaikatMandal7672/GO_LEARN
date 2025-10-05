import { NotFound } from "@/components/error-boundary";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <NotFound />
      </main>
      <Footer />
    </div>
  );
}

