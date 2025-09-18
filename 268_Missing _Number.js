var missingNumber = function(nums) {
    let n = nums.length;
    console.log(n); // [0,1,2,3] => 6
    
    let expectedSum = n * (n + 1) / 2;
    console.log(expectedSum);
    
    let actualSum = nums.reduce((acc, num) => acc + num, 0);
    console.log(actualSum);
    console.log(expectedSum - actualSum);
    return expectedSum - actualSum;
};

console.log(missingNumber([3,0,1])); // 2
// console.log(missingNumber([0,1])); // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
