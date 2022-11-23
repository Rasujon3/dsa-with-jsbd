// 4. Binary Search(Flooring,Ceiling) -> (Condition 1.Sorted)
let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function binarySearch4(arr, target) {
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
  return `Data not found. Ceiling ${arr[mid + 1]} and Flooring ${arr[mid]}`;
}

console.log(binarySearch4(arr4, 22));
