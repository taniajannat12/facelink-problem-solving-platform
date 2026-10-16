"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  UserRound,
  MessageSquare,
  UserCog,
  Users,
  ChartNoAxesColumn,
  Settings,
  X,
} from "lucide-react";

const userLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: " Profile Seeker", href: "/profile/seeker", icon: UserRound },
  { name: " Profile Solver", href: "/profile/solver", icon: UserRound },
  { name: "Problems", href: "/seeker/problem", icon: MessageSquare },
  { name: "Solver Dashboard", href: "/solver/dashboard", icon: UserCog },
    { name: "Seeker Dashboard", href: "/seeker/dashboard", icon: UserCog },
];

const adminLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Manage Users", href: "/admin/users", icon: Users },
  { name: "Manage Problems", href: "/admin/problems", icon: MessageSquare },
  { name: "Reports & Analytics", href: "/admin/reports", icon: ChartNoAxesColumn },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col overflow-y-auto border-r border-slate-200 bg-white p-5">
      <Link href="/admin" className="mb-8 text-2xl font-bold text-indigo-600">
        FaceLink
       
      </Link>

      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        User Menu
      </p>

      <nav className="space-y-1">
        {userLinks.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="my-5 border-t border-slate-200" />

      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        Admin Menu
      </p>

      <nav className="space-y-1">
        {adminLinks.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href + "/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-200 pt-4">
        <p className="text-xs text-slate-400">FaceLink Admin Panel</p>
      </div>
    </aside>
  );
}