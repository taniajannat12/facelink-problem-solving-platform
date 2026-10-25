
"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  TrendingUp,
  Star,
  Activity,
  RefreshCw,
} from "lucide-react";

const API = "http://localhost:5000/api/admin/reports";

export default function ReportsPage() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReports = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API, { cache: "no-store" });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load reports.");
      }

      setReport(data.reports || data.data || data);
    } catch (err) {
      setError(err.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  if (loading && !report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm font-medium text-slate-500">
          Loading reports...
        </p>
      </main>
    );
  }

  if (error && !report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <div className="rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
          <p className="font-semibold text-red-600">{error}</p>
          <button
            type="button"
            onClick={fetchReports}
            disabled={loading}
            className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  const summary = report?.summary || report?.stats || {};
  const monthlyUsers = report?.monthlyUsers || [];
  const technologies = report?.technologies || [];
  const topSolvers = report?.topSolvers || [];
  const problemStatus = report?.problemStatus || {};

  const totalUsers = summary.totalUsers ?? 0;
  const totalProblems = summary.totalProblems ?? 0;
  const solved = problemStatus.solved ?? summary.solvedProblems ?? 0;
  const inProgress = problemStatus.inProgress ?? 0;
  const pending = problemStatus.pending ?? summary.pendingProblems ?? 0;

  const maxUsers = Math.max(
    1,
    ...monthlyUsers.map((item) => Number(item.users) || 0)
  );

  const completionRate = totalProblems
    ? Math.round((solved / totalProblems) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-start justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600"
            >
              Back to Dashboard
            </Link>

            <h1 className="text-xl pt-16 font-bold sm:text-2xl">
              Reports & Analytics
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Overview of FaceLink users, problems and solver performance.
            </p>
          </div>

          <button
            type="button"
            onClick={fetchReports}
            disabled={loading}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold transition hover:bg-slate-50 disabled:opacity-50"
          >
            <RefreshCw
              size={14}
              className={loading ? "animate-spin" : ""}
            />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
            <button
              type="button"
              onClick={fetchReports}
              className="ml-2 font-semibold underline"
            >
              Retry
            </button>
          </div>
        )}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Users"
            value={totalUsers}
            note="Registered users"
            icon={Users}
          />
          <StatCard
            title="Total Problems"
            value={totalProblems}
            note="Submitted problems"
            icon={BriefcaseBusiness}
          />
          <StatCard
            title="Problems Solved"
            value={solved}
            note={`${completionRate}% completion rate`}
            icon={CheckCircle2}
          />
          <StatCard
            title="Pending Problems"
            value={pending}
            note="Awaiting solutions"
            icon={Clock3}
          />
        </section>

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
              Backend data
            </span>
          </div>

          {monthlyUsers.length ? (
            <div className="mt-8 flex h-56 items-end justify-around gap-3 border-b border-slate-200 px-2">
              {monthlyUsers.map((item, index) => (
                <div
                  key={`${item.month}-${index}`}
                  className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
                >
                  <span className="text-[10px] font-semibold text-slate-500 sm:text-xs">
                    {item.users}
                  </span>
                  <div
                    className="w-full max-w-14 rounded-t-lg bg-indigo-500 transition hover:bg-indigo-600"
                    style={{
                      height: `${((Number(item.users) || 0) / maxUsers) * 75}%`,
                    }}
                    title={`${item.month}: ${item.users} users`}
                  />
                  <span className="pb-2 text-xs text-slate-500">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="No monthly user data available." />
          )}
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold">Problem Status</h2>
            <p className="mt-1 text-xs text-slate-500">
              Distribution of submitted problems
            </p>

            <div className="mt-6 space-y-5">
              <ProgressRow
                label="Solved"
                count={solved}
                total={totalProblems}
                color="bg-emerald-500"
              />
              <ProgressRow
                label="In Progress"
                count={inProgress}
                total={totalProblems}
                color="bg-blue-500"
              />
              <ProgressRow
                label="Pending"
                count={pending}
                total={totalProblems}
                color="bg-amber-500"
              />
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <Activity size={19} className="text-indigo-600" />
                <div>
                  <p className="text-sm font-semibold">Completion Rate</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {completionRate}% of submitted problems are solved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-bold">Problems by Technology</h2>
            <p className="mt-1 text-xs text-slate-500">
              Most common problem categories
            </p>

            {technologies.length ? (
              <div className="mt-6 space-y-5">
                {technologies.map((item, index) => (
                  <div key={`${item.name}-${index}`}>
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
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(
                              0,
                              Number(
                                item.percent ??
                                  (maxUsers ? (item.count / maxUsers) * 100 : 0)
                              ) || 0
                            )
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="No technology data available." />
            )}
          </section>
        </div>

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
                {topSolvers.length ? (
                  topSolvers.map((solver, index) => (
                    <tr
                      key={solver.id || solver._id || solver.name || index}
                      className="border-t border-slate-100"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm font-semibold">
                            {solver.name || "Unknown Solver"}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-500">
                        {solver.role || "Solver"}
                      </td>
                      <td className="px-5 py-4 text-sm font-semibold">
                        {solver.solved ?? solver.solvedProblems ?? 0}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold">
                          <Star
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                          {solver.rating ?? "N/A"}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-8 text-center text-sm text-slate-400"
                    >
                      No solver performance data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-center text-xs text-slate-400">
          Report figures are loaded from the backend API.
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
  const percent = total
    ? Math.min(100, Math.round((count / total) * 100))
    : 0;

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

function EmptyState({ message }) {
  return (
    <p className="mt-6 rounded-xl bg-slate-50 p-5 text-sm text-slate-400">
      {message}
    </p>
  );
}
