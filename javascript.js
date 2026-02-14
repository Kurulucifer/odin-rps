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
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors? I recommend scissors...")
    return choice;
}

// Keep track of player and computer scores
let humanScore = 0;
let computerScore = 0;

// play a single round
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
        computerChoice++;
        result = "Paper beats Rock. You lost!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanChoice++;
        result = "Paper beats Rock. You win!";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerChoice++;
        result = "Rock beats scissors. You lost! Wait, why is Chisa at the computer?!";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanChoice++;
        result = "Scissors beats paper! You win! Thanks to Chisa!";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerChoice++;
        result = "Rock beats scissors. You lost! Sorry, Chisa...";
    }

    console.log(result);
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection, computerSelection);

