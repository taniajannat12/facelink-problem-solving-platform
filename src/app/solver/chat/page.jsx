"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  MoreVertical,
  Paperclip,
  Send,
  CircleUserRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SolverChat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seeker",
      text: "Hello! I am having an authentication problem in my Next.js project.",
      time: "10:32 PM",
    },
    {
      id: 2,
      sender: "solver",
      text: "Sure! Please send me the error message and the relevant code.",
      time: "10:33 PM",
    },
    {
      id: 3,
      sender: "seeker",
      text: "I am getting a session error after login.",
      time: "10:35 PM",
    },
    {
      id: 4,
      sender: "solver",
      text: "Okay. It looks like the session configuration may be the issue. Please show me your auth configuration.",
      time: "10:36 PM",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "solver",
      text: message,
      time: "Now",
    };

    setMessages((previous) => [...previous, newMessage]);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      

      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <div className="mb-5 flex items-center justify-between">
          <Link
            href="/solver/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Active conversation
          </div>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[300px_1fr]">
          <aside className="hidden border-r border-slate-200 bg-slate-50 lg:block">
            <div className="border-b border-slate-200 p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                Current Request
              </p>

              <h2 className="mt-3 text-lg font-bold text-slate-800">
                Next.js authentication issue
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Authentication and session problem in a Next.js project.
              </p>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Seeker
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                  SJ
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-800">
                   Rahim
                  </p>

                  <p className="mt-0.5 text-xs text-emerald-500">
                    Online now
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-6 border-t border-slate-200" />

            <div className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Topic
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600">
                  Next.js
                </span>

                <span className="rounded-lg bg-violet-50 px-3 py-1.5 text-[11px] font-semibold text-violet-600">
                  Authentication
                </span>

                <span className="rounded-lg bg-cyan-50 px-3 py-1.5 text-[11px] font-semibold text-cyan-600">
                  Session
                </span>
              </div>
            </div>
          </aside>

          <section className="flex min-h-[680px] min-w-0 flex-col">
            <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                  SJ

                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div>
                  <h1 className="text-sm font-bold text-slate-800">
                   Rahim
                  </h1>

                  <p className="mt-0.5 text-xs text-emerald-500">
                    Online
                  </p>
                </div>
              </div>

              <button className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
                <MoreVertical size={19} />
              </button>
            </header>

            <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <CircleUserRound size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-500">
                    Problem
                  </p>

                  <p className="truncate text-sm font-bold text-slate-800">
                    Next.js authentication issue
                  </p>
                </div>

                <span className="ml-auto hidden rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-600 sm:block">
                  In Progress
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto bg-[#f8f9fc] p-5 md:p-7">
              <div className="flex justify-center">
                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-slate-400 shadow-sm">
                  Today
                </span>
              </div>

              {messages.map((msg) => {
                const isSolver = msg.sender === "solver";

                return (
                  <div
                    key={msg.id}
                    className={`flex ${
                      isSolver ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="max-w-[82%] md:max-w-[70%]">
                      <div
                        className={`px-4 py-3 text-sm leading-6 ${
                          isSolver
                            ? "rounded-2xl rounded-br-md bg-indigo-600 text-white shadow-sm"
                            : "rounded-2xl rounded-bl-md border border-slate-200 bg-white text-slate-700 shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>

                      <p
                        className={`mt-1.5 text-[10px] text-slate-400 ${
                          isSolver ? "text-right" : "text-left"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-slate-200 bg-white p-4 md:p-5">
              <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 transition focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-50">
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-indigo-600">
                  <Paperclip size={18} />
                </button>

                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  placeholder="Type your solution..."
                  className="h-10 min-w-0 flex-1 bg-transparent px-1 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  onClick={handleSend}
                  className="flex h-10 shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-bold text-white transition hover:bg-indigo-700"
                >
                  <Send size={16} />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>

              <p className="mt-2 px-1 text-[10px] text-slate-400">
                Press Enter to send your message
              </p>
            </div>
          </section>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700">
            <CheckCircle2 size={17} />
            Mark Problem as Solved
          </button>
        </div>
      </div>
    </main>
  );
}