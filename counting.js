// 5. Binary Search(Counting) -> (Condition 1.Sorted)
let arr5 = [2, 5, 8, 8, 8, 8, 8, 9, 12, 12];

function binarySearch4(arr, target) {
  // mid
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  let count = 0;

  mid = Math.floor((start + end) / 2);
  // 1. arr[mid]===target
  // 2. small
  // 3. large
  if (arr[mid] === target) {
    count++;
  }

  console.log(mid);

  for (let i = mid - 1; i >= 0; i--) {
    console.log(arr[i]);
    if (arr[i] === target) {
      count++;
    }
  }
  for (let i = mid + 1; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
    console.log(arr[i]);
  }

  console.log(count);
  return count;
}

console.log(binarySearch4(arr5, 12));
