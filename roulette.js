let player1 = 50;
let extractedFunction = [];

function extractNumber(value) {
    for (let i=0; i<value; i++) {
        extractedFunction.push((Math.floor(Math.random() * 36) + 1));
    }
    //console.log('extractedFunction: ' + extractedFunction);
    return extractedFunction;
}

let extracted = extractNumber(10);
console.log ('extracted: ' + extracted);

function play(array) {
    if (array instanceof Array) {
        //console.log('tot numeri giocati: ' + array.length);
        for (let i in array) {
            for (let j in extracted) {  
                if (array[i] === extracted[j]) {
                    console.log('matching:' + extracted[j]); 
                }
            }
        }
    } else return 'no match';
}

let myPlay = [1,2,3,4,5,6,7,8,9,10];
let game = play(myPlay);

console.log(game);
