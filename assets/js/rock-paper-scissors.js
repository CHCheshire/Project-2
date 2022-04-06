/* jshint esversion: 8 */
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const playerOptions = [rockBtn,paperBtn,scissorBtn];
const computerOptions = ['rock','paper','scissors']



playerOptions.forEach(option => {
    option.addEventListener('click',function(){
        const choiceNumber = Math.floor(Math.random()*3);
        const computerChoice = computerOptions[choiceNumber];
        game(playerChoice, computerChoice);
    })
})


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