// let arr = [2, 3, 4, 7, 11];
let arr = [1, 2, 3, 4];
let target = 2;

function findKthNumber(arr, target) {
  let missingArray = [];

  let n = 1;
  let i = 0;

  while (missingArray.length < target) {
    if (n == arr[i]) {
      console.log(arr[i]);
      i++;
      console.log(i);
      n++;
      console.log(n);
    } else {
      missingArray.push(n);
      console.log(missingArray);
      n++;
      console.log(n);

      // if (missingArray.length > target) {
      //   break;
      // }
    }
  }
  return missingArray[target - 1];
}

// missingArray;
// console.log(missingArray[target - 1]);
console.log(findKthNumber(arr, target));
