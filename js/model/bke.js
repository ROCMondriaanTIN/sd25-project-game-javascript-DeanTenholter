console.log("Connected model");

'use strict';

let activeSymbol = "X";

const fiches = ['','','','','','','','',''];

function setFiche(id, fiche) {
    fiches[id] = fiche;
}

function isFicheAllowed(id) {
    return fiches[id] === '';
}

function changeActiveSymbol() {
    activeSymbol = (activeSymbol === "X") ? "O" : "X";
}
