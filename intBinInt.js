function intBin(value) {
    let intBin = value.toString(2);
    return (intBin);
}

function binInt(value2) {
    let binInt = parseInt(value2, 2);
    return (binInt);
}

let a = 23; 

/*
tentativo... invece di passare il valore dentro quando richiamo la funzione
gli passo una variabile assegnata ad un valore.
*/

console.log('Da intero a binario:  ' + intBin(a));
console.log('Da binario ad intero: ' + binInt(10111));
