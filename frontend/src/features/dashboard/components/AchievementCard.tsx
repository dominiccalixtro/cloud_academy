import {
  getAchievements,
} from "../services/achievement.service";

export function AchievementCard() {
  const achievements =
    getAchievements();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold">
        Achievements
      </h2>


      <div className="mt-6 space-y-4">

        {achievements.map(
          (achievement) => (
            <div
              key={achievement.id}
              className={`
                rounded-lg
                border
                p-4
                ${
                  achievement.unlocked
                    ? "border-green-500/20 bg-green-500/10"
                    : "border-slate-800 bg-slate-950"
                }
              `}
            >

              <h3
                className={
                  achievement.unlocked
                    ? "text-green-400 font-semibold"
                    : "text-slate-500 font-semibold"
                }
              >
                {achievement.unlocked
                  ? achievement.title
                  : `🔒 ${achievement.title.replace(
                      "🏆 ",
                      ""
                    )}`}
              </h3>


              <p className="mt-1 text-sm text-slate-400">
                {achievement.description}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}