import {
  getStudentProgress,
  resetStudentProgress
}
from "../services/student.service";



export function StudentCard({
student
}:any){


const progress =
getStudentProgress(
student.id
);




function reset(){

  resetStudentProgress(
    student.id
  );

  window.location.reload();

}




return (

<div
className="
rounded-xl
bg-slate-950
p-5
"
>


<div className="flex justify-between">


<div>


<h2 className="text-xl font-bold">

{student.name}

</h2>


<p className="text-slate-400">

{student.email}

</p>


</div>



<div
className="
h-10
w-10
rounded-full
bg-orange-500
flex
items-center
justify-center
text-black
font-bold
"
>

{student.avatar}

</div>


</div>




<div className="mt-5 grid grid-cols-2 gap-4">


<div>

<p className="text-slate-400">
Lessons
</p>

<p className="text-2xl font-bold text-orange-400">

{progress.lessons}

</p>


</div>



<div>

<p className="text-slate-400">
Quizzes
</p>

<p className="text-2xl font-bold text-green-400">

{progress.quizzes}

</p>


</div>


</div>





<button

onClick={reset}

className="
mt-5
rounded-lg
bg-red-500
px-4
py-2
"

>

Reset Progress

</button>


</div>

);


}