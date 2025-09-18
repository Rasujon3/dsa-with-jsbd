var checkPerfectNumber = function(num) {
    if (num <= 0) return false;
    let sum = 0;
    for (let index = 1; index < num; index++) {
        if (num % index === 0) {
            sum += index;
        }
    }
    return sum === num;
};

// console.log(checkPerfectNumber(28)); // true
console.log(checkPerfectNumber(6)); // true
// console.log(checkPerfectNumber(496)); // true