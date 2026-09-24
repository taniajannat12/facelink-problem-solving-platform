// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   Brain,
//   CheckCircle2,
//   Database,
//   MessageCircle,
//   Search,
//   Sparkles,
//   Star,
//   UserRound,
//   Users,
// } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-white text-slate-900">

//       {/* HERO */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-20 lg:px-10 lg:py-28">
//         <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
//         <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

//           <div className="animate-[heroLeft_.8s_ease-out]">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
//               <Sparkles size={14} />
//               A smarter way to solve problems
//             </div>

//             <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Every Problem
//               <span className="block text-indigo-600">
//                 Needs a Connection.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
//               FaceLink connects people with solutions through a smart
//               problem-solving network. Find an answer, connect with a human
//               solver, or get instant AI assistance.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 href="/seeker/problem"
//                 className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
//               >
//                 Solve a Problem
//                 <ArrowRight
//                   size={17}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/solver/dashboard"
//                 className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600"
//               >
//                 Become a Solver
//               </Link>
//             </div>

//             <div className="mt-10 flex flex-wrap gap-8">
//               <div>
//                 <p className="text-xl font-bold">1K+</p>
//                 <p className="text-xs text-slate-400">Problems</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold">500+</p>
//                 <p className="text-xs text-slate-400">Solvers</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold">92%</p>
//                 <p className="text-xs text-slate-400">Satisfaction</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative flex items-center justify-center animate-[brainFloat_4s_ease-in-out_infinite]">
//             <div className="absolute h-72 w-72 rounded-full border border-indigo-200/60" />
//             <div className="absolute h-80 w-80 rounded-full border border-dashed border-violet-200/60" />
//             <div className="absolute h-96 w-96 rounded-full border border-cyan-100/70" />

//             <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 shadow-2xl shadow-indigo-200 sm:h-80 sm:w-80">
//               <Brain
//                 size={145}
//                 strokeWidth={1.1}
//                 className="text-white"
//               />

//               <div className="absolute -left-5 top-14 rounded-xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-indigo-600 shadow-lg backdrop-blur">
//                 Think
//               </div>

//               <div className="absolute -right-8 top-20 rounded-xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-violet-600 shadow-lg backdrop-blur">
//                 Discover
//               </div>

//               <div className="absolute -left-8 bottom-20 rounded-xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-cyan-600 shadow-lg backdrop-blur">
//                 Connect
//               </div>

//               <div className="absolute -right-5 bottom-12 rounded-xl border border-white/60 bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-600 shadow-lg backdrop-blur">
//                 Solve
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FACE LINK INTRO */}
//       <section className="px-6 py-20 lg:px-10">
//         <div className="mx-auto max-w-4xl text-center">
//           <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
//             About FaceLink
//           </span>

//           <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
//             Problems become easier when
//             <span className="text-indigo-600"> people connect.</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
//             FaceLink is a problem-solving network where seekers can share
//             problems, discover existing solutions and connect with people
//             who can help.
//           </p>
//         </div>
//       </section>

//       {/* HOW FACE LINK WORKS */}
//       <section className="relative overflow-hidden bg-[#f3f6ff] px-6 py-20 lg:px-10">
//         <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />
//         <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

//         <div className="relative mx-auto max-w-5xl">

//           <div className="mx-auto max-w-2xl text-center">
//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
//               How FaceLink Works
//             </span>

//             <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
//               One problem. Multiple ways to solve.
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-slate-500">
//               Write your problem, choose a path and get it solved.
//             </p>
//           </div>

//           <div className="relative mt-12">

//             <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-300 via-violet-300 to-emerald-300 md:block" />

//             {/* STEP 01 */}
//             <div className="relative mb-6 flex justify-start animate-[flowReveal_.6s_ease-out]">
//               <div className="w-full rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm md:w-[43%]">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     <UserRound size={19} />
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-bold uppercase text-indigo-500">
//                       01
//                     </span>
//                     <h3 className="text-sm font-bold">
//                       Write Your Problem
//                     </h3>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Tell FaceLink what you need help with.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* STEP 02 */}
//             <div className="relative mb-6 flex justify-end animate-[flowReveal_.7s_ease-out]">
//               <div className="w-full rounded-2xl border border-violet-100 bg-white p-4 shadow-sm md:w-[43%]">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
//                     <Search size={19} />
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-bold uppercase text-violet-500">
//                       02
//                     </span>
//                     <h3 className="text-sm font-bold">
//                       Find a Solution
//                     </h3>
//                     <p className="mt-1 text-xs text-slate-500">
//                       Choose how you want to solve it.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* STEP 03 */}
//             <div className="relative mx-auto mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-md animate-[flowReveal_.8s_ease-out] md:w-[78%]">

