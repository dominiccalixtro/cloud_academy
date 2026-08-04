import { StudentCard } from "../components/StudentCard";

import {
  getStudents,
} from "../services/student.service";



export function StudentManagementPage() {


  const students =
    getStudents();





  return (

    <div className="space-y-6">






      {/* Header */}

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
          Student Management
        </h1>


        <p
          className="
            mt-2
            text-slate-400
          "
        >
          Manage student accounts and monitor learning progress.
        </p>


      </div>









      {/* Student Count */}

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
          Total Students
        </p>


        <p
          className="
            mt-3
            text-4xl
            font-bold
            text-orange-400
          "
        >
          {students.length}
        </p>


      </div>









      {/* Students */}

      {
        students.length === 0 ? (

          <div
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-8
            "
          >

            <p className="text-slate-400">
              No students registered yet.
            </p>


          </div>


        ) : (


          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >

            {
              students.map(
                (student)=>(

                  <StudentCard

                    key={student.id}

                    student={student}

                  />

                )
              )
            }


          </div>


        )
      }






    </div>

  );

}