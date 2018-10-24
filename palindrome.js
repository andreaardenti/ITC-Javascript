function palindrome(param) {
    let len = Math.floor(param.length / 2);
    for (let i = 0; i < len; i++) {
        if (param[i] === param[param.length - i - 1]) {
            return true;
        }
        return false;
    }
}

console.log(palindrome('acnba'));
console.log(palindrome('abnba'));
