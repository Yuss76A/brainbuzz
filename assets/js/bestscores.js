/**
 * Handles the DOMContentLoaded event to load and display high scores.
 * Retrieves high scores from localStorage and displays them in the scoreList element.
 */
document.addEventListener('DOMContentLoaded', () => {
    const scoreList = document.getElementById("scoreList");

    // Retrieve high scores from localStorage or initialize as empty if not available
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    console.log('Retrieved scores:', highScores);
    console.log('Full localStorage content:', localStorage);

    if (highScores.length > 0) {
        scoreList.innerHTML = highScores
            .map(score => {
                console.log('Processing score:', score);
                return `<li class="high-score">${score.username || 'Unknown'} - ${score.score || 0}</li>`;
            })
            .join("");
    } else {
        console.log('No high scores found in localStorage');
        scoreList.innerHTML = "<li>No high scores yet!</li>";
    }

    // Additional verification to log if scoreList is unexpectedly empty
    if (!scoreList.innerHTML) {
        console.log('scoreList is empty after processing');
    }
});