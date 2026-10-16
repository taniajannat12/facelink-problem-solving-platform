
// "use client";

// import { useMemo, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Search,
//   Users,
//   UserRound,
//   UserCheck,
//   Eye,
//   ChevronDown,
//   ShieldCheck,
// } from "lucide-react";

// const initialUsers = [
//   {
//     id: 1,
//     name: "Tania Jannat",
//     email: "tania@example.com",
//     role: "Seeker",
//     status: "Active",
//     joined: "Oct 10, 2026",
//     initials: "TJ",
//   },
//   {
//     id: 2,
//     name: "Rahim Hasan",
//     email: "rahim@example.com",
//     role: "Solver",
//     status: "Active",
//     joined: "Oct 09, 2026",
//     initials: "RH",
//   },
//   {
//     id: 3,
//     name: "Arif Hasan",
//     email: "arif@example.com",
//     role: "Solver",
//     status: "Active",
//     joined: "Oct 08, 2026",
//     initials: "AH",
//   },
//   {
//     id: 4,
//     name: "Mim Akter",
//     email: "mim@example.com",
//     role: "Seeker",
//     status: "Inactive",
//     joined: "Oct 07, 2026",
//     initials: "MA",
//   },
//   {
//     id: 5,
//     name: "Nabil Ahmed",
//     email: "nabil@example.com",
//     role: "Solver",
//     status: "Active",
//     joined: "Oct 06, 2026",
//     initials: "NA",
//   },
//   {
//     id: 6,
//     name: "Samiul Islam",
//     email: "samiul@example.com",
//     role: "Seeker",
//     status: "Active",
//     joined: "Oct 05, 2026",
//     initials: "SI",
//   },
// ];

