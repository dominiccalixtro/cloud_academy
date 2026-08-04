import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { quizzes } from "../data/quizzes";
import { QuestionCard } from "../components/QuestionCard";

import {
  calculateScore,
  saveQuizResult,
} from "../services/quiz.service";

export function QuizPage() {
  const { quizId } = useParams();

  const quiz = quizzes.find(
    (item) => item.id === quizId
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] =
    useState<number[]>([]);

  const [finished, setFinished] =
    useState(false);

  const [score, setScore] =
    useState(0);

  if (!quiz) {
    return (
      <div>
        <h1 className="text-3xl font-bold">
          Quiz Not Found
        </h1>
      </div>
    );
  }

  function selectAnswer(answer: number) {
    const updated = [...answers];

    updated[currentQuestion] = answer;

    setAnswers(updated);
  }

  function submitQuiz() {
    const result = calculateScore(
      quiz,
      answers
    );

    saveQuizResult(
      quiz.id,
      result
    );

    setScore(result);
    setFinished(true);
  }

  if (finished) {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">
          Quiz Completed 🎉
        </h1>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-5xl font-bold text-orange-400">
            {score} / {quiz.questions.length}
          </p>

          <p className="mt-4 text-slate-400">
            Great job! Review the lesson if you
            want to improve your score.
          </p>
        </div>

        <Link
          to="/bootcamp"
          className="inline-block rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950"
        >
          Back to Bootcamp
        </Link>
      </div>
    );
  }

  const question =
    quiz.questions[currentQuestion];

  const isLastQuestion =
    currentQuestion ===
    quiz.questions.length - 1;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-orange-400">
          Question {currentQuestion + 1} /{" "}
          {quiz.questions.length}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {quiz.title}
        </h1>
      </div>

      <QuestionCard
        question={question}
        selectedAnswer={
          answers[currentQuestion]
        }
        onSelect={selectAnswer}
      />

      <div className="flex justify-between">
        <button
          disabled={currentQuestion === 0}
          onClick={() =>
            setCurrentQuestion(
              (value) => value - 1
            )
          }
          className="rounded-lg bg-slate-800 px-5 py-3 disabled:opacity-40"
        >
          Previous
        </button>

        {isLastQuestion ? (
          <button
            onClick={submitQuiz}
            className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950"
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() =>
              setCurrentQuestion(
                (value) => value + 1
              )
            }
            className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-slate-950"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}