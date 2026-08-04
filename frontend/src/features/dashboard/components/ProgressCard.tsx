export function ProgressCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-semibold">
        Overall Progress
      </h2>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-1/4 rounded-full bg-orange-500" />
      </div>

      <p className="mt-4 text-slate-400">
        25% Complete
      </p>
    </div>
  );
}