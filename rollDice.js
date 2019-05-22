let counter1 = 0; 
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

function rollDice(value) {
    for (let i = 0; i < value; i++) {
        //console.log('Numero giocata: ' + i);
        let random = Math.floor(Math.random() * 100);
        if(i < value) {
            if (random < 17) {
                console.log(random);
                counter1++;
            } else if (random < 34) {
                console.log(random);
                counter2++;
            } else if (random < 50) {
                console.log(random);
                counter3++;
            } else if (random < 67) {
                console.log(random);
                counter4++;
            } else if (random < 84) {
                console.log(random);
                counter5++;
            } else {
                console.log(random);
                counter6++;
            }
        } else console.log('THE END');
    }
    console.log('Contatore per UNO: ' + counter1);
    console.log('Contatore per DUE: ' + counter2);
    console.log('Contatore per TRE: ' + counter3);
    console.log('Contatore per QUATTRO: ' + counter4);
    console.log('Contatore per CINQUE: ' + counter5);
    console.log('Contatore per SEI: ' + counter6);
}

console.log(rollDice(5));
