import { useState } from "react";


interface Props {

  onClose:()=>void;

  onSave:(quiz:any)=>void;

}



const emptyQuestion = {

  question:"",

  options:[
    "",
    "",
    "",
    ""
  ],

  answer:0

};





export function AddQuizModal({
  onClose,
  onSave
}:Props){



const [title,setTitle]=
useState("");



const [description,setDescription]=
useState("");



const [questions,setQuestions]=
useState<any[]>([

  {
    ...emptyQuestion
  },

  {
    ...emptyQuestion
  },

  {
    ...emptyQuestion
  }

]);






function updateQuestion(
index:number,
value:string
){


const updated =
[
 ...questions
];


updated[index].question =
value;


setQuestions(
updated
);


}







function updateOption(
questionIndex:number,
optionIndex:number,
value:string
){


const updated =
[
 ...questions
];


updated[
 questionIndex
]
.options[
 optionIndex
]
=
value;



setQuestions(
updated
);


}







function updateAnswer(
questionIndex:number,
value:number
){


const updated =
[
 ...questions
];


updated[
 questionIndex
]
.answer =
value;



setQuestions(
updated
);


}








function submit(){


const quiz={


id:
`quiz-${Date.now()}`,


title,


description,


questions


};




onSave(
quiz
);


onClose();


}








return (

<div
className="
fixed
inset-0
z-50
overflow-y-auto
bg-black/60
p-10
"
>


<div
className="
mx-auto
max-w-3xl
rounded-2xl
bg-slate-900
p-6
"
>



<h2
className="
text-2xl
font-bold
"
>
Create Quiz
</h2>





<input

className="
mt-5
w-full
rounded-lg
bg-slate-950
p-3
"

placeholder="Quiz title"

value={title}

onChange={
e=>
setTitle(
e.target.value
)
}

/>





<textarea

className="
mt-3
w-full
rounded-lg
bg-slate-950
p-3
"

placeholder="Description"

value={description}

onChange={
e=>
setDescription(
e.target.value
)
}

/>







<h3
className="
mt-6
text-xl
font-bold
"
>

Questions

</h3>






{
questions.map(
(question,index)=>(


<div

key={index}

className="
mt-5
rounded-xl
bg-slate-950
p-5
"

>



<h4
className="
font-bold
text-orange-400
"
>

Question {index+1}

</h4>






<input

className="
mt-3
w-full
rounded-lg
bg-slate-900
p-3
"

placeholder="Question"

value={
question.question
}

onChange={
e=>
updateQuestion(
index,
e.target.value
)
}

/>








{
question.options.map(
(option:number|string,
optionIndex:number)=>(


<input

key={optionIndex}

className="
mt-3
w-full
rounded-lg
bg-slate-900
p-3
"

placeholder={
`Option ${optionIndex+1}`
}

value={
option
}

onChange={
e=>
updateOption(
index,
optionIndex,
e.target.value
)
}

/>


))
}








<select

className="
mt-3
w-full
rounded-lg
bg-slate-900
p-3
"

value={
question.answer
}

onChange={
e=>
updateAnswer(
index,
Number(
e.target.value
)
)
}

>


<option value={0}>
Option 1 Correct
</option>


<option value={1}>
Option 2 Correct
</option>


<option value={2}>
Option 3 Correct
</option>


<option value={3}>
Option 4 Correct
</option>



</select>





</div>


))
}







<div
className="
mt-6
flex
justify-end
gap-3
"
>


<button

onClick={onClose}

>
Cancel
</button>





<button

onClick={submit}

className="
rounded-lg
bg-orange-500
px-5
py-3
text-black
"

>

Create Quiz

</button>



</div>





</div>


</div>


);


}