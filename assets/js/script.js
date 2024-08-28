const question = document.getElementById("question");
const responses = Array.from(document.getElementsByClassName("response-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        answer: 1,
    },
    {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        answer: 1,
    },
    {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        answer: 1,
    },
    {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        answer: 1,
    },
]

// Fixed Values

const BONUS_POINTS = 15;
const TOTAL_QUESTIONS = 10;