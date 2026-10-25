
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  UserRound,
  Bell,
  ShieldCheck,
  Settings2,
  Save,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Globe,
  LockKeyhole,
} from "lucide-react";

const API = "http://localhost:5000/api/admin/settings";

const defaultSettings = {
  profile: {
    name: "Admin User",
    email: "admin@facelink.com",
    role: "Super Admin",
  },
  notifications: {
    newUsers: true,
    newProblems: true,
    reports: false,
  },
  security: {
    twoFactor: false,
    loginAlerts: true,
  },
  platform: {
    siteName: "FaceLink",
    maintenanceMode: false,
    allowRegistration: true,
  },
};

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  const loadSettings = useCallback(async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(API, { cache: "no-store" });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to load settings.");
      }

      const saved = data.settings || data.data || {};

      setSettings({
        profile: {
          ...defaultSettings.profile,
          ...(saved.profile || {}),
        },
        notifications: {
          ...defaultSettings.notifications,
          ...(saved.notifications || {}),
        },
        security: {
          ...defaultSettings.security,
          ...(saved.security || {}),
        },
        platform: {
          ...defaultSettings.platform,
          ...(saved.platform || {}),
        },
      });

      setLoaded(true);
    } catch (err) {
      setError(err.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  const updateSection = (section, field, value) => {
    setSettings((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }));

    setMessage("");
  };

  const saveSettings = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(API, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to save settings.");
      }

      const saved = data.settings || data.data || settings;

      setSettings({
        profile: {
          ...defaultSettings.profile,
          ...(saved.profile || {}),
        },
        notifications: {
          ...defaultSettings.notifications,
          ...(saved.notifications || {}),
        },
        security: {
          ...defaultSettings.security,
          ...(saved.security || {}),
        },
        platform: {
          ...defaultSettings.platform,
          ...(saved.platform || {}),
        },
      });

      setMessage("Settings saved successfully.");
    } catch (err) {
      setError(err.message || "Could not save settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-sm font-medium text-slate-500">
          Loading settings...
        </p>
      </main>
    );
  }

  if (!loaded && error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <AlertCircle className="mx-auto mb-3 text-red-500" size={30} />
          <p className="font-semibold text-red-600">{error}</p>
          <button
            type="button"
            onClick={loadSettings}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-indigo-600"
            >
              <ArrowLeft size={15} />
              Back to Dashboard
            </Link>

            <h1 className="text-xl pt-16 font-bold sm:text-2xl">
              Admin Settings
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your account, notifications, security and platform.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex">
            <Settings2 size={22} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 p-4 sm:p-6 lg:p-8">
        {error && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            {error}
          </div>
        )}

        {message && (
          <div
            role="status"
            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            <CheckCircle2 size={18} />
            {message}
          </div>
        )}

        <form onSubmit={saveSettings} className="space-y-6">
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              icon={UserRound}
              title="Profile Information"
              description="Manage the administrator account information."
            />

            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
              <Field label="Full Name">
                <input
                  type="text"
                  value={settings.profile.name}
                  onChange={(event) =>
                    updateSection("profile", "name", event.target.value)
                  }
                  required
                  maxLength={100}
                  className="settings-input"
                  placeholder="Enter full name"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  value={settings.profile.email}
                  onChange={(event) =>
                    updateSection("profile", "email", event.target.value)
                  }
                  required
                  maxLength={150}
                  className="settings-input"
                  placeholder="Enter email address"
                />
              </Field>

              <Field label="Administrator Role">
                <input
                  type="text"
                  value={settings.profile.role}
                  readOnly
                  className="settings-input cursor-not-allowed bg-slate-50 text-slate-500"
                />
              </Field>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              icon={Bell}
              title="Notification Preferences"
              description="Choose which platform events you want to receive notifications about."
            />

            <div className="divide-y divide-slate-100 px-5 sm:px-6">
              <ToggleRow
                title="New User Registrations"
                description="Receive notifications when a new user registers."
                checked={settings.notifications.newUsers}
                onChange={(value) =>
                  updateSection("notifications", "newUsers", value)
                }
              />

              <ToggleRow
                title="New Problem Submissions"
                description="Receive notifications when users submit problems."
                checked={settings.notifications.newProblems}
                onChange={(value) =>
                  updateSection("notifications", "newProblems", value)
                }
              />

              <ToggleRow
                title="Reports and Analytics"
                description="Receive periodic report notifications."
                checked={settings.notifications.reports}
                onChange={(value) =>
                  updateSection("notifications", "reports", value)
                }
              />
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              icon={ShieldCheck}
              title="Security Settings"
              description="Configure security-related preferences for the platform."
            />

            <div className="divide-y divide-slate-100 px-5 sm:px-6">
              <ToggleRow
                title="Two-Factor Authentication"
                description="Preference for requiring an additional verification step."
                checked={settings.security.twoFactor}
                onChange={(value) =>
                  updateSection("security", "twoFactor", value)
                }
              />

              <ToggleRow
                title="Login Alerts"
                description="Preference for alerts about account login activity."
                checked={settings.security.loginAlerts}
                onChange={(value) =>
                  updateSection("security", "loginAlerts", value)
                }
              />
            </div>

            <div className="mx-5 mb-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 sm:mx-6">
              <LockKeyhole
                size={18}
                className="mt-0.5 shrink-0 text-amber-600"
              />
              <p className="text-xs leading-5 text-amber-800">
                These options currently save preferences only. Actual
                two-factor authentication and login alert delivery require
                authentication and notification services.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <SectionHeader
              icon={Globe}
              title="Platform Settings"
              description="Manage general FaceLink platform preferences."
            />

            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
              <Field label="Platform Name">
                <input
                  type="text"
                  value={settings.platform.siteName}
                  onChange={(event) =>
                    updateSection("platform", "siteName", event.target.value)
                  }
                  required
                  maxLength={100}
                  className="settings-input"
                  placeholder="FaceLink"
                />
              </Field>

              <div className="hidden sm:block" />

              <ToggleRow
                title="Maintenance Mode"
                description="Preference to temporarily restrict normal platform access."
                checked={settings.platform.maintenanceMode}
                onChange={(value) =>
                  updateSection("platform", "maintenanceMode", value)
                }
              />

              <ToggleRow
                title="Allow Registration"
                description="Allow new users to register on the platform."
                checked={settings.platform.allowRegistration}
                onChange={(value) =>
                  updateSection("platform", "allowRegistration", value)
                }
              />
            </div>

            <div className="mx-5 mb-5 rounded-xl bg-slate-50 p-4 sm:mx-6">
              <p className="text-xs leading-5 text-slate-500">
                Maintenance Mode and Allow Registration save their settings
                to the backend. They will only affect actual user access once
                the corresponding registration and access-control routes use
                these settings.
              </p>
            </div>
          </section>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={loadSettings}
              disabled={saving || loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-slate-50 disabled:opacity-50"
            >
              <RefreshCw size={16} />
              Reload Settings
            </button>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <RefreshCw size={16} className="animate-spin" />
              ) : (
                <Save size={16} />
              )}
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      <style jsx global>{`
        .settings-input {
          width: 100%;
          height: 44px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0 12px;
          font-size: 14px;
          color: #0f172a;
          outline: none;
          background: white;
        }

        .settings-input:focus {
          border-color: #818cf8;
          box-shadow: 0 0 0 3px rgb(99 102 241 / 10%);
        }
      `}</style>
    </main>
  );
}

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3 border-b border-slate-100 p-5 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

function ToggleRow({ title, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-5">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-indigo-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
