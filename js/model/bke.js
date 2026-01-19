console.log("Connected model");

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

//controleert het symbool in een vakje en baseert daarop of er een winnaar is
function isWinner(){
    if(fiches[0]==activeSymbol && fiches[1]==activeSymbol && fiches[2]==activeSymbol)
        return true;
    else if(fiches[3]==activeSymbol && fiches[4]==activeSymbol && fiches[5]==activeSymbol)
        return true;
    else if(fiches[6]==activeSymbol && fiches[7]==activeSymbol && fiches[8]==activeSymbol)
        return true;
    else if(fiches[0]==activeSymbol && fiches[4]==activeSymbol && fiches[8]==activeSymbol)
        return true;
    else if(fiches[2]==activeSymbol && fiches[4]==activeSymbol && fiches[6]==activeSymbol)
        return true;
    else if(fiches[0]==activeSymbol && fiches[3]==activeSymbol && fiches[6]==activeSymbol)
        return true;
    else if(fiches[1]==activeSymbol && fiches[4]==activeSymbol && fiches[7]==activeSymbol)
        return true;
    else if(fiches[2]==activeSymbol && fiches[5]==activeSymbol && fiches[8]==activeSymbol)
        return true;
    else {
        return false;
    }
}