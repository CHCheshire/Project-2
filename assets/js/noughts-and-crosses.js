/* jshint esversion: 8 */

const message = document.querySelector('.message');
const boxes = document.querySelectorAll('.box');
const restart = document.querySelector('.restart');
const aiOptions = [0,1,2,3,4,5,6,7,8]

let icon = 'X'

const toggle = () => {
    if ( icon === 'X') {
        icon ='O';
        message.innerHTML = "<h2>Nought's turn</h2>";
    }
    else {
        icon = 'X';
        message.innerHTML = "<h2>Cross's turn</h2>";
    }
}

boxes.forEach( (el) => {el.addEventListener('click',
    () => {
        if ( !el.innerHTML ) {
            el.innerHTML = `<h1>${icon}</h1>`;
            toggle();
            checkForWinner();
        }
    });
});


const restartBoard = () => {
    boxes.forEach(
        (el) => {
            el.innerHTML = '';
        }
    )
    restartHighlight();
    icon='X';
    message.innerHTML = `<h2>Crosses start</h2>`;
    winCode = null;
}

restart.addEventListener('click', restartBoard)


const checkForWinner = () => { 
    let xArray =[];
    let oArray =[];
    boxes.forEach(
        (box) => {
            if (box.textContent) {
                if (box.textContent == 'X') {
                    xArray.push(parseInt(box.id));
                }
                if (box.textContent == 'O') {
                    oArray.push(parseInt(box.id));
                }
            }
        }
    );

    if (xArray.length >= 3 && compareToWinningArrays(xArray)) {
        return declareWinner("Crosses");
        crossesScore();
    } else if
        (oArray.length >= 3 && compareToWinningArrays(oArray)) {
        return declareWinner("Noughts");
        noughtsScore();
    } else if
        (xArray.length + oArray.length === 9) {
        return declareWinner("Nobody");
    }
}

let winCode = null;


const compareToWinningArrays = (playerArray) => {
    let final = false;
    winningArrays.forEach(
        (combo) => {
            let outcome = true;
            for(let i = 0; i < 3; i++) {
                if (playerArray.indexOf(combo[i]) == -1)
                    return outcome = false;
            }
            if (outcome) {
                winCode = combo;
                return final = true;
            }
        }
    )
    if (final) return true;
}

const winningArrays =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]] 


const declareWinner = (win) => {
    message.innerHTML = `<h2>${win} wins!</h2>`;
    highlight();
}

const highlight = () => {
    if (winCode) {
        for(let i = 0; i < 3; i++) {
            let id = `${winCode[i]}`;
            const el = document.getElementById(id);
            el.style.background = "lightgreen";
        }
    }
}

const restartHighlight = () => {
    boxes.forEach(
        (box) => {
            box.style.background = "white";
        }
    );

}

function crossesScore() {
    let oldcrossesScore = parseInt(document.getElementById("c-count").innerText);
    document.getElementById("c-count").innerText = ++oldcrossesScore;

} 

function noughtScore() {
    let oldnoughtsScore = parseInt(document.getElementById("n-count").innerText);
    document.getElementById("n-count").innerText = ++oldnoughtsScore;

}