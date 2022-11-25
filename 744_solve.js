// 4. Binary Search(Flooring,Ceiling) -> (Condition 1.Sorted)
// let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let arr4 = ["c", "f", "j"];
// let arr4 = ["x", "x", "y", "y"];

function binarySearch4(arr, target) {
  // mid
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;

  if (arr[end] <= target) {
    return arr[0];
  }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    console.log(mid);
    if (arr[mid] === target) {
      console.log(target);
      console.log(arr[mid]);
      console.log(arr);
      for (let i = mid; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(arr[mid]);
        if (arr[mid] < arr[i]) {
          return arr[i];
        }
      }

      return arr[0];
    }

    if (arr[mid] !== target) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (target < element) {
          return element;
        }
      }
      return arr[0];
    } else if (arr[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  //   return `${arr.sort()}`;
}

console.log(binarySearch4(arr4, "c"));
console.log(binarySearch4(arr4, "a"));
// console.log(binarySearch4(arr4, "z"));
