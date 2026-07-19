import { TechName } from "./techIcons";

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    techstack: TechName[];
    liveUrl?: string;
    repoUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ryuwanshoy",
    title: "Ryuwanshoy",
    description: "A comic-reading platform with series management, chapter uploads, and an admin dashboard. Currently on hold pre-launch.",
    image: "/images/placeholder.webp",
    techstack: ["Next.js", "Supabase", "Cloudflare", "Tailwind CSS"],
    repoUrl: "https://github.com/Sayron123/ryuwanshoy",
  },
  {
    slug: "stub",
    title: "StuB(Study-Buddy)",
    description: "An AI-powered study companion for Filipino students — generates flashcards, quizzes, and answers questions straight from your own uploaded notes.",
    image: "/images/placeholder_two.webp",
    techstack: ["FastAPI", "Vue.js", "MongoDB", "JWT"],
    repoUrl: "https://github.com/Sayron123/study-buddy",
  },
  {
    slug: "guardner",
    title: "GUARDNER",
    description: "An automated smart garden system that handles watering, fertilizing, and pH monitoring, with a mobile app for real-time remote control.",
    image: "/images/placeholder_three.webp",
    techstack: ["C++"],
    repoUrl: "https://github.com/Sayron123/guardner",
  },
];