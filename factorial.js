let result = 1;

function factorial(value) {
    //console.log(typeof(value));
    for (let i = value; i > 0; i--) {
        result = result * i;
    }
    return result;
}

let results = factorial(21);
console.log(results);
