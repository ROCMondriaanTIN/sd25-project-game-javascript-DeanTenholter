console.log("Connected view");

'use strict';

const boxes = document.querySelectorAll('#boxes div');
const playerTurn = document.querySelector('#playerTurn');
const resetBtn = document.querySelector('#reset-btn');

function bindBoxes() {
    for (let b = 0; b < boxes.length; b++) {
        boxes[b].addEventListener('click', handleBoxClick);
    }
}

function showFiches() {
    for (let b = 0; b < boxes.length; b++) {
        boxes[b].innerHTML = fiches[b];
    }
}

function updatePlayerTurn(symbol) {
    playerTurn.innerHTML = "Speler " + symbol + " is aan de beurt";
}
