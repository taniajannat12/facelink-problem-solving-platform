
"use client";

import { useState } from "react";

export default function SolverChat() {
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="bg-white rounded-t-3xl border p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                🔎
              </div>

              <div>

                <h1 className="font-bold text-slate-900">
                  Sadia Jannat
                </h1>

                <p className="text-sm text-green-500">
                  ● Online
                </p>

              </div>

            </div>

            <span className="px-3 py-2 rounded-lg bg-green-50 text-green-600 text-xs font-semibold">
              Problem Active
            </span>

          </div>

        </div>


        {/* Problem */}
        <div className="bg-purple-50 border-x border-purple-100 px-6 py-4">

          <p className="text-xs text-purple-500 font-semibold">
            CURRENT PROBLEM
          </p>

          <h2 className="font-bold text-purple-900 mt-1">
            Next.js authentication issue
          </h2>

        </div>


        {/* Chat */}
        <div className="bg-slate-50 border-x min-h-[450px] p-6 space-y-5">

          <div className="flex justify-start">
            <div className="bg-white border px-5 py-3 rounded-2xl rounded-bl-md max-w-md">
              Hello! I am having an authentication problem.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-purple-600 text-white px-5 py-3 rounded-2xl rounded-br-md max-w-md">
              Sure! Please send me the error message and your relevant code.
            </div>
          </div>

        </div>


        {/* Input */}
        <div className="bg-white rounded-b-3xl border p-4">

          <div className="flex gap-3">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your solution..."
              className="flex-1 px-5 py-3 rounded-xl bg-slate-50 border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={() => setMessage("")}
              className="px-6 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition"
            >
              Send
            </button>

          </div>

        </div>


        {/* Finish */}
        <div className="mt-5 flex justify-end">

          <button className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 transition">
            Mark Problem as Solved ✓
          </button>

        </div>

      </div>

    </main>
  );
}

