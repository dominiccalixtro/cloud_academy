import { getProgress } from "../../progress/services/progress.service";

export function ProgressCard() {
  const progress = getProgress();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Overall Progress
        </h2>

        <span className="text-sm font-medium text-orange-400">
          {progress.completed} / {progress.total} Lessons
        </span>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500"
          style={{
            width: `${progress.percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-slate-400">
        {progress.percentage}% Complete
      </p>
    </div>
  );
}