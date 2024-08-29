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
        question: 'Which football club has won the most UEFA Champions League titles?',
        option1: 'Barcelona',
        option2: 'Bayern Munich',
        option3: 'AC Milan',
        option4: 'Liverpool',
        option5: 'Real Madrid',
        answer: 5,
    },
    {
        question: 'Who holds the record for the most goals scored in a single UEFA Champions League season?',
        option1: 'Lionel Messi',
        option2: 'Cristiano Ronaldo',
        option3: 'Robert Lewandowski',
        option4: 'Karim Bnezema',
        option5: 'Erling Haaland',
        answer: 2,
    },
    {
        question: 'Which player has made the most appearances in UEFA Champions League history?',
        option1: 'Iker Casillas',
        option2: 'Xavi',
        option3: 'Cristiano Ronaldo',
        option4: 'Lionel Messi',
        option5: 'Ryan Giggs',
        answer: 3,
    },
];

// Fixed Values

const BONUS_POINTS = 15;
const TOTAL_QUESTIONS = 4;

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