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
