import { useState } from "react";


interface EditLessonModalProps {

  lesson:any;

  onClose:()=>void;

  onSave:(lesson:any)=>void;

}



export function EditLessonModal({
  lesson,
  onClose,
  onSave,
}:EditLessonModalProps){


  const [title,setTitle] =
    useState(lesson.title);


  const [duration,setDuration] =
    useState(lesson.duration);


  const [week,setWeek] =
    useState(lesson.week);


  const [day,setDay] =
    useState(lesson.day);





  function submit(){


    onSave({

      ...lesson,

      title,

      duration,

      week,

      day,

    });


    onClose();

  }





  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
      "
    >


      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
        "
      >


        <h2 className="text-2xl font-bold">
          Edit Lesson
        </h2>



        <div className="mt-5 space-y-4">


          <input
            className="
              w-full
              rounded-lg
              border
              border-slate-700
              bg-slate-950
              p-3
            "
            value={title}
            onChange={
              e=>setTitle(e.target.value)
            }
          />



          <input
            className="
              w-full
              rounded-lg
              border
              border-slate-700
              bg-slate-950
              p-3
            "
            value={duration}
            onChange={
              e=>setDuration(e.target.value)
            }
          />



          <input
            type="number"
            className="
              w-full
              rounded-lg
              border
              border-slate-700
              bg-slate-950
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
            className="
              w-full
              rounded-lg
              border
              border-slate-700
              bg-slate-950
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
            Save Changes
          </button>


        </div>



      </div>


    </div>

  );

}