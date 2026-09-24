"use client";

import { useState } from "react";
import Link from "next/link";

export default function SeekerChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "solver",
      text: "Hi! I checked your Next.js authentication problem.",
    },
    {
      id: 2,
      sender: "solver",
      text: "Can you show me the error you are getting?",
    },
    {
      id: 3,
      sender: "user",
      text: "Yes. I am getting a session error after login.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text: message.trim(),
      },
    ]);

    setMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="mb-5 flex items-center justify-between">
          <Link
            href="/seeker/dashboard"
            className="text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
          >
            ← Dashboard
          </Link>

          <span className="rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600">
            Problem Discussion
          </span>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[280px_1fr]">
          <aside className="hidden border-r border-slate-200 bg-slate-50/70 lg:block">
            <div className="border-b border-slate-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Current Problem
              </p>

              <h2 className="mt-3 text-sm font-bold leading-5 text-slate-800">
                Next.js Authentication Problem
              </h2>

              <span className="mt-3 inline-flex rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600">
                In Progress
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Solver
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                  A

                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-50 bg-emerald-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Arif Hasan
                  </p>

                  <p className="mt-0.5 text-xs text-emerald-600">
                    Online
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Expertise
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
                    Next.js
                  </span>

                  <span className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
                    React
                  </span>

                  <span className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
                    Authentication
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex min-h-[680px] flex-col">
            <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                  A

                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div>
                  <h1 className="text-sm font-bold text-slate-900">
                    Arif Hasan
                  </h1>

                  <p className="mt-0.5 text-xs text-emerald-600">
                    Online · Next.js Solver
                  </p>
                </div>
              </div>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-50 hover:text-slate-600">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="5" cy="12" r="1" />
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                </svg>
              </button>
            </header>

            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 5h16v11H7l-3 3V5Z" />
                    <path d="M8 9h8M8 12h5" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] text-slate-400">
                    Discussing
                  </p>

                  <p className="truncate text-xs font-semibold text-slate-700">
                    Next.js Authentication Problem
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-white px-5 py-6 md:px-7">
              <div className="flex justify-center">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-400">
                  Today
                </span>
              </div>

              {messages.map((item) => (
                <div
                  key={item.id}
                  className={`flex ${
                    item.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {item.sender === "solver" && (
                    <div className="mr-2 mt-auto hidden h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[11px] font-bold text-indigo-600 sm:flex">
                      A
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] px-4 py-3 text-sm leading-6 ${
                      item.sender === "user"
                        ? "rounded-2xl rounded-br-md bg-indigo-600 text-white"
                        : "rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 bg-white p-4">
              <div className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 transition focus-within:border-indigo-300 focus-within:bg-white">
                <button className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-indigo-600">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Write a message..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  onClick={sendMessage}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>

              <p className="mt-2 text-center text-[11px] text-slate-400">
                Press Enter to send
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}