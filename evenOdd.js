function play(evenOdd, num) {
    let computerPlay=0;
    let random = Math.floor(Math.random() * 100);
    if (random<20) {
        computerPlay=1;
    } else if (random<40) {
        computerPlay=2;
    } else if (random<60) {
        computerPlay=3;
    } else if (random<80) {
        computerPlay=4;
    } else {
        computerPlay=5;
    }

    let sum = num + computerPlay;

    if ((evenOdd==="pari") && (num%2===0) && (computerPlay%2 === 0)) {
        console.log('Ho scelto: ' + evenOdd + ' e ho buttato: ' + num);
        console.log('Il computer ha buttato: ' + computerPlay);
        console.log('La somma dei due numeri è: ' + sum);
        console.log('Complimenti hai vinto!');
    } else if ((evenOdd === "pari") && (num%2 === 0) && (computerPlay%2 === 1)) {
        console.log('Ho scelto: ' + evenOdd + ' e ho buttato: ' + num);
        console.log('Il computer ha buttato: ' + computerPlay);
        console.log('La somma dei due numeri è: ' + sum);
        console.log('Spiacente vince il pc!');
    } else if ((evenOdd=== "pari") && (num%2===1) && (computerPlay%2===0)) {
        console.log('Ho scelto: ' + evenOdd + ' e ho buttato: ' + num);
        console.log('Il computer ha buttato: ' + computerPlay);
        console.log('La somma dei due numeri è: ' + sum);
        console.log('Spiacente vince il pc!');
    } else if ((evenOdd==="dispari") && (num%2===0) && (computerPlay%2===0)) {
        console.log('Ho scelto: ' + evenOdd + ' e ho buttato: ' + num);
        console.log('Il computer ha buttato: ' + computerPlay);
        console.log('La somma dei due numeri è: ' + sum);
        console.log('Spiacente vince il pc!');
    } else if((evenOdd==="dispari") && (num%2===0) && (computerPlay%2===1)) {
        console.log('Ho scelto: ' + evenOdd + ' e ho buttato: ' + num);
        console.log('Il computer ha buttato: ' + computerPlay);
        console.log('La somma dei due numeri è: ' + sum);
        console.log('Complimenti hai vinto!');
    } else console.log('Complimenti hai vinto!');
}

console.log(play('pari',3));
