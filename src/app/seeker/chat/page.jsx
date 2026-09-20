

"use client";

import { useState } from "react";

export default function SeekerChat() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      sender: "solver",
      text: "Hi! I checked your Next.js authentication problem.",
    },
    {
      sender: "solver",
      text: "Can you show me the error you are getting?",
    },
    {
      sender: "user",
      text: "Yes. I am getting a session error after login.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-40 right-0"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-10">

        <div className="bg-white/5 backdrop-blur-xl rounded-t-3xl border border-white/10 p-5 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">
            👨‍💻
          </div>

          <div>
            <h1 className="font-bold text-slate-100">
              Arif Hasan
            </h1>

            <p className="text-sm text-green-400 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online • Next.js Solver
            </p>
          </div>

        </div>

        <div className="bg-white/[0.02] border-x border-white/10 min-h-[500px] p-6 space-y-5">

          {messages.map((message, index) => (

            <div
              key={index}
              className={`flex ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-md px-5 py-3 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-md shadow-lg shadow-blue-600/20"
                    : "bg-white/5 text-slate-300 border border-white/10 rounded-bl-md"
                }`}
              >
                {message.text}
              </div>

            </div>

          ))}

        </div>


        <div className="bg-white/5 backdrop-blur-xl rounded-b-3xl border border-white/10 p-4">

          <div className="flex gap-3">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/40"
            />

            <button
              onClick={() => setMessage("")}
              className="px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}