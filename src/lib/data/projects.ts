export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  technologies: string[];
  learningOutcomes: string[];
  milestones: Milestone[];
  githubTemplate: string;
  thumbnail: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: "cli-todo",
    title: "CLI To-Do App",
    description: "Build a command-line task manager with file persistence",
    longDescription: "Create a fully functional command-line to-do application that allows users to add, list, complete, and delete tasks. Learn file I/O, structs, and CLI argument parsing.",
    difficulty: "beginner",
    estimatedHours: 4,
    technologies: ["Go CLI", "File I/O", "JSON", "Structs", "Flag Package"],
    learningOutcomes: [
      "Parse command-line arguments with the flag package",
      "Read and write JSON files for data persistence",
      "Work with structs and slices for data management",
      "Handle errors gracefully in Go",
    ],
    milestones: [
      { id: "setup", title: "Project Setup", description: "Initialize Go module and project structure", order: 1 },
      { id: "task-struct", title: "Task Data Structure", description: "Define the Task struct and storage format", order: 2 },
      { id: "add-list", title: "Add & List Tasks", description: "Implement adding new tasks and listing all tasks", order: 3 },
      { id: "complete-delete", title: "Complete & Delete", description: "Mark tasks as done and remove tasks", order: 4 },
      { id: "persistence", title: "File Persistence", description: "Save and load tasks from JSON file", order: 5 },
    ],
    githubTemplate: "https://github.com/golearn/cli-todo-starter",
    thumbnail: "/projects/cli-todo.png",
  },
  {
    id: "rest-blog",
    title: "REST API Blog",
    description: "Build a full-featured blog API with authentication and database",
    longDescription: "Create a production-ready REST API for a blog application. Implement user authentication, CRUD operations for posts and comments, and connect to a PostgreSQL database using GORM.",
    difficulty: "intermediate",
    estimatedHours: 12,
    technologies: ["Gin Framework", "PostgreSQL", "GORM", "JWT Auth", "REST API", "Middleware"],
    learningOutcomes: [
      "Design and implement RESTful API endpoints",
      "Set up PostgreSQL database with GORM ORM",
      "Implement JWT-based user authentication",
      "Write middleware for logging and auth",
      "Handle request validation and error responses",
      "Write comprehensive API tests",
    ],
    milestones: [
      { id: "setup", title: "Project Setup", description: "Set up Gin, database connection, and project structure", order: 1 },
      { id: "user-model", title: "User Model & Auth", description: "Create user model with registration and login", order: 2 },
      { id: "post-crud", title: "Post CRUD", description: "Implement create, read, update, delete for posts", order: 3 },
      { id: "comments", title: "Comments System", description: "Add comments with user relations", order: 4 },
      { id: "validation", title: "Validation & Errors", description: "Add input validation and error handling", order: 5 },
      { id: "middleware", title: "Middleware", description: "Implement auth and logging middleware", order: 6 },
      { id: "testing", title: "Testing", description: "Write unit and integration tests", order: 7 },
      { id: "deploy", title: "Deployment", description: "Prepare for production deployment", order: 8 },
    ],
    githubTemplate: "https://github.com/golearn/rest-blog-starter",
    thumbnail: "/projects/rest-blog.png",
  },
  {
    id: "social-backend",
    title: "Social Media Backend",
    description: "Build a scalable social media platform with microservices",
    longDescription: "Create a production-grade social media backend using microservices architecture. Implement real-time features, caching, containerization, and cloud deployment.",
    difficulty: "advanced",
    estimatedHours: 25,
    technologies: ["Microservices", "gRPC", "Redis", "MongoDB", "Docker", "Kubernetes", "WebSockets", "AWS"],
    learningOutcomes: [
      "Design microservices architecture patterns",
      "Implement service-to-service communication with gRPC",
      "Set up Redis caching for performance",
      "Use MongoDB for flexible document storage",
      "Containerize services with Docker",
      "Deploy to Kubernetes cluster",
      "Implement real-time features with WebSockets",
      "Configure CI/CD pipeline",
    ],
    milestones: [
      { id: "architecture", title: "Architecture Design", description: "Design the microservices system", order: 1 },
      { id: "user-service", title: "User Service", description: "Build user management microservice", order: 2 },
      { id: "post-service", title: "Post Service", description: "Create post and feed microservice", order: 3 },
      { id: "notification", title: "Notification Service", description: "Real-time notifications with WebSockets", order: 4 },
      { id: "gateway", title: "API Gateway", description: "Implement API gateway and routing", order: 5 },
      { id: "docker", title: "Containerization", description: "Dockerize all services", order: 6 },
      { id: "kubernetes", title: "Kubernetes Deployment", description: "Deploy to Kubernetes cluster", order: 7 },
    ],
    githubTemplate: "https://github.com/golearn/social-backend-starter",
    thumbnail: "/projects/social-backend.png",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getProjectsByDifficulty = (difficulty: string) =>
  projects.filter((p) => p.difficulty === difficulty);

