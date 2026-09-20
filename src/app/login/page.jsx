"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">


        <div className="hidden md:flex bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-10 flex-col justify-between">

          <div>
            <Link href="/" className="text-3xl font-bold">
              FaceLink
            </Link>

            <h2 className="text-4xl font-bold mt-16 leading-tight">
              Welcome back.
              <br />
              Let&apos;s solve
              <br />
              problems together.
            </h2>

            <p className="mt-6 text-blue-100 leading-7">
              Find solutions, connect with skilled problem solvers,
              or get help from AI—all in one place.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
            <p className="text-sm text-blue-100">
              One Problem → Three Ways to Find a Solution
            </p>
          </div>

        </div>
        <div className="p-7 sm:p-10 flex flex-col justify-center">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h1>

            <p className="text-slate-500 mt-2">
              Login to continue to your FaceLink account.
            </p>
          </div>

          <form className="space-y-5">

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

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <span className="text-sm text-slate-500">
                Remember me
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-slate-500 mt-7">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create an account
            </Link>
          </p>

        </div>
      </div>

    </main>
  );
}