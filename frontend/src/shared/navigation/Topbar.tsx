import { Bell, Moon, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold text-orange-400">
          Cloud Academy
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 transition hover:bg-slate-800">
          <Search size={18} />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-slate-800">
          <Bell size={18} />
        </button>

        <button className="rounded-lg p-2 transition hover:bg-slate-800">
          <Moon size={18} />
        </button>

        <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 font-semibold text-slate-900">
            D
          </div>

          <div>
            <p className="text-sm font-medium">Dominic</p>
            <p className="text-xs text-slate-400">Instructor</p>
          </div>
        </div>
      </div>
    </header>
  );
}