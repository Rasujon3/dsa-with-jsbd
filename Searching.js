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
