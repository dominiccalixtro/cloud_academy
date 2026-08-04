import { useState } from "react";


export function EditQuizModal({
  quiz,
  onClose,
  onSave
}:any){


  const [title,setTitle] =
    useState(
      quiz.title
    );



  function submit(){

    onSave({

      ...quiz,

      title

    });


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
      "
    >

      <div
        className="
          rounded-xl
          bg-slate-900
          p-6
        "
      >

        <h2 className="text-xl font-bold">
          Edit Quiz
        </h2>



        <input

          className="
            mt-4
            rounded-lg
            bg-slate-950
            p-3
          "

          value={title}

          onChange={
            e=>
            setTitle(
              e.target.value
            )
          }

        />



        <div className="mt-5 flex gap-3">


          <button
            onClick={onClose}
          >
            Cancel
          </button>



          <button

            className="
              rounded-lg
              bg-orange-500
              px-4
              py-2
              text-black
            "

            onClick={submit}

          >
            Save

          </button>


        </div>


      </div>


    </div>

  );

}