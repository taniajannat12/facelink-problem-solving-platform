"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  BriefcaseBusiness,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Eye,
  ChevronDown,
  RefreshCw,
} from "lucide-react";

const API = "http://localhost:5000/api/admin";

const STATUS_OPTIONS = ["Pending", "In Progress", "Solved"];

export default function ManageProblemsPage() {
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const loadProblems = useCallback(async () => {
    setLoading(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${API}/problems`);

      if (!response.ok) {
        throw new Error("Failed to load problems.");
      }

      const data = await response.json();

      if (!data.success || !Array.isArray(data.problems)) {
        throw new Error("Invalid problems response.");
      }

      const formattedProblems = data.problems.map((problem, index) => ({
        ...problem,
        id: String(problem.id ?? problem._id ?? `FL-${1024 + index}`),
        title: problem.title || "Untitled Problem",
        seeker: problem.seeker || problem.seekerName || "Unknown",
        technology:
          problem.technology || problem.techStack || "Not specified",
        date: problem.date
          ? problem.date
          : problem.createdAt
            ? new Date(problem.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : "—",
        status: problem.status || "Pending",
        description: problem.description || "No description available.",
      }));

      setProblems(formattedProblems);

      setSelectedProblem((current) => {
        if (!current) return null;

        return (
          formattedProblems.find((problem) => problem.id === current.id) ||
          null
        );
      });
    } catch {
      setApiError(
        "Could not connect to the problems API. Make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProblems();
  }, [loadProblems]);

  const filteredProblems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return problems.filter((problem) => {
      const matchesSearch =
        String(problem.title).toLowerCase().includes(query) ||
        String(problem.seeker).toLowerCase().includes(query) ||
        String(problem.id).toLowerCase().includes(query) ||
        String(problem.technology).toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || problem.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [problems, search, statusFilter]);

  const updateStatus = async (id, status) => {
    if (!STATUS_OPTIONS.includes(status) || updating) return;

    const previousProblem = problems.find((problem) => problem.id === id);

    if (!previousProblem || previousProblem.status === status) return;

    setUpdating(true);
    setApiError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        `${API}/problems/${encodeURIComponent(id)}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not update problem status.");
      }

      setProblems((current) =>
        current.map((problem) =>
          problem.id === id ? { ...problem, status } : problem
        )
      );

      setSelectedProblem((current) =>
        current?.id === id ? { ...current, status } : current
      );

      setSuccessMessage("Problem status updated successfully.");
    } catch (error) {
      setApiError(
        error.message || "Could not update the problem status."
      );
    } finally {
      setUpdating(false);
    }
  };

  const solved = problems.filter(
    (problem) => problem.status === "Solved"
  ).length;

  const pending = problems.filter(
    (problem) => problem.status === "Pending"
  ).length;

  const inProgress = problems.filter(
    (problem) => problem.status === "In Progress"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-indigo-600"
            >
              <ArrowLeft size={15} />
              Back to Dashboard
            </Link>

            <h1 className="text-2xl pt-16 font-bold sm:text-3xl">
              Manage Problems
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Review and manage problems submitted to FaceLink.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex">
            <BriefcaseBusiness size={22} />
          </div>
        </header>

        {apiError && (
          <div
            role="alert"
            className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {apiError}
          </div>
        )}

        {successMessage && (
          <div
            role="status"
            className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          >
            {successMessage}
          </div>
        )}

        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Problems"
            value={problems.length}
            icon={BriefcaseBusiness}
          />
          <StatCard title="Pending" value={pending} icon={AlertCircle} />
          <StatCard
            title="In Progress"
            value={inProgress}
            icon={Clock3}
          />
          <StatCard title="Solved" value={solved} icon={CheckCircle2} />
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-bold">All Problems</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Search problems and review their status.
                </p>
              </div>

              <button
                type="button"
                onClick={loadProblems}
                disabled={loading || updating}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  size={14}
                  className={loading ? "animate-spin" : ""}
                />
                Refresh
              </button>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_200px]">
              <div className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 px-3 focus-within:border-indigo-400">
                <Search size={17} className="shrink-0 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search title, seeker, ID or technology..."
                  aria-label="Search problems"
                  className="h-11 w-full min-w-0 bg-transparent text-sm outline-none"
                />
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  aria-label="Filter by status"
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-9 text-sm outline-none focus:border-indigo-300"
                >
                  <option value="All">All Statuses</option>
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs text-slate-500">
                  <th className="px-5 py-4 font-semibold">Problem</th>
                  <th className="px-5 py-4 font-semibold">Seeker</th>
                  <th className="px-5 py-4 font-semibold">Technology</th>
                  <th className="px-5 py-4 font-semibold">Submitted</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-sm text-slate-500"
                    >
                      Loading problems...
                    </td>
                  </tr>
                ) : apiError && problems.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-sm text-red-500"
                    >
                      Unable to load problems.
                    </td>
                  </tr>
                ) : filteredProblems.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-sm text-slate-500"
                    >
                      No problems found.
                    </td>
                  </tr>
                ) : (
                  filteredProblems.map((problem) => (
                    <tr
                      key={problem.id}
                      className="border-t border-slate-100 transition hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold">
                          {problem.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          #{problem.id}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {problem.seeker}
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                          {problem.technology}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-500">
                        {problem.date}
                      </td>

                      <td className="px-5 py-4">
                        <StatusBadge status={problem.status} />
                      </td>

                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedProblem(problem);
                            setApiError("");
                            setSuccessMessage("");
                          }}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:bg-slate-100"
                        >
                          <Eye size={14} />
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 px-5 py-4">
            <p className="text-xs text-slate-500">
              Showing {filteredProblems.length} of {problems.length} problems
              <span className="ml-2 text-slate-400">• Backend API</span>
            </p>
          </div>
        </section>
      </div>

      {selectedProblem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4"
          onClick={() => {
            if (!updating) setSelectedProblem(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="problem-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-indigo-600">
                  #{selectedProblem.id}
                </p>
                <h2
                  id="problem-modal-title"
                  className="mt-2 text-lg font-bold"
                >
                  {selectedProblem.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                disabled={updating}
                aria-label="Close details"
                className="rounded-lg px-3 py-1 text-slate-500 transition hover:bg-slate-100 disabled:opacity-50"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm">
              <Detail label="Seeker" value={selectedProblem.seeker} />
              <Detail
                label="Technology"
                value={selectedProblem.technology}
              />
              <Detail label="Submitted" value={selectedProblem.date} />

              <div>
                <p className="mb-1 text-xs font-semibold text-slate-500">
                  Description
                </p>
                <p className="whitespace-pre-wrap leading-6 text-slate-700">
                  {selectedProblem.description}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold text-slate-500">
                  Update Status
                </p>
                <select
                  value={selectedProblem.status}
                  disabled={updating}
                  onChange={(event) =>
                    updateStatus(selectedProblem.id, event.target.value)
                  }
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:border-indigo-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                {updating && (
                  <p className="mt-2 text-xs text-slate-500">
                    Updating status...
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              disabled={updating}
              onClick={() => setSelectedProblem(null)}
              className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Done
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        <Icon size={20} />
      </div>
      <p className="mt-4 text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Solved: "bg-emerald-50 text-emerald-600",
    Pending: "bg-amber-50 text-amber-600",
    "In Progress": "bg-blue-50 text-blue-600",
  };

  const Icon =
    status === "Solved"
      ? CheckCircle2
      : status === "Pending"
        ? AlertCircle
        : Clock3;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-semibold text-slate-800">{value}</span>
    </div>
  );
}