import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DashboardContent } from "@/components/dashboard/dashboard-content";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <DashboardContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}

