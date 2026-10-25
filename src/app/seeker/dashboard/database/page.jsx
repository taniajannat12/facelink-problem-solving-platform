"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Database,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  FileText,
  Lightbulb,
  X,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Next.js Authentication Issue",
    category: "Next.js",
    keywords: ["next.js", "nextjs", "authentication", "auth", "login", "session"],
    problem: "Authentication is not working correctly in a Next.js application.",
    answer:
      "Check your authentication provider configuration, session settings, environment variables, and authentication routes. Make sure your environment variables are correctly configured and restart the development server after changing them.",
    steps: [
      "Verify your authentication provider configuration.",
      "Check the required environment variables in your .env.local file.",
      "Confirm that the login and callback routes are correct.",
      "Check the browser console and terminal for error messages.",
      "Restart the development server after configuration changes.",
    ],
  },
  {
    id: 2,
    title: "React State Management",
    category: "React",
    keywords: ["react", "state", "usestate", "hooks", "component", "render"],
    problem: "React component state is not updating or the UI is showing outdated data.",
    answer:
      "Use the appropriate React state hook and update state through its setter function. Avoid directly modifying arrays or objects stored in state.",
    steps: [
      "Check whether the component uses useState correctly.",
      "Update state using the setter function.",
      "Create a new array or object instead of mutating existing state.",
      "Check the component props and state dependencies.",
      "Inspect the browser console for React errors.",
    ],
  },
  {
    id: 3,
    title: "MongoDB Connection Error",
    category: "MongoDB",
    keywords: ["mongodb", "mongo", "database", "connection", "mongoose"],
    problem: "The application cannot connect to the MongoDB database.",
    answer:
      "Verify the connection string, database credentials, network access, and server status. Keep database credentials in environment variables rather than exposing them in frontend code.",
    steps: [
      "Confirm that the database service or cluster is running.",
      "Check the MongoDB connection string.",
      "Verify database username and password.",
      "Check network access and IP allowlist settings.",
      "Review the backend terminal for the complete error message.",
    ],
  },
  {
    id: 4,
    title: "API Fetching Error",
    category: "JavaScript",
    keywords: ["api", "fetch", "javascript", "request", "response", "404"],
    problem: "The application cannot retrieve data from an API.",
    answer:
      "Verify the API URL, HTTP method, server status, and response status. Handle loading and error states, and make sure the frontend is requesting the correct backend endpoint.",
    steps: [
      "Verify the API endpoint and port number.",
      "Check that the backend server is running.",
      "Use the correct HTTP method and request headers.",
      "Check response.ok before processing the response.",
      "Inspect the browser Network tab and backend terminal.",
    ],
  },
  {
    id: 5,
    title: "Tailwind CSS Styles Not Working",
    category: "Tailwind CSS",
    keywords: ["tailwind", "css", "style", "design", "class", "styling"],
    problem: "Tailwind CSS utility classes are not applying to the page.",
    answer:
      "Check your Tailwind CSS setup, global stylesheet imports, and the files included in your CSS configuration. Confirm that the class names are valid and restart the development server if configuration files were changed.",
    steps: [
      "Confirm that the global CSS file is imported in the root layout.",
      "Verify that Tailwind CSS is configured for your project version.",
      "Check for spelling errors in utility class names.",
      "Avoid dynamically constructing class names that Tailwind cannot detect.",
      "Restart the development server after configuration changes.",
    ],
  },
];

export default function SolutionsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);
  const [activeSolution, setActiveSolution] = useState(null);

  useEffect(() => {
    setQuery(urlQuery);
    setActiveSolution(null);
  }, [urlQuery]);

  const filteredSolutions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return solutions;

    return solutions.filter((item) => {
      const searchableText = [
        item.title,
        item.category,
        item.problem,
        item.answer,
        ...item.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

  const selectedSolution =
    filteredSolutions.find((item) => item.id === activeSolution) ||
    filteredSolutions[0] ||
    null;

  function handleSearch(event) {
    event.preventDefault();

    const trimmedQuery = query.trim();
    const destination = trimmedQuery
      ? `/seeker/dashboard/database?q=${encodeURIComponent(trimmedQuery)}`
      : "/seeker/dashboard/database";

    setActiveSolution(null);
    router.push(destination);
  }

  function clearSearch() {
    setQuery("");
    setActiveSolution(null);
    router.push("/seeker/dashboard/database");
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/seeker/problem"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          <ArrowLeft size={18} />
          Back to Problem
        </Link>

        <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-6 text-white shadow-lg sm:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Database size={26} />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-100">
                FaceLink Knowledge Base
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Find solutions from the database
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
                Search existing solutions, explore common technical issues,
                and find practical steps to solve your problem.
              </p>
            </div>

            <div className="hidden h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 md:flex">
              <BookOpen size={54} strokeWidth={1.4} />
            </div>
          </div>

          <form
            onSubmit={handleSearch}
            className="mt-7 flex flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Search className="shrink-0 text-slate-400" size={21} />

              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveSolution(null);
                }}
                placeholder="Search React, Next.js, API, MongoDB..."
                className="w-full border-0 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Search size={17} />
              Search
            </button>
          </form>
        </section>

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Available Solutions
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Browse the knowledge base and select a solution to view details.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            <Database size={16} />
            {filteredSolutions.length}{" "}
            {filteredSolutions.length === 1 ? "result" : "results"}
          </span>
        </div>

        {filteredSolutions.length === 0 ? (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <Search size={27} />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              No matching solutions found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              Try another keyword, such as React, Next.js, MongoDB, API, or
              Tailwind CSS.
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Show all solutions
            </button>
          </section>
        ) : (
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5">
            <section className="space-y-3 lg:col-span-2">
              {filteredSolutions.map((item) => {
                const isActive = selectedSolution?.id === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSolution(item.id)}
                    className={`w-full rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-indigo-300 bg-indigo-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <FileText size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-indigo-700">
                          {item.category}
                        </span>

                        <h3 className="mt-2 font-bold leading-6 text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-500">
                          {item.problem}
                        </p>
                      </div>

                      <ChevronRight
                        size={19}
                        className={`mt-1 shrink-0 ${
                          isActive ? "text-indigo-600" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </section>

            {selectedSolution && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={27} />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Database Solution
                    </span>

                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      {selectedSolution.title}
                    </h2>

                    <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {selectedSolution.category}
                    </span>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <h3 className="flex items-center gap-2 font-bold text-slate-900">
                    <Lightbulb size={19} className="text-amber-500" />
                    Problem Description
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {selectedSolution.problem}
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="font-bold text-slate-900">
                    Recommended Solution
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {selectedSolution.answer}
                  </p>
                </div>

                <div className="mt-7">
                  <h3 className="font-bold text-slate-900">
                    Step-by-Step Guide
                  </h3>

                  <div className="mt-4 space-y-4">
                    {selectedSolution.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                          {index + 1}
                        </span>

                        <p className="pt-1 text-sm leading-6 text-slate-600">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row">
                  <Link
                    href="/seeker/problem"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <ArrowLeft size={17} />
                    Back to Problem
                  </Link>

                  <Link
                    href={`/seeker/chat?problem=${encodeURIComponent(selectedSolution.title)}`}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Ask a Solver
                  </Link>
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
