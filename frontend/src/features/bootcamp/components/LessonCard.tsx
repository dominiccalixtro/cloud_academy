import { Link } from "react-router-dom";
import type { Lesson } from "../types";

import {
  getLessonStatus,
} from "../../progress/services/progress.service";

import {
  isQuizCompleted,
  getQuizResult,
} from "../../quiz/services/quiz.service";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({
  lesson,
}: LessonCardProps) {
  const status = getLessonStatus(
    lesson.id
  );

  const quizCompleted = isQuizCompleted(
    lesson.id
  );

  const quizScore = getQuizResult(
    lesson.id
  );

  const statusStyles = {
    completed:
      "bg-green-500/10 text-green-400 border border-green-500/20",

    available:
      "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  };

  const statusLabels = {
    completed: "Completed",
    available: "Available",
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
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>


      {/* Progress Details */}
      <div className="mt-6 space-y-3 rounded-lg border border-slate-800 bg-slate-950 p-4">

        <div className="flex justify-between">
          <span className="text-sm text-slate-400">
            Lesson
          </span>

          <span
            className={
              status === "completed"
                ? "text-green-400"
                : "text-orange-400"
            }
          >
            {status === "completed"
              ? "✓ Completed"
              : "Available"}
          </span>
        </div>


        <div className="flex justify-between">
          <span className="text-sm text-slate-400">
            Quiz
          </span>

          <span
            className={
              quizCompleted
                ? "text-green-400"
                : "text-slate-400"
            }
          >
            {quizCompleted
              ? `✓ Completed ${
                  quizScore !== undefined
                    ? `(${quizScore}/3)`
                    : ""
                }`
              : "Not Completed"}
          </span>
        </div>

      </div>


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
        {status === "completed"
          ? "Review Lesson"
          : "Start Lesson"}
      </Link>
    </div>
  );
}