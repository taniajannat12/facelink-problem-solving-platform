
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
   
    {
      name: "Seeker",
      href: "/seeker/dashboard",
    },
    {
      name: "Solver",
      href: "/solver/dashboard",
    },
  ];

  const profileItems = [
    {
      name: "Seeker Profile",
      href: "/profile/seeker",
    },
    {
      name: "Solver Profile",
      href: "/profile/solver",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between">

          <Link
            href="/"
            onClick={() => {
              setMenuOpen(false);
              setProfileOpen(false);
            }}
            className="group flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-300 group-hover:scale-105">
              F
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Face<span className="text-indigo-600">Link</span>
              </h1>

              <p className="-mt-1 text-[10px] text-slate-400">
                Solve. Connect. Learn.
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
                >
                  {item.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-indigo-600" />
                  )}
                </Link>
              );
            })}

            <div className="relative">

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  pathname.startsWith("/profile")
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                }`}
              >
                Profile

                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">

                  <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Choose Profile
                  </p>

                  {profileItems.map((item) => {
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setProfileOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition ${
                          active
                            ? "bg-indigo-50 font-semibold text-indigo-600"
                            : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                        }`}
                      >
                        {item.name}

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 18 6-6-6-6"
                          />
                        </svg>
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>
          </div>

          <Link
            href="/login"
            className="hidden items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 sm:flex"
          >
            Login
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="pb-5 md:hidden">

            <div className="flex flex-col gap-1 border-t border-slate-200 pt-3">

              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-1 rounded-xl border border-slate-100 bg-slate-50/50 p-2">

                <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Profile
                </p>

                {profileItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition ${
                      isActive(item.href)
                        ? "bg-indigo-50 font-semibold text-indigo-600"
                        : "text-slate-600 hover:bg-white hover:text-indigo-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

              </div>

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Login
              </Link>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

