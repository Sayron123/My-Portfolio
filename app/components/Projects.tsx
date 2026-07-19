import ProjectsShowcase from "./Projects/ProjectsShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
        <div className="mt-8">
          <ProjectsShowcase />
        </div>
      </div>
    </section>
  );
}