"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SolverProfilePage() {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  const problems = [
    {
      title: "Next.js authentication issue",
      category: "Authentication",
      satisfaction: 100,
      seeker: "Nabila Hasan",
    },
    {
      title: "MongoDB connection problem",
      category: "Database",
      satisfaction: 60,
      seeker: "Tanvir Ahmed",
    },
    {
      title: "React state management issue",
      category: "React",
      satisfaction: 100,
      seeker: "Nusrat Jahan",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
 

      <section className="relative">
        <div className="h-64 overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-cyan-500">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-[12%] top-16 h-32 w-32 rounded-full border border-white/40" />
            <div className="absolute right-[15%] top-8 h-48 w-48 rounded-full border border-white/30" />
            <div className="absolute bottom-[-80px] left-[45%] h-56 w-56 rounded-full border border-white/20" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="-mt-20 flex flex-col gap-6 md:flex-row md:items-end">
            <div className="relative shrink-0">
              <div className="flex h-36 w-36 items-center justify-center rounded-[2.5rem] border-8 border-[#f7f9fc] bg-slate-900 text-5xl font-bold text-white shadow-2xl">
                R
              </div>

              <span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-white bg-emerald-500" />
            </div>

            <div className="pb-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold text-indigo-600">
                  VERIFIED SOLVER
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available now
                </span>
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                Rahim Hasan
              </h1>

              <p className="mt-1 text-sm font-medium text-slate-500">
                Full Stack Developer · Web Problem Solver
              </p>
            </div>

            <div className="pb-2 md:ml-auto">
              <Link
                href="/seeker/problem"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-indigo-600"
              >
                Ask for Help
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
                About the Solver
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Solving problems through conversation.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Rahim helps developers understand difficult technical issues,
                debug errors, and find practical solutions. His focus is on
                clear explanations rather than simply giving an answer.
              </p>
            </div>

            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">
                Expertise
              </p>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
                    Track Record
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Recent solutions
                  </h2>
                </div>

                <span className="text-xs font-medium text-slate-400">
                  42 problems solved
                </span>
              </div>

              <div className="mt-6">
                {problems.map((problem, index) => (
                  <div
                    key={problem.title}
                    className="group relative flex gap-5 py-6"
                  >
                    {index !== problems.length - 1 && (
                      <div className="absolute left-[17px] top-14 h-full w-px bg-slate-200" />
                    )}

                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-800 transition group-hover:text-indigo-600">
                            {problem.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                            <span>{problem.category}</span>
                            <span>•</span>
                            <span>Helped {problem.seeker}</span>
                          </div>
                        </div>

                        <span className="shrink-0 text-xs font-bold text-emerald-600">
                          {problem.satisfaction}% Satisfied
                        </span>
                      </div>

                      <div className="mt-4 h-1.5 max-w-md overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all"
                          style={{
                            width: `${problem.satisfaction}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="relative">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-7 text-white shadow-xl">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-2xl" />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                    Satisfaction
                  </p>

                  <div className="mt-6 flex items-end gap-3">
                    <span className="text-6xl font-bold tracking-tight">
                      86
                    </span>

                    <span className="mb-2 text-2xl font-semibold text-indigo-300">
                      %
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Average seeker satisfaction
                  </p>

                  <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                      style={{ width: "86%" }}
                    />
                  </div>

                  <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Fully
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold">10</p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Satisfied
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Partial
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs text-slate-400">
                    Community
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    31 people helped
                  </p>
                </div>

                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f9fc] bg-indigo-500 text-[10px] font-bold text-white">
                    N
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f9fc] bg-violet-500 text-[10px] font-bold text-white">
                    T
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f9fc] bg-cyan-500 text-[10px] font-bold text-white">
                    S
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f9fc] bg-slate-700 text-[9px] font-bold text-white">
                    +28
                  </span>
                </div>
              </div>

              <div className="pt-5">
                <p className="text-xs text-slate-400">
                  Member since
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-700">
                  September 2026
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 px-8 py-10 text-white">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />
          <div className="absolute -right-8 -bottom-28 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Connect with Rahim
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Have a problem to solve?
              </h2>

              <p className="mt-2 max-w-lg text-sm text-white/75">
                Start a discussion and work through your problem together.
              </p>
            </div>

            <Link
              href="/seeker/problem"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-bold text-indigo-600 transition hover:-translate-y-1 hover:bg-indigo-50"
            >
              Start a Discussion →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}