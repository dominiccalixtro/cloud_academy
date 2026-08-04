import {
  getRecentActivities,
} from "../services/activity.service";


export function ActivityCard() {
  const activities =
    getRecentActivities();


  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>


      <div className="mt-6 space-y-4">

        {activities.length === 0 ? (
          <p className="text-slate-400">
            No recent activity yet.
          </p>
        ) : (

          activities.map((activity) => (

            <div
              key={activity.id}
              className="
                rounded-lg
                border
                border-slate-800
                bg-slate-950
                p-4
              "
            >

              <div className="flex items-center gap-2">

                <span className="text-green-400">
                  ✓
                </span>

                <h3 className="font-semibold">
                  {activity.title}
                </h3>

              </div>


              <p className="mt-2 text-sm text-slate-400">
                {activity.description}
              </p>


              <p className="mt-2 text-xs text-slate-500">
                {new Date(
                  activity.date
                ).toLocaleString()}
              </p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}