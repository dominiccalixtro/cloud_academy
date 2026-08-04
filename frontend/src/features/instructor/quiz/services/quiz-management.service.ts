import { quizzes as defaultQuizzes } from "../../../quiz/data/quizzes";


const STORAGE_KEY =
  "cloud-academy-quizzes";



export function getQuizzes() {

  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (!data) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultQuizzes)
    );


    return defaultQuizzes;

  }


  return JSON.parse(data);

}





export function saveQuizzes(
  quizzes:any[]
) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(quizzes)
  );

}







export function addQuiz(
  quiz:any
) {

  const quizzes =
    getQuizzes();


  quizzes.push(
    quiz
  );


  saveQuizzes(
    quizzes
  );

}







export function updateQuiz(
  updatedQuiz:any
) {


  const quizzes =
    getQuizzes();


  const updated =
    quizzes.map(
      (quiz:any)=>

        quiz.id === updatedQuiz.id
          ? updatedQuiz
          : quiz

    );


  saveQuizzes(
    updated
  );

}







export function deleteQuiz(
  quizId:string
) {


  const quizzes =
    getQuizzes();


  const filtered =
    quizzes.filter(
      (quiz:any)=>

        quiz.id !== quizId

    );


  saveQuizzes(
    filtered
  );

}