var addToArrayForm = function(num, k) {
    let number = '';
    number = num.toString();
    number = number.split(',').join('');
    number = BigInt(number);
    number = number + BigInt(k);
    let myFunc = number => Number(number);
    let expectedArr = Array.from(String(number), myFunc);
    return expectedArr;
};

const num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
const k = 516

console.log(addToArrayForm(num, k));