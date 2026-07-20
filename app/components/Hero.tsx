import ProfileVideo from "./Projects/ProfileVideo";
import { Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedInIcon } from "./LinkedIn/LinkedInIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-neutral-50 px-4 py-16 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8 lg:gap-16">
          <ProfileVideo />

          <div>
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              Sayron D. Pabilando
            </h1>
            <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-300">
              Aspiring Full-Stack Developer
            </p>

            <div className="mt-5 flex gap-4 text-neutral-600 dark:text-neutral-400">
              <a href="https://github.com/Sayron123" aria-label="GitHub" className="hover:text-black dark:hover:text-white">
                <SiGithub size={20} color="currentColor" />
              </a>
              <a href="https://www.linkedin.com/in/sayron-pabilando-b747793a6" aria-label="LinkedIn" className="hover:text-black dark:hover:text-white">
                <LinkedInIcon size={20} />
              </a>
              <a href="mail.google.com/mail/sayrondpabilando@gmail.com" aria-label="Email" className="hover:text-black dark:hover:text-white">
                <Mail size={20} />
              </a>
            </div>

            <p className="mt-8 max-w-none text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 lg:max-w-xl">
              I build real solutions for real people, like a comic platform for an actual creator, a study tool Filipino students use, and an automated garden system solving a genuine agricultural need.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
              >
                View Projects
              </a>
                <a href="public/resume/Pabilando_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
                >
                  View Resume
                </a>          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}