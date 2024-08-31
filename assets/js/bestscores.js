document.addEventListener('DOMContentLoaded', () => {
    const scoreList = document.getElementById("scoreList");
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

    // Verificación adicional
    if (!scoreList.innerHTML) {
        console.log('scoreList is empty after processing');
    }
});