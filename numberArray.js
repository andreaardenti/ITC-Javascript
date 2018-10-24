let numArray = [7, 5, 8, 9, 4, 7, 1, 2, 3, 6];

function sortNumber() {
    let random = Math.floor(Math.random() * 100);
    console.log('questo è il valore di getRandom dentro la funzione sortNumber: ' + random);
    if (random <= 50) {
        numArray.sort();
        console.log('Ordinamento in ordine ascendente: ' + numArray);
        return true;
    } else if (random >= 51) {
        numArray.sort().reverse();
        console.log('Ordinamento in ordine discendente: ' + numArray);
        return false;
    }
}

console.log(sortNumber());
