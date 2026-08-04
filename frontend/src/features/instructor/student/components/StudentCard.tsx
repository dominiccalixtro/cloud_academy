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
items-center
"

>


<div>


<h2

className="
text-xl
font-bold
text-white
"

>

{student.name}

</h2>



<p
className="
text-slate-400
"

>

{student.email}

</p>


</div>





<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-orange-500
font-bold
text-black
"

>

{student.avatar}

</div>



</div>








<div

className="
mt-6
grid
grid-cols-3
gap-4
"

>



<div>

<p className="text-slate-400">
Lessons
</p>


<p className="mt-2 text-2xl font-bold text-orange-400">

{progress.lessons}/{progress.totalLessons}

</p>


</div>







<div>


<p className="text-slate-400">
Quizzes
</p>


<p className="mt-2 text-2xl font-bold text-green-400">

{progress.quizzes}

</p>


</div>







<div>


<p className="text-slate-400">
Progress
</p>


<p className="mt-2 text-2xl font-bold text-white">

{progress.completionRate}%

</p>


</div>



</div>








<div

className="
mt-6
"

>


<div

className="
h-2
rounded-full
bg-slate-800
"

>

<div

className="
h-2
rounded-full
bg-orange-500
"

style={{

width:
`${progress.completionRate}%`

}}

/>


</div>



</div>







<button

onClick={reset}

className="
mt-6
rounded-lg
bg-red-500
px-4
py-2
text-sm
font-medium
text-white
hover:bg-red-400
"

>

Reset Progress

</button>






</div>

);


}