import { curriculum } from "../data/curriculum";
import { LessonCard } from "../components/LessonCard";

export function BootcampPage() {
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
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Overall Progress
          </h2>

          <span className="text-orange-400 font-semibold">
            2 / 3 Lessons
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-2/3 rounded-full bg-orange-500" />
        </div>
      </div>

      {/* Modules */}
      {curriculum.map((module) => (
        <section key={module.id} className="space-y-6">
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