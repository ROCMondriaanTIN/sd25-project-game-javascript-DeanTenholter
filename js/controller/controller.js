console.log("Connected controller")

'use strict'

function handleBoxClick(event) {

    const index = Number(event.target.id.replace("box", "")) - 1;

    if (isFicheAllowed(index)) {
        setFiche(index, activeSymbol);
        showFiches();
        changeActiveSymbol();
    } else {
        console.log("Fiche not allowed at box " + index);
    }
}

