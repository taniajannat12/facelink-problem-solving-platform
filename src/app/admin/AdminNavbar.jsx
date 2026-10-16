
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Settings,
  Menu,
  X,
  ShieldCheck,
  Bell,
} from "lucide-react";

const adminLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Manage Users", href: "/admin/users", icon: Users },
  {
    name: "Manage Problems",
    href: "/admin/problems",
    icon: BriefcaseBusiness,
  },
  {
    name: "Reports & Analytics",
    href: "/admin/reports",
    icon: ChartNoAxesCombined,
  },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    href === "/admin"
      ? pathname === "/admin"
      : pathname.startsWith(href);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm"> 
      
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">
        <Link
          href="/admin"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ShieldCheck size={21} />
          </div>

          <div>
            <p className="text-base font-bold text-slate-900">
              FaceLink
            </p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Admin Panel
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {adminLinks.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon size={17} />
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 sm:block"
          >
            <Bell size={19} />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white p-3 lg:hidden">
          <div className="mx-auto grid max-w-[1600px] gap-1">
            {adminLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
