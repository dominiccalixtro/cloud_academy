import { Link } from "react-router-dom";

import { getNextLesson } from "../../progress/services/progress.service";

export function ContinueLearningCard() {
  const lesson = getNextLesson();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-lg font-semibold">
        Continue Learning
      </h2>

      {lesson ? (
        <>
          <p className="mt-6 text-sm text-orange-400">
            Week {lesson.week} • Day {lesson.day}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {lesson.title}
          </h3>

          <p className="mt-3 text-slate-400">
            {lesson.description}
          </p>

          <Link
            to={`/lesson/${lesson.id}`}
            className="
              mt-6
              block
              rounded-lg
              bg-orange-500
              px-4
              py-3
              text-center
              font-medium
              text-slate-950
              transition
              hover:bg-orange-400
            "
          >
            Continue Lesson
          </Link>
        </>
      ) : (
        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            🎉 Course Completed
          </h3>

          <p className="mt-3 text-slate-400">
            You have completed all available lessons.
          </p>
        </div>
      )}
    </div>
  );
}