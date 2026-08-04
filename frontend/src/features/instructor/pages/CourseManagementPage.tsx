import { useEffect, useState } from "react";

import {
  getCourses,
  addLesson,
  deleteLesson,
  updateLesson,
} from "../services/course.service";

import { AddLessonModal } from "../components/AddLessonModal";
import { EditLessonModal } from "../components/EditLessonModal";


export function CourseManagementPage() {


  const [courses, setCourses] =
    useState<any[]>([]);


  const [showAddModal, setShowAddModal] =
    useState(false);


  const [showEditModal, setShowEditModal] =
    useState(false);


  const [selectedModule, setSelectedModule] =
    useState("");


  const [selectedLesson, setSelectedLesson] =
    useState<any>(null);





  function loadCourses() {

    setCourses(
      getCourses()
    );

  }





  useEffect(() => {

    loadCourses();

  }, []);






  function openAddLesson(
    moduleId:string
  ) {

    setSelectedModule(moduleId);

    setShowAddModal(true);

  }







  function handleAddLesson(
    lesson:any
  ) {

    addLesson(
      selectedModule,
      lesson
    );


    loadCourses();

  }







  function openEditLesson(
    moduleId:string,
    lesson:any
  ) {

    setSelectedModule(
      moduleId
    );


    setSelectedLesson(
      lesson
    );


    setShowEditModal(
      true
    );

  }







  function handleEditLesson(
    lesson:any
  ) {

    updateLesson(
      selectedModule,
      lesson
    );


    loadCourses();

  }







  function handleDelete(
    moduleId:string,
    lessonId:string
  ) {


    const confirmDelete =
      window.confirm(
        "Delete this lesson?"
      );


    if (!confirmDelete) {
      return;
    }


    deleteLesson(
      moduleId,
      lessonId
    );


    loadCourses();

  }






  return (

    <div className="space-y-6">


      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >

        <h1 className="text-3xl font-bold">
          Course Management
        </h1>


        <p className="mt-2 text-slate-400">
          Manage lessons, modules, and course content.
        </p>


      </div>







      {
        courses.map(
          (module)=>(


            <section
              key={module.id}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
              "
            >



              <div
                className="
                  flex
                  justify-between
                  items-start
                "
              >

                <div>

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-orange-400
                    "
                  >
                    {module.title}
                  </h2>


                  <p className="mt-2 text-slate-400">
                    {module.description}
                  </p>

                </div>




                <button
                  onClick={() =>
                    openAddLesson(
                      module.id
                    )
                  }
                  className="
                    rounded-lg
                    bg-orange-500
                    px-4
                    py-2
                    text-slate-950
                  "
                >
                  Add Lesson
                </button>


              </div>






              <div className="mt-6 space-y-4">


                {
                  module.lessons.map(
                    (lesson:any)=>(


                      <div
                        key={lesson.id}
                        className="
                          flex
                          items-center
                          justify-between
                          rounded-xl
                          bg-slate-950
                          p-5
                        "
                      >



                        <div>

                          <h3 className="font-semibold">
                            {lesson.title}
                          </h3>


                          <p className="text-sm text-slate-400">
                            Week {lesson.week} • Day {lesson.day}
                          </p>


                          <p className="text-sm text-slate-500">
                            {lesson.duration}
                          </p>


                        </div>





                        <div className="flex gap-3">


                          <button
                            onClick={() =>
                              openEditLesson(
                                module.id,
                                lesson
                              )
                            }
                            className="
                              rounded-lg
                              border
                              border-slate-700
                              px-4
                              py-2
                            "
                          >
                            Edit
                          </button>





                          <button
                            onClick={() =>
                              handleDelete(
                                module.id,
                                lesson.id
                              )
                            }
                            className="
                              rounded-lg
                              bg-red-500
                              px-4
                              py-2
                            "
                          >
                            Delete
                          </button>



                        </div>



                      </div>


                    )
                  )
                }


              </div>



            </section>


          )
        )
      }







      {
        showAddModal && (

            <AddLessonModal

            onClose={() =>
                setShowAddModal(false)
            }

            onSave={
                handleAddLesson
            }

            />

        )
      }








      {
        showEditModal && selectedLesson && (

          <EditLessonModal

            lesson={selectedLesson}

            onClose={() =>
              setShowEditModal(false)
            }

            onSave={
              handleEditLesson
            }

          />

        )
      }





    </div>

  );

}