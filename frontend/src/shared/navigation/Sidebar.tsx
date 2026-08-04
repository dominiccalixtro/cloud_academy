import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";

import { NavigationItem } from "./NavigationItem";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Bootcamp",
    icon: GraduationCap,
  },
  {
    label: "Resources",
    icon: BookOpen,
  },
  {
    label: "Profile",
    icon: User,
  },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-900">
      {/* Logo */}

      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-orange-400">
          Cloud Academy
        </h1>

        <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
          Learn • Build • Deploy
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navigation.map((item) => (
            <NavigationItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </div>
      </nav>

      {/* Logout */}

      <div className="border-t border-slate-800 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10">
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
}