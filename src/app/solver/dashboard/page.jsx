"use client";

import Link from "next/link";
import {
ArrowRight,
CheckCircle2,
Clock3,
MessageCircle,
Star,
TrendingUp,
} from "lucide-react";

export default function SolverDashboard() {
const stats = [
{
title: "Problems Solved",
value: "42",
icon: CheckCircle2,
iconBg: "bg-purple-100",
iconColor: "text-purple-600",
},
{
title: "Active Problems",
value: "2",
icon: Clock3,
iconBg: "bg-orange-100",
iconColor: "text-orange-500",
},
{
title: "Average Rating",
value: "4.8",
icon: Star,
iconBg: "bg-yellow-100",
iconColor: "text-yellow-500",
},
{
title: "Success Rate",
value: "96%",
icon: TrendingUp,
iconBg: "bg-green-100",
iconColor: "text-green-600",
},
];

const activeProblems = [
{
title: "Next.js authentication issue",
seeker: "Sadia Jannat",
category: "Next.js",
time: "10 min ago",
},
{
title: "MongoDB connection problem",
seeker: "Rahim Ahmed",
category: "MongoDB",
time: "25 min ago",
},
];

const recentProblems = [
{
title: "React component error",
seeker: "Nusrat Jahan",
category: "React",
},
{
title: "Express API problem",
seeker: "Tanvir Hasan",
category: "Express.js",
},
];

return ( <main className="min-h-screen bg-slate-50">

  <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white">

    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-6 py-16">

      <div className="max-w-2xl">

        <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          🛠️ Problem Solver
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
          Welcome back, Tanim 👋
        </h1>

        <p className="mt-4 text-lg text-purple-100">
          Help people solve their problems using your skills and
          experience.
        </p>

        <Link
          href="/solver/chat"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-purple-700 shadow-lg transition hover:-translate-y-1 hover:bg-purple-50"
        >
          View Active Problems
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  </section>


  <section className="relative mx-auto max-w-7xl px-6 -mt-8">

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition hover:-translate-y-1"
          >

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}
              >
                <Icon
                  size={23}
                  className={stat.iconColor}
                />
              </div>

            </div>

          </div>
        );
      })}

    </div>

  </section>


  <section className="mx-auto max-w-7xl px-6 py-14">

    <div className="flex items-end justify-between">

      <div>
        <p className="text-sm font-semibold text-purple-600">
          NEEDS YOUR HELP
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          Active Problems
        </h2>

        <p className="mt-2 text-slate-500">
          Continue helping people with their current problems.
        </p>
      </div>

      <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
        2 Active
      </span>

    </div>


    <div className="mt-7 grid gap-5 md:grid-cols-2">

      {activeProblems.map((problem) => (

        <div
          key={problem.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >

          <div className="flex items-start justify-between gap-4">

            <div className="flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <MessageCircle size={22} />
              </div>

              <div>

                <h3 className="font-bold text-slate-900">
                  {problem.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {problem.seeker}
                </p>

              </div>

            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>


          <div className="mt-5 flex items-center gap-3">

            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              {problem.category}
            </span>

            <span className="text-xs text-slate-400">
              {problem.time}
            </span>

          </div>


          <Link
            href="/solver/chat"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Continue Conversation
            <ArrowRight size={18} />
          </Link>

        </div>

      ))}

    </div>

  </section>


  <section className="mx-auto max-w-7xl px-6 pb-16">

    <div>

      <p className="text-sm font-semibold text-slate-400">
        YOUR HISTORY
      </p>

      <h2 className="mt-1 text-2xl font-bold text-slate-900">
        Recently Solved
      </h2>

    </div>


    <div className="mt-6 grid gap-4 md:grid-cols-2">

      {recentProblems.map((problem) => (

        <div
          key={problem.title}
          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <CheckCircle2 size={20} />
            </div>

            <div>

              <h3 className="font-semibold text-slate-800">
                {problem.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {problem.seeker} • {problem.category}
              </p>

            </div>

          </div>

          <span className="text-sm font-semibold text-green-600">
            Solved ✓
          </span>

        </div>

      ))}

    </div>

  </section>

</main>


);
}
