import { Link, useParams } from "react-router-dom";

import { curriculum } from "../../bootcamp/data/curriculum";
import { PresentationViewer } from "../components/PresentationViewer";

export function LessonPage() {
  const { lessonId } = useParams();

  const lesson = curriculum
    .flatMap((module) => module.lessons)
    .find((lesson) => lesson.id === lessonId);

  if (!lesson) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">
          Lesson Not Found
        </h1>

        <Link
          to="/bootcamp"
          className="text-orange-400 hover:underline"
        >
          ← Back to Bootcamp
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <p className="text-sm font-medium text-orange-400">
          Week {lesson.week} • Day {lesson.day}
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          {lesson.title}
        </h1>

        <p className="mt-4 text-slate-400">
          {lesson.description}
        </p>
      </div>

      {/* Objectives */}

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">
          Learning Objectives
        </h2>

        <ul className="mt-5 space-y-3">
          {lesson.objectives.map((objective) => (
            <li
              key={objective}
              className="flex items-center gap-3 text-slate-300"
            >
              <span className="text-green-400">✓</span>

              {objective}
            </li>
          ))}
        </ul>
      </section>

      {/* Presentation */}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Presentation
        </h2>

        <PresentationViewer file={lesson.presentation} />
      </section>

      {/* Downloads */}

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">
          Resources
        </h2>

        <div className="mt-6 flex gap-4">
          <a
            href={lesson.powerpoint}
            download
            className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-orange-400"
          >
            Download PowerPoint
          </a>

          <a
            href={lesson.presentation}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Open PDF
          </a>
        </div>
      </section>
    </div>
  );
}