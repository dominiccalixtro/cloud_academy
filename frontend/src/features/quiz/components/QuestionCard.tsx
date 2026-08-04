import type { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onSelect: (answer: number) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">
        {question.question}
      </h2>

      <div className="mt-6 space-y-3">
        {question.options.map(
          (option, index) => (
            <button
              key={option}
              onClick={() =>
                onSelect(index)
              }
              className={`w-full rounded-lg border px-4 py-3 text-left transition ${
                selectedAnswer === index
                  ? "border-orange-500 bg-orange-500/10 text-orange-400"
                  : "border-slate-700 hover:bg-slate-800"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
    </div>
  );
}