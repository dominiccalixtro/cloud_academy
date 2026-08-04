import type { LucideIcon } from "lucide-react";

interface NavigationItemProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

export function NavigationItem({
  label,
  icon: Icon,
  active = false,
  onClick,
}: NavigationItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex w-full items-center gap-3 rounded-xl px-4 py-3
        transition-all duration-200
        ${
          active
            ? "bg-orange-500 text-slate-950 shadow-lg shadow-orange-500/20"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      <Icon size={18} />

      <span className="font-medium">{label}</span>
    </button>
  );
}