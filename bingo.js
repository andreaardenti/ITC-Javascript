/*
PRIMA VERSIONE
//riempio l'array con i numeri da 1 a 90
let bingoBag = [];
for (let i=1; i<91; i++) {
    bingoBag.push(i);
}

//mi restituisce un numero a caso da 1 alla lunghezza del bingoBag (90 in questo caso)
let returnNumber = function() {
    return parseInt(Math.random() * bingoBag.length) + 1;
}

//associo ad una variabile il risultato della funzione returnNumber()
let extracted = returnNumber();

exports.fillArray = function() {
    console.log('numero a caso da 1 a 90: ' + extracted);
    let filteredItems = bingoBag.splice(extracted-1, 1);
    console.log(filteredItems.length);
    return filteredItems;
}
console.log('Contenuto array con i numeri estratti: ' + this.fillArray());
console.log('quello che resta di bingobag: ' + bingoBag.length);
console.log('contenuto bingoBag: ' + bingoBag);
*/

//------------------------------------------------------------------------------------
//SECONDA VERSIONE - ESTRAZIONE PARAMETRIZZATA

//riempio l'array con i numeri da 1 a 90
let bingoBag = [];
for (let i = 1; i < 91; i++) {
    bingoBag.push(i);
}

let filteredItems = [];

exports.fillArray = function(param) {
    if (param === undefined && (typeof param !== 'number' || param < 0)) return 'Param deve essere un numero positivo';
    for (let i = 0; i < param; i++) {
        extracted = parseInt(Math.random() * bingoBag.length) + 1;
        filteredItems[i] = (bingoBag.splice(extracted - 1, 1));
    }
    return filteredItems;
}

exports.reset = function(){
    bingoBag = [];
    filteredItems = [];
}

console.log('Contenuto array con i numeri estratti: ' + this.fillArray(5));
console.log('Lunghezza di bingobag: ' + bingoBag.length);
console.log('Contenuto bingoBag: ' + bingoBag);
console.log('--- Ora resetto gli array! ---');
this.reset();
console.log('Lunghezza di bingobag: ' + bingoBag.length);
console.log('Lunghezza di filteredItems: ' + filteredItems.length);
