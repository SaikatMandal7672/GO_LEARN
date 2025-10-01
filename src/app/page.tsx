import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Force dynamic rendering to avoid Clerk issues at build time
export const dynamic = "force-dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  Rocket,
  Building2,
  Code2,
  Play,
  CheckCircle2,
  ArrowRight,
  Star,
  Trophy,
} from "lucide-react";
import { getTotalLessons, getTotalHours } from "@/lib/data/curriculum";

const features = [
  {
    icon: GraduationCap,
    title: "Beginner Friendly",
    description:
      "No prior Go experience required. Start from zero and build your skills step by step with clear explanations.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description:
      "Build production-ready applications like REST APIs, CLI tools, and microservices that you can showcase.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Building2,
    title: "Industry Ready",
    description:
      "Learn best practices used by top companies. Docker, Kubernetes, CI/CD, and cloud deployment included.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Backend Developer at Stripe",
    avatar: "/avatars/sarah.jpg",
    content:
      "GoLearn transformed my career. The structured curriculum and hands-on projects gave me the confidence to land my dream job.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Senior Software Engineer",
    avatar: "/avatars/marcus.jpg",
    content:
      "The best Go learning resource I've found. The live code editor makes practicing so much easier than switching between tabs.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    avatar: "/avatars/emily.jpg",
    content:
      "Coming from Python, I was amazed how quickly I picked up Go. The explanations are clear and the challenges are perfectly paced.",
    rating: 5,
  },
];

const stats = [
  { label: "Lessons", value: getTotalLessons().toString() },
  { label: "Hours of Content", value: `${getTotalHours()}+` },
  { label: "Challenges", value: "50+" },
  { label: "Active Learners", value: "10K+" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                <Star className="h-3 w-3 mr-1 text-yellow-500" />
                #1 GoLang Learning Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Master{" "}
                <span className="gradient-text">GoLang</span>
                <br />& Backend Development
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                From Zero to Production. Learn Go programming with interactive
                lessons, real-world projects, and industry-ready skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/curriculum">
                  <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14 px-8">
                    <Play className="h-5 w-5" />
                    Start Learning Free
                  </Button>
                </Link>
                <Link href="/curriculum">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto gap-2 text-lg h-14 px-8"
                  >
                    View Curriculum
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl md:text-4xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">GoLearn</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to become a professional Go developer
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}
                    >
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <LearningSection />

        {/* Testimonials Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Loved by Developers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers who transformed their careers with GoLearn
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>
                          {testimonial.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Go Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of developers learning Go. Start with the basics
                and build your way to production-ready applications.
              </p>
              <Link href="/auth/signup">
                <Button size="lg" className="gap-2 text-lg h-14 px-8">
                  <Code2 className="h-5 w-5" />
                  Get Started for Free
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • Free forever plan available
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function LearningSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You&apos;ll Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive curriculum designed for real-world success
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Beginner</h3>
                  <p className="text-sm text-muted-foreground">16 lessons • 12 hours</p>
                </div>
              </div>
              <ul className="space-y-2">
                {["Go Fundamentals", "Control Flow & Functions", "Data Structures", "Error Handling", "CLI Project"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Intermediate</h3>
                  <p className="text-sm text-muted-foreground">20 lessons • 20 hours</p>
                </div>
              </div>
              <ul className="space-y-2">
                {["Goroutines & Channels", "REST API Development", "Database Integration", "Testing & Debugging", "Blog API Project"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-yellow-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Advanced</h3>
                  <p className="text-sm text-muted-foreground">24 lessons • 30 hours</p>
                </div>
              </div>
              <ul className="space-y-2">
                {["Microservices Architecture", "Docker & Kubernetes", "Cloud Deployment", "Performance Optimization", "Capstone Project"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Link href="/curriculum">
            <Button variant="outline" size="lg" className="gap-2">
              View Full Curriculum
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
