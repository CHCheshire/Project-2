/* jshint esversion: 8 */
const paperButton = document.getElementsByClassName('.paper');
const scissorButton = document.getElementsByClassName('.scissors');


function computerPlay () {

    var computerChoice = Math.ceil(Math.random()*3); 

    if (computerChoice < 1) {
        computerChoice ="rock";
    } else if (1 <= computerChoice <= 2) {
        computerChoice = "paper";
    } else { 
        computerChoice = "scissors"
    }
}

function rockChoice () {
    playerChoice = "rock";
    computerPlay();
    game();
}

let rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', rockChoice);

// var playerChoice = () => {
//     if (rockButton.addEventListener("click")) {
//     playerChoice = "rock";
//     computerPlay();
//     game();
//     } else if (paperButton.addEventListener("click")) {
//         playerChoice = "paper";
//         computerPlay();
//         game();
//     } else (scissorButton.addEventListener("click"))
//         playerChoice= "scissors";
//         computerPlay();
//         game();
// }

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
        if (playerChoice === "paper") {  
            if (computerChoice === "rock") {
                playerOption.innerHTML = `<h2>Paper</h2>`
                computerOption.innerHTML =`<h2>Rock</h2>`
                message.innerHTML =`<h2>Player wins!</h2>`
                playerScore();
            } else if (computerChoice === "scissors") {
                playerOption.innerHTML = `<h2>Paper</h2>`
                computerOption.innerHTML = `<h2>Scissors</h2>`
                message.innerHTML =`<h2>Computer wins!</h2>`
                computerScore();
            } else {
                playerOption.innerHTML = `<h2>Paper</h2>`
                computerOption.innerHTML = `<h2>Paper</h2>`
                message.innerHTML =`<h2>It's a draw!</h2>`
            }
        }
        if (playerChoice === "scissors") {  
            if (computerChoice === "paper") {
                playerOption.innerHTML = `<h2>Scissors</h2>`
                computerOption.innerHTML =`<h2>Paper</h2>`
                message.innerHTML =`<h2>Player wins!</h2>`
                playerScore();
            } else if (computerChoice === "rock") {
                playerOption.innerHTML = `<h2>Scissors</h2>`
                computerOption.innerHTML = `<h2>Rock</h2>`
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