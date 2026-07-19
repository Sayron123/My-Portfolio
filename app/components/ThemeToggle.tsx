"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center justify-center rounded-full p-2 text-neutral-300 hover:text-white dark:text-neutral-600 dark:hover:text-black transition-colors"
    >
      <span className="flex items-center justify-center transition-transform duration-300 ease-in-out">
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </span>
    </button>
  );
}