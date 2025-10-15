export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  videoUrl?: string;
  order: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  lessons: Lesson[];
  color: string;
  icon: string;
}

export const beginnerModule: Module = {
  id: "beginner",
  title: "Beginner",
  description: "Start your Go journey from scratch. Learn the fundamentals of Go programming with hands-on exercises.",
  difficulty: "beginner",
  estimatedHours: 12,
  color: "green",
  icon: "GraduationCap",
  lessons: [
    { id: "setup", title: "Go Setup & Hello World", description: "Install Go and write your first program", duration: 30, order: 1 },
    { id: "variables", title: "Variables & Data Types", description: "Learn about Go's type system", duration: 45, order: 2 },
    { id: "control-flow", title: "Control Flow", description: "Master if/else statements and switch", duration: 45, order: 3 },
    { id: "loops", title: "Loops", description: "Learn for loops and range iterations", duration: 40, order: 4 },
    { id: "functions", title: "Functions & Return Values", description: "Create reusable code with functions", duration: 50, order: 5 },
    { id: "arrays-slices", title: "Arrays & Slices", description: "Work with collections of data", duration: 55, order: 6 },
    { id: "maps", title: "Maps", description: "Use key-value data structures", duration: 40, order: 7 },
    { id: "structs", title: "Structs", description: "Create custom data types", duration: 50, order: 8 },
    { id: "methods", title: "Methods", description: "Add behavior to your structs", duration: 45, order: 9 },
    { id: "interfaces", title: "Interfaces", description: "Write flexible, polymorphic code", duration: 55, order: 10 },
    { id: "error-handling", title: "Error Handling", description: "Handle errors the Go way", duration: 45, order: 11 },
    { id: "packages", title: "Packages & Imports", description: "Organize and share your code", duration: 40, order: 12 },
    { id: "file-io", title: "File I/O", description: "Read and write files", duration: 45, order: 13 },
    { id: "json", title: "JSON Encoding/Decoding", description: "Work with JSON data", duration: 40, order: 14 },
    { id: "cli-project-1", title: "CLI Project Part 1", description: "Planning & Setup", duration: 60, order: 15 },
    { id: "cli-project-2", title: "CLI Project Part 2", description: "Implementation & Testing", duration: 75, order: 16 },
  ],
};

export const intermediateModule: Module = {
  id: "intermediate",
  title: "Intermediate",
  description: "Build real-world applications. Learn concurrency, web development, and database integration.",
  difficulty: "intermediate",
  estimatedHours: 20,
  color: "yellow",
  icon: "Rocket",
  lessons: [
    { id: "goroutines", title: "Goroutines Basics", description: "Introduction to concurrent programming", duration: 50, order: 1 },
    { id: "channels", title: "Channels & Communication", description: "Safe data sharing between goroutines", duration: 55, order: 2 },
    { id: "http-basics", title: "HTTP Package Basics", description: "Build your first web server", duration: 45, order: 3 },
    { id: "rest-design", title: "REST API Design", description: "Design principles for APIs", duration: 50, order: 4 },
    { id: "gin-intro", title: "Gin Framework Introduction", description: "Fast HTTP web framework", duration: 55, order: 5 },
    { id: "middleware", title: "Middleware & Request Handling", description: "Process requests with middleware", duration: 50, order: 6 },
    { id: "postgresql", title: "PostgreSQL Setup & Connection", description: "Connect Go to PostgreSQL", duration: 45, order: 7 },
    { id: "gorm", title: "GORM ORM Basics", description: "Object-relational mapping in Go", duration: 55, order: 8 },
    { id: "sql-nosql", title: "SQL vs NoSQL Comparison", description: "Choose the right database", duration: 40, order: 9 },
    { id: "env-config", title: "Environment Configuration", description: "Manage app configuration", duration: 35, order: 10 },
    { id: "testing", title: "Testing with testing package", description: "Write tests for your code", duration: 50, order: 11 },
    { id: "debugging", title: "Debugging Techniques", description: "Find and fix bugs efficiently", duration: 45, order: 12 },
    { id: "blog-1", title: "Blog API Part 1", description: "Project Setup", duration: 60, order: 13 },
    { id: "blog-2", title: "Blog API Part 2", description: "User Model & Auth", duration: 75, order: 14 },
    { id: "blog-3", title: "Blog API Part 3", description: "Post CRUD", duration: 70, order: 15 },
    { id: "blog-4", title: "Blog API Part 4", description: "Comments & Relations", duration: 65, order: 16 },
    { id: "blog-5", title: "Blog API Part 5", description: "Validation & Error Handling", duration: 60, order: 17 },
    { id: "blog-6", title: "Blog API Part 6", description: "Middleware & Security", duration: 65, order: 18 },
    { id: "blog-7", title: "Blog API Part 7", description: "Testing", duration: 70, order: 19 },
    { id: "blog-8", title: "Blog API Part 8", description: "Deployment Prep", duration: 60, order: 20 },
  ],
};

