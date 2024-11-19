const gameContainer = document.getElementById("game-container");
const circle = document.getElementById("circle");
const scoreBoard = document.getElementById("score");
let score = 0;

// Fonction pour générer des positions aléatoires
function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

// Fonction pour déplacer le cercle
function moveCircle() {
    const x = getRandomPosition(gameContainer.clientWidth - circle.clientWidth);
    const y = getRandomPosition(gameContainer.clientHeight - circle.clientHeight);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.display = "block";

    // Masquer le cercle après 1 seconde s'il n'est pas cliqué
    setTimeout(() => {
        if (circle.style.display === "block") {
            circle.style.display = "none";
        }
    }, 1000);
}

// Ajouter un point au score lorsque le cercle est cliqué
circle.addEventListener("click", () => {
    score++;
    scoreBoard.textContent = score;
    circle.style.display = "none";
});

// Lancer le jeu : déplacer le cercle toutes les 2 secondes
setInterval(moveCircle, 2000);
