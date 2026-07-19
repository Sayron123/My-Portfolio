const certifications = [
  {
    name: "Cloud Technical Series: AI in Action",
    org: "Google Cloud APAC",
    year: "2026",
  },
  {
    name: "Cybersecurity Fundamentals: Understanding the Risk and Building Effective Defenses",
    year: "2025",
  },
  {
    name: "Next-Gen Tech Talks: IoT Application and Data-Driven Governance",
    year: "2025",
  },
  {
    name: "Foundations of PHP Web Development: From Web Systems to Server-Side Scripting",
    year: "2026",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold sm:text-3xl">Certifications</h2>
          <p className="mt-3 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            A few things I've earned along the way.
          </p>
        </div>

        <ul className="mt-8 space-y-4">
          {certifications.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 dark:bg-neutral-800"
            >
              <div>
                <p className="font-medium">{c.name}</p>
                {c.org && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{c.org}</p>
                )}
              </div>
              <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                {c.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}