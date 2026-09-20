

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
      description: "Search verified solutions already stored in FaceLink.",
      accent: "blue",
    },
    {
      id: "human",
      icon: "👨‍💻",
      title: "Human Problem Solver",
      description: "Connect with a skilled person who can solve your problem.",
      accent: "purple",
    },
    {
      id: "ai",
      icon: "🤖",
      title: "AI Chatbot",
      description: "Discuss your problem with an AI assistant instantly.",
      accent: "cyan",
    },
  ];

  const accentClasses = {
    blue: {
      iconBg: "bg-blue-500/10",
      border: "hover:border-blue-500/40",
      borderSelected: "border-blue-500 bg-blue-500/10",
      text: "text-blue-400",
    },
    purple: {
      iconBg: "bg-purple-500/10",
      border: "hover:border-purple-500/40",
      borderSelected: "border-purple-500 bg-purple-500/10",
      text: "text-purple-400",
    },
    cyan: {
      iconBg: "bg-cyan-500/10",
      border: "hover:border-cyan-500/40",
      borderSelected: "border-cyan-500 bg-cyan-500/10",
      text: "text-cyan-400",
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-10 right-0"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm mb-7">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            FaceLink Problem Center
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            What problem are you
            <span className="text-blue-400"> facing?</span>
          </h1>

          <p className="text-slate-400 mt-5 max-w-xl mx-auto leading-7">
            Describe your problem and choose the best way to solve it.
          </p>

        </div>

      </section>


      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

          <label className="font-bold text-slate-100">
            Search Problem / Technology
          </label>

          <div className="mt-3 flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Search React, Next.js, MongoDB..."
              className="flex-1 px-5 py-3 rounded-xl border border-white/10 bg-slate-900/60 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/40"
            />

            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20">
              Search
            </button>

          </div>

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 mt-6">

          <label className="font-bold text-slate-100">
            Describe Your Problem
          </label>

          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={6}
            placeholder="Explain your problem clearly..."
            className="w-full mt-3 px-5 py-4 rounded-xl border border-white/10 bg-slate-900/60 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500/40 resize-none"
          />

          <p className="text-xs text-slate-500 mt-2">
            The more details you provide, the easier it will be to find the
            right solution.
          </p>

        </div>


        <div className="mt-10">

          <h2 className="text-2xl font-bold text-slate-100">
            Choose Your Solution
          </h2>

          <p className="text-slate-400 mt-2">
            FaceLink gives you three ways to solve your problem.
          </p>


          <div className="grid md:grid-cols-3 gap-5 mt-6">

            {solutions.map((solution) => {
              const accent = accentClasses[solution.accent];
              const isSelected = selected === solution.id;

              return (
                <button
                  key={solution.id}
                  onClick={() => setSelected(solution.id)}
                  className={`group text-left p-6 rounded-3xl border transition duration-300 hover:-translate-y-2 ${
                    isSelected
                      ? accent.borderSelected
                      : `border-white/10 bg-white/5 ${accent.border}`
                  }`}
                >

                  <div className={`w-14 h-14 rounded-2xl ${accent.iconBg} flex items-center justify-center text-3xl group-hover:scale-110 transition`}>
                    {solution.icon}
                  </div>

                  <h3 className="font-bold text-lg text-slate-100 mt-6">
                    {solution.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-6 mt-3">
                    {solution.description}
                  </p>

                  <div className="mt-6">
                    {isSelected ? (
                      <span className={`${accent.text} font-semibold text-sm`}>
                        ✓ Selected
                      </span>
                    ) : (
                      <span className="text-slate-500 text-sm">
                        Select this option →
                      </span>
                    )}
                  </div>

                </button>
              );
            })}

          </div>

        </div>

        <div className="flex justify-end mt-8">

          <Link
            href={
              selected === "ai"
                ? "/seeker/chat"
                : selected === "human"
                ? "/seeker/chat"
                : "/seeker/dashboard"
            }
            className={`px-7 py-3.5 rounded-xl font-semibold text-white transition duration-300 ${
              selected
                ? "bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
                : "bg-slate-800 text-slate-500 pointer-events-none"
            }`}
          >
            Continue →
          </Link>

        </div>

      </section>

    </main>
  );
}

