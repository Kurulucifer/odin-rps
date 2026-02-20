console.log("Loaded.");

// rock paper scissors woo

function getComputerChoice() {
    let randNum = Math.floor((Math.random() * 3))

    let choice = "";
    switch(randNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

const game = document.querySelector("div.game");
const score = document.querySelector("div.score");
const results = document.querySelector("div.results");
const field = document.querySelector("div.field");
const selections = document.querySelector("div.button-container");

// Listens for the player's choice every round
selections.addEventListener("click", (e) => {
    let event = new CustomEvent("playerChoice", {
        detail: e.target.id
    });

    game.dispatchEvent(event);
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let result = "";
    if (humanChoice === computerChoice) {
        result = "Tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        result = "Rock beats Scissors. You win! But here comes Chisa with the steel chair!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        result = "Paper beats Rock. You lost!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        result = "Paper beats Rock. You win!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        result = "Rock beats scissors. You lost! Wait, why is Chisa at the computer?!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result = "Scissors beats paper! You win! Thanks to Chisa!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        result = "Rock beats scissors. You lost! Sorry, Chisa...";
    }

    results.textContent = result;
    score.textContent = `${humanScore} --- ${computerScore}`;
    field.textContent = `Player > ${humanChoice} vs. ${computerChoice} < Computer`
    
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (humanScore === computerScore) {
        results.textContent = "A tie?!";
    }
    else if (humanScore > computerScore) {
        results.textContent = "You win!";
    }
    else {
        results.textContent = "You lose...";
    }

    selections.childNodes.forEach((button) => button.disabled = true)
}

function playGame() {
    score.textContent = `${humanScore} --- ${computerScore}`;
    results.textContent = `Play your hand to get started!`
    field.textContent = `Player > ??? < Computer`;

    game.addEventListener("playerChoice", function play(e) {
        playRound(e.detail, getComputerChoice())
    });
}

playGame();