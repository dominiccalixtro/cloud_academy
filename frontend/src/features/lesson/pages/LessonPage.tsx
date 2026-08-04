import { useParams } from "react-router-dom";

export function LessonPage() {
  const { lessonId } = useParams();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Lesson Details
        </h1>

        <p className="mt-2 text-slate-400">
          Lesson ID: {lessonId}
        </p>
      </div>
    </div>
  );
}