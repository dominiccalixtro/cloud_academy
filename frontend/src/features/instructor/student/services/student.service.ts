import { users } from "../../../auth/data/users";

import { curriculum } from "../../../bootcamp/data/curriculum";




export function getStudents(){


  return users.filter(

    user =>
      user.role === "student"

  );


}







export function getStudentProgress(
  userId:string
){



  const lessons =
    localStorage.getItem(
      `cloud-academy-progress-${userId}`
    );



  const quizzes =
    localStorage.getItem(
      `cloud-academy-quiz-results-${userId}`
    );





  const completedLessons =

    lessons

      ? JSON.parse(lessons).length

      : 0;





  const completedQuizzes =

    quizzes

      ? Object.keys(
          JSON.parse(quizzes)
        ).length

      : 0;





  const totalLessons =

    curriculum.reduce(

      (
        total,
        module
      ) =>

        total +
        module.lessons.length,

      0

    );





  return {


    lessons:
      completedLessons,



    totalLessons,



    quizzes:
      completedQuizzes,



    completionRate:

      totalLessons === 0

        ? 0

        :

        Math.round(

          (
            completedLessons /
            totalLessons
          )

          *

          100

        )


  };


}







export function resetStudentProgress(
  userId:string
){


  localStorage.removeItem(

    `cloud-academy-progress-${userId}`

  );



  localStorage.removeItem(

    `cloud-academy-quiz-results-${userId}`

  );


}