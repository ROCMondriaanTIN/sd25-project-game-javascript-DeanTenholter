console.log("Connected view")

'use strict'

const boxes = document.querySelectorAll('#boxes div');

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
