console.log("Connected view");

const winnerText = document.querySelector('#winner-text');
const boxes = document.querySelectorAll('#boxes div');
const playerTurn = document.querySelector('#playerTurn');
const resetBtn = document.querySelector('#reset-btn');

const playerXScore = document.querySelector('#playerXScore');
const playerOScore = document.querySelector('#playerOScore');

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
