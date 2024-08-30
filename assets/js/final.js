// Final Page

document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user');
    const saveButton = document.getElementById('submitscorebtn');
    const scoreOutput = document.getElementById('score');
    console.log('SCOREOUTPUT: ', scoreOutput)

    const recentScore = localStorage.getItem('mostRecentScore');
    console.log('RECENTSCORE: ', recentScore)
    scoreOutput.innerText = recentScore || 0;

    userInput.addEventListener('input', () => {
        saveButton.disabled = userInput.value.trim() === '';
    });

    const saveScore = (event) => {
        event.preventDefault();
        const username = userInput.value;
        const scoreToSave = recentScore;

        const scores = JSON.parse(localStorage.getItem('highScores')) || [];
        scores.push({
            username,
            score: scoreToSave
        });
        localStorage.setItem('highScores', JSON.stringify(scores));

        window.location.href = '/index.html';

    };

    document.getElementById('scoreForm').addEventListener('submit', saveScore);
});