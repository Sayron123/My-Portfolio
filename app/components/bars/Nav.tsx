"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { RobotMascotIcon } from "../Mascot/RobotMascot";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
  
];

export default function Nav({ onChatClick }: { onChatClick: () => void }) {
  const [active, setActive] = useState("hero");
  const overrideUntil = useRef(0);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.href.slice(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < overrideUntil.current) return;

        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => s && observer.observe(s));

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (atBottom) setActive(links[links.length - 1].href.slice(1));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleClick(id: string) {
    setActive(id);
    overrideUntil.current = Date.now() + 800;
  }

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-neutral-900/90 px-2 py-1.5 backdrop-blur dark:bg-neutral-50/90">
      {links.map((l) => {
        const id = l.href.slice(1);
        return (
          <a
            key={l.href}
            href={l.href}
            onClick={() => handleClick(id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === id
                ? "bg-white text-black dark:bg-black dark:text-white"
                : "text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black"
            }`}
          >
            {l.label}
          </a>
        );
      })}
      <div className="ml-1 flex items-center gap-1 border-l border-neutral-700 pl-2 dark:border-neutral-300">
        <ThemeToggle />
        <button
          onClick={onChatClick}
          aria-label="Open chat"
          className="rounded-full p-3 text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black"
        >
          <RobotMascotIcon size={30} />
        </button>
      </div>
    </nav>
  );
}