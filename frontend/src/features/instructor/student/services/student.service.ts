import { users } from "../../../auth/data/users";


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
      "cloud-academy-quiz-results"
    );



  const completedLessons =
    lessons
      ? JSON.parse(lessons).length
      : 0;



  const quizResults =
    quizzes
      ? Object.keys(
          JSON.parse(quizzes)
        ).length
      : 0;



  return {

    lessons:
      completedLessons,


    quizzes:
      quizResults

  };


}






export function resetStudentProgress(
  userId:string
){

  localStorage.removeItem(
    `cloud-academy-progress-${userId}`
  );


}