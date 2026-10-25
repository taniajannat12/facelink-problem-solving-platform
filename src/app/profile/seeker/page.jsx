
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Edit3,
  MapPin,
  MessageCircle,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const API = "http://localhost:5000/api/seeker";

const emptyProfile = {
  name: "",
  email: "",
  location: "",
  joined: "",
  bio: "",
  about: "",
  interests: [],
};

export default function SeekerProfile() {
  const [profile, setProfile] = useState(emptyProfile);
  const [stats, setStats] = useState({
    totalProblems: 0,
    solvedProblems: 0,
    connections: 0,
  });
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(emptyProfile);

  async function loadProfile() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API}/profile`);
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load profile.");
      }

      setProfile(data.profile);
      setForm({
        ...data.profile,
        interests: [...data.profile.interests],
      });
      setStats(data.stats);
      setProblems(data.problems);
    } catch (err) {
      setError(
        "Profile load kora jayni. Backend server chalu ache kina check koro."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function saveProfile(event) {
    event.preventDefault();

    try {
      setSaving(true);
      setMessage("");

      const response = await fetch(`${API}/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          interests: form.interests
            .map((item) => item.trim())
            .filter(Boolean),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Profile update failed.");
      }

      setProfile(data.profile);
      setForm({
        ...data.profile,
        interests: [...data.profile.interests],
      });
      setEditing(false);
      setMessage("Profile updated successfully.");
    } catch (err) {
      setMessage(err.message || "Profile update failed.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f7fb]">
        <p className="text-sm font-semibold text-indigo-600">
          Loading profile...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f5f7fb] px-4">
        <p className="text-center text-sm text-red-600">{error}</p>
        <button
          onClick={loadProfile}
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
        >
          Try Again
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
     
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        {message && (
          <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-indigo-100 bg-white p-4 text-sm text-indigo-700">
            <p>{message}</p>
            <button
              onClick={() => setMessage("")}
              aria-label="Dismiss message"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 md:h-56">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute left-[15%] top-10 h-20 w-20 rounded-full border border-white" />
              <div className="absolute right-[20%] top-16 h-12 w-12 rounded-full border border-white" />
              <div className="absolute bottom-6 left-[45%] h-8 w-8 rounded-full bg-white" />
            </div>
          </div>

          <div className="relative px-6 pb-7 md:px-8">
            <div className="-mt-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-indigo-500 to-violet-500 text-4xl font-bold text-white shadow-lg">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold text-slate-900">
                      {profile.name}
                    </h1>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                      ✓
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Problem Seeker
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {profile.location}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span>Joined {profile.joined}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {profile.email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setForm({
                    ...profile,
                    interests: [...profile.interests],
                  });
                  setEditing(true);
                }}
                className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
              >
                <Edit3 size={15} />
                Edit Profile
              </button>
            </div>

            <div className="mt-7 max-w-2xl">
              <p className="text-sm leading-6 text-slate-500">
                {profile.bio}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 border-t border-slate-100 pt-6 sm:max-w-xl">
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {stats.totalProblems}
                </p>
                <p className="mt-1 text-xs text-slate-400">Problems</p>
              </div>
              <div className="border-l border-slate-100 pl-5">
                <p className="text-2xl font-bold text-slate-800">
                  {stats.solvedProblems}
                </p>
                <p className="mt-1 text-xs text-slate-400">Solved</p>
              </div>
              <div className="border-l border-slate-100 pl-5">
                <p className="text-2xl font-bold text-slate-800">
                  {stats.connections}
                </p>
                <p className="mt-1 text-xs text-slate-400">Connections</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_0.7fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                  Activity
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-800">
                  Recent Problems
                </h2>
              </div>
              <Link
                href="/seeker/dashboard"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
              >
                View Dashboard
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/40"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      problem.status === "Solved"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {problem.status === "Solved" ? (
                      <CheckCircle2 size={19} />
                    ) : (
                      <Clock3 size={19} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-slate-800 group-hover:text-indigo-600">
                      {problem.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="text-slate-400">
                        {problem.category}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="font-medium text-slate-500">
                        {problem.solver}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`hidden rounded-full px-3 py-1.5 text-[10px] font-bold sm:block ${
                      problem.status === "Solved"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {problem.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-800">
                    About Me
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    A little about this seeker
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">
                {profile.about}
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300">
                FaceLink Journey
              </p>
              <h2 className="mt-3 text-xl font-bold">
                Keep learning through connections.
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-indigo-300">
                    <MessageCircle size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">
                      {stats.totalProblems} problems shared
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Started conversations
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                    <CheckCircle2 size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">
                      {stats.solvedProblems} problems solved
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Through community help
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-7 text-white shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <UserRound size={17} className="text-white/80" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Your next step
                </p>
              </div>
              <h2 className="mt-2 text-xl font-bold">
                Have a problem you want to solve?
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Share it and start a conversation with the right person.
              </p>
            </div>
            <Link
              href="/seeker/problem"
              className="group flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              Ask a Problem
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <form
            onSubmit={saveProfile}
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Edit Profile
              </h2>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Location
                </label>
                <input
                  value={form.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={form.bio}
                  onChange={(event) => updateField("bio", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  About Me
                </label>
                <textarea
                  rows={3}
                  value={form.about}
                  onChange={(event) => updateField("about", event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Interests
                </label>
                <input
                  value={form.interests.join(", ")}
                  onChange={(event) =>
                    updateField(
                      "interests",
                      event.target.value.split(",").map((item) => item.trim())
                    )
                  }
                  placeholder="React, Next.js, Web Development"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
                <p className="mt-1 text-xs text-slate-400">
                  Interests আলাদা করতে comma ব্যবহার করো।
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
