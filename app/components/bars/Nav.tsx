"use client";
import { useEffect, useRef, useState } from "react";
import { Home, User, FolderKanban, Briefcase, Award, Mail, MessageCircle } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const links = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#certifications", label: "Certifications", icon: Award },
  { href: "#contact", label: "Contact", icon: Mail },
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
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-neutral-900/90 px-1.5 py-1.5 backdrop-blur dark:bg-neutral-50/90 sm:gap-1 sm:px-2">
      {links.map((l) => {
        const id = l.href.slice(1);
        const Icon = l.icon;
        return (
          <a
            key={l.href}
            href={l.href}
            onClick={() => handleClick(id)}
            aria-label={l.label}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
              active === id
                ? "bg-white text-black dark:bg-black dark:text-white"
                : "text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black"
            }`}
          >
            <Icon size={18} />
            <span className="hidden sm:inline">{l.label}</span>
          </a>
        );
      })}
      <div className="ml-1 flex items-center gap-1 border-l border-neutral-700 pl-2 dark:border-neutral-300">
        <ThemeToggle />
        <button
          onClick={onChatClick}
          aria-label="Open chat"
          className="flex items-center justify-center rounded-full p-2 text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black"
        >
          <MessageCircle size={18} />
        </button>
      </div>
    </nav>
  );
}