//               <div className="mb-4 text-center">
//                 <span className="text-[10px] font-bold uppercase text-slate-400">
//                   03
//                 </span>

//                 <h3 className="text-base font-bold">
//                   Choose Your Solution Path
//                 </h3>
//               </div>

//               <div className="grid gap-3 md:grid-cols-3">

//                 <div className="rounded-xl bg-indigo-50 p-4 text-center transition duration-300 hover:-translate-y-1">
//                   <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
//                     <Database size={18} />
//                   </div>

//                   <h4 className="mt-2 text-xs font-bold">
//                     Solution Database
//                   </h4>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500">
//                     Find an existing solution.
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-violet-50 p-4 text-center transition duration-300 hover:-translate-y-1">
//                   <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
//                     <Users size={18} />
//                   </div>

//                   <h4 className="mt-2 text-xs font-bold">
//                     Human Solver
//                   </h4>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500">
//                     Choose a relevant solver.
//                   </p>
//                 </div>

//                 <div className="rounded-xl bg-cyan-50 p-4 text-center transition duration-300 hover:-translate-y-1">
//                   <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
//                     <Brain size={18} />
//                   </div>

//                   <h4 className="mt-2 text-xs font-bold">
//                     AI Assistant
//                   </h4>

//                   <p className="mt-1 text-[10px] leading-4 text-slate-500">
//                     Get instant assistance.
//                   </p>
//                 </div>

//               </div>
//             </div>

//             {/* STEP 04 */}
//             <div className="relative mb-6 flex justify-start animate-[flowReveal_.9s_ease-out]">
//               <div className="w-full rounded-2xl border border-cyan-100 bg-white p-4 shadow-sm md:w-[43%]">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
//                     <MessageCircle size={19} />
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-bold uppercase text-cyan-500">
//                       04
//                     </span>

//                     <h3 className="text-sm font-bold">
//                       Connect & Solve
//                     </h3>

//                     <p className="mt-1 text-xs text-slate-500">
//                       Human solver? Chat, discuss and get help.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* STEP 05 */}
//             <div className="relative flex justify-end animate-[flowReveal_1s_ease-out]">
//               <div className="w-full rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm md:w-[43%]">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//                     <CheckCircle2 size={19} />
//                   </div>

//                   <div>
//                     <span className="text-[10px] font-bold uppercase text-emerald-500">
//                       05
//                     </span>

//                     <h3 className="text-sm font-bold">
//                       Mark as Solved
//                     </h3>

//                     <p className="mt-1 text-xs text-slate-500">
//                       After getting help, the solver can mark the problem
//                       as solved.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* NETWORKING */}
//       <section className="relative overflow-hidden bg-[#0f172a] px-6 py-20 text-white lg:px-10">
//         <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

//           <div>
//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
//               Networking
//             </span>

//             <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
//               Your problem can connect you to the right person.
//             </h2>

//             <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
//               FaceLink turns problems into meaningful connections. Seekers
//               can discover people with relevant knowledge, while solvers
//               can share their experience and help others.
//             </p>

//             <div className="mt-7 flex flex-wrap gap-2">
//               {[
//                 "Knowledge Sharing",
//                 "Human Connection",
//                 "Community",
//                 "Collaboration",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto h-[330px] w-full max-w-md">

//             <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow-2xl shadow-indigo-900/50">
//               <Brain size={48} />
//             </div>

//             <div className="absolute left-[14%] top-[18%] flex h-14 w-14 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/20 text-indigo-200 backdrop-blur">
//               <UserRound size={22} />
//             </div>

//             <div className="absolute right-[12%] top-[20%] flex h-14 w-14 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/20 text-violet-200 backdrop-blur">
//               <Users size={22} />
//             </div>

//             <div className="absolute bottom-[18%] left-[18%] flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/20 text-cyan-200 backdrop-blur">
//               <Search size={22} />
//             </div>

//             <div className="absolute bottom-[16%] right-[14%] flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/20 text-emerald-200 backdrop-blur">
//               <CheckCircle2 size={22} />
//             </div>

