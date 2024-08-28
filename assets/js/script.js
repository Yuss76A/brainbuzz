const question = document.getElementById("question");
const responses = Array.from(document.getElementsByClassName("response-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];

let questions = [{
        question: '"What is the capital of France?',
        option1: 'Berlin',
        option2: 'Madrid',
        option3: 'Paris',
        option4: 'Rome',
        option5: 'Lisbon',
        answer: 3,
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
];

// Fixed Values

const BONUS_POINTS = 15;
const TOTAL_QUESTIONS = 10;

const initGame = () => {
    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    loadNewQuestion();
};

const loadNewQuestion = () => {
    if (remainingQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS) {
        return window.location.assign('/end.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    responses.forEach((response) => {
        const number = response.dataset['number'];
        response.innerText = currentQuestion['option' + number];
    });

    remainingQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

responses.forEach((response) => {
    response.addEventListener('click', (event) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const chosenOption = event.target;
        const chosenAnswers = chosenOption.dataset['number'];

        loadNewQuestion()
    });
});

initGame();