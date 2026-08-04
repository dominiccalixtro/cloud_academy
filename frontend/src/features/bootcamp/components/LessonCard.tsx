import { Link } from "react-router-dom";
import type { Lesson } from "../types";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  const statusStyles = {
    completed:
      "bg-green-500/10 text-green-400 border border-green-500/20",
    available:
      "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    locked:
      "bg-slate-800 text-slate-400 border border-slate-700",
  };

  const statusLabels = {
    completed: "Completed",
    available: "Available",
    locked: "Locked",
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-orange-500/40">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-orange-400">
            Week {lesson.week} • Day {lesson.day}
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {lesson.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {lesson.duration}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[lesson.status]}`}
        >
          {statusLabels[lesson.status]}
        </span>
      </div>

      <Link
        to={`/lesson/${lesson.id}`}
        className={`mt-6 block rounded-lg px-4 py-3 text-center font-medium transition ${
          lesson.status === "locked"
            ? "pointer-events-none bg-slate-800 text-slate-500"
            : "bg-orange-500 text-slate-950 hover:bg-orange-400"
        }`}
      >
        {lesson.status === "completed"
          ? "Review Lesson"
          : lesson.status === "available"
          ? "Start Lesson"
          : "Locked"}
      </Link>
    </div>
  );
}