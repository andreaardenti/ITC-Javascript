const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesar(sentence, value) {
    let output = '';
    for (let letter of sentence) {
        let index = alphabet.indexOf(letter);
        let finalIndex = index + value;
        finalIndex = finalIndex % alphabet.length;
        if (finalIndex < 0) {
            finalIndex = alphabet.length + finalIndex;
        }
        //console.log (finalIndex);
        let newLetter = alphabet.charAt(finalIndex);
        //console.log(newLetter);
        output += newLetter;
    }
    return output;
}


let x = (caesar('andrea', 28));
let y = (caesar(x, -28));

console.log(x);
console.log(y);
