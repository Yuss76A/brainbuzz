// Final Page

document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user');
    const saveButton = document.getElementById('submitscorebtn');
    const scoreOutput = document.getElementById('score');
    console.log('SCOREOUTPUT: ', scoreOutput)

    // Get recent score from localStorage

    const recentScore = localStorage.getItem('mostRecentScore');
    console.log('RECENTSCORE: ', recentScore)
    scoreOutput.innerText = recentScore || 0;

    // Enable or disable the save button based on user input

    userInput.addEventListener('input', () => {
        saveButton.disabled = userInput.value.trim() === '';
    });

    // Function to save the score

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

        // Redirect to home page


        window.location.href = '/index.html';

    };

    scoreForm.addEventListener('submit', saveScore);

    // Listen for form submission

    saveButton.addEventListener('click', saveScore);
});