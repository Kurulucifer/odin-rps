console.log("Loaded.");

// rock paper scissors woo

// get the computer's choice 
// i.e. generate it here
function getComputerChoice() {
    // Generate an integer from 0 to 2 (0, 1, 2)
    let randNum = Math.floor((Math.random() * 3))

    // Convert that number to text
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

// get the player's choice
// function getHumanChoice() {
//     let choice = prompt("Rock, paper, or scissors? I recommend scissors...")
//     return choice;
// }

const selections = document.querySelector("div.button-container");
const game = document.querySelector("div.game");
const score = document.querySelector("div.score");
const results = document.querySelector("div.results");

selections.addEventListener("click", (e) => {
    let event = new CustomEvent("playerChoice", {
        detail: e.target.id
    });

    game.dispatchEvent(event);
});

// Keep track of player and computer scores
let humanScore = 0;
let computerScore = 0;

// play one round of rock, paper, scissors
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
    
    // console.log(result);
    // console.log(`Score: ${humanScore} to ${computerScore}`)
}

function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    game.addEventListener("playerChoice", (e) => console.log(e.detail));

    if (humanScore === computerScore) {
        // console.log(`A tie?! | Final Score: ${humanScore} to ${computerScore}`);
    }
    else if (humanScore > computerScore) {
        // console.log(`You win! | Final Score: ${humanScore} to ${computerScore}`);
    }
    else {
        // console.log(`You lose... | Final Score: ${humanScore} to ${computerScore}`);
    }
}

// playGame();