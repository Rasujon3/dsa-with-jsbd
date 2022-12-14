// Given two sorted array & return a merged asc sorted array.

function mergeArrays(numbers, target) {
  // Start a pointer on each side of the array
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const cur = numbers[left] + numbers[right];
    // Return 1 base index if the current sum is equal to the target
    if (cur === target) return [left + 1, right + 1];
    // Because the array is sorted, anytime we move a pointer to the right numbers will get bigger and anytime we move a pointer to the left, numbers will get smaller
    // If cur is greater than target that means we need to use smaller numbers in our sum and we move the right pointer to the left.
    // If cur is less than target that means we need to use bigger number in our sum and we move the left pointer to the right.
    cur > target ? right-- : left++;
  }
}

let numbers = [2, 7, 11, 13];
// let numbers = [0, 0, 3, 4];
// let target = 0;
let target = 9;

/**
   * [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
   */

console.log(mergeArrays(numbers, target));
