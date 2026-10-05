import { Project } from "@/app/data/projects";
import { techIcons } from "@/app/data/techIcons";
import HoverVideo from "../HoverVids";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden p-4 gap-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.video && project.poster ? (
                    <div className="aspect-video w-full">
                        <HoverVideo src={project.video} poster={project.poster} />
                    </div>
                ) : (
                    project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="aspect-video w-full rounded-2xl object-cover"
                        />
                    )
                )}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
                {project.techstack.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                        <span
                            key={tech}
                            className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border-gray-300 dark:border-gray-700"
                        >
                            <Icon className="w-3.5 h-3.5" />
                            {tech}
                        </span>
                    );
                })}
            </div>

            {/* Link */}
            {(project.liveUrl || project.repoUrl) && (
                <div className="flex gap-3 mt-2 text-sm">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" className="underline">
                            Live
                        </a>
                    )}
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" className="underline">
                            Code
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}