export const advancedModule: Module = {
  id: "advanced",
  title: "Advanced",
  description: "Master production-ready skills. Learn microservices, cloud deployment, and performance optimization.",
  difficulty: "advanced",
  estimatedHours: 30,
  color: "red",
  icon: "Zap",
  lessons: [
    { id: "microservices", title: "Microservices Architecture", description: "Design scalable systems", duration: 60, order: 1 },
    { id: "grpc", title: "gRPC & Protocol Buffers", description: "High-performance RPC", duration: 65, order: 2 },
    { id: "jwt", title: "JWT Authentication", description: "Secure token-based auth", duration: 55, order: 3 },
    { id: "oauth2", title: "OAuth2 Implementation", description: "Third-party authentication", duration: 60, order: 4 },
    { id: "mongodb", title: "MongoDB Integration", description: "NoSQL database operations", duration: 55, order: 5 },
    { id: "redis", title: "Redis Caching Strategies", description: "Speed up your apps", duration: 50, order: 6 },
    { id: "docker-basics", title: "Docker Basics", description: "Containerize your apps", duration: 55, order: 7 },
    { id: "dockerfile", title: "Dockerfile for Go Apps", description: "Optimize Go containers", duration: 50, order: 8 },
    { id: "docker-compose", title: "Docker Compose Multi-Container", description: "Orchestrate services", duration: 55, order: 9 },
    { id: "kubernetes", title: "Kubernetes Introduction", description: "Container orchestration", duration: 70, order: 10 },
    { id: "cicd", title: "CI/CD Pipeline Setup", description: "Automate deployments", duration: 65, order: 11 },
    { id: "api-security", title: "API Security Best Practices", description: "Secure your APIs", duration: 55, order: 12 },
    { id: "rate-limiting", title: "Rate Limiting & Throttling", description: "Protect against abuse", duration: 45, order: 13 },
    { id: "performance", title: "Performance Optimization", description: "Make your apps faster", duration: 60, order: 14 },
    { id: "profiling", title: "Profiling & Benchmarking", description: "Measure performance", duration: 55, order: 15 },
    { id: "load-testing", title: "Load Testing", description: "Test under pressure", duration: 50, order: 16 },
    { id: "aws", title: "AWS Deployment", description: "Deploy to the cloud", duration: 70, order: 17 },
    { id: "production", title: "Production Best Practices", description: "Run apps in production", duration: 55, order: 18 },
    { id: "capstone-1", title: "Capstone Part 1", description: "Architecture Design", duration: 90, order: 19 },
    { id: "capstone-2", title: "Capstone Part 2", description: "User Service", duration: 90, order: 20 },
    { id: "capstone-3", title: "Capstone Part 3", description: "Post Service", duration: 90, order: 21 },
    { id: "capstone-4", title: "Capstone Part 4", description: "Real-time Features", duration: 90, order: 22 },
    { id: "capstone-5", title: "Capstone Part 5", description: "Deployment", duration: 90, order: 23 },
    { id: "capstone-6", title: "Capstone Part 6", description: "Monitoring & Scaling", duration: 90, order: 24 },
  ],
};

export const allModules: Module[] = [beginnerModule, intermediateModule, advancedModule];

export const getTotalLessons = () => allModules.reduce((acc, mod) => acc + mod.lessons.length, 0);
export const getTotalHours = () => allModules.reduce((acc, mod) => acc + mod.estimatedHours, 0);

