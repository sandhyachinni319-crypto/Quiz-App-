const questions = [
{
question: "What does HTML stand for?",
answers: [
{text:"Hyper Text Markup Language", correct:true},
{text:"High Text Machine Language", correct:false},
{text:"Hyper Tool Markup Language", correct:false},
{text:"Home Text Markup Language", correct:false}
]
},
{
question: "Which language is used for styling web pages?",
answers: [
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},
{
question: "Which language is used for web interactivity?",
answers: [
{text:"CSS", correct:false},
{text:"Java", correct:false},
{text:"JavaScript", correct:true},
{text:"HTML", correct:false}
]
}
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function startQuiz(){
currentQuestion = 0;
score = 0;
showQuestion();
}

function showQuestion(){

answersElement.innerHTML = "";

let current = questions[currentQuestion];

questionElement.innerText = current.question;

current.answers.forEach(answer => {
const button = document.createElement("button");

button.innerText = answer.text;
button.classList.add("btn");

button.addEventListener("click", () => {

if(answer.correct){
score++;
}

Array.from(answersElement.children).forEach(btn=>{
btn.disabled=true;
});

});

answersElement.appendChild(button);
});
}

nextButton.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < questions.length){
showQuestion();
}
else{
document.getElementById("quiz").classList.add("hide");
document.getElementById("result").classList.remove("hide");
document.getElementById("score").innerText =
score + " / " + questions.length;
}

});

function restartQuiz(){
document.getElementById("result").classList.add("hide");
document.getElementById("quiz").classList.remove("hide");
startQuiz();
}

startQuiz();
