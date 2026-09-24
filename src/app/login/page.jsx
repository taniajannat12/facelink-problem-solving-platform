
"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8faff] px-4 py-10 sm:px-6">

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/30 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-indigo-100/60 md:grid-cols-2">

        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-10 text-white md:flex md:flex-col md:justify-between">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight transition hover:opacity-80"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-indigo-600">
                F
              </span>
              FaceLink
            </Link>

            <div className="mt-20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">
                Welcome back
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Your next solution
                <br />
                could start with
                <br />
                <span className="text-cyan-200">one connection.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-indigo-100">
                Connect with people, discuss real problems, share knowledge
                and find better ways to move forward.
              </p>
            </div>
          </div>

          <div className="relative z-10">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-100">
                  FaceLink Network
                </span>

                <span className="flex items-center gap-2 text-[10px] text-emerald-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Active
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">

                <div className="flex -space-x-2">
                  {["R", "S", "T", "N"].map((x, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-indigo-500 bg-white text-xs font-bold text-indigo-600"
                    >
                      {x}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                  <span className="text-[10px] text-indigo-100">
                    Problem
                  </span>

                  <span className="text-cyan-200">
                    →
                  </span>

                  <span className="text-[10px] font-semibold text-white">
                    Solution
                  </span>
                </div>

              </div>
            </div>

            <p className="mt-4 text-[11px] text-indigo-100/70">
              Connect • Discuss • Solve
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <div className="mb-8">

            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 md:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">
                F
              </span>

              <span className="text-xl font-bold text-slate-900">
                FaceLink
              </span>
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Login to continue your journey with FaceLink.
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <Link
                  href="#"
                  className="text-xs font-semibold text-indigo-600 transition hover:text-violet-600"
                >
                  Forgot password?
                </Link>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div className="flex items-center gap-3">

              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />

              <label
                htmlFor="remember"
                className="cursor-pointer text-sm text-slate-500"
              >
                Remember me
              </label>

            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-200"
            >
              <span className="relative z-10">
                Login to FaceLink
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-full" />
            </button>

          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Your network awaits
            </span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <p className="text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-indigo-600 transition hover:text-violet-600"
            >
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}

