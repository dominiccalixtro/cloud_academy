import { StudentCard } from "../components/StudentCard";

import {
getStudents
}
from "../services/student.service";



export function StudentManagementPage(){


const students =
getStudents();




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


<h1
className="
text-3xl
font-bold
"
>

Student Management

</h1>


<p className="text-slate-400">

Manage student accounts and progress.

</p>


</div>





<div
className="
grid
gap-6
md:grid-cols-2
"
>


{
students.map(
student=>(

<StudentCard

key={student.id}

student={student}

/>

))
}


</div>



</div>

);


}