import {
  getProgress,
} from "../../progress/services/progress.service";

import {
  getQuizProgress,
} from "../../quiz/services/quiz.service";

export function LearningStatsCard() {
  const lessonProgress =
    getProgress();

  const quizProgress =
    getQuizProgress();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">
        Learning Statistics
      </h2>

      <div className="mt-6 space-y-5">

        {/* Lessons */}
        <div>
          <div className="flex justify-between">
            <span className="text-slate-400">
              Lessons Completed
            </span>

            <span className="font-semibold text-orange-400">
              {lessonProgress.completed} / {lessonProgress.total}
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-orange-500"
              style={{
                width: `${lessonProgress.percentage}%`,
              }}
            />
          </div>
        </div>


        {/* Quizzes */}
        <div>
          <div className="flex justify-between">
            <span className="text-slate-400">
              Quizzes Completed
            </span>

            <span className="font-semibold text-green-400">
              {quizProgress.completed} / {quizProgress.total}
            </span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-green-500"
              style={{
                width: `${quizProgress.percentage}%`,
              }}
            />
          </div>
        </div>


        {/* Overall */}
        <div className="rounded-lg bg-slate-950 p-4">
          <p className="text-sm text-slate-400">
            Overall Learning Progress
          </p>

          <p className="mt-2 text-3xl font-bold text-white">
            {Math.round(
              (
                lessonProgress.percentage +
                quizProgress.percentage
              ) / 2
            )}
            %
          </p>
        </div>

      </div>
    </div>
  );
}