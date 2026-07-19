"use client"

import Nav from "./components/bars/Nav";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackToTop from "./components/buttons/BackToTop";
import Chat from "./components/Chat";
import { useState } from "react";
import Experience from "./components/Experience";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
    <Nav onChatClick={() => setIsChatOpen((v) => !v)} />
    <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        <Certifications />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}