//             <svg
//               className="absolute inset-0 h-full w-full"
//               viewBox="0 0 400 330"
//               fill="none"
//             >
//               <path
//                 d="M95 75 L200 165 L305 78"
//                 stroke="currentColor"
//                 className="text-indigo-400/30"
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M95 75 L200 165 L105 255"
//                 stroke="currentColor"
//                 className="text-cyan-400/30"
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M305 78 L200 165 L300 260"
//                 stroke="currentColor"
//                 className="text-violet-400/30"
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M105 255 L200 165 L300 260"
//                 stroke="currentColor"
//                 className="text-emerald-400/30"
//                 strokeWidth="1.5"
//               />
//             </svg>

//           </div>
//         </div>
//       </section>

//       {/* REVIEWS */}
//       <section className="px-6 py-20 lg:px-10">
//         <div className="mx-auto max-w-6xl">

//           <div className="mx-auto max-w-2xl text-center">
//             <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
//               Reviews
//             </span>

//             <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
//               What the community says
//             </h2>

//             <p className="mt-3 text-sm text-slate-500">
//               Real connections make problem solving better.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-5 md:grid-cols-3">

//             <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
//                   SJ
//                 </div>

//                 <div className="flex gap-0.5 text-amber-400">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star key={star} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//               </div>

//               <h3 className="mt-5 text-sm font-bold">
//                 Sadia Jannat
//               </h3>

//               <p className="mt-1 text-xs text-indigo-500">
//                 Problem Seeker
//               </p>

//               <p className="mt-4 text-sm leading-6 text-slate-500">
//                 “I found the right direction for my problem and connected
//                 with someone who could actually help.”
//               </p>
//             </div>

//             <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600">
//                   RH
//                 </div>

//                 <div className="flex gap-0.5 text-amber-400">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star key={star} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//               </div>

//               <h3 className="mt-5 text-sm font-bold">
//                 Rahim Hasan
//               </h3>

//               <p className="mt-1 text-xs text-violet-500">
//                 Problem Solver
//               </p>

//               <p className="mt-4 text-sm leading-6 text-slate-500">
//                 “FaceLink gives me a simple way to use my skills and help
//                 someone solve a real problem.”
//               </p>
//             </div>

//             <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-600">
//                   AH
//                 </div>

//                 <div className="flex gap-0.5 text-amber-400">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star key={star} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//               </div>

//               <h3 className="mt-5 text-sm font-bold">
//                 Arif Hasan
//               </h3>

//               <p className="mt-1 text-xs text-cyan-600">
//                 Community Member
//               </p>

//               <p className="mt-4 text-sm leading-6 text-slate-500">
//                 “It feels more useful than a normal social platform because
//                 every connection starts with a real problem.”
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

     

//       <style jsx global>{`
//         @keyframes heroLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-35px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes brainFloat {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }

//         @keyframes flowReveal {
//           from {
//             opacity: 0;
//             transform: translateY(18px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </main>
//   );
// }
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Database,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Monitor,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
  Briefcase,
} from "lucide-react";

const categories = [
  {
    title: "Web Development",
    text: "React, Next.js, APIs & more",
    icon: Monitor,
  },
  {
    title: "Programming",
    text: "Code, bugs & technical issues",
    icon: Lightbulb,
  },
  {
    title: "Education",
    text: "Learning & academic problems",
    icon: GraduationCap,
  },
  {
    title: "Career",
    text: "Skills, jobs & career guidance",
    icon: Briefcase,
  },
];

