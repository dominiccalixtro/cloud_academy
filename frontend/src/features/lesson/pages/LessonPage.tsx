import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getCourses } from "../../bootcamp/services/course.repository";
import { PresentationViewer } from "../components/PresentationViewer";
import { getAllLessons, getLessonById } from "../services/lesson.service";

import {
  isLessonCompleted,
  toggleLessonCompletion,
} from "../../progress/services/progress.service";

import {
  getQuizResult,
  isQuizCompleted,
} from "../../quiz/services/quiz.service";

export function LessonPage() {
  const { lessonId } = useParams();
  const lesson = getLessonById(lessonId ?? "");

  const [completed, setCompleted] = useState(lesson ? isLessonCompleted(lesson.id) : false);
  const [quizCompleted, setQuizCompleted] = useState(lesson ? isQuizCompleted(lesson.id) : false);
  const [quizScore, setQuizScore] = useState<number | undefined>(
    lesson ? getQuizResult(lesson.id) : undefined,
  );

  useEffect(() => {
    if (lesson) {
      setCompleted(isLessonCompleted(lesson.id));
      setQuizCompleted(isQuizCompleted(lesson.id));
      setQuizScore(getQuizResult(lesson.id));
    }
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Lesson Not Found</h1>
        <Link to="/bootcamp" className="text-orange-400 hover:underline">
          ← Back to Bootcamp
        </Link>
      </div>
    );
  }

  const currentLesson = lesson;
  const moduleName =
    getCourses().find((module) =>
      module.lessons.some((lessonItem) => lessonItem.id === currentLesson.id),
    )?.title ?? "Course";

  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex((lessonItem) => lessonItem.id === currentLesson.id);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : null;
  const difficulty = currentLesson.difficulty ?? "Beginner";

  function handleCompleteLesson() {
    toggleLessonCompletion(currentLesson.id);
    setCompleted(isLessonCompleted(currentLesson.id));
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400">
          Week {currentLesson.week} • Day {currentLesson.day}
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">{currentLesson.title}</h1>

        <p className="mt-4 text-slate-300">{currentLesson.description}</p>
      </div>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">Lesson Overview</h2>
          <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
            {difficulty}
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Week</p>
            <p className="mt-2 text-lg font-semibold text-orange-300">
              Week {currentLesson.week} • Day {currentLesson.day}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Duration</p>
            <p className="mt-2 text-lg font-semibold text-orange-300">{currentLesson.duration}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Difficulty</p>
            <p className="mt-2 text-lg font-semibold text-orange-300">{difficulty}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Module</p>
            <p className="mt-2 text-lg font-semibold text-orange-300">{moduleName}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Learning Objectives</h2>

        <ul className="mt-5 space-y-3">
          {currentLesson.objectives.map((objective) => (
            <li
              key={objective}
              className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3 text-slate-300"
            >
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-500/15 text-sm text-green-400">
                ✓
              </span>
              <span>{objective}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">Lesson Material</h2>
          <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            Presentation
          </span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1">
              PDF deck
            </span>
            <span>Estimated learning time: {currentLesson.duration}</span>
          </div>
        </div>

        <PresentationViewer file={currentLesson.presentation} />
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Resources</h2>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Learning Materials</p>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
              <span className="text-lg">📄</span>
              <span>Presentation PDF</span>
            </li>
            <li className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
              <span className="text-lg">📊</span>
              <span>PowerPoint Slides</span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={currentLesson.powerpoint}
              download
              className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-orange-400"
            >
              Download PowerPoint
            </a>

            <a
              href={currentLesson.presentation}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              Open PDF
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Lesson Progress</h2>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Status</p>
              <p className="mt-2 text-2xl font-bold text-white">
                {completed ? "Completed ✓" : "Not Completed"}
              </p>
            </div>

            <button
              type="button"
              onClick={handleCompleteLesson}
              className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-orange-400"
            >
              {completed ? "Completed" : "Mark Lesson Complete"}
            </button>
          </div>

          {completed && (
            <div className="mt-5 space-y-4">
              {quizCompleted && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-3 text-center text-green-400">
                  ✓ Quiz Completed
                  {quizScore !== undefined && (
                    <span className="ml-2">Score: {quizScore}</span>
                  )}
                </div>
              )}

              <Link
                to={`/quiz/${currentLesson.id}`}
                className="block rounded-lg bg-orange-500 px-5 py-3 text-center font-medium text-slate-950 transition hover:bg-orange-400"
              >
                {quizCompleted ? "Retake Quiz" : "Take Quiz"}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">Navigate</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {previousLesson ? (
            <Link
              to={`/lesson/${previousLesson.id}`}
              className="rounded-lg border border-slate-700 px-4 py-2 text-white transition hover:bg-slate-800"
            >
              Previous Lesson
            </Link>
          ) : (
            <span className="rounded-lg border border-slate-700 px-4 py-2 text-slate-500 opacity-60">
              Previous Lesson
            </span>
          )}

          {nextLesson ? (
            <Link
              to={`/lesson/${nextLesson.id}`}
              className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-orange-400"
            >
              Next Lesson
            </Link>
          ) : (
            <span className="rounded-lg border border-slate-700 px-4 py-2 text-slate-500 opacity-60">
              Next Lesson
            </span>
          )}
        </div>
      </section>
    </div>
  );
}
