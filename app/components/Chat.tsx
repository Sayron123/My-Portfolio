"use client";
import { useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function Chat({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    if (input.trim() === "") return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    setIsLoading(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 flex h-96 w-80 flex-col rounded-lg border bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between border-b p-3 dark:border-neutral-700">
        <span className="font-semibold">Chat with Sayron</span>
        <button onClick={onClose}>X</button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {messages.map((message, index) => (
          <div key={index} className={message.role === "user" ? "text-right" : "text-left"}>
            <span
              className={
                message.role === "user"
                  ? "inline-block rounded-lg bg-black px-3 py-2 text-white dark:bg-white dark:text-black"
                  : "inline-block rounded-lg bg-neutral-100 px-3 py-2 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
              }
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t p-2 dark:border-neutral-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="Type a message..."
          className="flex-1 rounded border px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="rounded bg-black px-3 py-1 text-sm text-white dark:bg-white dark:text-black"
        >
          Send
        </button>
      </div>
    </div>
  );
}