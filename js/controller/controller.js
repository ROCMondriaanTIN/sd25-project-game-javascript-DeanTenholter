console.log("Connected controller");

function handleBoxClick(event) {
    const index = Number(event.target.id.replace("box", "")) - 1;

    if (isFicheAllowed(index)) {
        setFiche(index, activeSymbol);
        showFiches();
        if(isWinner()) {
            window.alert(activeSymbol + " heeft gewonnen");
        }
        changeActiveSymbol();
        updatePlayerTurn(activeSymbol);
    } else {
        console.log("Fiche not allowed at box " + index);
    }
}