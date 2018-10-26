let player1 = 50;
let extractedFunction = [];

function extractNumber(value) {
    for (let i=0; i<value; i++) {
        extractedFunction.push((Math.floor(Math.random() * 36) + 1));
    }
    console.log(extractedFunction);
}

let extracted = extractNumber(6);
console.log (extracted);

function play(array) {
    if (array instanceof Array) {
        //console.log(array.length);
        for (let i=0; i<array; i++) {
            for (let j=0; j<extracted; j++) {  
                if (array[i] === extracted[j]) {
                console.log('ciao'); 
                }
            }
        }
    } else return 'error';
}
let myPlay = [1,2,3,4,5,6,7,8,9,10]
console.log(play(myPlay));
