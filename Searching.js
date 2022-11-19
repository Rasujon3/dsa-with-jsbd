//! 1. Linear Search

let arr = [12, 23, 44, 54, 56, 66, 78, 65, 58, 43, 67, 57];
// let target = 58;
let target = 100;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return "Data found at " + i;
    }
  }
  return "Data not found";
}

console.log(linearSearch(arr, target));
console.log(linearSearch(["red", "green", "blue"], "Blue"));

// 2. Binary Search -> (Condition 1.Sorted)
let arr2 = [10, 20, 30, 40, 50, 60, 70, 80];

function binarySearch(arr, target) {
  // mid
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // 1. arr[mid]===target
    // 2. small
    // 3. large

    if (arr[mid] === target) {
      return "Data found at index " + mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  return "Data not found";
}

console.log(binarySearch(arr2, 83));
