function isPrime(param) {
    for (let i = 2; i < param; i++) {
        if (param % i === 0) {
            return false;
        }
    }
    return param > 1;
}

console.log(isPrime(11));
