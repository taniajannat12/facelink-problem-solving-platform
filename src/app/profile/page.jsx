
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [role, setRole] = useState("solver");

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white">

        <div className="max-w-6xl mx-auto px-6 py-16">

          <div className="flex flex-col md:flex-row items-center md:items-end gap-7">

            <div className="relative">

              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center text-5xl font-bold shadow-2xl">
                T
              </div>

              <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-4 border-indigo-700 rounded-full"></span>

            </div>


            <div className="text-center md:text-left flex-1">

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">

                <span className="px-3 py-1 rounded-full bg-white/15 text-sm backdrop-blur-sm">
                  ✓ Verified User
                </span>

                <span className="px-3 py-1 rounded-full bg-white/15 text-sm backdrop-blur-sm">
                  🟢 Available
                </span>

              </div>

              <h1 className="text-3xl md:text-4xl font-bold">
                Tania
              </h1>

              <p className="text-blue-100 mt-2">
                Full Stack Developer • FaceLink Community
              </p>

            </div>

            <button className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:bg-blue-50 transition shadow-lg">
              Edit Profile
            </button>

          </div>

        </div>

      </section>


      <section className="max-w-6xl mx-auto px-6 -mt-6 relative z-10">

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-2 flex max-w-md mx-auto">

          <button
            onClick={() => setRole("seeker")}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              role === "seeker"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            🔎 Problem Seeker
          </button>

          <button
            onClick={() => setRole("solver")}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              role === "solver"
                ? "bg-purple-600 text-white shadow-md"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            💡 Problem Solver
          </button>

        </div>

      </section>


      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-3 gap-7">

          <div className="space-y-7">

        
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

              <h2 className="text-xl font-bold text-slate-900">
                About
              </h2>

              <p className="text-slate-500 leading-7 mt-4">
                Passionate about solving technical problems and helping
                others build better software. Interested in modern web
                development and AI-powered applications.
              </p>

            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

              <h2 className="text-xl font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="space-y-4 mt-5">

                <div className="flex gap-3">
                  <span>📧</span>

                  <div>
                    <p className="text-xs text-slate-400">
                      Email
                    </p>

                    <p className="text-sm text-slate-700">
                      tania@example.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span>📍</span>

                  <div>
                    <p className="text-xs text-slate-400">
                      Location
                    </p>

                    <p className="text-sm text-slate-700">
                      Chattogram, Bangladesh
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>


          <div className="lg:col-span-2 space-y-7">

            {role === "solver" && (
              <>
               
                <div className="grid sm:grid-cols-3 gap-4">

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-purple-600">
                      42
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Problems Solved
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-yellow-500">
                      4.8
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Average Rating
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-green-600">
                      96%
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Success Rate
                    </p>

                  </div>

                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

                  <div className="flex justify-between items-center">

                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Problem Solving Skills
                      </h2>

                      <p className="text-sm text-slate-400 mt-1">
                        Technologies and areas this solver can help with.
                      </p>
                    </div>

                  </div>


                  <div className="flex flex-wrap gap-3 mt-6">

                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "REST API",
                      "Firebase",
                    ].map((skill) => (

                      <span
                        key={skill}
                        className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 text-sm font-medium hover:bg-purple-100 transition"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>


                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

                  <h2 className="text-xl font-bold text-slate-900">
                    Recently Solved Problems
                  </h2>

                  <div className="space-y-4 mt-6">

                    {[
                      "Next.js authentication issue",
                      "MongoDB connection problem",
                      "React state management issue",
                    ].map((problem, index) => (

                      <div
                        key={problem}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-purple-50 transition"
                      >

                        <div className="flex items-center gap-4">

                          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                            💡
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-800">
                              {problem}
                            </h3>

                            <p className="text-xs text-slate-400 mt-1">
                              Solved recently
                            </p>
                          </div>

                        </div>

                        <span className="text-green-600 text-sm font-semibold">
                          Solved ✓
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-7 text-white">

                  <p className="text-purple-100 text-sm">
                    Solver Performance
                  </p>

                  <div className="flex items-center gap-5 mt-3">

                    <div className="text-4xl font-bold">
                      4.8
                    </div>

                    <div>
                      <div className="text-yellow-300 text-xl">
                        ★★★★★
                      </div>

                      <p className="text-sm text-purple-100 mt-1">
                        Based on 37 ratings
                      </p>
                    </div>

                  </div>

                </div>

              </>
            )}


            {role === "seeker" && (
              <>
                <div className="grid sm:grid-cols-3 gap-4">

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-blue-600">
                      18
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Problems Submitted
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-green-600">
                      15
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Problems Solved
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center hover:-translate-y-1 transition">

                    <div className="text-3xl font-bold text-purple-600">
                      3
                    </div>

                    <p className="text-sm text-slate-500 mt-2">
                      Active Problems
                    </p>

                  </div>

                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

                  <h2 className="text-xl font-bold text-slate-900">
                    My Problem History
                  </h2>

                  <div className="space-y-4 mt-6">

                    {[
                      {
                        title: "Next.js routing problem",
                        status: "Solved",
                      },
                      {
                        title: "MongoDB database connection",
                        status: "Solved",
                      },
                      {
                        title: "React component error",
                        status: "In Progress",
                      },
                    ].map((problem) => (

                      <div
                        key={problem.title}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition"
                      >

                        <div className="flex items-center gap-4">

                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            🔎
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-800">
                              {problem.title}
                            </h3>

                            <p className="text-xs text-slate-400 mt-1">
                              Problem submitted
                            </p>
                          </div>

                        </div>

                        <span
                          className={`text-sm font-semibold ${
                            problem.status === "Solved"
                              ? "text-green-600"
                              : "text-orange-500"
                          }`}
                        >
                          {problem.status}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">

                  <h2 className="text-xl font-bold text-slate-900">
                    Solutions Used
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-4 mt-6">

                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 text-center">

                      <div className="text-3xl">
                        📚
                      </div>

                      <h3 className="font-semibold text-blue-800 mt-3">
                        Database
                      </h3>

                      <p className="text-sm text-blue-600 mt-1">
                        7 problems
                      </p>

                    </div>


                    <div className="p-5 rounded-2xl bg-purple-50 border border-purple-100 text-center">

                      <div className="text-3xl">
                        👨‍💻
                      </div>

                      <h3 className="font-semibold text-purple-800 mt-3">
                        Human Solver
                      </h3>

                      <p className="text-sm text-purple-600 mt-1">
                        5 problems
                      </p>

                    </div>


                    <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-100 text-center">

                      <div className="text-3xl">
                        🤖
                      </div>

                      <h3 className="font-semibold text-cyan-800 mt-3">
                        AI Chatbot
                      </h3>

                      <p className="text-sm text-cyan-600 mt-1">
                        3 problems
                      </p>

                    </div>

                  </div>

                </div>

              </>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

