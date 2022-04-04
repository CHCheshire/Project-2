/* jshint esversion: 8 */
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');
const playerOptions = [rockButton, paperButton, scissorButton];
const computerOptions = ['rock', 'paper', 'scissors']


const rockChoice = () => {
    document.getElementsByClassName("playerChoice").innerHTML ="Rock";
}

rockButton.addEventListener('click', rockChoice)

function paperChoice() {
    document.getElementsByClassName("playerChoice").innerHTML = "Paper";
}

paperButton.addEventListener("click", paperChoice)

const scissorChoice = () => {
    document.getElementsByClassName("playerChoice").innerHTML ="Scissors";
}

scissorButton.addEventListener("click", scissorChoice)


// playerOptions.forEach(option => {
//     option.addEventListener('click', function(){
//         const choiceNumber = Math.floor(Math.random()*3);
//         const computerChoice = computerOptions[choiceNumber];
//     })
// }) 

// const declareWinner = (player,computer) => {

// }





function playerScore() {
    let oldplayerScore = parseInt(document.getElementById("p-count").innerText);
    document.getElementById("p-count").innerText = ++oldplayerScore;

} 

function computerScore() {
    let oldcomputerScore = parseInt(document.getElementById("c-count").innerText);
    document.getElementById("c-count").innerText = ++oldcomputerScore; 
}