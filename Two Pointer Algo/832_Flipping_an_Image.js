// Given two sorted array & return a merged asc sorted array.

function mergeArrays(arr1, arr2) {
  let arrLength = arr1.length + arr2.length;
  let ptr1 = 0;
  let ptr2 = 0;

  let output = [];
  for (let i = 0; i < arrLength; i++) {
    if (arr1[ptr1] <= arr2[ptr2]) {
      console.log(arr1[ptr1]);
      console.log(arr2[ptr2]);
      output.push(arr1[ptr1]);
      ptr1++;
    }
    if (arr2[ptr2] < arr1[ptr1]) {
      console.log(arr2[ptr2]);
      console.log(arr1[ptr1]);
      output.push(arr2[ptr2]);
      ptr2++;
    }
    if ((arr1[ptr1] == undefined || null) && arr2[ptr2]) {
      console.log(arr1[ptr1]);
      console.log(arr2[ptr2]);
      output.push(arr2[ptr2]);
      ptr2++;
    }
    if ((arr2[ptr2] == undefined || null) && arr1[ptr1]) {
      console.log(arr2[ptr2]);
      console.log(arr1[ptr1]);
      output.push(arr2[ptr1]);
      ptr1++;
    }
  }
  return output;
}

let arr1 = [5, 10, 15, 20, 25, 30];
let arr2 = [15, 23, 25, 30, 35];

console.log(mergeArrays(arr1, arr2));
