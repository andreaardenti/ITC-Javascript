
function getMaxOfArray(array) {
    let max = Math.max.apply(null, array);
    return JSON.stringify({ max });
}

function getMinOfArray(array) {
    let min = Math.min.apply(null, array);
    return JSON.stringify({ min });
}

console.log("Il numero più alto dell\'array è: " + getMaxOfArray([5, 4, 9, 0]));
console.log("Il numero più basso dell\'array è: " + getMinOfArray([5, 4, 9, 0]));
