import type {
  Quiz,
} from "../types";
import { getQuizzes } from "./quiz.repository";


import {
  getCurrentUser,
} from "../../auth/services/auth.service";


import {
  addNotification,
} from "../../notifications/services/notification.service";



function getStorageKey() {

  const user =
    getCurrentUser();



  if (!user) {

    return "cloud-academy-quiz-results";

  }



  return `cloud-academy-quiz-results-${user.id}`;

}





interface QuizResults {

  [quizId: string]: number;

}





function getResults(): QuizResults {

  const data =
    localStorage.getItem(
      getStorageKey()
    );



  if (!data) {

    return {};

  }



  return JSON.parse(data);

}





export function calculateScore(
  quiz: Quiz,
  answers: number[]
) {

  let score = 0;



  quiz.questions.forEach(
    (question, index) => {


      if (
        question.answer ===
        answers[index]
      ) {

        score++;

      }


    }

  );



  return score;

}





export function saveQuizResult(
  quiz: Quiz,
  score: number
) {

  const results =
    getResults();



  results[quiz.id] = score;



  localStorage.setItem(
    getStorageKey(),
    JSON.stringify(results)
  );



  const percentage =
    Math.round(
      (score / quiz.questions.length) * 100
    );



  addNotification({

    id:
      crypto.randomUUID(),


    title:
      "Quiz Graded",


    message:
      `${quiz.title}: ${score}/${quiz.questions.length} (${percentage}%)`,


    type:
      "quiz",


    read:
      false,


    createdAt:
      new Date().toISOString(),

  });

}





export function getQuizResult(
  quizId: string
) {

  const results =
    getResults();



  return results[quizId];

}





export function isQuizCompleted(
  quizId: string
) {

  return (
    getQuizResult(quizId) !== undefined
  );

}





export function getQuizProgress() {

  const total = getQuizzes().length;



  const completed =
    Object.keys(
      getResults()
    ).length;



  return {

    total,


    completed,


    percentage:

      total === 0

        ? 0

        :

        Math.round(
          (completed / total) * 100
        ),

  };

}
