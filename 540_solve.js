// 5. Binary Search(Counting) -> (Condition 1.Sorted)
// let arr5 = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arr5 = [3, 3, 7, 7, 10, 11, 11];

function binarySearch4(arr) {
  // mid
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  let count = 0;

  mid = Math.floor((start + end) / 2);
  // 1. arr[mid]===target
  // 2. small
  // 3. large
  //   if (arr[mid] === target) {
  //     count++;
  //   }

  console.log(mid);

  //   for (let i = mid - 1; i >= 0; i--) {
  //     console.log(arr[i]);
  //     console.log(arr[i + 1]);
  //     if (arr[i] !== arr[i + 1]) {
  //       console.log(arr[i]);
  //       return arr[i];
  //     }
  //   }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      console.log(arr[i]);
      console.log(arr[i + 1]);
      return arr[i];
    }
    console.log(arr[i]);
  }

  console.log(count);
  //   return count;
}

console.log(binarySearch4(arr5));
