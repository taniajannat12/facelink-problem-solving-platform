"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Database } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SolutionsPage() {
  const problem = "Next.js authentication issue";

  const solution = {
    title: "Next.js Authentication Issue",
    answer:
      "Check your authentication configuration and make sure your authentication provider, session settings, and environment variables are correctly configured. Also verify that the required authentication route is working properly.",
    category: "Next.js",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
     

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Link
          href="/seeker/problem"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to Problem
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          
          <div className="px-6 py-5 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Database size={20} />
              </div>

              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  Solution Database
                </h1>

                <p className="text-xs text-slate-400">
                  Solution found from FaceLink database
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                Your Problem
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-sm font-medium text-slate-800">
                  {problem}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2
                  size={19}
                  className="text-emerald-500"
                />

                <h2 className="font-semibold text-slate-900">
                  Solution
                </h2>
              </div>

              <div className="border border-indigo-100 bg-indigo-50/50 rounded-xl p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="font-semibold text-slate-900">
                    {solution.title}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-white text-indigo-600 border border-indigo-100">
                    {solution.category}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-7">
                  {solution.answer}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
            <Link
              href="/seeker/problem"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
            >
              Search another problem
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}