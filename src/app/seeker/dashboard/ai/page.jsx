"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Send,
  UserRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AIChatPage() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hi! Tell me about your problem and I'll try to help.",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: message,
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
 

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <Link
          href="/seeker/dashboard"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition mb-5"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden h-[calc(100vh-150px)] min-h-[600px] flex flex-col">
          
          <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <Bot size={20} />
            </div>

            <div>
              <h1 className="font-semibold text-slate-900">
                AI Assistant
              </h1>
              <p className="text-xs text-emerald-600">
                Online
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {msg.type === "ai" && (
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-6 ${
                    msg.type === "user"
                      ? "bg-indigo-600 text-white rounded-tr-sm"
                      : "bg-slate-100 text-slate-700 rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.type === "user" && (
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-violet-500 text-white flex items-center justify-center">
                    <UserRound size={15} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Describe your problem..."
                className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />

              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:opacity-40 transition"
              >
                <Send size={18} />
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-2">
              AI responses will be connected later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}