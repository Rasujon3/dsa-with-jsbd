var addBinary = function(a, b) {
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    // Loop until both strings are processed and no carry left
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the current bits from both strings, if available
        // If i or j is negative, it means we've exhausted that string
        // so we treat it as 0 for the addition
        // Convert binary characters to integers and add them with carry
        const sum = (i >= 0 ? parseInt(a[i--], 2) : 0) + 
                    (j >= 0 ? parseInt(b[j--], 2) : 0) + 
                    carry;
        console.log(sum);
        console.log(i);
        console.log(j);
        console.log(carry);
        
        // Convert sum to binary and append to result
        result = (sum % 2).toString(2) + result;
        // Update carry for next iteration
        carry = Math.floor(sum / 2);
    }

    return result;
    
};

console.log(addBinary("11", "1"));
