"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-neutral-200 bg-neutral-50 px-4 py-16 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
          <p className="mt-3 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Have a project in mind or just want to say hi? Send a message.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="resize-none rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-white"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-fit rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 dark:bg-white dark:text-black"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}