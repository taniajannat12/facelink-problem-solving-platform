
"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-40 right-0 animate-pulse"></div>

          <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/3 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="animate-[fadeIn_1s_ease-out]">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm mb-7">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Smart Problem Solving Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Got a
              <span className="text-blue-400"> problem?</span>

              <br />

              Find the
              <span className="text-purple-400"> right solution.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-8 mt-7 max-w-xl">
              FaceLink helps you solve problems through a solution database,
              skilled human problem solvers, or an AI chatbot — all in one
              platform.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                href="/register"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition duration-300 shadow-lg shadow-blue-600/20 hover:-translate-y-1 font-semibold"
              >
                Get Started →
              </Link>

              <Link
                href="/login"
                className="px-7 py-3.5 rounded-xl border border-slate-700 hover:border-blue-400 hover:bg-white/5 transition duration-300"
              >
                Login
              </Link>

            </div>

          </div>

          {/* Right - Animated Solution Card */}
          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative w-full max-w-md">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-400">
                      Your Problem
                    </p>

                    <h3 className="font-semibold mt-1">
                      Need help with my project?
                    </h3>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
                    ?
                  </div>
                </div>

                <div className="space-y-3">

                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:scale-105 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <span className="text-2xl">📚</span>

                      <div>
                        <h4 className="font-semibold">
                          Solution Database
                        </h4>

                        <p className="text-xs text-slate-400 mt-1">
                          Find an existing solution
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 hover:scale-105 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <span className="text-2xl">👨‍💻</span>

                      <div>
                        <h4 className="font-semibold">
                          Human Problem Solver
                        </h4>

                        <p className="text-xs text-slate-400 mt-1">
                          Connect with someone skilled
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:scale-105 transition duration-300">
                    <div className="flex gap-4 items-center">
                      <span className="text-2xl">🤖</span>

                      <div>
                        <h4 className="font-semibold">
                          AI Chatbot
                        </h4>

                        <p className="text-xs text-slate-400 mt-1">
                          Get instant AI assistance
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT US ================= */}
      <section className="relative py-28 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* About Text */}
            <div>

              <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
                About Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Built around
                <span className="text-blue-400"> problems,</span>
                <br />
                not just people.
              </h2>

              <p className="text-slate-400 leading-8 mt-7">
                FaceLink is a problem-solving platform designed to help users
                find the right solution without searching through countless
                websites or communities.
              </p>

              <p className="text-slate-400 leading-8 mt-4">
                Instead of providing only one way to get help, FaceLink brings
                together three different approaches — a verified solution
                database, skilled human problem solvers, and an AI chatbot.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition">
                  <div className="text-2xl mb-3">🎯</div>

                  <h3 className="font-semibold">
                    Right Solution
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Find solutions based on your actual problem.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition">
                  <div className="text-2xl mb-3">🤝</div>

                  <h3 className="font-semibold">
                    Human Connection
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Connect with people who have relevant skills.
                  </p>
                </div>

              </div>

            </div>


            {/* About Visual */}
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

              <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-8">

                <div className="text-center mb-8">

                  <p className="text-slate-500 text-sm">
                    FACElink philosophy
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    One Problem
                  </h3>

                </div>

                <div className="flex justify-center mb-8">

                  <div className="w-24 h-24 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-4xl animate-pulse">
                    ?
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-3">

                  <div className="text-center p-4 rounded-xl bg-blue-500/10">
                    <div className="text-2xl">📚</div>
                    <p className="text-xs mt-2 text-slate-300">
                      Database
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-purple-500/10">
                    <div className="text-2xl">👨‍💻</div>
                    <p className="text-xs mt-2 text-slate-300">
                      Human
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-cyan-500/10">
                    <div className="text-2xl">🤖</div>
                    <p className="text-xs mt-2 text-slate-300">
                      AI
                    </p>
                  </div>

                </div>

                <p className="text-center text-slate-500 text-sm mt-7">
                  Three ways to find a solution
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= THREE SOLUTIONS ================= */}
      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto">

            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              Our Solution
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              One Problem.
              <br />
              <span className="text-blue-400">
                Three Ways to Solve It.
              </span>
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              Choose the solution method that works best for your problem.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:-translate-y-3 transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                📚
              </div>

              <h3 className="text-xl font-bold mt-7">
                Solution Database
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Search through stored and verified solutions to find answers
                to common problems.
              </p>

              <div className="mt-7 text-blue-400 text-sm font-semibold">
                Fast & Reliable →
              </div>

            </div>


            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:-translate-y-3 transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                👨‍💻
              </div>

              <h3 className="text-xl font-bold mt-7">
                Human Problem Solver
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Get connected with a skilled person who can understand and
                solve your specific problem.
              </p>

              <div className="mt-7 text-purple-400 text-sm font-semibold">
                Human Expertise →
              </div>

            </div>


            {/* Card 3 */}
            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:-translate-y-3 transition duration-500">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition">
                🤖
              </div>

              <h3 className="text-xl font-bold mt-7">
                AI Chatbot
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Discuss your problem with an AI assistant and receive
                instant conversational guidance.
              </p>

              <div className="mt-7 text-cyan-400 text-sm font-semibold">
                Instant Assistance →
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              How It Works
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Solving problems made simple.
            </h2>

          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-16">

            {[
              {
                number: "01",
                icon: "✍️",
                title: "Submit Problem",
                text: "Describe the problem you are facing."
              },
              {
                number: "02",
                icon: "🔍",
                title: "Find Solution",
                text: "FaceLink checks the available solutions."
              },
              {
                number: "03",
                icon: "🤝",
                title: "Get Help",
                text: "Choose Database, Human Solver or AI."
              },
              {
                number: "04",
                icon: "✅",
                title: "Solve It",
                text: "Get the help you need and solve the problem."
              }
            ].map((item) => (

              <div
                key={item.number}
                className="relative p-7 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition duration-300"
              >

                <span className="text-blue-400 text-sm font-bold">
                  {item.number}
                </span>

                <div className="text-3xl mt-5">
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg mt-5">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-6 mt-3">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= REVIEWS ================= */}
      <section className="py-28 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              Reviews
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              What people say
            </h2>

            <p className="text-slate-400 mt-5">
              A better way to find help when you need it.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {[
              {
                name: "Rahim Ahmed",
                role: "Problem Seeker",
                review:
                  "Instead of searching through many different platforms, I can describe my problem and choose how I want to solve it."
              },
              {
                name: "Sadia Jannat",
                role: "Problem Solver",
                review:
                  "The skill-based solver concept makes it easier to help people with problems that match my expertise."
              },
              {
                name: "Tanim Hasan",
                role: "Student",
                review:
                  "I really like the idea of having database solutions, human support and AI assistance in the same platform."
              }
            ].map((review) => (

              <div
                key={review.name}
                className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-500"
              >

                <div className="text-yellow-400 text-lg">
                  ★★★★★
                </div>

                <p className="text-slate-400 leading-7 mt-5">
                  “{review.review}”
                </p>

                <div className="flex items-center gap-4 mt-7">

                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>

                    <p className="text-xs text-slate-500">
                      {review.role}
                    </p>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-cyan-700/20"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-4xl animate-bounce">
            🚀
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-8">
            Your problem deserves
            <span className="text-blue-400"> a solution.</span>
          </h2>

          <p className="text-slate-400 text-lg mt-6 leading-8">
            Stop searching everywhere. Start solving smarter with FaceLink.
          </p>

          <Link
            href="/register"
            className="inline-block mt-9 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition duration-300 hover:-translate-y-1 shadow-xl shadow-blue-600/20"
          >
            Start Solving Problems →
          </Link>

        </div>

      </section>


    </main>
  );
}

