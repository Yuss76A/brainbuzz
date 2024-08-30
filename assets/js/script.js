const question = document.getElementById("question");
const responses = Array.from(document.getElementsByClassName("response-text"));
const counterText = document.getElementById("counter");
const totalText = document.getElementById("total");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let remainingQuestions = [];

let questions = [{
        question: 'What is the capital of France?',
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
    {
        question: 'Which country is home to the ancient city of Petra?',
        option1: 'Egypt',
        option2: 'Greece',
        option3: 'Jordan',
        option4: 'Turkey',
        option5: 'Italy',
        answer: 3,
    },
    {
        question: 'What is the largest ocean on Earth?',
        option1: 'Atlantic Ocean',
        option2: 'Indian Ocean',
        option3: 'Arctic Ocean',
        option4: 'Southern Ocean',
        option5: 'Pacific Ocean',
        answer: 5,
    },
    {
        question: 'Which of these animals is not native to Australia?',
        option1: 'Kangaroo',
        option2: 'Koala',
        option3: 'Dingo',
        option4: 'Platypus',
        option5: 'Tiger',
        answer: 5,
    },
    {
        question: 'What is the capital city of Canada?',
        option1: 'Toronto',
        option2: 'Vancouver',
        option3: 'Montreal',
        option4: 'Ottawa',
        option5: 'Quebec City',
        answer: 4,
    },
    {
        question: 'Which famous scientist developed the theory of general relativity?',
        option1: 'Isaac Newton',
        option2: 'Albert Einstein',
        option3: 'Stephen Hawking',
        option4: 'Niels Bohr',
        option5: 'Marie Curie',
        answer: 2,
    },
    {
        question: 'What is the largest desert in the world?',
        option1: 'Gobi Desert',
        option2: 'Kalahari Desert',
        option3: 'Sahara Desert',
        option4: 'Arabian Desert',
        option5: 'Antarctic Desert',
        answer: 5,
    },
    {
        question: 'Which of these is not one of the Seven Wonders of the Ancient World?',
        option1: 'Great Pyramid of Giza',
        option2: 'Hanging Gardens of Babylon',
        option3: 'Statue of Zeus at Olympia',
        option4: 'Colosseum in Rome',
        option5: 'Temple of Artemis at Ephesus',
        answer: 4,
    },
    {
        question: 'What is the official language of Brazil?',
        option1: 'Spanish',
        option2: 'Portuguese',
        option3: 'English',
        option4: 'French',
        option5: 'Italian',
        answer: 2,
    },
    {
        question: 'Which of these countries is not a part of the United Kingdom?',
        option1: 'Scotland',
        option2: 'Wales',
        option3: 'Northern Ireland',
        option4: 'Ireland',
        option5: 'England',
        answer: 4,
    },
    {
        question: 'What is the largest mammal in the world?',
        option1: 'African Elephant',
        option2: 'Blue Whale',
        option3: 'Colossal Squid',
        option4: 'Giraffe',
        option5: 'Hippopotamus',
        answer: 2,
    },
    {
        question: 'Which planet in our solar system rotates clockwise?',
        option1: 'Mars',
        option2: 'Jupiter',
        option3: 'Venus',
        option4: 'Saturn',
        option5: 'Neptune',
        answer: 3,
    },
    {
        question: 'What is the national flower of Japan?',
        option1: 'Rose',
        option2: 'Tulip',
        option3: 'Chrysanthemum',
        option4: 'Cherry Blossom',
        option5: 'Lotus',
        answer: 4,
    },
    {
        question: 'What is the currency of Switzerland?',
        option1: 'Euro',
        option2: 'Pound',
        option3: 'Franc',
        option4: 'Krone',
        option5: 'Mark',
        answer: 3,
    },
    {
        question: 'Which of these is not one of the Great Lakes of North America?',
        option1: 'Lake Superior',
        option2: 'Lake Michigan',
        option3: 'Lake Huron',
        option4: 'Lake Ontario',
        option5: 'Lake Winnipeg',
        answer: 5,
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        option1: 'Charles Dickens',
        option2: 'William Shakespeare',
        option3: 'Jane Austen',
        option4: 'Mark Twain',
        option5: 'Oscar Wilde',
        answer: 2,
    },
    {
        question: 'In which year did the Berlin Wall fall?',
        option1: '1985',
        option2: '1989',
        option3: '1991',
        option4: '1993',
        option5: '1995',
        answer: 2,
    },
    {
        question: 'What is the capital city of New Zealand?',
        option1: 'Auckland',
        option2: 'Christchurch',
        option3: 'Wellington',
        option4: 'Hamilton',
        option5: 'Dunedin',
        answer: 3,
    },
    {
        question: 'Who painted the Mona Lisa?',
        option1: 'Michelangelo',
        option2: 'Leonardo da Vinci',
        option3: 'Raphael',
        option4: 'Donatello',
        option5: 'Botticelli',
        answer: 2,
    },
    {
        question: 'Which country consumes the most coffee per capita?',
        option1: 'Italy',
        option2: 'Colombia',
        option3: 'United States',
        option4: 'Finland',
        option5: 'Brazil',
        answer: 4,
    },
    {
        question: 'What is the smallest country in the world by land area?',
        option1: 'Monaco',
        option2: 'San Marino',
        option3: 'Vatican City',
        option4: 'Liechtenstein',
        option5: 'Tuvalu',
        answer: 3,
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        option1: 'Venus',
        option2: 'Mars',
        option3: 'Jupiter',
        option4: 'Saturn',
        option5: 'Mercury',
        answer: 2,
    },
];

// Fixed Values

const BONUS_POINTS = 15;
const TOTAL_QUESTIONS = 25;

const initGame = () => {
    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    loadNewQuestion();
};

const loadNewQuestion = () => {
    if (remainingQuestions.length === 0 || questionCounter >= TOTAL_QUESTIONS) {
        return window.location.assign('/final.html');
    }

    questionCounter++;
    counterText.innerText = questionCounter + "/" + TOTAL_QUESTIONS;

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
        const chosenAnswer = chosenOption.dataset['number'];

        let classToApply;
        if (chosenAnswer == currentQuestion.answer) {
            classToApply = "correct";
        } else {
            classToApply = "incorrect";
        }

        if (classToApply === "correct") {
            incrementScore(BONUS_POINTS);
        }

        chosenOption.parentElement.classList.add(classToApply);

        setTimeout(function () {
            chosenOption.parentElement.classList.remove(classToApply);
            loadNewQuestion();
        }, 1000);
    });
});


incrementScore = num => {
    score += num;
    totalText.innerText = score;
};

initGame();