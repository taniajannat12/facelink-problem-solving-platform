
"use client";

import Link from "next/link";
import AdminSidebar from "./AdminSidebar";
import {
  Users,
  UserRound,
  UserCheck,
  MessageSquare,
  Star,
  MoreHorizontal,
  ChevronRight,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Bell,
  CircleHelp,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,248",
    change: "+12.8%",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Seekers",
    value: "682",
    change: "+8.2%",
    icon: UserRound,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Total Solvers",
    value: "566",
    change: "+10.5%",
    icon: UserCheck,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Total Problems",
    value: "324",
    change: "+15.3%",
    icon: MessageSquare,
    color: "bg-amber-50 text-amber-600",
  },
];

const problems = [
  {
    id: "#FL-1024",
    title: "Need help with React authentication",
    category: "Web Development",
    seeker: "Rahim Ahmed",
    status: "Pending",
    date: "Oct 14, 2026",
  },
  {
    id: "#FL-1023",
    title: "Understanding database normalization",
    category: "Database",
    seeker: "Nusrat Jahan",
    status: "In Progress",
    date: "Oct 13, 2026",
  },
  {
    id: "#FL-1022",
    title: "Python programming assignment",
    category: "Programming",
    seeker: "Samiul Islam",
    status: "Resolved",
    date: "Oct 12, 2026",
  },
  {
    id: "#FL-1021",
    title: "Help with machine learning concepts",
    category: "Artificial Intelligence",
    seeker: "Tania Akter",
    status: "Pending",
    date: "Oct 11, 2026",
  },
];

const solvers = [
  {
    name: "Nusrat Jahan",
    specialty: "Web Development",
    solved: 48,
    rating: 4.9,
    progress: 90,
  },
  {
    name: "Mahmud Hasan",
    specialty: "Programming",
    solved: 36,
    rating: 4.8,
    progress: 75,
  },
  {
    name: "Sadia Rahman",
    specialty: "Database Management",
    solved: 29,
    rating: 4.7,
    progress: 60,
  },
];

const recentUsers = [
  {
    name: "Rahim Ahmed",
    email: "rahim@example.com",
    role: "Seeker",
    status: "Active",
    initials: "RA",
  },
  {
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "Solver",
    status: "Active",
    initials: "NJ",
  },
  {
    name: "Samiul Islam",
    email: "samiul@example.com",
    role: "Seeker",
    status: "Pending",
    initials: "SI",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-amber-50 text-amber-700",
    "In Progress": "bg-blue-50 text-blue-700",
    Resolved: "bg-emerald-50 text-emerald-700",
    Active: "bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}

function ProgressItem({ name, specialty, solved, rating, progress }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-900">
            {name}
          </p>
          <p className="truncate text-xs text-slate-500">{specialty}</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-bold text-slate-900">{solved}</p>
          <p className="flex items-center justify-end gap-1 text-xs text-amber-500">
            <Star size={12} fill="currentColor" />
            {rating}
          </p>
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-indigo-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
      >
        <Icon size={19} />
      </div>

      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-lg font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebar />

    <main className="ml-64 min-h-screen space-y-8 px-4 pt-8 sm:px-6 lg:px-8">
       
        {/* Dashboard Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-indigo-600  pb-16">
             
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor users, problems, and platform activity.
            </p>
          </div>

          <Link
            href="/admin/problems"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
          >
            <MessageSquare size={16} />
            Review Problems
          </Link>
        </div>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                      {stat.value}
                    </h2>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold text-emerald-600">
                  {stat.change}{" "}
                  <span className="font-normal text-slate-400">
                    Compared to last month
                  </span>
                </p>
              </div>
            );
          })}
        </section>

        {/* Recent Problems and Solver Performance */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-bold">Recent Problems</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Latest problems submitted by seekers
                </p>
              </div>

              <Link
                href="/admin/problems"
                className="flex items-center gap-1 text-sm font-semibold text-indigo-600"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Problem</th>
                    <th className="px-5 py-3">Seeker</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {problems.map((problem) => (
                    <tr key={problem.id} className="hover:bg-slate-50">
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold">
                          {problem.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {problem.id} · {problem.category}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {problem.seeker}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={problem.status} />
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                        {problem.date}
                      </td>

                      <td className="px-5 py-4">
                        <Link
                          href="/admin/problems"
                          aria-label="Manage problem"
                          className="inline-flex rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                        >
                          <MoreHorizontal size={18} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-bold">Solver Performance</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Top-performing solvers
                </p>
              </div>

              <Link
                href="/admin/reports"
                aria-label="View solver reports"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <MoreHorizontal size={20} />
              </Link>
            </div>

            <div className="space-y-6 p-5">
              {solvers.map((solver) => (
                <ProgressItem key={solver.name} {...solver} />
              ))}
            </div>

            <div className="border-t border-slate-100 p-4">
              <Link
                href="/admin/reports"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold hover:bg-slate-50"
              >
                View Performance <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Users and Platform Overview */}
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="font-bold">Recent Users</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Recently registered platform members
                </p>
              </div>

              <Link
                href="/admin/users"
                className="flex items-center gap-1 text-sm font-semibold text-indigo-600"
              >
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {recentUsers.map((user) => (
                <div
                  key={user.email}
                  className="flex flex-wrap items-center gap-3 px-5 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-600">
                    {user.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {user.email}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                      {user.role}
                    </span>

                    <StatusBadge status={user.status} />

                    <Link
                      href="/admin/users"
                      aria-label={`Manage ${user.name}`}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                    >
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 p-4">
              <Link
                href="/admin/users"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold hover:bg-slate-50"
              >
                Manage All Users <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold">Platform Overview</h2>
              <p className="mt-1 text-sm text-slate-500">
                Current platform activity
              </p>

              <div className="mt-4 space-y-4">
                <MiniStat
                  icon={CheckCircle2}
                  label="Resolved Problems"
                  value="218"
                  color="bg-emerald-50 text-emerald-600"
                />

                <MiniStat
                  icon={Clock3}
                  label="Pending Problems"
                  value="42"
                  color="bg-amber-50 text-amber-600"
                />

                <MiniStat
                  icon={AlertCircle}
                  label="Reported Problems"
                  value="12"
                  color="bg-rose-50 text-rose-600"
                />
              </div>

              <Link
                href="/admin/reports"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold hover:bg-slate-50"
              >
                View Reports <ChevronRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                  <Bell size={20} />
                </div>

                <div>
                  <h3 className="font-bold">Admin Reminder</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Review pending problems and reported content to keep
                    FaceLink helpful and safe for everyone.
                  </p>
                </div>
              </div>

              <Link
                href="/admin/problems"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Review Problems <ChevronRight size={16} />
              </Link>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <CircleHelp size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Need help?</p>
                <p className="mt-1 text-xs text-slate-500">
                  Manage your admin preferences.
                </p>
              </div>

              <Link
                href="/admin/settings"
                aria-label="Open admin settings"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Dashboard Footer */}
        <footer className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-5 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 FaceLink. Admin Dashboard.</p>

          <div className="flex items-center gap-4">
            <Link href="/admin/settings" className="hover:text-slate-600">
              Settings
            </Link>

            <Link href="/admin/reports" className="hover:text-slate-600">
              Reports
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
