
// "use client";

// import Link from "next/link";

// export default function SeekerDashboard() {
//   const problems = [
//     {
//       title: "Next.js Authentication Problem",
//       method: "Human Solver",
//       status: "In Progress",
//     },
//     {
//       title: "MongoDB Connection Error",
//       method: "Solution Database",
//       status: "Solved",
//     },
//     {
//       title: "React State Management",
//       method: "AI Chatbot",
//       status: "Solved",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-slate-50">

//       <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
//         <div className="max-w-7xl mx-auto px-6 py-12">

//           <p className="text-blue-200 text-sm">
//             Problem Seeker Dashboard
//           </p>

//           <h1 className="text-4xl font-bold mt-2">
//             Welcome back, Tania 👋
//           </h1>

//           <p className="text-blue-100 mt-3">
//             Find the right solution for your problems.
//           </p>

//           <Link
//             href="/seeker/problem"
//             className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition"
//           >
//             + Submit New Problem
//           </Link>

//         </div>
//       </section>


//       <section className="max-w-7xl mx-auto px-6 -mt-7 relative">

//         <div className="grid sm:grid-cols-3 gap-5">

//           <div className="bg-white rounded-2xl p-6 shadow-lg border">
//             <p className="text-slate-400 text-sm">
//               Problems Submitted
//             </p>
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">
//               18
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-lg border">
//             <p className="text-slate-400 text-sm">
//               Problems Solved
//             </p>
//             <h2 className="text-3xl font-bold text-green-600 mt-2">
//               15
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-lg border">
//             <p className="text-slate-400 text-sm">
//               Active Problems
//             </p>
//             <h2 className="text-3xl font-bold text-orange-500 mt-2">
//               3
//             </h2>
//           </div>

//         </div>

//       </section>


//       <section className="max-w-7xl mx-auto px-6 py-12">

//         <div className="flex justify-between items-center">

//           <div>
//             <h2 className="text-2xl font-bold text-slate-900">
//               My Problems
//             </h2>

//             <p className="text-slate-500 mt-1">
//               Problems you have submitted to FaceLink.
//             </p>
//           </div>

//           <Link
//             href="/seeker/problem"
//             className="text-blue-600 font-semibold hover:text-blue-700"
//           >
//             View All →
//           </Link>

//         </div>


//         <div className="space-y-4 mt-7">

//           {problems.map((problem) => (

//             <div
//               key={problem.title}
//               className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
//             >

//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

//                 <div className="flex gap-4 items-center">

//                   <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
//                     🔎
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-slate-800">
//                       {problem.title}
//                     </h3>

//                     <p className="text-sm text-slate-400 mt-1">
//                       Solution method: {problem.method}
//                     </p>
//                   </div>

//                 </div>


//                 <div className="flex items-center gap-4">

//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       problem.status === "Solved"
//                         ? "bg-green-50 text-green-600"
//                         : "bg-orange-50 text-orange-600"
//                     }`}
//                   >
//                     {problem.status}
//                   </span>

//                   <Link
//                     href="/seeker/chat"
//                     className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-700 transition"
//                   >
//                     Open
//                   </Link>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </section>

//     </main>
//   );
// }


"use client";

import Link from "next/link";

export default function SeekerDashboard() {
  const problems = [
    {
      title: "Next.js Authentication Problem",
      method: "Human Solver",
      status: "In Progress",
    },
    {
      title: "MongoDB Connection Error",
      method: "Solution Database",
      status: "Solved",
    },
    {
      title: "React State Management",
      method: "AI Chatbot",
      status: "Solved",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl top-10 right-0"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">

          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Problem Seeker Dashboard
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Welcome back,
            <span className="text-blue-400"> Arpita</span> 👋
          </h1>

          <p className="text-slate-400 mt-4 leading-7">
            Find the right solution for your problems.
          </p>

          <Link
            href="/seeker/problem"
            className="inline-block mt-7 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition duration-300 hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
          >
            + Submit New Problem
          </Link>

        </div>
      </section>


      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative">

        <div className="grid sm:grid-cols-3 gap-5">

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm">
              Problems Submitted
            </p>
            <h2 className="text-3xl font-bold text-blue-400 mt-2">
              18
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm">
              Problems Solved
            </p>
            <h2 className="text-3xl font-bold text-purple-400 mt-2">
              15
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <p className="text-slate-400 text-sm">
              Active Problems
            </p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2">
              3
            </h2>
          </div>

        </div>

      </section>


      {/* Problems */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-slate-100">
              My Problems
            </h2>

            <p className="text-slate-400 mt-1">
              Problems you have submitted to FaceLink.
            </p>
          </div>

          <Link
            href="/seeker/problem"
            className="text-blue-400 font-semibold hover:text-blue-300 transition"
          >
            View All →
          </Link>

        </div>


        <div className="space-y-4 mt-8">

          {problems.map((problem) => (

            <div
              key={problem.title}
              className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-blue-500/30 hover:-translate-y-1 transition duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                <div className="flex gap-4 items-center">

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                    🔎
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-100">
                      {problem.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Solution method: {problem.method}
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      problem.status === "Solved"
                        ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    }`}
                  >
                    {problem.status}
                  </span>

                  <Link
                    href="/seeker/chat"
                    className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition border border-white/10"
                  >
                    Open
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}