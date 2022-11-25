// 5. Binary Search(Counting) -> (Condition 1.Sorted)
// let arr5 = [1, 3];
// let arr5 = [1, 4];
// let arr5 = [3, 3, 3];
// let arr5 = [5, 7, 7, 8, 8, 10];
// let arr5 = [1, 2, 5, 2, 3];
// let arr5 = [
//   48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77,
//   15, 38,
// ];
// let arr5 = [
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
//   100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
// ];
let arr5 = [1, 3, 5, 6];

function binarySearch4(arr, target) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  if (!arr.length) {
    return [-1, -1];
  }

  // mid
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    let count = [];
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      count.push(mid);
      // }
      // left
      for (let i = mid - 1; i >= 0; i--) {
        if (target === arr[i]) {
          count.push(i);
        }
      }
      // right
      for (let i = mid + 1; i < arr.length; i++) {
        if (target === arr[i]) {
          count.push(i);
        }
      }
      let newArray = count.sort(function (a, b) {
        return a - b;
      });
      console.log(newArray[0]);
      console.log(newArray);

      //   return count.sort();
      return newArray;
    }

    //   update start & end point for control loop
    else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // return [-1, -1];
  //   return [];
  arr.push(target);
  arr.sort(function (a, b) {
    return a - b;
  });
  //   return arr;
  console.log(arr);
  console.log(arr[target]);
  //   return arr[target];
  return arr.indexOf(target);
}

console.log(binarySearch4(arr5, 7));
