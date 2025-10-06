"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code2, 
  Trophy, 
  FolderGit2, 
  LayoutDashboard, 
  FileText,
  ChevronRight,
  Home,
  GraduationCap,
  Rocket,
  Zap
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Curriculum", href: "/curriculum", icon: BookOpen },
  { name: "Challenges", href: "/challenges", icon: Trophy },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Resources", href: "/resources", icon: FileText },
];

const modules = [
  { 
    name: "Beginner", 
    href: "/lessons/beginner", 
    icon: GraduationCap,
    progress: 45,
    lessons: 16,
    color: "text-green-500"
  },
  { 
    name: "Intermediate", 
    href: "/lessons/intermediate", 
    icon: Rocket,
    progress: 20,
    lessons: 20,
    color: "text-yellow-500"
  },
  { 
    name: "Advanced", 
    href: "/lessons/advanced", 
    icon: Zap,
    progress: 0,
    lessons: 24,
    color: "text-red-500"
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn("w-64 border-r border-border bg-card/50 backdrop-blur-xl", className)}>
      <ScrollArea className="h-full py-6">
        <div className="px-4 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Navigation
            </h3>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all group",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className={cn(
                    "h-4 w-4 transition-transform group-hover:scale-110",
                    pathname === item.href && "text-primary"
                  )} />
                  {item.name}
                  {pathname === item.href && (
                    <ChevronRight className="h-4 w-4 ml-auto text-primary" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Learning Modules */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Learning Path
            </h3>
            <div className="space-y-2">
              {modules.map((module) => (
                <Link
                  key={module.href}
                  href={module.href}
                  className={cn(
                    "block px-3 py-3 rounded-lg transition-all border",
                    pathname.startsWith(module.href)
                      ? "bg-primary/5 border-primary/20"
                      : "border-transparent hover:bg-accent hover:border-border"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <module.icon className={cn("h-4 w-4", module.color)} />
                    <span className="text-sm font-medium">{module.name}</span>
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {module.lessons} lessons
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <Progress value={module.progress} className="h-1.5" />
                    <p className="text-xs text-muted-foreground">
                      {module.progress}% complete
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-3 py-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h4 className="text-sm font-medium mb-3">Your Progress</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-xs text-muted-foreground">Lessons Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}

