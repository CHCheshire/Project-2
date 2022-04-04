/* jshint esversion: 8 */
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');

var computerChoice = Math.ceil(Math.random()*3); 

if (computerChoice < 1) {
    computerChoice ="rock";
} else if (1 <= computerChoice <= 2) {
    computerChoice = "paper";
} else { 
    computerChoice = "scissors"
}

var playerChoice = () => {
    if (rockButton.addEventListener("click")) {
    playerChoice = "rock";
    game();
    } else if (paperButton.addEventListener("click")) {
        playerChoice = "paper";
        game();
    } else (scissorButton.addEventListener("click"))
        playerChoice= "scissors";
        game();
}

function game(playerChoice, computerChoice){

    
        //Check for Rock
        if (playerChoice === "rock") {  
            if (computerChoice === "scissors") {
                playerOption.innerHTML = `<h2>Rock</h2>`
                computerOption.innerHTML =`<h2>scissors</h2>`
                message.innerHTML =`<h2>Player wins!</h2>`
                playerScore();
            } else if (computerChoice === "paper") {
                playerOption.innerHTML = `<h2>Rock</h2>`
                computerOption.innerHTML = `<h2>Paper</h2>`
                message.innerHTML =`<h2>Computer wins!</h2>`
                computerScore();
            } else {
                playerOption.innerHTML = `<h2>Rock</h2>`
                computerOption.innerHTML = `<h2>Rock</h2>`
                message.innerHTML =`<h2>It's a draw!</h2>`
            }
        }

    }


function playerScore() {
    let oldplayerScore = parseInt(document.getElementById("p-count").innerText);
    document.getElementById("p-count").innerText = ++oldplayerScore;

} 

function computerScore() {
    let oldcomputerScore = parseInt(document.getElementById("c-count").innerText);
    document.getElementById("c-count").innerText = ++oldcomputerScore; 
}