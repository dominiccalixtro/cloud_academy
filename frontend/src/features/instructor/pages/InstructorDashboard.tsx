import { Link } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthContext";


export function InstructorDashboard() {


  const {
    user,
  } = useAuth();




  return (

    <div className="space-y-6">



      {/* Welcome Header */}

      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-8
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-white
          "
        >

          Welcome back, {user?.name} 👋

        </h1>


        <p
          className="
            mt-2
            text-slate-400
          "
        >

          Manage your Cloud Academy courses and students.

        </p>


      </div>





      {/* Instructor Statistics */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-3
        "
      >


        <div
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
          "
        >

          <p className="text-slate-400">
            Students
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-orange-400
            "
          >
            1
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Registered students
          </p>

        </div>





        <div
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
          "
        >

          <p className="text-slate-400">
            Courses
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-green-400
            "
          >
            3
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Active courses
          </p>

        </div>





        <div
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900
            p-6
          "
        >

          <p className="text-slate-400">
            Quizzes
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              text-white
            "
          >
            3
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Assessments created
          </p>

        </div>


      </div>







      {/* Instructor Tools */}

      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          Instructor Tools
        </h2>





        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >




          <Link

            to="/course-management"

            className="
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

            Manage Courses

          </Link>







          <Link

            to="/student-management"

            className="
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

            Manage Students

          </Link>







          <Link

            to="/quiz-management"

            className="
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

            Create Quiz

          </Link>




        </div>


      </div>







      {/* Analytics Section */}

      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >


        <h2
          className="
            text-xl
            font-semibold
            text-white
          "
        >

          Student Analytics

        </h2>



        <p
          className="
            mt-3
            text-slate-400
          "
        >

          Monitor student progress, lesson completion,
          and quiz performance.

        </p>





        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >



          <div
            className="
              rounded-lg
              bg-slate-950
              p-4
            "
          >

            <p className="text-slate-400">
              Completion Rate
            </p>

            <p
              className="
                mt-2
                text-2xl
                font-bold
                text-orange-400
              "
            >
              67%
            </p>

          </div>





          <div
            className="
              rounded-lg
              bg-slate-950
              p-4
            "
          >

            <p className="text-slate-400">
              Average Quiz Score
            </p>

            <p
              className="
                mt-2
                text-2xl
                font-bold
                text-green-400
              "
            >
              90%
            </p>

          </div>





          <div
            className="
              rounded-lg
              bg-slate-950
              p-4
            "
          >

            <p className="text-slate-400">
              Active Learners
            </p>


            <p
              className="
                mt-2
                text-2xl
                font-bold
                text-white
              "
            >
              1
            </p>


          </div>



        </div>



      </div>




    </div>

  );

}