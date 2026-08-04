export function AnnouncementCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-semibold">
        Announcements
      </h2>

      <div className="mt-6 rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
        <h3 className="font-semibold text-orange-400">
          Welcome to Cloud Academy 🎉
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Your cloud engineering journey starts today. Complete each lesson and quiz to unlock the next module.
        </p>
      </div>
    </div>
  );
}