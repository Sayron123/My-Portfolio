const experience = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Ryuwanshoy — Comic Publishing Platform",
    period: "2025 – Present",
    bullets: [
      "Built a production-grade platform for a Filipino comic creator: series management, chapter reader, and admin content publishing.",
      "Implemented a vertical scroll reader and flip-page mode, with a 3-step series creation wizard backed by Supabase.",
      "Designed the site's full design system using Tailwind CSS and shadcn/ui for visual consistency site-wide.",
    ],
  },
  {
    role: "QA & UI/UX Intern",
    org: "Rumble Royale",
    period: "Feb – May 2026",
    bullets: [
      "Conducted functional and UI/UX testing across web application features, identifying bugs and usability issues.",
      "Documented test findings and communicated improvement recommendations to the development team.",
      "Evaluated interface behavior across scenarios to ensure feature correctness and visual consistency.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Experience</h2>

        <div className="mt-8 flex flex-col gap-8">
          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{job.role}</h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                {job.org}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
                  >
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}