/* jshint esversion: 8 */

const message = document.querySelector('.message');
const boxes = document.querySelectorAll('.box');
const restart = document.querySelector('button');

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


const resetBoard = () => {
    boxes.forEach(
        (el) =>{
            el.innerHTML = '';
        }
    )
    restartHighlight();
    icon='X';
    message.innerHTML = `<h2>Crosses start</h2>`;
    winCode = null;
}

restart.addEventListener('click',resetBoard)