const solvers = [
  {
    name: "Rahim Hasan",
    role: "Full Stack Developer",
    skills: ["Next.js", "React", "MongoDB"],
    initials: "RH",
  },
  {
    name: "Arif Hasan",
    role: "React Developer",
    skills: ["React", "Firebase", "JavaScript"],
    initials: "AH",
  },
  {
    name: "Nabil Ahmed",
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB", "JWT"],
    initials: "NA",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#f7f8ff] px-6 py-20 lg:px-10 lg:py-24">

        <div className="absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-100px] h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

          <div className="animate-[heroIn_.8s_ease-out]">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm">
              <Sparkles size={14} />
              A smarter way to solve problems
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Every problem
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                needs a connection.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              FaceLink brings people, knowledge and technology together so
              you can find the right solution for the problem in front of you.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/seeker/problem"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1"
              >
                Solve a Problem
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/solver/dashboard"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600"
              >
                Become a Solver
              </Link>

            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-7">

              <div>
                <p className="text-2xl font-bold">1K+</p>
                <p className="mt-1 text-xs text-slate-400">Problems</p>
              </div>

              <div className="h-9 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="mt-1 text-xs text-slate-400">Solvers</p>
              </div>

              <div className="h-9 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-bold">92%</p>
                <p className="mt-1 text-xs text-slate-400">Satisfaction</p>
              </div>

            </div>

          </div>

          {/* BRAIN */}
          <div className="relative flex h-[430px] items-center justify-center animate-[brainFloat_5s_ease-in-out_infinite]">

            <div className="absolute h-64 w-64 rounded-full border border-indigo-200/70" />
            <div className="absolute h-80 w-80 rounded-full border border-dashed border-violet-200/60" />
            <div className="absolute h-[370px] w-[370px] rounded-full border border-cyan-100" />

            <div className="absolute h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

            <div className="relative flex h-60 w-60 items-center justify-center rounded-[32%] rotate-[-5deg] bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 shadow-2xl shadow-indigo-200">
              <div className="rotate-[5deg]">
                <Brain
                  size={130}
                  strokeWidth={1}
                  className="text-white"
                />
              </div>
            </div>

            <div className="absolute left-[2%] top-[20%] rounded-2xl border border-white bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Search size={15} className="text-indigo-600" />
                <span className="text-xs font-semibold">Discover</span>
              </div>
            </div>

            <div className="absolute right-[0%] top-[22%] rounded-2xl border border-white bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Users size={15} className="text-violet-600" />
                <span className="text-xs font-semibold">Connect</span>
              </div>
            </div>

            <div className="absolute bottom-[17%] left-[3%] rounded-2xl border border-white bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Database size={15} className="text-cyan-600" />
                <span className="text-xs font-semibold">Knowledge</span>
              </div>
            </div>

            <div className="absolute bottom-[13%] right-[2%] rounded-2xl border border-white bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-600" />
                <span className="text-xs font-semibold">Solved</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              What is FaceLink?
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A place where
              <span className="text-indigo-600"> problems meet solutions.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-500">
              FaceLink is a problem-solving network designed to make getting
              help simpler. Instead of searching everywhere, users can bring
              their problem to one place and choose the solution path that
              fits them.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600">
                Find
              </span>
              <span className="rounded-full bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-600">
                Connect
              </span>
              <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-600">
                Solve
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative overflow-hidden bg-[#f5f7ff] px-6 py-24 lg:px-10">

        <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From problem to solution,
              <span className="text-indigo-600"> in one flow.</span>
            </h2>
          </div>

          <div className="relative mt-16">

            <div className="absolute left-5 top-6 hidden h-[calc(100%-45px)] w-px bg-gradient-to-b from-indigo-300 via-violet-300 to-emerald-300 md:block" />

            {/* 01 */}
            <div className="relative mb-8 flex gap-5 md:gap-8">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-lg shadow-indigo-200">
                01
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <UserRound size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Write Your Problem</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Describe the question, issue or challenge you are facing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="relative mb-8 flex gap-5 md:gap-8">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white shadow-lg shadow-violet-200">
                02
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Search size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Choose How to Solve It</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      FaceLink gives you three different solution paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 */}
            <div className="relative mb-8 ml-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:ml-14">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Brain size={19} />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    03
                  </span>
                  <h3 className="text-base font-bold">
                    Select Your Solution Path
                  </h3>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">

                <div className="group rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 transition duration-300 hover:-translate-y-1 hover:bg-indigo-50">
                  <Database
                    size={22}
                    className="text-indigo-600"
                  />
                  <h4 className="mt-4 text-sm font-bold">
                    Solution Database
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Search existing solutions from the FaceLink knowledge
                    base.
                  </p>
                </div>

                <div className="group rounded-2xl border border-violet-100 bg-violet-50/60 p-5 transition duration-300 hover:-translate-y-1 hover:bg-violet-50">
                  <Users
                    size={22}
                    className="text-violet-600"
                  />
                  <h4 className="mt-4 text-sm font-bold">
                    Human Solver
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Choose a relevant solver and discuss the problem directly.
                  </p>
                </div>

                <div className="group rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5 transition duration-300 hover:-translate-y-1 hover:bg-cyan-50">
                  <Brain
                    size={22}
                    className="text-cyan-600"
                  />
                  <h4 className="mt-4 text-sm font-bold">
                    AI Assistant
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Get quick assistance when you need an instant response.
                  </p>
                </div>

              </div>
            </div>

            {/* 04 */}
            <div className="relative mb-8 flex gap-5 md:gap-8">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white shadow-lg shadow-cyan-200">
                04
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <MessageCircle size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Connect & Solve</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      If you choose a human solver, chat and work through the
                      problem together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 */}
            <div className="relative flex gap-5 md:gap-8">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white shadow-lg shadow-emerald-200">
                05
              </div>

              <div className="flex-1 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">Problem Solved</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Once the seeker gets the solution, the human solver can
                      mark the problem as solved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Explore Problems
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What can you solve?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Bring different kinds of questions to a community built around
              helping each other.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-sm font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {category.text}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-indigo-600">
                    Explore
                    <ArrowRight size={13} />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* NETWORKING */}
      <section className="relative overflow-hidden bg-[#0b1120] px-6 py-24 text-white lg:px-10">

        <div className="absolute left-1/2 top-[-150px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              The FaceLink Network
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Every problem can create
              <span className="text-cyan-300"> a new connection.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              A seeker brings a problem. A solver brings experience. FaceLink
              connects them through a simple network where knowledge can move
              from one person to another.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Knowledge Sharing
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Human Connection
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Collaboration
              </div>
            </div>
          </div>

          <div className="relative h-[390px]">

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 600 390"
              fill="none"
            >
              <path
                d="M120 85 L300 195 L480 90"
                stroke="currentColor"
                className="text-indigo-400/30"
                strokeWidth="1.5"
              />
              <path
                d="M120 85 L300 195 L135 305"
                stroke="currentColor"
                className="text-cyan-400/30"
                strokeWidth="1.5"
              />
              <path
                d="M480 90 L300 195 L465 305"
                stroke="currentColor"
                className="text-violet-400/30"
                strokeWidth="1.5"
              />
              <path
                d="M135 305 L300 195 L465 305"
                stroke="currentColor"
                className="text-emerald-400/30"
                strokeWidth="1.5"
              />
            </svg>

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow-2xl shadow-indigo-950">
              <Brain size={46} />
            </div>

            <div className="absolute left-[8%] top-[10%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300 backdrop-blur">
              <UserRound size={23} />
            </div>

            <div className="absolute right-[8%] top-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300 backdrop-blur">
              <Users size={23} />
            </div>

            <div className="absolute bottom-[9%] left-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur">
              <Search size={23} />
            </div>

            <div className="absolute bottom-[9%] right-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300 backdrop-blur">
              <CheckCircle2 size={23} />
            </div>

            <div className="absolute left-[1%] top-[32%] text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Seeker
            </div>

            <div className="absolute right-[1%] top-[33%] text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Solver
            </div>

          </div>
        </div>
      </section>

      {/* SOLVER COMMUNITY */}
      <section className="bg-[#f8f9fc] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              Solver Community
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              People ready to share what they know.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Connect with people who have experience in the area where you
              need help.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {solvers.map((solver, index) => (
              <div
                key={solver.name}
                className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 text-sm font-bold text-indigo-600">
                    {solver.initials}
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>

                </div>

                <h3 className="mt-6 text-base font-bold">
                  {solver.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {solver.role}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {solver.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-400">
                    Problem Solver
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-indigo-500 transition group-hover:translate-x-1"
                  />
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Community Reviews
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Built around real connections.
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>
              Trusted by our community
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                  SJ
                </div>

                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={13}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-slate-600">
                “I could explain my problem and quickly find a direction
                instead of searching through many different places.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold">Sadia Jannat</p>
                <p className="mt-1 text-[11px] text-indigo-500">
                  Problem Seeker
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                  RH
                </div>

                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={13}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-slate-600">
                “Helping someone solve a real problem makes sharing my
                development experience much more meaningful.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold">Rahim Hasan</p>
                <p className="mt-1 text-[11px] text-violet-500">
                  Problem Solver
                </p>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-600">
                  AH
                </div>

                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={13}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm leading-7 text-slate-600">
                “FaceLink feels different because the main purpose of the
                connection is actually solving something together.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold">Arif Hasan</p>
                <p className="mt-1 text-[11px] text-cyan-600">
                  Community Member
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 px-7 py-12 text-center text-white shadow-2xl shadow-indigo-200 sm:px-12">

          <ShieldCheck className="mx-auto mb-4" size={28} />

          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a problem?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-indigo-100">
            Bring it to FaceLink and find the path that works for you.
          </p>

          <Link
            href="/seeker/problem"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-600 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start Solving
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

     
      <style jsx global>{`
        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes brainFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>

    </main>
  );
}