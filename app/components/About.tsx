const milestones = [
  { year: "2022", label: "Started BS Computer Engineering" },
  { year: "Feb – May 2026", label: "QA & UI/UX Intern at Rumble Royale" },
  { year: "2026", label: "Graduated, STI College Novaliches" },
];

const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "Vue 3", "FastAPI", "Next.js 15", "React"],
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Pinia", "Vue Router", "Framer Motion"],
  },
  {
    category: "Backend & Databases",
    skills: ["REST APIs", "JWT Auth", "Supabase", "MongoDB Atlas", "Firebase"],
  },
  {
    category: "Cloud & Storage",
    skills: ["Cloudflare R2", "Cloudflare Pages", "Cloudflare Registrar"],
  },
];

export default function About() {
  return (
    <section
        id="about"
        className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
        <div className="mx-auto max-w-6xl">
    <h2 className="mb-12 text-2xl font-bold sm:text-3xl">About</h2>
        <h3 className="text-xl font-bold sm:text-2xl">Timeline</h3>
        <div className="mt-8 flex flex-col">
        {milestones.map((m, i) => (
            <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="h-3 w-3 rounded-full bg-black dark:bg-white" />
                {i < milestones.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                )}
            </div>
            <div className={`-mt-1 ${i < milestones.length - 1 ? "pb-8" : ""}`}>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{m.year}</p>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">{m.label}</p>
            </div>
            </div>
        ))}
        </div>

     <h3 className="mt-16 text-xl font-bold sm:text-2xl">Skills</h3>

      <div className="mt-8 flex flex-col gap-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {group.category}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-sm text-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}