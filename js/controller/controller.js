console.log("Connected controller");

let moves = 0;
let gameOver = false;

function handleBoxClick(event) {
  if (gameOver) return;

  const index = Number(event.target.id.replace("box", "")) - 1;

  if (!isFicheAllowed(index)) return;

  setFiche(index, activeSymbol);
  showFiches();
  moves++;

  if (isWinner()) {
    winnerText.innerHTML = "<h3>Speler " + activeSymbol + " heeft gewonnen!</h3>";
    addPointToWinner(activeSymbol);
    gameOver = true;
    setTimeout(startNewRound, 5000);
    return;
  }

  if (moves === 9) {
    winnerText.innerHTML = "<h3>Gelijkspel!</h3>";
    gameOver = true;
    setTimeout(startNewRound, 5000);
    return;
  }

  changeActiveSymbol();
  updatePlayerTurn(activeSymbol);
}

function addPointToWinner(symbol) {
  if (symbol === "X") {
    playerXScore.innerHTML = Number(playerXScore.innerHTML) + 1;
  } else {
    playerOScore.innerHTML = Number(playerOScore.innerHTML) + 1;
  }
}

function startNewRound() {
  for (let i = 0; i < fiches.length; i++) {
    fiches[i] = "";
  }

  moves = 0;
  gameOver = false;
  activeSymbol = "X";

  showFiches();
  updatePlayerTurn(activeSymbol);
  winnerText.innerHTML = "";
}