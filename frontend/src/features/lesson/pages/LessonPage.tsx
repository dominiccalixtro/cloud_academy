import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { PresentationViewer } from "../components/PresentationViewer";
import { getLessonById } from "../services/lesson.service";

import {
  isLessonCompleted,
  toggleLessonCompletion,
} from "../../progress/services/progress.service";

import {
  isQuizCompleted,
  getQuizResult,
} from "../../quiz/services/quiz.service";



export function LessonPage() {


  const { lessonId } = useParams();


  const lesson =
    getLessonById(
      lessonId ?? ""
    );



  const [completed, setCompleted] =
    useState(
      lesson
        ? isLessonCompleted(lesson.id)
        : false
    );



  const [quizCompleted, setQuizCompleted] =
    useState(
      lesson
        ? isQuizCompleted(lesson.id)
        : false
    );



  const [quizScore, setQuizScore] =
    useState<number | undefined>(
      lesson
        ? getQuizResult(lesson.id)
        : undefined
    );





  useEffect(() => {

    if (lesson) {

      setCompleted(
        isLessonCompleted(
          lesson.id
        )
      );


      setQuizCompleted(
        isQuizCompleted(
          lesson.id
        )
      );


      setQuizScore(
        getQuizResult(
          lesson.id
        )
      );

    }

  }, [lesson]);







  if (!lesson) {

    return (

      <div className="space-y-4">

        <h1 className="text-3xl font-bold text-white">
          Lesson Not Found
        </h1>


        <Link
          to="/bootcamp"
          className="
            text-orange-400
            hover:underline
          "
        >
          ← Back to Bootcamp
        </Link>


      </div>

    );

  }



  const currentLesson = lesson;





  function handleCompleteLesson() {


    toggleLessonCompletion(
      currentLesson.id
    );


    setCompleted(
      isLessonCompleted(
        currentLesson.id
      )
    );


  }






  return (

    <div className="space-y-8">



      {/* Header */}

      <div>


        <p className="text-sm font-medium text-orange-400">

          Week {currentLesson.week} • Day {currentLesson.day}

        </p>



        <h1 className="mt-2 text-4xl font-bold text-white">

          {currentLesson.title}

        </h1>



        <p className="mt-4 text-slate-400">

          {currentLesson.description}

        </p>


      </div>






      {/* Learning Objectives */}

      <section
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <h2 className="text-xl font-semibold">

          Learning Objectives

        </h2>



        <ul className="mt-5 space-y-3">


          {
            currentLesson.objectives.map(

              (objective)=>(

                <li
                  key={objective}
                  className="
                    flex
                    items-center
                    gap-3
                    text-slate-300
                  "
                >

                  <span className="text-green-400">
                    ✓
                  </span>


                  {objective}


                </li>

              )

            )
          }


        </ul>


      </section>







      {/* Presentation */}

      <section className="space-y-4">


        <h2 className="text-xl font-semibold">

          Presentation

        </h2>



        <PresentationViewer

          file={
            currentLesson.presentation
          }

        />


      </section>







      {/* Resources */}

      <section
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >


        <h2 className="text-xl font-semibold">

          Resources

        </h2>




        <div className="mt-6 flex gap-4">



          <a

            href={
              currentLesson.powerpoint
            }

            download

            className="
              rounded-lg
              bg-orange-500
              px-5
              py-3
              font-medium
              text-slate-950
              transition
              hover:bg-orange-400
            "

          >

            Download PowerPoint

          </a>






          <a

            href={
              currentLesson.presentation
            }

            target="_blank"

            rel="noreferrer"

            className="
              rounded-lg
              border
              border-slate-700
              px-5
              py-3
              font-medium
              text-white
              transition
              hover:bg-slate-800
            "

          >

            Open PDF

          </a>



        </div>


      </section>







      {/* Lesson Progress */}

      <section
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >


        <h2 className="text-xl font-semibold">

          Lesson Progress

        </h2>





        <button

          onClick={handleCompleteLesson}

          className={`mt-6 rounded-lg px-5 py-3 font-medium transition ${
            
            completed

              ? "bg-green-600 text-white hover:bg-green-500"

              : "bg-orange-500 text-slate-950 hover:bg-orange-400"

          }`}

        >

          {
            completed

              ? "✓ Completed (Click to Undo)"

              : "Mark Lesson Complete"
          }


        </button>








        {
          completed && (

            <>

              {
                quizCompleted && (

                  <div
                    className="
                      mt-4
                      rounded-lg
                      bg-green-500/10
                      px-5
                      py-3
                      text-center
                      text-green-400
                    "
                  >

                    ✓ Quiz Completed


                    {
                      quizScore !== undefined && (

                        <span className="ml-2">

                          ({quizScore}/
                          {
                            currentLesson.id === "day-1"
                              ? 3
                              : "?"
                          })

                        </span>

                      )
                    }


                  </div>

                )
              }







              <Link

                to={`/quiz/${currentLesson.id}`}

                className="
                  mt-4
                  block
                  rounded-lg
                  bg-orange-500
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-slate-950
                  transition
                  hover:bg-orange-400
                "

              >

                {
                  quizCompleted

                    ? "Retake Quiz"

                    : "Take Quiz"
                }


              </Link>


            </>

          )
        }



      </section>




    </div>

  );

}