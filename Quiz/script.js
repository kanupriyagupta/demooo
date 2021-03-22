const quizDB =[
    {
        question: "Q1: An optical input device that interprets pencil marks on paper media is",
        a: "O.M.R",
        b: "Punch card reader",
        c: "Optical scanners",
        d: "Magnetic tape",
        ans: "ans1"
    },
    {
        question: "Q2: Most important advantage of an IC is its",
        a: "Easy replacement in case of circuit failure",
        b: "Extremely high reliability",
        c: "Reduced cos",
        d: "Low power consumption",
        ans: "ans2"
    },
    {
        question: "Q3: Data division is the third division of a _____ program.",
        a: "FORTH",
        b: "BASIC",
        c: "PASCAL",
        d: "COBOL",
        ans: "ans4"
    },
    {
        question: "Q4: A compiler means",
        a: "A person who compiles source program",
        b: "The same thing as a programmer",
        c: "A program which translates source program into object program",
        d: "None of the above",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const question1 =document.querySelector ('#option1');
const question2 =document.querySelector ('#option2');
const question3 =document.querySelector ('#option3');
const question4 =document.querySelector ('#option4');
const submit =document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showscore')

let questionCount = 0;
let score = 0;

const loadQuestion =() => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion ();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer =curAnsElem.id
        } 
    });
    return answer;
}
const deSelectAlll =() =>  {
        answers.forEach((curAnsElem)  => curAnsElem.checked =false );
}

submit.addEventListener ('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount ++;
    deSelectAlll();
    if(questionCount < quizDB.length) {
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> Your Score is  ${score} /${quizDB.length}  </h3>
        <button class="btm" onclick="location.reload()"> Reset </button>
        `;
        showScore.classList.remove('showarea');
    }
});     