// export default function ManageUsersPage() {
//   const [users, setUsers] = useState(initialUsers);
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const filteredUsers = useMemo(() => {
//     return users.filter((user) => {
//       const matchesSearch =
//         user.name.toLowerCase().includes(search.toLowerCase()) ||
//         user.email.toLowerCase().includes(search.toLowerCase());

//       const matchesRole =
//         roleFilter === "All" || user.role === roleFilter;

//       const matchesStatus =
//         statusFilter === "All" || user.status === statusFilter;

//       return matchesSearch && matchesRole && matchesStatus;
//     });
//   }, [users, search, roleFilter, statusFilter]);

//   const toggleStatus = (id) => {
//     setUsers((previous) =>
//       previous.map((user) =>
//         user.id === id
//           ? {
//               ...user,
//               status:
//                 user.status === "Active" ? "Inactive" : "Active",
//             }
//           : user
//       )
//     );
//   };

//   const totalSeekers = users.filter(
//     (user) => user.role === "Seeker"
//   ).length;

//   const totalSolvers = users.filter(
//     (user) => user.role === "Solver"
//   ).length;

//   const activeUsers = users.filter(
//     (user) => user.status === "Active"
//   ).length;

//   return (
//    <main className="ml-64 min-h-screen bg-slate-50 pt-20 text-slate-900">
//   <div className="mx-auto w-full max-w-6xl px-6"></div>
    
//      <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-10">
//         <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
//           <div>
//             <Link
//               href="/admin"
//               className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600"
//             >
//               <ArrowLeft size={15} />
//               Back to Dashboard
//             </Link>

//             <h1 className="text-xl font-bold sm:text-2xl">
//               Manage Users
//             </h1>

//             <p className="mt-1 text-xs text-slate-500 sm:text-sm">
//               View and manage FaceLink community members.
//             </p>
//           </div>

//           <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex">
//             <ShieldCheck size={22} />
//           </div>
//         </div>
//       </header>

//       <div className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
//         {/* Statistics */}
//         <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           <StatCard
//             title="Total Users"
//             value={users.length}
//             icon={Users}
//           />
//           <StatCard
//             title="Problem Seekers"
//             value={totalSeekers}
//             icon={UserRound}
//           />
//           <StatCard
//             title="Problem Solvers"
//             value={totalSolvers}
//             icon={UserCheck}
//           />
//           <StatCard
//             title="Active Users"
//             value={activeUsers}
//             icon={ShieldCheck}
//           />
//         </section>

//         {/* Users table */}
//         <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
//           <div className="border-b border-slate-100 p-5">
//             <h2 className="font-bold">All Users</h2>
//             <p className="mt-1 text-xs text-slate-500">
//               Search, filter and review registered members.
//             </p>

//             <div className="mt-5 grid gap-3 md:grid-cols-[1fr_180px_180px]">
//               <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3">
//                 <Search size={17} className="text-slate-400" />
//                 <input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search name or email..."
//                   className="h-11 w-full bg-transparent text-sm outline-none"
//                 />
//               </div>

//               <FilterSelect
//                 value={roleFilter}
//                 onChange={setRoleFilter}
//                 options={["All", "Seeker", "Solver"]}
//                 label="All Roles"
//               />

//               <FilterSelect
//                 value={statusFilter}
//                 onChange={setStatusFilter}
//                 options={["All", "Active", "Inactive"]}
//                 label="All Statuses"
//               />
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[760px] text-left">
//               <thead className="bg-slate-50">
//                 <tr className="text-xs text-slate-500">
//                   <th className="px-5 py-4 font-semibold">User</th>
//                   <th className="px-5 py-4 font-semibold">Role</th>
//                   <th className="px-5 py-4 font-semibold">Joined</th>
//                   <th className="px-5 py-4 font-semibold">Status</th>
//                   <th className="px-5 py-4 font-semibold">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredUsers.map((user) => (
//                   <tr
//                     key={user.id}
//                     className="border-t border-slate-100 hover:bg-slate-50/70"
//                   >
//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
//                           {user.initials}
//                         </div>

//                         <div>
//                           <p className="text-sm font-semibold">
//                             {user.name}
//                           </p>
//                           <p className="mt-1 text-xs text-slate-500">
//                             {user.email}
//                           </p>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
//                           user.role === "Solver"
//                             ? "bg-violet-50 text-violet-600"
//                             : "bg-blue-50 text-blue-600"
//                         }`}
//                       >
//                         {user.role}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4 text-xs text-slate-500">
//                       {user.joined}
//                     </td>

//                     <td className="px-5 py-4">
//                       <span
//                         className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
//                           user.status === "Active"
//                             ? "bg-emerald-50 text-emerald-600"
//                             : "bg-slate-100 text-slate-500"
//                         }`}
//                       >
//                         {user.status}
//                       </span>
//                     </td>

//                     <td className="px-5 py-4">
//                       <div className="flex items-center gap-2">
//                         <button
//                           type="button"
//                           onClick={() =>
//                             alert(
//                               `Name: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}\nStatus: ${user.status}`
//                             )
//                           }
//                           className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-100"
//                         >
//                           <Eye size={14} />
//                           View
//                         </button>

//                         <button
//                           type="button"
//                           onClick={() => toggleStatus(user.id)}
//                           className={`rounded-lg px-3 py-2 text-xs font-semibold ${
//                             user.status === "Active"
//                               ? "bg-red-50 text-red-600 hover:bg-red-100"
//                               : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
//                           }`}
//                         >
//                           {user.status === "Active"
//                             ? "Deactivate"
//                             : "Activate"}
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}

//                 {filteredUsers.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="px-5 py-12 text-center text-sm text-slate-500"
//                     >
//                       No users found. Try another search or filter.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
//             <p className="text-xs text-slate-500">
//               Showing {filteredUsers.length} of {users.length} users
//             </p>
//             <span className="text-xs font-medium text-slate-400">
//               Demo data
//             </span>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// function StatCard({ title, value, icon: Icon }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//       <div className="flex items-center justify-between">
//         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
//           <Icon size={20} />
//         </div>
//         <span className="text-xs font-medium text-slate-400">
//           FaceLink
//         </span>
//       </div>

//       <p className="mt-4 text-sm text-slate-500">{title}</p>
//       <p className="mt-1 text-2xl font-bold">{value}</p>
//     </div>
//   );
// }

// function FilterSelect({ value, onChange, options, label }) {
//   return (
//     <div className="relative">
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         aria-label={label}
//         className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-9 text-sm outline-none focus:border-indigo-300"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option === "All"
//               ? label
//               : option}
//           </option>
//         ))}
//       </select>

//       <ChevronDown
//         size={16}
//         className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
//       />
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";
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

const initialUsers = [
  {
    id: 1,
    name: "Tania Jannat",
    email: "tania@example.com",
    role: "Seeker",
    status: "Active",
    joined: "Oct 10, 2026",
    initials: "TJ",
  },
  {
    id: 2,
    name: "Rahim Hasan",
    email: "rahim@example.com",
    role: "Solver",
    status: "Active",
    joined: "Oct 09, 2026",
    initials: "RH",
  },
  {
    id: 3,
    name: "Arif Hasan",
    email: "arif@example.com",
    role: "Solver",
    status: "Active",
    joined: "Oct 08, 2026",
    initials: "AH",
  },
  {
    id: 4,
    name: "Mim Akter",
    email: "mim@example.com",
    role: "Seeker",
    status: "Inactive",
    joined: "Oct 07, 2026",
    initials: "MA",
  },
  {
    id: 5,
    name: "Nabil Ahmed",
    email: "nabil@example.com",
    role: "Solver",
    status: "Active",
    joined: "Oct 06, 2026",
    initials: "NA",
  },
  {
    id: 6,
    name: "Samiul Islam",
    email: "samiul@example.com",
    role: "Seeker",
    status: "Active",
    joined: "Oct 05, 2026",
    initials: "SI",
  },
];

export default function ManageUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const toggleStatus = (id) => {
    setUsers((previous) =>
      previous.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const totalSeekers = users.filter(
    (user) => user.role === "Seeker"
  ).length;

  const totalSolvers = users.filter(
    (user) => user.role === "Solver"
  ).length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900"> 
      
      
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {/* Page Header */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <Link
              href="/admin"
              className="mb-3 inline-flex items-center   pb-9 gap-2 text-xs font-semibold text-slate-500 transition hover:text-indigo-600"
            >
              
            </Link>

            <h1 className="text-2xl font-bold sm:text-3xl ">
              Manage Users
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              View and manage FaceLink community members.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex">
            <ShieldCheck size={23} />
          </div>
        </header>

        {/* Statistics */}
        <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Users"
            value={users.length}
            icon={Users}
          />

          <StatCard
            title="Problem Seekers"
            value={totalSeekers}
            icon={UserRound}
          />

          <StatCard
            title="Problem Solvers"
            value={totalSolvers}
            icon={UserCheck}
          />

          <StatCard
            title="Active Users"
            value={activeUsers}
            icon={ShieldCheck}
          />
        </section>

        {/* Users Table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="font-bold text-slate-900">
              All Users
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Search, filter and review registered members.
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_180px]">
              <div className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-200 px-3 transition focus-within:border-indigo-400">
                <Search
                  size={17}
                  className="shrink-0 text-slate-400"
                />

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
                {filteredUsers.map((user) => (
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
                          onClick={() => toggleStatus(user.id)}
                          className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition ${
                            user.status === "Active"
                              ? "bg-red-50 text-red-600 hover:bg-red-100"
                              : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                          }`}
                        >
                          {user.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-sm text-slate-500"
                    >
                      No users found. Try another search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-2 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredUsers.length} of {users.length} users
            </p>

            <span className="text-xs font-medium text-slate-400">
              Demo data
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

        <span className="text-xs font-medium text-slate-400">
          FaceLink
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </p>
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
