function isPower(arr) {
    // Write your code here
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        if (isPowerOfTwo(element)) {
            output.push(1);
        } else {
            output.push(0);
        }
    }
    console.log(output);
    return output;
}
function isPowerOfTwo(n) {
    return n > 0 && Math.log2(n) % 1 === 0;
}

const result = isPower([1,3,8,12,16]);
console.log(result);