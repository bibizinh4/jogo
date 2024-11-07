// Lista de personagens com características
const characters = [
    { name: "Lolo", hair: "preto", glasses: false, eyes: "castanhos", hat: false, gender: "mulher", position: "fundo" },
    { name: "Bibi", hair: "castanho claro", glasses: true, eyes: "castanhos", hat: true, gender: "mulher", position: "frente" },
    { name: "Nono", hair: "loiro", glasses: false, eyes: "verdes", hat: false, gender: "homem", position: "fundo" },
    { name: "Carlinho", hair: "castanho", glasses: true, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Bateria", hair: "loiro", glasses: false, eyes: "verde", hat: true, gender: "homem", position: "fundo" },
    { name: "Nicão", hair: "preto", glasses: false, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Diego", hair: "preto", glasses: true, eyes: "castanhos", hat: true, gender: "homem", position: "frente" },
    { name: "Laura", hair: "castanho", glasses: false, eyes: "castanhos", hat: false, gender: "mulher", position: "frente" },
    { name: "Mari", hair: "castanhos", glasses: true, eyes: "castanhos", hat: false, gender: "mulher", position: "frente" },
    { name: "Wendy", hair: "preto", glasses: false, eyes: "castanhos", hat: true, gender: "mulher", position: "frente" },
    { name: "Isa", hair: "preto", glasses: true, eyes: "castanhos", hat: false, gender: "mulher", position: "fundo" },
    { name: "Kauany", hair: "castanho", glasses: false, eyes: "castanhos", hat: false, gender: "mulher", position: "fundo" },
    { name: "Anne", hair: "loiro", glasses: true, eyes: "castanhos", hat: true, gender: "mulher", position: "fundo" },
    { name: "Pedro G", hair: "preto", glasses: false, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Pedro O", hair: "preto", glasses: false, eyes: "castanhos", hat: true, gender: "homem", position: "fundo" },
    { name: "Giga", hair: "castanhos", glasses: true, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Juan", hair: "loiro", glasses: false, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Kelse", hair: "preto", glasses: true, eyes: "castanhos", hat: true, gender: "homem", position: "fundo" },
    { name: "João", hair: "castanho", glasses: false, eyes: "castanhos", hat: false, gender: "homem", position: "fundo" },
    { name: "Francimar", hair: "castanhos", glasses: true, eyes: "castanhos", hat: true, gender: "homem", position: "fundo" },
    { name: "Mateus C", hair: "castanhos", glasses: false, eyes: "castanhos", hat: false, gender: "homem", position: "frente" },  
    { name: "Mateus G", hair: "preto", glasses: false, eyes: "castanhos", hat: true, gender: "homem", position: "frente" },
    { name: "Sandy", hair: "castanho", glasses: true, eyes: "castanhos", hat: false, gender: "mulher", position: "fundo" },
    { name: "Maria H", hair: "castanhos", glasses: false, eyes: "castanhos", hat: false, gender: "mulher", position: "frente" },
    { name: "Uilian", hair: "loiro", glasses: true, eyes: "azul", hat: true, gender: "homem", position: "fundo" }
];

// Inicialização
let targetCharacter = null;
let remainingGuesses = 3;

// Inicia o jogo
function startGame() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = ""; // Limpa o tabuleiro
    remainingGuesses = 3; // Reinicia as tentativas
    document.getElementById("remaining-guesses").textContent = `Chances restantes: ${remainingGuesses}`;

    // Escolhe aleatoriamente um personagem alvo
    targetCharacter = characters[Math.floor(Math.random() * characters.length)];

    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        characterDiv.textContent = character.name;
        
        // Ao clicar, o jogador tenta adivinhar
        characterDiv.onclick = () => guessCharacter(character);
        
        gameBoard.appendChild(characterDiv);
    });

    alert("Um personagem foi escolhido! Use perguntas para descobrir quem é!");
}

function guessCharacter(character) {
    if (remainingGuesses > 0) {
        if (character === targetCharacter) {
            alert("Parabéns! Você acertou!");
            startGame();
        } else {
            remainingGuesses--;
            alert(`Não é esse personagem. Você tem ${remainingGuesses} chances restantes.`);
            document.getElementById("remaining-guesses").textContent = `Chances restantes: ${remainingGuesses}`;
        }

        if (remainingGuesses === 0) {
            alert(`Você perdeu! O personagem correto era ${targetCharacter.name}.`);
            startGame();
        }
    }
}

// Função para fazer perguntas com base nas características
function askQuestion() {
    const questionSelect = document.getElementById("question-select");
    const selectedQuestion = questionSelect.value;
    
    let answer;
    
    // Verifica a pergunta e responde com base nas características do personagem secreto
    if (selectedQuestion === "hair") {
        answer = targetCharacter.hair === "loiro" ? "Sim" : "Não";
    } else if (selectedQuestion === "glasses") {
        answer = targetCharacter.glasses ? "Sim" : "Não";
    } else if (selectedQuestion === "eyes") {
        answer = targetCharacter.eyes === "azuis" ? "Sim" : "Não";
    } else if (selectedQuestion === "hat") {
        answer = targetCharacter.hat ? "Sim" : "Não";
    } else if (selectedQuestion === "gender") {
        answer = targetCharacter.gender === "mulher" ? "Sim" : "Não";
    } else if (selectedQuestion === "position") {
        answer = targetCharacter.position === "fundo" ? "Sim" : "Não";
    }

    alert(`Resposta: ${answer}`);
}

// Reinicia o jogo
function resetGame() {
    startGame();
}

// Inicia o jogo ao carregar a página
window.onload = startGame;
