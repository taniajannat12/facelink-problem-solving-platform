
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Users,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Star,
  Activity,
} from "lucide-react";

const monthlyUsers = [
  { month: "May", users: 320 },
  { month: "Jun", users: 450 },
  { month: "Jul", users: 390 },
  { month: "Aug", users: 580 },
  { month: "Sep", users: 650 },
  { month: "Oct", users: 720 },
];

const technologies = [
  { name: "React", count: 86, percent: 86 },
  { name: "Next.js", count: 72, percent: 72 },
  { name: "MongoDB", count: 58, percent: 58 },
  { name: "Firebase", count: 44, percent: 44 },
  { name: "Tailwind CSS", count: 32, percent: 32 },
];

const topSolvers = [
  { name: "Rahim Hasan", role: "Full Stack Developer", solved: 48, rating: 4.9 },
  { name: "Arif Hasan", role: "React Developer", solved: 41, rating: 4.8 },
  { name: "Nabil Ahmed", role: "Backend Developer", solved: 37, rating: 4.7 },
];

export default function ReportsPage() {
  const maxUsers = Math.max(...monthlyUsers.map((item) => item.users));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">


     
      <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/admin"
            className="mb-3 pb-10 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600"
          >
            
          </Link>

          <h1 className="text-xl font-bold  sm:text-2xl">
            Reports & Analytics
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Overview of FaceLink users, problems and solver performance.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Summary cards */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Total Users" value="1,248" note="+12.5% demo growth" icon={Users} />
          <StatCard title="Total Problems" value="324" note="All submitted problems" icon={BriefcaseBusiness} />
          <StatCard title="Problems Solved" value="253" note="78% demo completion" icon={CheckCircle2} />
          <StatCard title="Pending Problems" value="47" note="Need attention" icon={Clock3} />
        </section>

        {/* User growth chart */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-bold">User Growth</h2>
              <p className="mt-1 text-xs text-slate-500">
                Monthly user activity overview
              </p>
            </div>
            <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
              <TrendingUp size={14} className="mr-1 inline" />
              Demo data
            </span>
          </div>

          <div className="mt-8 flex h-56 items-end justify-around gap-3 border-b border-slate-200 px-2">
            {monthlyUsers.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                  {item.users}
                </span>
                <div
                  className="w-full max-w-14 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-600"
                  style={{ height: `${(item.users / maxUsers) * 75}%` }}
                  title={`${item.month}: ${item.users} demo users`}
                />
                <span className="pb-2 text-xs text-slate-500">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Problem status */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold">Problem Status</h2>
            <p className="mt-1 text-xs text-slate-500">
              Distribution of submitted problems
            </p>

            <div className="mt-6 space-y-5">
              <ProgressRow label="Solved" count={253} total={324} color="bg-emerald-500" />
              <ProgressRow label="In Progress" count={24} total={324} color="bg-blue-500" />
              <ProgressRow label="Pending" count={47} total={324} color="bg-amber-500" />
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Activity size={19} className="text-indigo-600" />
                <div>
                  <p className="text-sm font-semibold">Completion Rate</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Approximately 78% of demo problems are solved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology report */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold">Problems by Technology</h2>
            <p className="mt-1 text-xs text-slate-500">
              Most common problem categories
            </p>

            <div className="mt-6 space-y-5">
              {technologies.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-700">
                      {item.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {item.count}
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-indigo-500"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Solver performance */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-bold">Top Solver Performance</h2>
            <p className="mt-1 text-xs text-slate-500">
              Solved problems and average ratings
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs text-slate-500">
                  <th className="px-5 py-4 font-semibold">Solver</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 font-semibold">Solved</th>
                  <th className="px-5 py-4 font-semibold">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topSolvers.map((solver, index) => (
                  <tr
                    key={solver.name}
                    className="border-t border-slate-100"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm font-semibold">
                          {solver.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-500">
                      {solver.role}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold">
                      {solver.solved}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        {solver.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-center text-xs text-slate-400">
          All figures on this page are sample data for frontend development.
        </p>
      </div>
    </main>
  );
}

function StatCard({ title, value, note, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon size={20} />
        </div>
        <span className="text-[10px] font-medium text-slate-400">
          FaceLink
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{note}</p>
    </div>
  );
}

function ProgressRow({ label, count, total, color }) {
  const percent = Math.round((count / total) * 100);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-xs font-semibold text-slate-500">
          {count} ({percent}%)
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
