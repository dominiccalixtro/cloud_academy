import { LessonCard } from "../components/LessonCard";
import { getCourses } from "../services/course.repository";

import {
  getProgress,
} from "../../progress/services/progress.service";

import {
  getQuizProgress,
} from "../../quiz/services/quiz.service";

export function BootcampPage() {
  const courses = getCourses();
  const progress = getProgress();

  const quizProgress =
    getQuizProgress();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Cloud Engineering Bootcamp
        </h1>

        <p className="mt-2 text-slate-400">
          Follow the learning path from Cloud Fundamentals to AWS.
        </p>
      </div>


      {/* Progress */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-8">

        {/* Lesson Progress */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Lesson Progress
            </h2>

            <span className="font-semibold text-orange-400">
              {progress.completed} / {progress.total} Lessons
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-orange-500 transition-all duration-500"
              style={{
                width: `${progress.percentage}%`,
              }}
            />
          </div>
        </div>


        {/* Quiz Progress */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Quiz Progress
            </h2>

            <span className="font-semibold text-green-400">
              {quizProgress.completed} / {quizProgress.total} Quizzes
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-500"
              style={{
                width: `${quizProgress.percentage}%`,
              }}
            />
          </div>
        </div>

      </div>


      {/* Modules */}
      {courses.map((module) => (
        <section
          key={module.id}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-orange-400">
              {module.title}
            </h2>

            <p className="mt-2 text-slate-400">
              {module.description}
            </p>
          </div>


          <div className="grid gap-6 lg:grid-cols-2">
            {module.lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

