import {
  getProgress,
} from "../../progress/services/progress.service";

import {
  getQuizProgress,
} from "../../quiz/services/quiz.service";


export function ProfileStats() {

  const progress =
    getProgress();

  const quizProgress =
    getQuizProgress();


  return (
    <div className="
      grid
      grid-cols-1
      gap-6
      md:grid-cols-3
    ">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <p className="text-slate-400">
          Lessons Completed
        </p>

        <p className="mt-3 text-4xl font-bold text-orange-400">
          {progress.completed}/{progress.total}
        </p>

      </div>


      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <p className="text-slate-400">
          Quizzes Completed
        </p>

        <p className="mt-3 text-4xl font-bold text-green-400">
          {quizProgress.completed}/{quizProgress.total}
        </p>

      </div>


      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <p className="text-slate-400">
          Course Progress
        </p>

        <p className="mt-3 text-4xl font-bold text-white">
          {progress.percentage}%
        </p>

      </div>


    </div>
  );
}