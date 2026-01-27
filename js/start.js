console.log("Connected start");

//als de pagina laadt -> begin start functie
window.onload = start;

//
function start() {
  bindBoxes();
  updatePlayerTurn(activeSymbol);
}
