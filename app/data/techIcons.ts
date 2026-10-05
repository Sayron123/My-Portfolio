import { SiNextdotjs, SiSupabase, SiCloudflare, SiTailwindcss, SiFastapi, 
  SiVuedotjs, SiMongodb, SiJsonwebtokens, SiCplusplus, SiMermaid, } from "react-icons/si";
import { Bot } from "lucide-react"

export const techIcons = {
  "Next.js": SiNextdotjs,
  "Supabase": SiSupabase,
  "Cloudflare": SiCloudflare,
  "Tailwind CSS": SiTailwindcss,
  "FastAPI": SiFastapi,
  "Vue.js": SiVuedotjs,
  "MongoDB": SiMongodb,
  "JWT": SiJsonwebtokens,
  "C++": SiCplusplus,
  "IBM Bob": Bot,
  "Mermaid": SiMermaid,
} as const;

export type TechName = keyof typeof techIcons;