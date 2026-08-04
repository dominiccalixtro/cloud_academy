import { useEffect, useState } from "react";

import {
  getQuizzes,
  addQuiz,
  updateQuiz,
  deleteQuiz
}
from "../services/quiz-management.service";


import { AddQuizModal }
from "../components/AddQuizModal";


import { EditQuizModal }
from "../components/EditQuizModal";



export function QuizManagementPage(){


const [quizzes,setQuizzes]=
useState<any[]>([]);


const [showAdd,setShowAdd]=
useState(false);


const [selectedQuiz,setSelectedQuiz]=
useState<any>(null);





function load(){

setQuizzes(
getQuizzes()
);

}





useEffect(()=>{

load();

},[]);







return (

<div className="space-y-6">


<div className="
rounded-2xl
border
border-slate-800
bg-slate-900
p-8
">


<h1 className="text-3xl font-bold">
Quiz Management
</h1>


<p className="text-slate-400">
Create and manage assessments.
</p>


</div>





<div className="
rounded-2xl
bg-slate-900
border
border-slate-800
p-6
">


<button

className="
bg-orange-500
px-4
py-2
rounded
text-black
"

onClick={()=>
setShowAdd(true)
}

>
Create Quiz
</button>






<div className="mt-6 space-y-4">


{
quizzes.map(
quiz=>(


<div
key={quiz.id}
className="
bg-slate-950
rounded-xl
p-5
flex
justify-between
"
>


<div>

<h2 className="font-bold">
{quiz.title}
</h2>


<p className="text-slate-400">
{quiz.description}
</p>


<p className="text-orange-400">
Questions:
{quiz.questions.length}
</p>


</div>




<div className="flex gap-3">


<button
onClick={()=>
setSelectedQuiz(quiz)
}
>
Edit
</button>



<button

className="bg-red-500 px-3"

onClick={()=>{

deleteQuiz(
quiz.id
);

load();

}}

>
Delete
</button>


</div>


</div>


)
)
}


</div>


</div>






{
showAdd &&

<AddQuizModal

onClose={()=>
setShowAdd(false)
}

onSave={(quiz)=>{

addQuiz(quiz);

load();

}}

/>

}






{
selectedQuiz &&

<EditQuizModal

quiz={selectedQuiz}

onClose={()=>
setSelectedQuiz(null)
}

onSave={(quiz)=>{

updateQuiz(quiz);

load();

}}

/>

}



</div>

);


}