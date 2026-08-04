import { users } from "../../auth/data/users";

import {
  getCourses
} from "./course.service";

import {
  getQuizzes
} from "../quiz/services/quiz-management.service";



export function getInstructorAnalytics(){


  const students =
    users.filter(
      user =>
        user.role === "student"
    );



  const courses =
    getCourses();



  const quizzes =
    getQuizzes();





  let completedLessons = 0;


  let completedQuizzes = 0;



  students.forEach(
    student => {


      const lessons =
        localStorage.getItem(
          `cloud-academy-progress-${student.id}`
        );


      if(lessons){

        completedLessons +=
          JSON.parse(lessons).length;

      }



      const quizResults =
        localStorage.getItem(
          "cloud-academy-quiz-results"
        );


      if(quizResults){

        completedQuizzes +=
          Object.keys(
            JSON.parse(quizResults)
          ).length;

      }



    }
  );






  const totalLessons =
    courses.reduce(
      (
        total:any,
        course:any
      ) =>
        total +
        course.lessons.length,

      0

    );






  return {


    students:
      students.length,


    courses:
      courses.length,


    quizzes:
      quizzes.length,



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
      ),





    averageQuizScore:

      quizzes.length === 0

      ? 0

      :

      Math.round(
        (
          completedQuizzes /
          quizzes.length
        )
        *
        100
      ),




    activeLearners:
      students.length



  };


}