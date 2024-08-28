const question = document.getElementById("question");
const responses = Array.from(document.getElementsByClassName("response-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];