var addTwoNumbers = function(l1, l2) {
    function commaSeparatedStringToPlainString(str, separator = ' ') {
        return str.split(',').join(separator);
    }

    function numberReverse(number) {
        return number.toString().split('').reverse().join('');
    }

    let commaSeparatedString1 = l1.toString();
    let commaSeparatedString2 = l2.toString();
    let number1 = commaSeparatedStringToPlainString(commaSeparatedString1, '');
    let number2 = commaSeparatedStringToPlainString(commaSeparatedString2, '');
    let summation = Number(number1) + Number(number2);
    let reverse = numberReverse(summation);
    let strToArr = reverse.split('').map(Number);

    return strToArr;
};


console.log(addTwoNumbers([2,4,3], [5,6,4])); // [7,0,8]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])); // [8,9,9,9,0,0,0,1]
