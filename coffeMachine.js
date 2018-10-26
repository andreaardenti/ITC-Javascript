function money(value) {
    let size = { "500": 0, "200": 0, "100": 0, "50": 0, "20": 0, "10": 0, "5": 0, "2": 0, "1": 0 };
    if (value > 0) {
        while (value != 0) {
            if (value % 500 === 0) {
                size["500"]++;
                value -= 500;
            } else if (value % 200 === 0) {
                size["200"]++;
                value -= 200;
            } else if (value % 100 === 0) {
                size["100"]++;
                value -= 100;
            } else if (value % 500 === 0) {
                size["50"]++;
                value -= 50;
            } else if (value % 20 === 0) {
                size["20"]++;
                value -= 20;
            } else if (value % 10 === 0) {
                size["10"]++;
                value -= 10;
            } else if (value % 5 === 0) {
                size["5"]++;
                value -= 5;
            } else if (value % 2 === 0) {
                size["2"]++;
                value -= 2;
            } else if (value % 1 === 0) {
                size["1"]++;
                value -= 1;
            }
        }
    } else {
        console.log('Spiacente ma il numero inserito è negativo!');
    }
    return size;
}

let a = 2541;
let b = -2541
console.log("---- Stampa del JSON positivo ----\n", money(a));
console.log("---- Stampa del JSON negativo ----\n", money(b));
