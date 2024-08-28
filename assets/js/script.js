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

initGame = () => {
    questionCount = 0;
    currentScore = 0;
    remainingQuestion;
    s = [...questions];
    loadNewQuestion()
};

loadNewQuestion = () => {
    if (remainingQuestions.length === 0 || questionCount >= TOTAL_QUESTIONS)
        return window.location, assign('/end.html');
}
questionCount++;
const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
currentQuestion = remainingQuestions[randomIndex];
questionElement.innerText = currentQuestion.question;

answerResponses.forEach((response) => {
    const number = choice.dataset['number'];
    response.innerText = currentQuestion['response' + number];
});

remainingQuestions.splice(randomIndex, 1);
isAcceptingAnswers = true;


answerResponses.forEach((reponse) => {
    response.addEventListener('click', (event) => {
        if (!isAcceptingAnswers) return;

        isAcceptingAnswers = false;
        const chosenOption = event.target;
        const chosenAnswer = chosenOption.dataset['number'];
    });
});