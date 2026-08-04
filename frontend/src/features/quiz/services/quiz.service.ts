import type { Quiz } from "../types";

const STORAGE_KEY = "cloud-academy-quiz-results";

export function calculateScore(
  quiz: Quiz,
  answers: number[]
) {
  let score = 0;

  quiz.questions.forEach(
    (question, index) => {
      if (
        question.answer === answers[index]
      ) {
        score++;
      }
    }
  );

  return score;
}

export function saveQuizResult(
  quizId: string,
  score: number
) {
  const results = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
  );

  results[quizId] = score;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(results)
  );
}

export function getQuizResult(
  quizId: string
) {
  const results = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "{}"
  );

  return results[quizId];
}