let sum = 0;
let average = 0;

function averageOfArray(param) {
    for (let i in param) {
        sum = sum + param[i];
        //console.log(sum);
        average = sum / param.length;
        //console.log(average);
    }
    return average;
}

let result = Math.floor(averageOfArray([2, 6, 7]));
console.log("Media dell\'array: " + result);
