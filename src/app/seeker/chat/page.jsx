
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const API_URL = "http://localhost:5000/api/chat";

export default function SeekerChat() {
  const searchParams = useSearchParams();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const conversationId =
    searchParams.get("conversationId") ||
    searchParams.get("problemId") ||
    "problem123";

  const solverId = searchParams.get("solverId") || "solver456";
  const solverName = searchParams.get("solverName") || "Arif Hasan";
  const seekerId = searchParams.get("seekerId") || "seeker123";
  const seekerName = searchParams.get("seekerName") || "Rahim Hasan";

  const problem =
    searchParams.get("problem") || "";
  const problemTitle =
    searchParams.get("title") || "Next.js Authentication Problem";

  const loadMessages = useCallback(async (showLoading = false) => {
    if (showLoading) setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(conversationId)}/messages`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("Could not load messages.");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Could not load messages.");
      }

      setMessages(
        (result.messages || []).map((item) => ({
          id: item.id,
          sender: item.senderRole || item.sender,
          senderId: item.senderId,
          name: item.senderName || item.name || "User",
          text: item.text,
          time: item.createdAt
            ? new Date(item.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : item.time || "",
        }))
      );

      setError("");
    } catch {
      setError(
       "cannot connect with Backend"
     
      );
    } finally {
      if (showLoading) setLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    loadMessages(true);

    const intervalId = setInterval(() => {
      loadMessages(false);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [loadMessages]);

  async function sendMessage(e) {
    if (e) e.preventDefault();

    const text = message.trim();

    if (!text || sending) return;

    setSending(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(conversationId)}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: seekerId,
            senderRole: "seeker",
            senderName: seekerName,
            text,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Message send failed.");
      }

      setMessage("");
      await loadMessages(false);
    } catch (err) {
      setError(err.message || "Message send kora jayni.");
    } finally {
      setSending(false);
    }
  }

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
                {problemTitle}
              </h2>

              {problem && (
                <p className="mt-2 whitespace-pre-wrap text-xs leading-5 text-slate-600">
                  {problem}
                </p>
              )}

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
                  {solverName.charAt(0).toUpperCase()}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-50 bg-emerald-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {solverName}
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-600">
                    Human Solver
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Expertise
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Next.js", "React", "Authentication"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="flex min-h-[680px] flex-col">
            <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                  {solverName.charAt(0).toUpperCase()}
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                </div>

                <div>
                  <h1 className="text-sm font-bold text-slate-900">
                    {solverName}
                  </h1>
                  <p className="mt-0.5 text-xs text-emerald-600">
                    Human Solver
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                Connected
              </span>
            </header>

            <div className="border-b border-slate-100 bg-slate-50 px-5 py-3">
              <p className="text-[11px] text-slate-400">Discussing</p>
              <p className="truncate text-xs font-semibold text-slate-700">
                {problemTitle}
              </p>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-white px-5 py-6 md:px-7">
              <div className="flex justify-center">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-400">
                  Conversation
                </span>
              </div>

              {loading ? (
                <p className="py-10 text-center text-sm text-slate-500">
                  Loading messages...
                </p>
              ) : messages.length === 0 ? (
                <p className="py-10 text-center text-sm text-slate-500">
                  No messages yet. Start the conversation.
                </p>
              ) : (
                messages.map((item) => {
                  const isMine = item.senderId
                    ? item.senderId === seekerId
                    : item.sender === "seeker" || item.sender === "user";

                  return (
                    <div
                      key={item.id}
                      className={`flex ${
                        isMine ? "justify-end" : "justify-start"
                      }`}
                    >
                      {!isMine && (
                        <div className="mr-2 mt-auto hidden h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-[11px] font-bold text-indigo-600 sm:flex">
                          {solverName.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="max-w-[78%]">
                        <p
                          className={`mb-1 text-[11px] text-slate-400 ${
                            isMine ? "text-right" : "text-left"
                          }`}
                        >
                          {isMine ? "You" : item.name} {item.time}
                        </p>

                        <div
                          className={`whitespace-pre-wrap break-words px-4 py-3 text-sm leading-6 ${
                            isMine
                              ? "rounded-2xl rounded-br-md bg-indigo-600 text-white"
                              : "rounded-2xl rounded-bl-md border border-slate-200 bg-slate-50 text-slate-700"
                          }`}
                        >
                          {item.text}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="border-t border-slate-200 bg-white p-4">
              {error && (
                <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                  {error}
                </p>
              )}

              <form
                onSubmit={sendMessage}
                className="flex items-end gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 transition focus-within:border-indigo-300 focus-within:bg-white"
              >
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  type="submit"
                  disabled={!message.trim() || sending}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  aria-label="Send message"
                >
                  {sending ? "..." : (
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
                  )}
                </button>
              </form>

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
