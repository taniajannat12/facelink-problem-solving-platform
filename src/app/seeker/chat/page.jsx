
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
    <main className="min-h-screen bg-slate-100">

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Chat Header */}
        <div className="bg-white rounded-t-3xl border p-5 flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-xl">
            👨‍💻
          </div>

          <div>
            <h1 className="font-bold text-slate-900">
              Arif Hasan
            </h1>

            <p className="text-sm text-green-500">
              ● Online • Next.js Solver
            </p>
          </div>

        </div>


        {/* Messages */}
        <div className="bg-slate-50 border-x min-h-[500px] p-6 space-y-5">

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
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-white text-slate-700 border rounded-bl-md"
                }`}
              >
                {message.text}
              </div>

            </div>

          ))}

        </div>


        {/* Input */}
        <div className="bg-white rounded-b-3xl border p-4">

          <div className="flex gap-3">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-5 py-3 rounded-xl bg-slate-50 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={() => setMessage("")}
              className="px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
