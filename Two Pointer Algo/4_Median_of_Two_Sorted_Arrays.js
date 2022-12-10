// Given two sorted array & return a merged asc sorted array.

function mergeArrays(arr1, arr2) {
  let arrLength = arr1.length + arr2.length;
  console.log(arrLength);
  let ptr1 = 0;
  let ptr2 = 0;

  let output = [];
  for (let i = 0; i < arrLength; i++) {
    console.log(arr1[ptr1]);
    console.log(arr2[ptr2]);
    if (arr1[ptr1] <= arr2[ptr2]) {
      console.log(arr1[ptr1]);
      console.log(arr2[ptr2]);
      output.push(arr1[ptr1]);
      console.log(output);
      ptr1++;
    }
    if (arr2[ptr2] < arr1[ptr1]) {
      console.log(arr2[ptr2]);
      console.log(arr1[ptr1]);
      output.push(arr2[ptr2]);
      console.log(output);
      ptr2++;
    }
    if (arr1.length === 0 && arr2.length === 1) {
      output.push(arr2[ptr2]);
      console.log(output);
      ptr2++;
    }
    if (arr2.length === 0 && arr1.length === 1) {
      output.push(arr1[ptr1]);
      console.log(output);
      ptr1++;
    }
    if ((arr1[ptr1] == undefined || null) && arr2[ptr2]) {
      console.log(arr1[ptr1]);
      console.log(arr2[ptr2]);
      output.push(arr2[ptr2]);
      console.log(output);
      ptr2++;
    }
    if ((arr2[ptr2] == undefined || null) && arr1[ptr1]) {
      console.log(arr2[ptr2]);
      console.log(arr1[ptr1]);
      //   output.push(arr2[ptr1]);
      output.push(arr1[ptr1]);
      console.log(output);
      ptr1++;
    }
  }
  console.log(output);
  let length = Number(output.length);
  if (length % 2 === 0) {
    let medium = length / 2;
    console.log(medium);
    let median = (output[medium] + output[medium - 1]) / 2;
    console.log(median);
    return median;
  } else {
    let medium = Math.floor(length / 2);
    console.log(medium);
    let median = output[medium];
    console.log(median);
    return median;
  }
  //   console.log(output.length);
  //   console.log(output);
  //   return output;
}

// let arr1 = [1, 3];
// let arr2 = [2];
let arr1 = [0];
let arr2 = [];

console.log(mergeArrays(arr1, arr2));
