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
/*let bingoBag = [];
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
console.log('Lunghezza di filteredItems: ' + filteredItems.length);*/


let bingoUse = require('bingo-extract');
//let player = [];

//riempio il sacchetto del bingo
bingoUse.init(); 

//assegno 'n' numeri al player
let numberToPlayer = function() {
    let player = [];
    for (i=0; i<15; i++) {
        let x = bingoUse.extract();
        player.push(x);
    } 
    return player;
}

//console.log('\nCartella di player:\n' + numberToPlayer() + '\n');
console.log(numberToPlayer());

bingoUse.init(); 

//creo la funzione che estrae un numero dal sacchetto e verifica se il numero estratto è presente nella cartella del player, 
//quindi lo rimuovo dalla cartella
function checkNumber() {
    let counter=0;
    do {
        let y = bingoUse.extract();
        console.log('Numero estratto: ' + y);        
        if(numberToPlayer().includes(y)) {
            let toRemove = numberToPlayer().indexOf(y);
            if (toRemove > -1) {
                numberToPlayer().splice(toRemove, 1);
            }
            console.log('Nuovo contenuto di player: ' + numberToPlayer());
            console.log('Il numero è presente nella tua cartella\n');
        }   
        else {
            console.log('Il numero NON è presente nella tua cartella\n');
        }
        counter++;
    } while (numberToPlayer().length >= 1);
    console.log("Nr. estrazioni: ", counter);
    return numberToPlayer();
}
checkNumber();

let player1 = numberToPlayer();
let player2 = numberToPlayer();

console.log('cartella di player1: ' + player1);
console.log('cartella di player2: ' + player2);
