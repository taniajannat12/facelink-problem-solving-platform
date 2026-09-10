
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
                F
              </div>

              <div>
                <h2 className="text-2xl font-extrabold">
                  Face<span className="text-blue-400">Link</span>
                </h2>

                <p className="text-xs text-slate-500">
                  Solve. Connect. Learn.
                </p>
              </div>
            </Link>

            <p className="text-slate-400 leading-7 max-w-md mt-6">
              FaceLink is a smart problem-solving platform that connects
              people with the right solution through a solution database,
              skilled human problem solvers, and AI assistance.
            </p>

            <div className="flex items-center gap-3 mt-6">

              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition duration-300"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition duration-300"
              >
                in
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition duration-300"
              >
                G
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition duration-300"
              >
                X
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="font-semibold text-lg">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                href="/seeker/problem"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Problems
              </Link>

              <Link
                href="/seeker/dashboard"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Seeker Dashboard
              </Link>

              <Link
                href="/solver/dashboard"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Solver Dashboard
              </Link>

              <Link
                href="/profile"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Profile
              </Link>

            </div>

          </div>


          {/* ================= SOLUTIONS ================= */}
          <div>

            <h3 className="font-semibold text-lg">
              Solutions
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                href="/seeker/problem"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                📚 Solution Database
              </Link>

              <Link
                href="/seeker/problem"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                👨‍💻 Human Solver
              </Link>

              <Link
                href="/seeker/problem"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                🤖 AI Chatbot
              </Link>

              <Link
                href="/register"
                className="block text-slate-400 hover:text-blue-400 transition"
              >
                Create Account
              </Link>

            </div>

          </div>

        </div>


        {/* ================= CTA ================= */}
        <div className="mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl font-bold">
              Have a problem to solve?
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Find the right solution with FaceLink.
            </p>
          </div>

          <Link
            href="/register"
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
          >
            Get Started →
          </Link>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="border-t border-slate-800 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © 2026 FaceLink. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

