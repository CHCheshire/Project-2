/* jshint esversion: 8 */

const message = document.querySelector('.message');
const boxes = document.querySelectorAll('.box');
const restart = document.querySelector('button');

let icon = 'X'

const toggle = () => {
    if ( icon === 'X') {
        icon ='O';
        message.innerHTML = "<p>Nought's turn</p>";
    }
    else {
        icon = 'X';
        message.innerHTML = "<p>Cross's turn</p>";
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
