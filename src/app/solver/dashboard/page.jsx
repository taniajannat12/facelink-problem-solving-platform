"use client";

import Link from "next/link";
import { useState } from "react";

export default function SolverDashboard() {
  const [available, setAvailable] = useState(true);

  const requests = [
    {
      id: 1,
      title: "Next.js Authentication Problem",
      seeker: "Arpita",
      category: "Next.js",
      time: "8 min ago",
      priority: "New",
    },
    {
      id: 2,
      title: "MongoDB Connection Error",
      seeker: "Nabila Hasan",
      category: "MongoDB",
      time: "24 min ago",
      priority: "New",
    },
    {
      id: 3,
      title: "React State Management",
      seeker: "Samiul Karim",
      category: "React",
      time: "1 hour ago",
      priority: "New",
    },
  ];

  const solvedProblems = [
    {
      title: "API Authentication Issue",
      seeker: "Tanvir Ahmed",
      satisfaction: 100,
    },
    {
      title: "MongoDB Schema Problem",
      seeker: "Mim Rahman",
      satisfaction: 60,
    },
    {
      title: "React Component Error",
      seeker: "Nusrat Jahan",
      satisfaction: 100,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      
          <nav className="flex-1 px-4 py-6">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Workspace
            </p>

            <div className="mt-3 space-y-1">
              <Link
                href="/solver/dashboard"
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
                href="/solver/chat"
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                <span className="flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 5h16v11H7l-3 3V5Z" />
                    <path d="M8 9h8M8 12h5" />
                  </svg>
                  Conversations
                </span>

                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
                  3
                </span>
              </Link>

              <Link
                href="/profile/solver"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" />
                </svg>
                My Profile
              </Link>
            </div>

            <p className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Account
            </p>

            <div className="mt-3">
              <button
                onClick={() => setAvailable(!available)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      available ? "bg-emerald-500" : "bg-slate-400"
                    }`}
                  />
                  {available ? "Available" : "Unavailable"}
                </span>

                <span
                  className={`h-5 w-9 rounded-full p-0.5 transition ${
                    available ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`block h-4 w-4 rounded-full bg-white shadow-sm transition ${
                      available ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>

          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                R
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-700">
                  Rahim Hasan
                </p>

                <p className="text-[10px] text-slate-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between px-6 py-5 md:px-8">
              <div>
                <p className="text-xs font-semibold text-indigo-600">
                  Solver Workspace
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight">
                  Good afternoon, Rahim
                </h1>

                <p className="mt-1 text-sm text-slate-400">
                  Here is what needs your attention today.
                </p>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">
                    Status
                  </p>

                  <p
                    className={`mt-0.5 text-xs font-bold ${
                      available ? "text-emerald-600" : "text-slate-500"
                    }`}
                  >
                    {available ? "Accepting problems" : "Unavailable"}
                  </p>
                </div>

                <Link
                  href="/solver/profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white transition hover:bg-indigo-600"
                >
                  R
                </Link>
              </div>
            </div>
          </header>

          <div className="px-6 py-7 md:px-8">
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="relative overflow-hidden rounded-2xl bg-indigo-600 p-5 text-white">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10" />

                <p className="text-xs font-medium text-indigo-200">
                  New Requests
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-bold">3</span>

                  <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-semibold">
                    Today
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-medium text-slate-400">
                  In Progress
                </p>

                <p className="mt-3 text-4xl font-bold text-slate-800">
                  2
                </p>

                <p className="mt-2 text-[11px] text-slate-400">
                  Conversations active
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-medium text-slate-400">
                  Solved
                </p>

                <p className="mt-3 text-4xl font-bold text-slate-800">
                  42
                </p>

                <p className="mt-2 text-[11px] text-emerald-500">
                  +6 this month
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-medium text-slate-400">
                  Satisfaction
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <p className="text-4xl font-bold text-slate-800">
                    86%
                  </p>

                  <span className="mb-1 text-[11px] font-semibold text-emerald-500">
                    Overall
                  </span>
                </div>

                <div className="mt-3 h-1.5 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: "86%" }}
                  />
                </div>
              </div>
            </section>

            <section className="mt-7 grid gap-6 xl:grid-cols-[1.6fr_0.7fr]">
              <div className="rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                  <div>
                    <h2 className="font-bold text-slate-800">
                      Incoming Problems
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                      Requests matched with your expertise
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-indigo-600">
                    3 waiting
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {requests.map((request) => (
                    <div
                      key={request.id}
                      className="group px-6 py-5 transition hover:bg-slate-50"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">
                            {request.seeker.charAt(0)}

                            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
                          </div>

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="truncate text-sm font-bold text-slate-800 group-hover:text-indigo-600">
                                {request.title}
                              </h3>

                              <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[9px] font-bold uppercase text-indigo-600">
                                New
                              </span>
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                              <span>{request.seeker}</span>
                              <span>•</span>
                              <span>{request.category}</span>
                              <span>•</span>
                              <span>{request.time}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href="/solver/chat"
                          className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          Open Discussion
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 px-6 py-4">
                  <Link
                    href="/solver/chat"
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    View all conversations →
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
                      Your Focus
                    </p>

                    <h2 className="mt-2 text-xl font-bold">
                      Expertise
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-indigo-300">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 3v18M3 12h18" />
                    </svg>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    ["React", "12 requests"],
                    ["Next.js", "9 requests"],
                    ["MongoDB", "7 requests"],
                    ["Node.js", "5 requests"],
                  ].map(([skill, count], index) => (
                    <div key={skill}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-300">
                          {skill}
                        </span>

                        <span className="text-[10px] text-slate-500">
                          {count}
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-indigo-400"
                          style={{
                            width: `${90 - index * 15}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/solver/profile"
                  className="mt-7 block border-t border-white/10 pt-5 text-xs font-semibold text-indigo-300 transition hover:text-white"
                >
                  Manage expertise →
                </Link>
              </div>
            </section>

            <section className="mt-7">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Activity
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Recently solved
                  </h2>
                </div>

                <Link
                  href="/solver/profile"
                  className="text-xs font-semibold text-indigo-600"
                >
                  View history →
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {solvedProblems.map((problem) => (
                  <div
                    key={problem.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Completed
                      </span>

                      <span className="text-xs font-bold text-slate-700">
                        {problem.satisfaction}%
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-bold text-slate-800 transition group-hover:text-indigo-600">
                      {problem.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Helped {problem.seeker}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-emerald-500"
                          style={{
                            width: `${problem.satisfaction}%`,
                          }}
                        />
                      </div>

                      <span className="text-[10px] text-slate-400">
                        satisfied
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-7 pb-8">
              <div className="flex flex-col gap-5 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-cyan-50 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-500">
                    Solver status
                  </p>

                  <h2 className="mt-2 text-lg font-bold text-slate-800">
                    {available
                      ? "You are currently accepting new problems."
                      : "You are currently unavailable for new problems."}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Change your availability anytime from the workspace.
                  </p>
                </div>

                <button
                  onClick={() => setAvailable(!available)}
                  className="w-fit rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white transition hover:bg-indigo-600"
                >
                  {available
                    ? "Set Unavailable"
                    : "Become Available"}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}