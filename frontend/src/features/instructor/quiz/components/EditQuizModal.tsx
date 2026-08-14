import { useState } from "react";

import type { Question, Quiz } from "../../../quiz/types";

interface EditQuizModalProps {
  quiz: Quiz;
  onClose: () => void;
  onSave: (quiz: Quiz) => void;
}

export function EditQuizModal({ quiz, onClose, onSave }: EditQuizModalProps) {
  const [title, setTitle] = useState(quiz.title);
  const [description, setDescription] = useState(quiz.description);
  const [questions, setQuestions] = useState<Question[]>(quiz.questions);

  function updateQuestion(index: number, value: string) {
    const next = [...questions];
    next[index] = { ...next[index], question: value };
    setQuestions(next);
  }

  function updateOption(questionIndex: number, optionIndex: number, value: string) {
    const next: Question[] = [...questions];
    next[questionIndex] = {
      ...next[questionIndex],
      options: next[questionIndex].options.map((option: string, currentIndex: number) =>
        currentIndex === optionIndex ? value : option,
      ),
    };
    setQuestions(next);
  }

  function updateAnswer(questionIndex: number, value: number) {
    const next = [...questions];
    next[questionIndex] = { ...next[questionIndex], answer: value };
    setQuestions(next);
  }

  function addQuestion() {
    setQuestions((current) => [
      ...current,
      {
        id: `question-${Date.now()}`,
        question: "",
        options: ["", "", "", ""],
        answer: 0,
      },
    ]);
  }

  function deleteQuestion(questionIndex: number) {
    setQuestions((current) => current.filter((_, index) => index !== questionIndex));
  }

  function submit() {
    onSave({
      ...quiz,
      title: title.trim() || "Untitled Quiz",
      description: description.trim(),
      questions,
    });

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold">Edit Quiz</h2>

        <div className="mt-4 space-y-4">
          <input
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Quiz title"
          />

          <textarea
            className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Quiz description"
            rows={3}
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Questions</h3>
          <button
            onClick={addQuestion}
            className="rounded-lg bg-orange-500 px-4 py-2 text-slate-950"
          >
            Add Question
          </button>
        </div>

        <div className="mt-4 space-y-5">
          {questions.map((question, questionIndex) => (
            <div key={question.id || questionIndex} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-orange-400">Question {questionIndex + 1}</span>
                <button
                  onClick={() => deleteQuestion(questionIndex)}
                  className="rounded-lg bg-red-500 px-3 py-1.5 text-sm"
                  disabled={questions.length === 1}
                >
                  Delete
                </button>
              </div>

              <input
                className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                value={question.question}
                onChange={(event) => updateQuestion(questionIndex, event.target.value)}
                placeholder="Question text"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {question.options.map((option: string, optionIndex: number) => (
                  <div key={`${question.id}-option-${optionIndex}`} className="space-y-2">
                    <label className="text-sm text-slate-300">Option {optionIndex + 1}</label>
                    <input
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                      value={option}
                      onChange={(event) =>
                        updateOption(questionIndex, optionIndex, event.target.value)
                      }
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-sm text-slate-300">Correct answer</label>
                <select
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
                  value={question.answer}
                  onChange={(event) => updateAnswer(questionIndex, Number(event.target.value))}
                >
                  {question.options.map((_: string, optionIndex: number) => (
                    <option key={`${question.id}-answer-${optionIndex}`} value={optionIndex}>
                      Option {optionIndex + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border border-slate-700 px-4 py-2">
            Cancel
          </button>
          <button
            onClick={submit}
            className="rounded-lg bg-orange-500 px-4 py-2 text-slate-950"
          >
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
