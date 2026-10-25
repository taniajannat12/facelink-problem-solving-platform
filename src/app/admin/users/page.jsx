
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Users,
  UserRound,
  UserCheck,
  Eye,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

const API = "http://localhost:5000/api/admin";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch(`${API}/users`);
        if (!res.ok) throw new Error("Failed to load users");

        const data = await res.json();
        if (!data.success || !Array.isArray(data.users)) {
          throw new Error("Invalid users response");
        }

        setUsers(
          data.users.map((user, index) => {
            const name = user.name || user.fullName || "Unknown User";

            return {
              ...user,
              id: user.id ?? user._id ?? index + 1,
              name,
              email: user.email || "No email",
              role: user.role
                ? user.role.charAt(0).toUpperCase() +
                  user.role.slice(1).toLowerCase()
                : "Seeker",
              status: user.status
                ? user.status.charAt(0).toUpperCase() +
                  user.status.slice(1).toLowerCase()
                : "Active",
              joined: user.joined
                ? user.joined
                : user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })
                  : "—",
              initials: name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase(),
            };
          })
        );

        setApiError("");
      } catch {
        setApiError("Could not connect to the users API.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase());

        const matchesRole =
          roleFilter === "All" || user.role === roleFilter;

        const matchesStatus =
          statusFilter === "All" || user.status === statusFilter;

        return matchesSearch && matchesRole && matchesStatus;
      }),
    [users, search, roleFilter, statusFilter]
  );

  const totalSeekers = users.filter((user) => user.role === "Seeker").length;
  const totalSolvers = users.filter((user) => user.role === "Solver").length;
  const activeUsers = users.filter((user) => user.status === "Active").length;

  const toggleStatus = async (user) => {
    const nextStatus = user.status === "Active" ? "Inactive" : "Active";

    setUpdatingId(user.id);
    setApiError("");

    try {
      const res = await fetch(
        `${API}/users/${encodeURIComponent(user.id)}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: nextStatus }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Could not update user status");
      }

      setUsers((previous) =>
        previous.map((item) =>
          item.id === user.id
            ? { ...item, status: data.user.status }
            : item
        )
      );
    } catch (error) {
      setApiError(error.message || "Could not update user status.");
    } finally {
      setUpdatingId(null);
    }
  };

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

            <h1 className="text-2xl pt-16 font-bold sm:text-3xl">Manage Users</h1>

            <p className="mt-2 text-sm text-slate-500">
              View and manage FaceLink community members.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex">
            <ShieldCheck size={23} />
          </div>
        </header>

        {apiError && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {apiError}
          </div>
        )}

        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Total Users" value={users.length} icon={Users} />
          <StatCard title="Problem Seekers" value={totalSeekers} icon={UserRound} />
          <StatCard title="Problem Solvers" value={totalSolvers} icon={UserCheck} />
          <StatCard title="Active Users" value={activeUsers} icon={ShieldCheck} />
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-bold text-slate-900">All Users</h2>

            <p className="mt-1 text-sm text-slate-500">
              Search, filter and review registered members.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
              <div className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 px-3 transition focus-within:border-indigo-400">
                <Search size={17} className="shrink-0 text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name or email..."
                  className="h-11 min-w-0 w-full bg-transparent text-sm outline-none"
                />
              </div>

              <FilterSelect
                value={roleFilter}
                onChange={setRoleFilter}
                options={["All", "Seeker", "Solver"]}
                label="All Roles"
              />

              <FilterSelect
                value={statusFilter}
                onChange={setStatusFilter}
                options={["All", "Active", "Inactive"]}
                label="All Statuses"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs text-slate-500">
                  <th className="px-5 py-4 font-semibold">User</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 font-semibold">Joined</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-slate-500">
                      Loading users...
                    </td>
                  </tr>
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-slate-500">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-slate-100 transition hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
                            {user.initials}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {user.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                            user.role === "Solver"
                              ? "bg-violet-50 text-violet-600"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-500">
                        {user.joined}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                `Name: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}\nStatus: ${user.status}`
                              )
                            }
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold transition hover:bg-slate-100"
                          >
                            <Eye size={14} />
                            View
                          </button>

                          <button
                            type="button"
                            disabled={updatingId === user.id}
                            onClick={() => toggleStatus(user)}
                            className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                              user.status === "Active"
                                ? "bg-red-50 text-red-600 hover:bg-red-100"
                                : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                            }`}
                          >
                            {updatingId === user.id
                              ? "Updating..."
                              : user.status === "Active"
                                ? "Deactivate"
                                : "Activate"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <span className="text-xs font-medium text-slate-400">
              Backend API
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon size={20} />
        </div>
        <span className="text-xs font-medium text-slate-400">FaceLink</span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function FilterSelect({ value, onChange, options, label }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-9 text-sm outline-none transition focus:border-indigo-400"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "All" ? label : option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}
