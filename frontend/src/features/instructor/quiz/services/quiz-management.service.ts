import type { Quiz } from "../../../quiz/types";
import { quizRepository } from "../../../quiz/services/quiz.repository";

export const getQuizzes = (): Quiz[] => quizRepository.getAll();
export const addQuiz = (quiz: Quiz): void => quizRepository.add(quiz);
export const updateQuiz = (quiz: Quiz): void => quizRepository.update(quiz);
export const deleteQuiz = (quizId: string): void => quizRepository.delete(quizId);
