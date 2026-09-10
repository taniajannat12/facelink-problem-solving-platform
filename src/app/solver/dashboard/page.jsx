
"use client";

import Link from "next/link";

export default function SolverDashboard() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <p className="text-purple-200 text-sm">
            Problem Solver Dashboard
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Welcome back, Tania 👋
          </h1>

          <p className="text-purple-100 mt-3">
            Help people solve problems using your skills.
          </p>

          <Link
            href="/solver/requests"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-purple-700 font-semibold hover:bg-purple-50 transition"
          >
            View Problem Requests →
          </Link>

        </div>

      </section>


      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-7 relative">

        <div className="grid sm:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <p className="text-sm text-slate-400">
              Problems Solved
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              42
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <p className="text-sm text-slate-400">
              Active Problems
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              2
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <p className="text-sm text-slate-400">
              Average Rating
            </p>

            <h2 className="text-3xl font-bold text-yellow-500 mt-2">
              4.8 ⭐
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <p className="text-sm text-slate-400">
              Success Rate
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              96%
            </h2>
          </div>

        </div>

      </section>


      {/* Recent */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold text-slate-900">
          Recent Problems
        </h2>

        <p className="text-slate-500 mt-2">
          Problems you have recently helped solve.
        </p>


        <div className="grid md:grid-cols-2 gap-5 mt-7">

          {[
            "Next.js authentication issue",
            "MongoDB connection problem",
            "React component error",
            "Express API problem",
          ].map((problem, index) => (

            <div
              key={problem}
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >

              <div className="flex justify-between">

                <div>
                  <h3 className="font-bold text-slate-800">
                    {problem}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Problem Seeker • Recently
                  </p>
                </div>

                <span className="text-green-600 text-sm font-semibold">
                  Solved ✓
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
