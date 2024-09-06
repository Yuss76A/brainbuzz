// Final Page

// Retrieve high scores from localStorage, or initialize with an empty array if none are available
const scores = JSON.parse(localStorage.getItem('highScores')) || [];


/**
 * Event listener for DOMContentLoaded to initialize form handling and display score.
 */
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user');
    const saveButton = document.getElementById('submitscorebtn');
    const scoreOutput = document.getElementById('score');
    console.log('SCOREOUTPUT: ', scoreOutput)

    // Get recent score from localStorage
    const recentScore = localStorage.getItem('mostRecentScore');
    console.log('RECENTSCORE: ', recentScore)
    scoreOutput.innerText = recentScore || 0;


    /**
     * Enables or disables the save button based on presence of user input.
     */
    userInput.addEventListener('input', () => {
        saveButton.disabled = userInput.value.trim() === '';
    });


    /**
     * Saves the current score to local storage and redirects to the home page.
     *
     * @param {Event} event - The form submission event.
     */
    const saveScore = (event) => {
        event.preventDefault();
        const username = userInput.value;
        const scoreToSave = recentScore;

        // Create score object
        const submittedScore = {
            score: scoreToSave,
            username
        };

        // Add and sort scores, keeping the top 5
        scores.push(submittedScore);
        scores.sort((a, b) => b.score - a.score);
        scores.splice(5);
        localStorage.setItem('highScores', JSON.stringify(scores));

        // Redirect to home page
        window.location.href = 'index.html';

    };

    scoreForm.addEventListener('submit', saveScore);

    // Listen for form submission
    saveButton.addEventListener('click', saveScore);
});