
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProblemPage() {
  const [problem, setProblem] = useState("");
  const [selected, setSelected] = useState("");

  const solutions = [
    {
      id: "database",
      icon: "📚",
      title: "Solution Database",
      description:
        "Search verified solutions already stored in FaceLink.",
      color: "blue",
    },
    {
      id: "human",
      icon: "👨‍💻",
      title: "Human Problem Solver",
      description:
        "Connect with a skilled person who can solve your problem.",
      color: "purple",
    },
    {
      id: "ai",
      icon: "🤖",
      title: "AI Chatbot",
      description:
        "Discuss your problem with an AI assistant instantly.",
      color: "cyan",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

        <div className="max-w-5xl mx-auto px-6 py-14 text-center">

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest">
            FaceLink Problem Center
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            What problem are you facing?
          </h1>

          <p className="text-blue-100 mt-4">
            Describe your problem and choose the best way to solve it.
          </p>

        </div>

      </section>


      <section className="max-w-5xl mx-auto px-6 py-12">

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-sm border p-7">

          <label className="font-bold text-slate-800">
            Search Problem / Technology
          </label>

          <div className="mt-3 flex gap-3">

            <input
              type="text"
              placeholder="Search React, Next.js, MongoDB..."
              className="flex-1 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="px-6 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition">
              Search
            </button>

          </div>

        </div>


        {/* Problem Input */}
        <div className="bg-white rounded-3xl shadow-sm border p-7 mt-6">

          <label className="font-bold text-slate-800">
            Describe Your Problem
          </label>

          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={6}
            placeholder="Explain your problem clearly..."
            className="w-full mt-3 px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <p className="text-xs text-slate-400 mt-2">
            The more details you provide, the easier it will be to find the
            right solution.
          </p>

        </div>


        {/* Solutions */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold text-slate-900">
            Choose Your Solution
          </h2>

          <p className="text-slate-500 mt-2">
            FaceLink gives you three ways to solve your problem.
          </p>


          <div className="grid md:grid-cols-3 gap-5 mt-6">

            {solutions.map((solution) => (

              <button
                key={solution.id}
                onClick={() => setSelected(solution.id)}
                className={`text-left p-6 rounded-3xl border-2 transition duration-300 hover:-translate-y-2 ${
                  selected === solution.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-slate-100 bg-white hover:border-blue-200"
                }`}
              >

                <div className="text-4xl">
                  {solution.icon}
                </div>

                <h3 className="font-bold text-lg text-slate-900 mt-5">
                  {solution.title}
                </h3>

                <p className="text-sm text-slate-500 leading-6 mt-3">
                  {solution.description}
                </p>

                <div className="mt-5">

                  {selected === solution.id ? (
                    <span className="text-blue-600 font-semibold text-sm">
                      ✓ Selected
                    </span>
                  ) : (
                    <span className="text-slate-400 text-sm">
                      Select this option →
                    </span>
                  )}

                </div>

              </button>

            ))}

          </div>

        </div>


        {/* Submit */}
        <div className="flex justify-end mt-8">

          <Link
            href={
              selected === "ai"
                ? "/seeker/chat"
                : selected === "human"
                ? "/seeker/chat"
                : "/seeker/dashboard"
            }
            className={`px-7 py-3.5 rounded-xl font-semibold text-white transition ${
              selected
                ? "bg-blue-600 hover:bg-blue-500 shadow-lg"
                : "bg-slate-300 pointer-events-none"
            }`}
          >
            Continue →
          </Link>

        </div>

      </section>

    </main>
  );
}

