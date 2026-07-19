import { SiNextdotjs, SiSupabase, SiCloudflare, SiTailwindcss, SiFastapi, SiVuedotjs, SiMongodb, SiJsonwebtokens, SiCplusplus, } from "react-icons/si";

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
} as const;

export type TechName = keyof typeof techIcons;