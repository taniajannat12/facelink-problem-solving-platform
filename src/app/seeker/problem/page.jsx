
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  MessageCircle,
  Search,
  Users,
  AlertCircle,
} from "lucide-react";

export default function ProblemPage() {
  const router = useRouter();
  const [problem, setProblem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedSolver, setSelectedSolver] = useState("");
  const [error, setError] = useState("");

  const solutions = [
    {
      id: "database",
      title: "Solution Database",
      description: "Find relevant solutions from the FaceLink knowledge base.",
      accent: "indigo",
      icon: <Database size={22} />,
    },
    {
      id: "human",
      title: "Human Solver",
      description: "Connect with a skilled person who can help solve your problem.",
      accent: "violet",
      icon: <Users size={22} />,
    },
    {
      id: "ai",
      title: "AI Assistant",
      description: "Get instant guidance and suggestions for your problem.",
      accent: "cyan",
      icon: <Bot size={22} />,
    },
  ];

  const solvers = [
    {
      id: "1",
      name: "Rahim Hasan",
      role: "Full Stack Developer",
      skills: "Next.js · React · Authentication",
    },
    {
      id: "2",
      name: "Arif Hasan",
      role: "React Developer",
      skills: "React · Next.js · Firebase",
    },
    {
      id: "3",
      name: "Nabil Ahmed",
      role: "Backend Developer",
      skills: "Node.js · MongoDB · JWT",
    },
  ];

  const accentClasses = {
    indigo: {
      icon: "bg-indigo-50 text-indigo-600",
      selected: "border-indigo-400 bg-indigo-50/70 ring-2 ring-indigo-100",
      hover: "hover:border-indigo-200 hover:bg-indigo-50/40",
    },
    violet: {
      icon: "bg-violet-50 text-violet-600",
      selected: "border-violet-400 bg-violet-50/70 ring-2 ring-violet-100",
      hover: "hover:border-violet-200 hover:bg-violet-50/40",
    },
    cyan: {
      icon: "bg-cyan-50 text-cyan-600",
      selected: "border-cyan-400 bg-cyan-50/70 ring-2 ring-cyan-100",
      hover: "hover:border-cyan-200 hover:bg-cyan-50/40",
    },
  };

  const selectedSolverData = solvers.find(
    (solver) => solver.id === selectedSolver
  );

  function handleSearch(event) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      setError("Enter a technology or topic to search.");
      return;
    }

    setError("");
    router.push(
      `/seeker/dashboard/database?q=${encodeURIComponent(query)}`
    );
  }

  function handleContinue() {
    setError("");

    if (!problem.trim()) {
      setError("Describe your problem before continuing.");
      return;
    }

    if (!selected) {
      setError("Choose a solution path first.");
      return;
    }

    const params = new URLSearchParams({
      problem: problem.trim(),
    });

    if (selected === "database") {
      router.push(
        `/seeker/dashboard/database?${params.toString()}`
      );
      return;
    }

    if (selected === "ai") {
      router.push(`/seeker/dashboard/ai?${params.toString()}`);
      return;
    }

    if (!selectedSolver) {
      setError("Please select a solver before continuing.");
      return;
    }

    params.set("solverId", selectedSolver);
    params.set("solverName", selectedSolverData?.name || "");

    router.push(`/seeker/chat?${params.toString()}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-600">
                FaceLink Problem Center
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                What problem are you facing?
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Describe your problem and choose how you want to find a solution.
              </p>
            </div>

            <Link
              href="/seeker/dashboard"
              className="flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-indigo-600"
            >
              Dashboard
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        {error && (
          <div
            role="alert"
            className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Search size={19} />
              </div>
              <div>
                <h2 className="font-bold">Find a Solution</h2>
                <p className="text-xs text-slate-400">
                  Search by technology or topic
                </p>
              </div>
            </div>

            <form onSubmit={handleSearch} className="mt-5 flex gap-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setError("");
                }}
                placeholder="React, Next.js, MongoDB..."
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                <Search size={16} />
                Search
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <MessageCircle size={19} />
              </div>
              <div>
                <h2 className="font-bold">Describe Your Problem</h2>
                <p className="text-xs text-slate-400">
                  Give enough details to get useful help
                </p>
              </div>
            </div>

            <textarea
              value={problem}
              onChange={(event) => {
                setProblem(event.target.value.slice(0, 500));
                setError("");
              }}
              rows={5}
              maxLength={500}
              placeholder="Explain what you are trying to do, what happened, and any error you received..."
              className="mt-5 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />

            <div className="mt-2 flex justify-between gap-4 text-xs text-slate-400">
              <span>Clear details help others understand your problem.</span>
              <span className="shrink-0">{problem.length}/500</span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
            Solution Path
          </p>
          <h2 className="mt-1 text-xl font-bold">Choose How to Solve</h2>
          <p className="mt-1 text-sm text-slate-500">
            Select the option that best fits your problem.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {solutions.map((solution) => {
              const accent = accentClasses[solution.accent];
              const isSelected = selected === solution.id;

              return (
                <div
                  key={solution.id}
                  className={`rounded-2xl border transition duration-300 ${
                    isSelected
                      ? accent.selected
                      : `border-slate-200 bg-white ${accent.hover}`
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelected(solution.id);
                      setSelectedSolver("");
                      setError("");
                    }}
                    className="group w-full rounded-2xl p-5 text-left"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.icon} transition group-hover:scale-105`}
                      >
                        {solution.icon}
                      </div>

                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-600 text-white"
                            : "border-slate-300"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-5 font-bold text-slate-800">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {solution.description}
                    </p>
                    <div className="mt-5 text-xs font-semibold text-indigo-600">
                      {isSelected ? "Selected" : "Select option →"}
                    </div>
                  </button>

                  {solution.id === "human" && isSelected && (
                    <div className="px-5 pb-5">
                      <div className="border-t border-violet-200 pt-4">
                        <label
                          htmlFor="solver"
                          className="text-xs font-semibold text-slate-600"
                        >
                          Select a Solver
                        </label>
                        <select
                          id="solver"
                          value={selectedSolver}
                          onChange={(event) => {
                            setSelectedSolver(event.target.value);
                            setError("");
                          }}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                        >
                          <option value="">Choose a solver</option>
                          {solvers.map((solver) => (
                            <option key={solver.id} value={solver.id}>
                              {solver.name} — {solver.role}
                            </option>
                          ))}
                        </select>

                        {selectedSolverData && (
                          <div className="mt-3 rounded-xl bg-violet-50 p-3">
                            <p className="text-sm font-semibold text-slate-800">
                              {selectedSolverData.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {selectedSolverData.skills}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
              selected
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "cursor-not-allowed bg-slate-200 text-slate-400"
            }`}
          >
            {selected === "human" ? "Continue to Chat" : "Continue"}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
