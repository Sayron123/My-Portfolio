"use client"

import { useEffect, useState } from "react" 

export default function BackToTop() {
  const [visible, setVisibile] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisibile(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#hero"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm text-black transition-opacity duration-300 dark:border-neutral-700 dark:bg-black dark:text-white ${
          visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        ↑
    </a>
  )
}