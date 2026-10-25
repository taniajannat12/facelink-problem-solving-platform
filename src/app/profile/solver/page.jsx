"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SolverProfilePage() {
  const [profile, setProfile] = useState(null);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/solver/profile",
          { signal: controller.signal }
        );

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(
            data?.message || `Failed to load solver profile (${response.status}).`
          );
        }

        if (!data?.success || !data?.profile) {
          throw new Error("Solver profile data is unavailable.");
        }

        setProfile(data.profile);
        setProblems(Array.isArray(data.problems) ? data.problems : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to load solver profile.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Loading solver profile...
          </p>
        </div>
      </main>
    );
  }

  if (error || !profile) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f9fc] px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-2xl font-bold text-red-500">
          !
        </div>
        <h1 className="text-xl font-bold text-slate-800">
          Unable to load profile
        </h1>
        <p className="max-w-md text-center text-sm leading-6 text-slate-500">
          {error || "Solver profile not available."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Try Again
        </button>
        <Link href="/" className="text-sm font-semibold text-indigo-600">
          Back to Home
        </Link>
      </main>
    );
  }

  const satisfaction = Math.min(
    100,
    Math.max(0, Number(profile.satisfaction) || 0)
  );

  const communityInitials = [
    ...new Set(
      problems
        .map((problem) => problem.seeker?.trim()?.charAt(0)?.toUpperCase())
        .filter(Boolean)
    ),
  ].slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9fc] text-slate-900">
      <section className="relative">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-600 to-cyan-500 sm:h-64">
          <div className="absolute left-[12%] top-12 h-32 w-32 rounded-full border border-white/30 sm:h-40 sm:w-40" />
          <div className="absolute right-[10%] top-6 h-40 w-40 rounded-full border border-white/30 sm:h-52 sm:w-52" />
          <div className="absolute bottom-[-100px] left-[40%] h-56 w-56 rounded-full border border-white/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 md:flex-row md:items-end">
            <div className="relative w-fit shrink-0">
              <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border-[6px] border-[#f7f9fc] bg-slate-900 text-5xl font-bold text-white shadow-xl sm:h-36 sm:w-36">
                {profile.name?.trim()?.charAt(0)?.toUpperCase() || "S"}
              </div>
              {profile.available && (
                <span className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4 border-[#f7f9fc] bg-emerald-500" />
              )}
            </div>

            <div className="min-w-0 pb-2">
              <div className="flex flex-wrap items-center gap-2">
                {profile.verified && (
                  <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-bold tracking-wide text-indigo-600">
                    VERIFIED SOLVER
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      profile.available ? "bg-emerald-500" : "bg-slate-400"
                    }`}
                  />
                  {profile.available ? "Available now" : "Currently unavailable"}
                </span>
              </div>

              <h1 className="mt-3 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {profile.title}
              </p>
            </div>

            <div className="pb-2 md:ml-auto">
              <Link
                href="/seeker/problem"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600"
              >
                Ask for Help <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-6 sm:pt-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
          <div className="min-w-0">
            <section>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
                About the Solver
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">
                Solving problems through conversation.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                {profile.about || "This solver has not added an introduction yet."}
              </p>
            </section>

            <section className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">
                Expertise
              </p>
              {Array.isArray(profile.skills) && profile.skills.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-400">No skills added yet.</p>
              )}
            </section>

            <section className="mt-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
                    Track Record
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">Recent solutions</h2>
                </div>
                <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                  {profile.problemsSolved ?? 0} problems solved
                </span>
              </div>

              <div className="mt-5 divide-y divide-slate-200">
                {problems.length === 0 ? (
                  <p className="py-6 text-sm text-slate-500">
                    No recent solutions available.
                  </p>
                ) : (
                  problems.map((problem, index) => {
                    const score = Math.min(
                      100,
                      Math.max(0, Number(problem.satisfaction) || 0)
                    );

                    return (
                      <article
                        key={problem.id || problem.title || index}
                        className="group flex gap-4 py-6 sm:gap-5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                          <span className="text-sm font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h3 className="break-words font-semibold text-slate-800 transition group-hover:text-indigo-600">
                                {problem.title}
                              </h3>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                <span className="rounded-full bg-slate-100 px-2.5 py-1">
                                  {problem.category || "General"}
                                </span>
                                <span>Helped {problem.seeker || "Community member"}</span>
                              </div>
                            </div>

                            <span className="w-fit shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                              {score}% satisfied
                            </span>
                          </div>

                          <div className="mt-4 h-1.5 max-w-md overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-700"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </section>
          </div>

          <aside className="min-w-0">
            <div className="lg:sticky lg:top-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-7 text-white shadow-xl">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-2xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                    Satisfaction
                  </p>

                  <div className="mt-6 flex items-end gap-3">
                    <span className="text-6xl font-bold tracking-tight">
                      {satisfaction}
                    </span>
                    <span className="mb-2 text-2xl font-semibold text-indigo-300">%</span>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Average seeker satisfaction
                  </p>

                  <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                      style={{ width: `${satisfaction}%` }}
                    />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
                    <div>
                      <p className="text-2xl font-bold">{profile.fullySatisfied ?? 0}</p>
                      <p className="mt-1 text-[11px] text-slate-400">Fully</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{profile.satisfied ?? 0}</p>
                      <p className="mt-1 text-[11px] text-slate-400">Satisfied</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{profile.partial ?? 0}</p>
                      <p className="mt-1 text-[11px] text-slate-400">Partial</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Community</p>
                  <p className="mt-1 text-sm font-bold">
                    {profile.peopleHelped ?? 0} people helped
                  </p>
                </div>

                <div className="flex shrink-0 items-center pl-2">
                  {communityInitials.length > 0 ? (
                    communityInitials.map((initial, index) => (
                      <span
                        key={`${initial}-${index}`}
                        className={`-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#f7f9fc] text-xs font-bold text-white ${
                          ["bg-indigo-500", "bg-violet-500", "bg-cyan-600"][index % 3]
                        }`}
                      >
                        {initial}
                      </span>
                    ))
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                      {profile.name?.charAt(0) || "S"}
                    </span>
                  )}
                  <span className="ml-1 rounded-full bg-indigo-50 px-2.5 py-1.5 text-[11px] font-bold text-indigo-600">
                    Community
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 py-5">
                <div>
                  <p className="text-xs text-slate-400">Member since</p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {profile.joined || "Recently joined"}
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                </div>
              </div>

              <div className="mt-2 rounded-2xl border border-indigo-100 bg-white p-5">
                <p className="text-sm font-bold text-slate-800">Solver account</p>
                <p className="mt-2 break-all text-xs text-slate-500">
                  {profile.email || "Email not provided"}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  ID: {profile.id || "Not assigned"}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 px-6 py-9 text-white sm:px-8 sm:py-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />
          <div className="absolute -bottom-28 -right-8 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Connect with {profile.name}
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Have a problem to solve?
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">
                Start a discussion and work through your problem together.
              </p>
            </div>

            <Link
              href="/seeker/problem"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-600 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Start a Discussion →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}