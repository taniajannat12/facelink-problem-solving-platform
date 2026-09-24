// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function RegisterPage() {
//   const [role, setRole] = useState("seeker");

//   return (
//     <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">

//       <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

//         <div className="hidden md:flex bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white p-10 flex-col justify-between">

//           <div>
//             <Link href="/" className="text-3xl font-bold">
//               FaceLink
//             </Link>

//             <h2 className="text-4xl font-bold mt-16 leading-tight">
//               Find solutions.
//               <br />
//               Solve problems.
//               <br />
//               Connect with people.
//             </h2>

//             <p className="mt-6 text-blue-100 leading-7">
//               FaceLink connects people with the right solution through
//               a solution database, human problem solvers, and AI assistance.
//             </p>
//           </div>

//           <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5">
//             <p className="text-sm text-blue-100">
//               One Problem → Three Ways to Find a Solution
//             </p>
//           </div>

//         </div>

//         <div className="p-7 sm:p-10">

//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-slate-900">
//               Create your account
//             </h1>

//             <p className="text-slate-500 mt-2">
//               Join FaceLink and start solving problems.
//             </p>
//           </div>

//           <form className="space-y-5">

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Full Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Create a strong password"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-3">
//                 Choose your role
//               </label>

//               <div className="grid grid-cols-2 gap-3">

//                 <button
//                   type="button"
//                   onClick={() => setRole("seeker")}
//                   className={`p-4 rounded-xl border text-left transition ${
//                     role === "seeker"
//                       ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
//                       : "border-slate-200 hover:border-blue-300"
//                   }`}
//                 >
//                   <div className="text-2xl mb-2">🔎</div>

//                   <h3 className="font-semibold text-slate-900">
//                     Problem Seeker
//                   </h3>

//                   <p className="text-xs text-slate-500 mt-1">
//                     I need help solving a problem
//                   </p>
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setRole("solver")}
//                   className={`p-4 rounded-xl border text-left transition ${
//                     role === "solver"
//                       ? "border-purple-500 bg-purple-50 ring-2 ring-purple-100"
//                       : "border-slate-200 hover:border-purple-300"
//                   }`}
//                 >
//                   <div className="text-2xl mb-2">💡</div>

//                   <h3 className="font-semibold text-slate-900">
//                     Problem Solver
//                   </h3>

//                   <p className="text-xs text-slate-500 mt-1">
//                     I want to help others
//                   </p>
//                 </button>

//               </div>
//             </div>
//             {role === "solver" && (
//               <div className="animate-in fade-in duration-300">
//                 <label className="block text-sm font-semibold text-slate-700 mb-2">
//                   Your Skills
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="React, Next.js, Node.js, MongoDB..."
//                   className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                 />

//                 <p className="text-xs text-slate-400 mt-2">
//                   Add technologies or areas you can help with.
//                 </p>
//               </div>
//             )}

//             <div className="flex items-start gap-2">
//               <input
//                 type="checkbox"
//                 className="mt-1 w-4 h-4"
//               />

//               <p className="text-xs text-slate-500">
//                 I agree to the FaceLink terms and understand that my
//                 information will be used to provide the service.
//               </p>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
//             >
//               Create Account
//             </button>

//           </form>

//           <p className="text-center text-sm text-slate-500 mt-7">
//             Already have an account?{" "}
//             <Link
//               href="/login"
//               className="font-semibold text-blue-600 hover:text-blue-700"
//             >
//               Login
//             </Link>
//           </p>

//         </div>
//       </div>

//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("seeker");

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
                Join the network
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                Find solutions.
                <br />
                Build connections.
                <br />
                <span className="text-cyan-200">Help others.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-indigo-100">
                FaceLink brings problem seekers and problem solvers together
                through meaningful discussions, shared knowledge and AI
                assistance.
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
                  Growing
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
                    Connect
                  </span>

                  <span className="text-cyan-200">
                    →
                  </span>

                  <span className="text-[10px] font-semibold text-white">
                    Solve
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

          <div className="mb-7">

            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 md:hidden"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">
                F
              </span>

              <span className="text-xl font-bold text-slate-900">
                FaceLink
              </span>
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Join FaceLink and become part of the problem-solving network.
            </p>

          </div>

          <form className="space-y-4.5">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

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
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div className="pt-1">

              <label className="mb-3 block text-sm font-semibold text-slate-700">
                How will you use FaceLink?
              </label>

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setRole("seeker")}
                  className={`group rounded-2xl border p-4 text-left transition duration-300 ${
                    role === "seeker"
                      ? "border-indigo-400 bg-indigo-50/70 shadow-sm shadow-indigo-100"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/30"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition ${
                      role === "seeker"
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                    }`}
                  >
                    ?
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900">
                    Problem Seeker
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    I need help with a problem
                  </p>

                  {role === "seeker" && (
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-indigo-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      Selected
                    </div>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setRole("solver")}
                  className={`group rounded-2xl border p-4 text-left transition duration-300 ${
                    role === "solver"
                      ? "border-violet-400 bg-violet-50/70 shadow-sm shadow-violet-100"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50/30"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition ${
                      role === "solver"
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-600"
                    }`}
                  >
                    +
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900">
                    Problem Solver
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    I want to help others
                  </p>

                  {role === "solver" && (
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-violet-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                      Selected
                    </div>
                  )}
                </button>

              </div>
            </div>

            {role === "solver" && (
              <div className="animate-[fadeUp_.35s_ease-out]">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Skills
                </label>

                <input
                  type="text"
                  placeholder="React, Next.js, Node.js, MongoDB..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-4 focus:ring-violet-50"
                />

                <p className="mt-2 text-[11px] text-slate-400">
                  Add technologies or areas where you can help others.
                </p>

              </div>
            )}

            <div className="flex items-start gap-3 pt-1">

              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600 focus:ring-indigo-500"
              />

              <label
                htmlFor="terms"
                className="cursor-pointer text-xs leading-5 text-slate-500"
              >
                I agree to the FaceLink terms and understand how my
                information will be used.
              </label>

            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-200"
            >
              <span className="relative z-10">
                Create FaceLink Account
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-full" />
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">

            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Start your journey
            </span>

            <div className="h-px flex-1 bg-slate-100" />

          </div>

          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-indigo-600 transition hover:text-violet-600"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}