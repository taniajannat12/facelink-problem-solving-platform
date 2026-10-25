
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  Send,
  Paperclip,
  CheckCircle2,
  Circle,
  MessageSquare,
  UserRound,
  ShieldCheck,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/chat";

export default function ChatPage() {
  const searchParams = useSearchParams();

  const [role, setRole] = useState("solver");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const conversationId =
    searchParams.get("conversationId") ||
    searchParams.get("problemId") ||
    "problem123";

  const problem = searchParams.get("problem") || "";
  const solverId = searchParams.get("solverId") || "solver456";
  const solverName = searchParams.get("solverName") || "Arif Hasan";
  const seekerId = searchParams.get("seekerId") || "seeker123";
  const seekerName = searchParams.get("seekerName") || "Rahim Hasan";
  const problemTitle =
    searchParams.get("title") || "Next.js Authentication Problem";

  const currentId = role === "solver" ? solverId : seekerId;
  const currentName = role === "solver" ? solverName : seekerName;

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
        "Backend-er sathe connect kora jacche na. Backend server check koro."
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

  async function handleSend(e) {
    e.preventDefault();

    const text = message.trim();

    if (!text || isSolved || sending) return;

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
            senderId: currentId,
            senderRole: role,
            senderName: currentName,
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
      setError(
        err.message || "Message send kora jayni. Backend check koro."
      );
    } finally {
      setSending(false);
    }
  }

  function handleSolved() {
    setIsSolved((previous) => !previous);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href={role === "solver" ? "/solver/dashboard" : "/seeker/dashboard"}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500">
              View as
            </span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:border-blue-500"
              aria-label="Select chat role"
            >
              <option value="solver">Human Solver</option>
              <option value="seeker">Seeker</option>
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_300px]">
        <section className="flex min-h-[75vh] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <UserRound size={23} />
              </div>

              <div className="min-w-0">
                <h1 className="truncate font-bold text-slate-900">
                  {role === "solver" ? seekerName : solverName}
                </h1>
                <p className="text-xs text-slate-500">
                  {role === "solver" ? "Problem Seeker" : "Human Solver"}
                </p>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                isSolved
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {isSolved ? "Solved" : "In Progress"}
            </span>
          </div>

          <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Problem
            </p>
            <h2 className="font-semibold text-slate-800">{problemTitle}</h2>

            {problem && (
              <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">
                {problem}
              </p>
            )}
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
            {loading ? (
              <p className="py-10 text-center text-sm text-slate-500">
                Loading messages...
              </p>
            ) : messages.length === 0 ? (
              <div className="py-10 text-center">
                <MessageSquare className="mx-auto mb-3 text-slate-300" size={34} />
                <p className="font-medium text-slate-700">
                  No messages yet
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Send a message to start the conversation.
                </p>
              </div>
            ) : (
              messages.map((item) => {
                const isMine = item.senderId
                  ? item.senderId === currentId
                  : item.sender === role;

                return (
                  <div
                    key={item.id}
                    className={`flex ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div className="max-w-[85%] sm:max-w-[75%]">
                      <div
                        className={`mb-1 flex items-center gap-2 text-xs text-slate-500 ${
                          isMine ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span>{isMine ? "You" : item.name}</span>
                        <span>{item.time}</span>
                      </div>

                      <div
                        className={`whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                          isMine
                            ? "rounded-br-md bg-blue-600 text-white"
                            : "rounded-bl-md bg-slate-100 text-slate-800"
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

          <form
            onSubmit={handleSend}
            className="border-t border-slate-200 bg-white p-4"
          >
            {error && (
              <p className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </p>
            )}

            {isSolved && (
              <p className="mb-3 text-center text-sm text-slate-500">
                Conversation solved. Reopen it to send a message.
              </p>
            )}

            <div className="flex items-end gap-2">
              <button
                type="button"
                disabled
                title="File attachment will be available later"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400"
              >
                <Paperclip size={19} />
              </button>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder={
                  isSolved
                    ? "Reopen the conversation to reply..."
                    : "Write your message..."
                }
                rows={1}
                disabled={isSolved || sending}
                className="max-h-32 min-h-11 flex-1 resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 disabled:bg-slate-100"
              />

              <button
                type="submit"
                disabled={!message.trim() || isSolved || sending}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              Press Enter to send. Use Shift + Enter for a new line.
            </p>
          </form>
        </section>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <MessageSquare size={19} className="text-blue-600" />
              <h2 className="font-bold text-slate-900">
                Conversation Details
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500">Conversation ID</p>
                <p className="mt-1 break-all text-sm font-medium">
                  {conversationId}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Problem Title</p>
                <p className="mt-1 text-sm font-semibold">{problemTitle}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Seeker</p>
                <p className="mt-1 text-sm font-medium">{seekerName}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Human Solver</p>
                <p className="mt-1 text-sm font-medium">{solverName}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Messages</p>
                <p className="mt-1 text-sm font-semibold">{messages.length}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <ShieldCheck size={19} className="text-blue-600" />
              <h2 className="font-bold text-slate-900">Problem Status</h2>
            </div>

            <p className="mb-4 text-sm leading-6 text-slate-500">
              {isSolved
                ? "This problem is currently marked as solved."
                : "Mark this conversation as solved when the problem is resolved."}
            </p>

            <button
              type="button"
              onClick={handleSolved}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isSolved
                  ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {isSolved ? <Circle size={17} /> : <CheckCircle2 size={17} />}
              {isSolved ? "Reopen Conversation" : "Mark as Solved"}
            </button>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">Backend Connected</p>
            <p className="mt-1 text-xs leading-5 text-blue-800">
              Messages load from the Express API and refresh automatically. They are temporary until database storage is added.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
