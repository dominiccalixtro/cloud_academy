import { useState } from "react";


interface AddLessonModalProps {

  moduleId: string;

  onClose: () => void;

  onSave: (lesson:any)=>void;

}



export function AddLessonModal({
  moduleId,
  onClose,
  onSave,
}: AddLessonModalProps) {


  const [title,setTitle] =
    useState("");

  const [duration,setDuration] =
    useState("");

  const [week,setWeek] =
    useState(1);

  const [day,setDay] =
    useState(1);



  function submit() {


    const lesson = {

      id:
        `lesson-${Date.now()}`,

      title,

      duration,

      week,

      day,

      description:
        "New lesson created by instructor."

    };


    onSave(
      lesson
    );


    onClose();

  }





  return (

    <div
      className="
        fixed
        inset-0
        flex
        items-center
        justify-center
        bg-black/60
        z-50
      "
    >


      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          bg-slate-900
          border
          border-slate-800
          p-6
        "
      >


        <h2 className="text-2xl font-bold">
          Add Lesson
        </h2>



        <div className="mt-5 space-y-4">


          <input
            placeholder="Lesson title"
            className="
              w-full
              rounded-lg
              bg-slate-950
              border
              border-slate-700
              p-3
            "
            value={title}
            onChange={
              e=>setTitle(e.target.value)
            }
          />



          <input
            placeholder="Duration"
            className="
              w-full
              rounded-lg
              bg-slate-950
              border
              border-slate-700
              p-3
            "
            value={duration}
            onChange={
              e=>setDuration(e.target.value)
            }
          />



          <input
            type="number"
            placeholder="Week"
            className="
              w-full
              rounded-lg
              bg-slate-950
              border
              border-slate-700
              p-3
            "
            value={week}
            onChange={
              e=>setWeek(
                Number(e.target.value)
              )
            }
          />



          <input
            type="number"
            placeholder="Day"
            className="
              w-full
              rounded-lg
              bg-slate-950
              border
              border-slate-700
              p-3
            "
            value={day}
            onChange={
              e=>setDay(
                Number(e.target.value)
              )
            }
          />



        </div>





        <div className="mt-6 flex justify-end gap-3">


          <button
            onClick={onClose}
            className="
              rounded-lg
              border
              border-slate-700
              px-4
              py-2
            "
          >
            Cancel
          </button>



          <button
            onClick={submit}
            className="
              rounded-lg
              bg-orange-500
              px-4
              py-2
              text-slate-950
            "
          >
            Save Lesson
          </button>



        </div>



      </div>


    </div>

  );

}