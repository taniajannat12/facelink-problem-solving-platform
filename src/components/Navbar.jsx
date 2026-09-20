
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
      name: "Problems",
      href: "/seeker/problem",
    },
    {
      name: "Seeker",
      href: "/seeker/dashboard",
    },
    {
      name: "Solver",
      href: "/solver/dashboard",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="group flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition duration-300">
              F
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Face<span className="text-blue-600">Link</span>
              </h1>

              <p className="text-[10px] text-slate-400 -mt-1">
                Solve. Connect. Learn.
              </p>
            </div>

          </Link>

          <div className="hidden md:flex items-center gap-1">

            {navItems.map((item) => {

              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300

                    ${
                      active
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                    }
                  `}
                >

                  {item.name}

                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-blue-600 rounded-full" />
                  )}

                </Link>
              );
            })}

          </div>

          <Link
            href="/login"
            className="
              hidden sm:flex
              items-center justify-center
              px-5 py-2.5
              rounded-xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white
              text-sm
              font-semibold
              shadow-md shadow-blue-500/20
              hover:shadow-lg
              hover:shadow-blue-500/30
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Login
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden pb-5">

            <div className="flex flex-col gap-1 border-t border-slate-200 pt-3">

              {navItems.map((item) => {

                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-300

                      ${
                        active
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  px-4 py-3
                  rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white
                  text-sm
                  font-semibold
                  text-center
                "
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