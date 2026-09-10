"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("seeker");

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-10 flex-col justify-between">

          <div>
            <Link href="/" className="text-3xl font-bold">
              FaceLink
            </Link>

            <h2 className="text-4xl font-bold mt-16 leading-tight">
              Find solutions.
              <br />
              Solve problems.
              <br />
              Connect with people.
            </h2>

            <p className="mt-6 text-blue-100 leading-7">
              FaceLink connects people with the right solution through
              a solution database, human problem solvers, and AI assistance.
            </p>
          </div>

          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
            <p className="text-sm text-blue-100">
              One Problem → Three Ways to Find a Solution
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="p-7 sm:p-10">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Create your account
            </h1>

            <p className="text-slate-500 mt-2">
              Join FaceLink and start solving problems.
            </p>
          </div>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Choose your role
              </label>

              <div className="grid grid-cols-2 gap-3">

                {/* Seeker */}
                <button
                  type="button"
                  onClick={() => setRole("seeker")}
                  className={`p-4 rounded-xl border text-left transition ${
                    role === "seeker"
                      ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                      : "border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <div className="text-2xl mb-2">🔎</div>

                  <h3 className="font-semibold text-slate-900">
                    Problem Seeker
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    I need help solving a problem
                  </p>
                </button>

                {/* Solver */}
                <button
                  type="button"
                  onClick={() => setRole("solver")}
                  className={`p-4 rounded-xl border text-left transition ${
                    role === "solver"
                      ? "border-purple-500 bg-purple-50 ring-2 ring-purple-100"
                      : "border-slate-200 hover:border-purple-300"
                  }`}
                >
                  <div className="text-2xl mb-2">💡</div>

                  <h3 className="font-semibold text-slate-900">
                    Problem Solver
                  </h3>

                  <p className="text-xs text-slate-500 mt-1">
                    I want to help others
                  </p>
                </button>

              </div>
            </div>

            {/* Solver Skills */}
            {role === "solver" && (
              <div className="animate-in fade-in duration-300">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Skills
                </label>

                <input
                  type="text"
                  placeholder="React, Next.js, Node.js, MongoDB..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />

                <p className="text-xs text-slate-400 mt-2">
                  Add technologies or areas you can help with.
                </p>
              </div>
            )}

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4"
              />

              <p className="text-xs text-slate-500">
                I agree to the FaceLink terms and understand that my
                information will be used to provide the service.
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-slate-500 mt-7">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
          </p>

        </div>
      </div>

    </main>
  );
}