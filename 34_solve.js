// 5. Binary Search(Counting) -> (Condition 1.Sorted)
// let arr5 = [1, 3];
// let arr5 = [1, 4];
// let arr5 = [3, 3, 3];
// let arr5 = [5, 7, 7, 8, 8, 10];
let arr5 = [1, 2, 5, 2, 3];

function binarySearch4(arr, target) {
  arr.sort();
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
      let newArray = count.sort();
      console.log(newArray[0]);
      console.log(newArray);

      if (newArray.length === 1 && newArray[0] == 0) {
        newArray.push(0);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 1) {
        newArray.push(1);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 2) {
        newArray.push(2);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 3) {
        newArray.push(3);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 4) {
        newArray.push(4);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 5) {
        newArray.push(5);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 6) {
        newArray.push(6);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 7) {
        newArray.push(7);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 8) {
        newArray.push(8);
        return newArray;
      }
      if (newArray.length === 1 && newArray[0] == 9) {
        newArray.push(9);
        return newArray;
      }

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
  return [];
}

console.log(binarySearch4(arr5, 3));

// ---------------------------------

var searchRange = function (nums, target) {
  return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};

const findFirstOccurrence = (nums, target) => {
  // Left and right pointers
  let left = 0;
  let right = nums.length - 1;
  // Index of first occurrence
  let firstOccurrence = -1;
  // Loop until the two pointers meet
  while (left <= right) {
    // Middle index
    let middle = left + parseInt((right - left) / 2);
    // Check if we have found the value
    if (nums[middle] === target) {
      firstOccurrence = middle;
      right = middle - 1;
    }
    // If the target is less than the element
    // at the middle index
    else if (target < nums[middle]) {
      right = middle - 1;
    }
    // If the target is greater than the element
    // at the middle index
    else {
      left = middle + 1;
    }
  }
  return firstOccurrence;
};

const findLastOccurrence = (nums, target) => {
  // Left and right pointers
  let left = 0;
  let right = nums.length - 1;
  // Index of first occurrence
  let lastOccurrence = -1;
  // Loop until the two pointers meet
  while (left <= right) {
    // Middle index
    let middle = left + parseInt((right - left) / 2);
    // Check if we have found the value
    if (nums[middle] === target) {
      lastOccurrence = middle;
      left = middle + 1;
    }
    // If the target is less than the element
    // at the middle index
    else if (target < nums[middle]) {
      right = middle - 1;
    }
    // If the target is greater than the element
    // at the middle index
    else {
      left = middle + 1;
    }
  }
  return lastOccurrence;
};

// ---------------------------------
