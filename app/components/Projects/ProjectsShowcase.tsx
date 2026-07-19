"use client";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { techIcons } from "../../data/techIcons";
import CoverflowCarousel from "./CoverflowCarousel";

function useBreakpoint() {
  const [bp, setBp] = useState<"sm" | "md" | "lg">("lg");
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setBp(w < 640 ? "sm" : w < 1024 ? "md" : "lg");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return bp;
}

const SIZES = {
  sm: { activeWidth: 300, activeHeight: 200, restWidth: 50, restHeight: 130, gap: 14, arrowSize: 44 },
  md: { activeWidth: 560, activeHeight: 370, restWidth: 90, restHeight: 240, gap: 24, arrowSize: 52 },
  lg: { activeWidth: 820, activeHeight: 540, restWidth: 130, restHeight: 350, gap: 36, arrowSize: 60 },
};

export default function ProjectsShowcase() {
  const bp = useBreakpoint();
  const sizing = SIZES[bp];
  const [activeIndex, setActiveIndex] = useState(0);

  const images = projects.map((p) => ({ srcUrl: p.image, alt: p.title }));
  const active = projects[activeIndex];

  return (
    <div>
      <div className="h-[320px] sm:h-[440px] md:h-[600px] w-full">
        <CoverflowCarousel
          images={images}
          activeWidth={sizing.activeWidth}
          activeHeight={sizing.activeHeight}
          restWidth={sizing.restWidth}
          restHeight={sizing.restHeight}
          gap={sizing.gap}
          radius={2}
          showArrows
          arrowColor="#ffffff"
          arrowBackground="#000000"
          arrowSize={sizing.arrowSize}
          arrowPosition={95}
          autoplay={false}
          autoplayDirection="rightToLeft"
          transition={{ type: "tween", duration: 0.3, delay: 1, ease: "easeInOut" }}
          style={{}}
          onActiveChange={setActiveIndex}
        />
      </div>

      {/* Caption for whichever project is currently centered */}
      <div className="mt-8 max-w-lg mx-auto text-center">
        <h3 className="text-2xl font-bold">{active.title}</h3>
        <p className="mt-3 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          {active.description}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {active.techstack.map((tech) => {
            const Icon = techIcons[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
              >
                <Icon className="w-3.5 h-3.5" />
                {tech}
              </span>
            );
          })}
        </div>

        {(active.liveUrl || active.repoUrl) && (
        <div className="mt-6 flex justify-center gap-3">
            {active.liveUrl && (
            <a
                href={active.liveUrl}
                target="_blank"
                className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
            >
                Live
            </a>
            )}
            {active.repoUrl && (
            <a
                href={active.repoUrl}
                target="_blank"
                className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:text-neutral-200"
            >
                Code
            </a>
            )}
        </div>
        )}
      </div>
    </div>
  );
}