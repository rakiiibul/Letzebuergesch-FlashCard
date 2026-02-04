const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Capital of France?", answer: "Paris" },
    { question: "JavaScript runs in?", answer: "Web browsers" }
];

let currentIndex = 0;

const card = document.getElementById("card");
const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showCard() {
    frontText.textContent = flashcards[currentIndex].question;
    backText.textContent = flashcards[currentIndex].answer;
    card.classList.remove("flipped");
}

card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard();
});

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + flashcards.length) % flashcards.length;
    showCard();
});

// Initial load
showCard();
