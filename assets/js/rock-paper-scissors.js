/* jshint esversion: 8 */
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ['rock', 'paper', 'scissors'];
const playerOption = document.querySelector('.playerOption');
const computerOption = document.querySelector('.computerOption');
const message = document.querySelector('.message');
let playerChoice;


// This is the function for taking the player choice and determining the computers choice and is triggered when a player clicks one the player options
// The computer's choice is decided by using math.floor and math.random to randomly choose between rock, paper, scissors 
// Then both the playerChoice and computerChoice are taken and the game function starts to run


playerOptions.forEach(option => {
    option.addEventListener('click', function () {
        playerChoice = this.id;
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        game(playerChoice, computerChoice);
    });
});

// This is the function for deciding the outcome and winner of the game

function game(playerChoice, computerChoice) {
    // compare player vs computer choices
    switch (playerChoice) {
        // player chose rock
        case "rock":
            // player chose rock - check what computer chose
            switch (computerChoice) {
                case "rock":
                    message.innerText = `It's a draw!`;
                    break;
                case "paper":
                    message.innerText = `Computer wins!`;
                    computerScore();
                    break;
                case "scissors":
                    message.innerText = `Player wins!`;
                    playerScore();
                    break;
            }
            break;
        case "paper":
            // player chose paper - check what computer chose
            switch (computerChoice) {
                case "rock":
                    message.innerText = `Player wins!`;
                    playerScore();
                    break;
                case "paper":
                    message.innerText = `It's a draw!`;
                    break;
                case "scissors":
                    message.innerText = `Computer wins!`;
                    computerScore();
                    break;
            }
            break;
        case "scissors":
            // player chose scissors - check what computer chose
            switch (computerChoice) {
                case "rock":
                    message.innerText = `Computer wins!`;
                    computerScore();
                    break;
                case "paper":
                    message.innerText = 'Player Wins!';
                    playerScore();
                    break;
                case "scissors":
                    message.innerText = `It's a draw!`;
                    break;
            }
            break;
    }
    // show what the player's and computer's choices were
    playerOption.innerText = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerOption.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
}

// These two functions will run when either the computer or player win and will add on to their respective scores

function playerScore() {
    let pCount = document.getElementById("p-count");
    let oldplayerScore = parseInt(pCount.innerText);
    pCount.innerHTML = ++oldplayerScore;
}

function computerScore() {
    let cCount = document.getElementById("c-count");
    let oldcomputerScore = parseInt(cCount.innerText);
    cCount.innerHTML = ++oldcomputerScore;
}
