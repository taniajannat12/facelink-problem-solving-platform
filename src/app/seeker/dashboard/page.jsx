"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Clock3,
  MessageCircle,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SeekerDashboard() {
  const [markingProblem, setMarkingProblem] = useState(null);
  const [marks, setMarks] = useState({});

  const problems = [
    {
      id: 1,
      title: "Next.js Authentication Problem",
      solver: "Arif Hasan",
      type: "Human Solver",
      status: "In Progress",
      category: "Next.js",
    },
    {
      id: 2,
      title: "MongoDB Connection Error",
      solver: "Rahim Hasan",
      type: "Human Solver",
      status: "Solved",
      category: "MongoDB",
    },
    {
      id: 3,
      title: "React State Management",
      solver: "FaceLink AI",
      type: "AI Solution",
      status: "Solved",
      category: "React",
    },
  ];

  const markSolver = (problemId, mark) => {
    setMarks((prev) => ({
      ...prev,
      [problemId]: mark,
    }));

    setMarkingProblem(null);
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
    

      <div className="mx-auto flex max-w-[1500px]">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
          <nav className="flex-1 px-4 py-7">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Seeker Workspace
            </p>

            <div className="mt-3 space-y-1">
              <Link
                href="/seeker/dashboard"
                className="flex items-center gap-3 rounded-xl bg-indigo-50 px-3 py-3 text-sm font-semibold text-indigo-600"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
                Overview
              </Link>

              

              <Link
                href="/seeker/chat"
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={18} />
                  Conversations
                </span>

                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
                  1
                </span>
              </Link>

              <Link
                href="/profile/seeker"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                <UserRound size={18} />
                My Profile
              </Link>
            </div>

            <p className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Quick Action
            </p>

            <div className="mt-3">
              <Link
                href="/seeker/problem"
                className="flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                <Sparkles size={18} />
                Submit a Problem
              </Link>
            </div>
          </nav>

          <div className="border-t border-slate-100 p-4">
            <Link
              href="/profile/seeker"
              className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-indigo-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-700">
                  Arpita Rahman
                </p>

                <p className="text-[10px] text-slate-400">
                  Problem Seeker
                </p>
              </div>
            </Link>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <section className="relative overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-indigo-100/60 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-violet-100/50 blur-3xl" />

            <div className="relative px-5 py-9 md:px-8 md:py-11">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <CircleHelp size={15} />
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-500">
                      Seeker Dashboard
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Welcome back, Arpita
                  </h1>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Track your problems, conversations and solutions in one
                    place.
                  </p>
                </div>

                <Link
                  href="/seeker/problem"
                  className="group inline-flex w-fit items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Submit a Problem
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </section>

          <div className="px-5 py-7 md:px-8">
            <section className="grid gap-4 md:grid-cols-3">
              <Link
                href="/seeker/problems"
                className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-sm transition hover:-translate-y-1"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />

                <p className="text-xs font-semibold text-indigo-100">
                  Problems Submitted
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <p className="text-4xl font-bold">18</p>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <CircleHelp size={19} />
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-indigo-100">
                  Total problems you've shared
                </p>
              </Link>

              <Link
                href="/seeker/problems"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-400">
                    Problems Solved
                  </p>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={18} />
                  </span>
                </div>

                <p className="mt-4 text-4xl font-bold text-slate-800">
                  15
                </p>

                <p className="mt-2 text-[11px] text-emerald-500">
                  Successfully completed
                </p>
              </Link>

              <Link
                href="/seeker/problems"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-400">
                    Active Problems
                  </p>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Clock3 size={18} />
                  </span>
                </div>

                <p className="mt-4 text-4xl font-bold text-slate-800">
                  3
                </p>

                <p className="mt-2 text-[11px] text-amber-500">
                  Currently being discussed
                </p>
              </Link>
            </section>

            <section className="mt-7">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                    Your Activity
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-800">
                    My Problems
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Recent problems and their current progress
                  </p>
                </div>

                <Link
                  href="/seeker/problems"
                  className="hidden items-center gap-1 text-xs font-bold text-indigo-600 transition hover:text-indigo-800 sm:flex"
                >
                  View All
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {problems.map((problem, index) => {
                  const mark = marks[problem.id];

                  return (
                    <div
                      key={problem.id}
                      className={`group px-5 py-5 transition hover:bg-slate-50/70 md:px-6 ${
                        index !== problems.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <Link
                          href={`/seeker/problems/${problem.id}`}
                          className="flex min-w-0 items-start gap-4"
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                              problem.type === "AI Solution"
                                ? "bg-violet-50 text-violet-600"
                                : "bg-indigo-50 text-indigo-600"
                            }`}
                          >
                            {problem.type === "AI Solution" ? (
                              <Sparkles size={19} />
                            ) : (
                              <CircleHelp size={19} />
                            )}
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-sm font-bold text-slate-800 transition group-hover:text-indigo-600">
                                {problem.title}
                              </h3>

                              <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-bold text-slate-500">
                                {problem.category}
                              </span>
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                              <span className="text-slate-400">
                                {problem.type}
                              </span>

                              <span className="text-slate-300">•</span>

                              <span className="font-semibold text-slate-600">
                                {problem.solver}
                              </span>
                            </div>

                            {mark && problem.type === "Human Solver" && (
                              <div className="mt-3 flex items-center gap-3">
                                <span className="text-[11px] font-semibold text-slate-400">
                                  Satisfaction
                                </span>

                                <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                                  <div
                                    className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                                    style={{ width: `${mark}%` }}
                                  />
                                </div>

                                <span className="text-[11px] font-bold text-indigo-600">
                                  {mark}%
                                </span>
                              </div>
                            )}
                          </div>
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
                          <span
                            className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                              problem.status === "Solved"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {problem.status}
                          </span>

                          {problem.status === "In Progress" ? (
                            <Link
                              href="/seeker/chat"
                              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              Open Chat
                            </Link>
                          ) : problem.type === "Human Solver" ? (
                            <button
                              onClick={() => setMarkingProblem(problem)}
                              className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                                mark
                                  ? "border border-indigo-100 bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                                  : "bg-indigo-600 text-white hover:bg-indigo-700"
                              }`}
                            >
                              {mark ? "Change Rating" : "Rate Solution"}
                            </button>
                          ) : (
                            <Link
                              href="/seeker/ai"
                              className="rounded-lg border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-bold text-violet-600 transition hover:bg-violet-100"
                            >
                              View AI Solution
                            </Link>
                          )}
                        </div>
                      </div>

                      {problem.status === "In Progress" && (
                        <div className="mt-4 ml-15 flex flex-wrap gap-2">
                          <Link
                            href="/seeker/chat"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
                          >
                            <MessageCircle size={14} />
                            Open Conversation
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mt-7 pb-5">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-8 text-white md:px-9">
                <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-indigo-600/20 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-indigo-300">
                        <Sparkles size={15} />
                      </span>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
                        Need Help?
                      </p>
                    </div>

                    <h2 className="mt-3 text-xl font-bold">
                      Have another problem to solve?
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Share it and connect with someone who can help.
                    </p>
                  </div>

                  <Link
                    href="/seeker/problem"
                    className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-indigo-50"
                  >
                    Ask a Problem
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {markingProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Star size={21} />
              </div>

              <h2 className="mt-4 text-xl font-bold text-slate-800">
                Rate the Solution
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                How satisfied are you with the solution provided by
              </p>

              <p className="mt-2 font-bold text-indigo-600">
                {markingProblem.solver}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {markingProblem.title}
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <button
                onClick={() => markSolver(markingProblem.id, 30)}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div>
                  <p className="font-bold text-slate-800">30%</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Partially Satisfied
                  </p>
                </div>

                <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600">
                  Select
                </span>
              </button>

              <button
                onClick={() => markSolver(markingProblem.id, 60)}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div>
                  <p className="font-bold text-slate-800">60%</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Satisfied
                  </p>
                </div>

                <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600">
                  Select
                </span>
              </button>

              <button
                onClick={() => markSolver(markingProblem.id, 100)}
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div>
                  <p className="font-bold text-slate-800">100%</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Fully Satisfied
                  </p>
                </div>

                <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600">
                  Select
                </span>
              </button>
            </div>

            <button
              onClick={() => setMarkingProblem(null)}
              className="mt-4 w-full rounded-xl py-2.5 text-sm font-semibold text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}