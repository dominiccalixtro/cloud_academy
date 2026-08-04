import { curriculum } from "../../bootcamp/data/curriculum";


const STORAGE_KEY =
  "cloud-academy-courses";



export function getCourses() {

  const data =
    localStorage.getItem(
      STORAGE_KEY
    );


  if (!data) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(curriculum)
    );


    return curriculum;

  }


  return JSON.parse(data);

}





export function saveCourses(
  courses:any[]
) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(courses)
  );

}







export function addLesson(
  moduleId:string,
  lesson:any
) {


  const courses =
    getCourses();



  const module =
    courses.find(
      (item:any)=>
        item.id === moduleId
    );



  if (!module) {
    return;
  }



  module.lessons.push(
    lesson
  );



  saveCourses(
    courses
  );

}









export function updateLesson(
  moduleId:string,
  updatedLesson:any
) {


  const courses =
    getCourses();



  const module =
    courses.find(
      (item:any)=>
        item.id === moduleId
    );



  if (!module) {
    return;
  }




  module.lessons =
    module.lessons.map(
      (lesson:any)=>

        lesson.id === updatedLesson.id
          ? updatedLesson
          : lesson

    );



  saveCourses(
    courses
  );

}









export function deleteLesson(
  moduleId:string,
  lessonId:string
) {


  const courses =
    getCourses();



  const module =
    courses.find(
      (item:any)=>
        item.id === moduleId
    );



  if (!module) {
    return;
  }




  module.lessons =
    module.lessons.filter(
      (lesson:any)=>

        lesson.id !== lessonId

    );




  saveCourses(
    courses
  );

}