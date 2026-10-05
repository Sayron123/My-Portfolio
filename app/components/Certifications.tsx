import { hackathons } from "../data/hackathon";
import { certifications } from "../data/certification";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-8">Hackathons & Certifications</h2>

        <h3 className="text-lg font-semibold mb-4">Hackathons</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          {hackathons.map((h) => (
            <div
              key={h.name}
              className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-1"
            >
              <p className="font-semibold">{h.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {h.organizer} · {h.date}
              </p>
              {h.project && <p className="text-sm">Project: {h.project}</p>}
              {h.result && <p className="text-sm">{h.result}</p>}
              {(h.link || h.certificate) && (
                <div className="flex gap-3 text-sm mt-1">
                  {h.link && (
                    <a href={h.link} target="_blank" className="underline">
                      Project
                    </a>
                  )}
                  {h.certificate && (
                    <a href={h.certificate} target="_blank" className="underline">
                      Certificate
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">Certifications</h3>
        <ul className="flex flex-col gap-3">
          {certifications.map((c) => (
            <li
              key={c.name}
              className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 dark:border-gray-800 pb-3"
            >
              <span>
                {c.name}
                {c.issuer && (
                  <span className="text-gray-600 dark:text-gray-400"> · {c.issuer}</span>
                )}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{c.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}