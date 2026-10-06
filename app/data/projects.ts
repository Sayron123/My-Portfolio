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
    video?: string;
    poster?: string;
}

export const projects: Project[] = [
  {
    slug: "ryuwanshoy",
    title: "Ryuwanshoy",
    description: "A comic-reading platform with series management, chapter uploads, and an admin dashboard. Currently on hold pre-launch.",
    image: "/images/placeholder.webp",
    techstack: ["Next.js", "Supabase", "Cloudflare", "Tailwind CSS"],
    repoUrl: "https://github.com/websitecrl/ryuwanshoy",
    video: "/videos/ryuwanshoy-promo-v2.mp4",
    poster: "/images/placeholder.webp"
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
  {
    slug: "ticketlens",
    title: "TicketLens",
    description: "IBM Bob custom mode that turns vague client tickets into verified code changes in unfamiliar codebases. Built solo for the IBM Bob 2.0 Hackathon.",
    image: "/images/ticketlens.webp",
    techstack: ["IBM Bob", "Mermaid"],
    repoUrl: "https://github.com/Sayron123/bob-first-day",
    video: "/videos/ticketlens.mp4",
    poster: "/images/ticketlens.webp"
  },


];