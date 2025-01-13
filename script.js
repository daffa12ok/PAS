let timer;
let timeLeft = 120; // 2 minutes

function startTimer() {
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Submitting your answers...');
            showScore();
        }

        timeLeft--;
    }, 1000);
}

function preventCopyPaste() {
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());
}

window.onload = () => {
    startTimer();
    preventCopyPaste();
};

function showScore() {
    const correctAnswers = {
        q1: "Mudah teralihkan pada hal lain jika ada gangguan sedikit saja",
        q2: "72 dan 68",
        q3: "D, C, A, B, E",
        q4: "48"
    };

    let score = 0;

    // Check answers
    Object.keys(correctAnswers).forEach((key) => {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[key]) {
            score++;
        }
    });

    document.getElementById('score').textContent = `Your score: ${score}/4`;
}
