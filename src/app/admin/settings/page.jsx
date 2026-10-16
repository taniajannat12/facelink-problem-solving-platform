
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSettingsPage() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@facelink.com",
    role: "Super Admin",
  });

  const [notifications, setNotifications] = useState({
    newUsers: true,
    newProblems: true,
    reports: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
  });

  const [message, setMessage] = useState("");

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setMessage("Settings saved successfully! (Demo only)");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-block text-sm text-blue-600 hover:underline"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold text-gray-800">
              Admin Settings
            </h1>
            <p className="mt-2 text-gray-500">
              Manage your profile, notifications, and security preferences.
            </p>
          </div>

          <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
            <p className="text-sm text-gray-500">Account Role</p>
            <p className="font-semibold text-purple-600">{profile.role}</p>
          </div>
        </div>

        {message && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
            {message}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Settings */}
          <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Profile Information
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Update your admin account information.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Account Role
                </label>
                <input
                  value={profile.role}
                  readOnly
                  className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Save Profile
            </button>
          </section>

          {/* Account Summary */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">Account</h2>

            <div className="mt-6 flex flex-col items-center rounded-xl bg-blue-50 p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
                {profile.name.charAt(0).toUpperCase() || "A"}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {profile.name || "Admin User"}
              </h3>
              <p className="mt-1 break-all text-center text-sm text-gray-500">
                {profile.email}
              </p>

              <span className="mt-3 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                {profile.role}
              </span>
            </div>

            <div className="mt-5 rounded-lg border border-gray-100 p-4">
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="mt-1 font-semibold text-green-600">Active</p>
            </div>
          </section>

          {/* Notification Settings */}
          <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800">
              Notification Preferences
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Choose which updates you want to receive.
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  key: "newUsers",
                  title: "New User Registration",
                  description: "Get notified when a new user joins FaceLink.",
                },
                {
                  key: "newProblems",
                  title: "New Problems",
                  description: "Get notified when seekers post new problems.",
                },
                {
                  key: "reports",
                  title: "System Reports",
                  description: "Receive platform analytics and report updates.",
                },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex cursor-pointer items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifications[item.key]}
                    onChange={() =>
                      setNotifications({
                        ...notifications,
                        [item.key]: !notifications[item.key],
                      })
                    }
                    className="h-5 w-5 accent-blue-600"
                  />
                </label>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              Save Notifications
            </button>
          </section>

          {/* Security Settings */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800">
              Security Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your account security preferences.
            </p>

            <div className="mt-6 space-y-6">
              {[
                {
                  key: "twoFactor",
                  title: "Two-Factor Authentication",
                  description: "Add an extra layer of account security.",
                },
                {
                  key: "loginAlerts",
                  title: "Login Alerts",
                  description: "Get alerts about account sign-ins.",
                },
              ].map((item) => (
                <label key={item.key} className="flex gap-3">
                  <input
                    type="checkbox"
                    checked={security[item.key]}
                    onChange={() =>
                      setSecurity({
                        ...security,
                        [item.key]: !security[item.key],
                      })
                    }
                    className="mt-1 h-5 w-5 accent-blue-600"
                  />

                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="mt-6 w-full rounded-lg bg-gray-800 px-4 py-3 font-medium text-white hover:bg-gray-900"
            >
              Save Security
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
