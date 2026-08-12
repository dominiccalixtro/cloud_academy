import { quizzes as defaultQuizzes } from "../data/quizzes";
import type { Quiz } from "../types";

const STORAGE_KEY = "cloud-academy-quizzes";

function readQuizzes(): Quiz[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultQuizzes));
    return defaultQuizzes;
  }

  return JSON.parse(stored) as Quiz[];
}

function writeQuizzes(quizzes: Quiz[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
}

export const quizRepository = {
  getAll: (): Quiz[] => readQuizzes(),
  getById: (quizId: string): Quiz | undefined =>
    readQuizzes().find((quiz) => quiz.id === quizId),
  add: (quiz: Quiz): void => writeQuizzes([...readQuizzes(), quiz]),
  update: (updatedQuiz: Quiz): void =>
    writeQuizzes(
      readQuizzes().map((quiz) =>
        quiz.id === updatedQuiz.id ? updatedQuiz : quiz,
      ),
    ),
  delete: (quizId: string): void =>
    writeQuizzes(readQuizzes().filter((quiz) => quiz.id !== quizId)),
};

export const getQuizzes = quizRepository.getAll;
export const getQuizById = quizRepository.getById;
