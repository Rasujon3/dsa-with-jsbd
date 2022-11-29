// Given two sorted array & return a merged asc sorted array.

function twoArrayMarch(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
  let newArr = [];
  //   newArr = newArr.push(arr1);
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    newArr.push(element);
  }
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    newArr.push(element);
  }
  console.log(newArr);
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}

let arr1 = [5, 10, 15, 20, 25, 30];
let arr2 = [15, 23, 25, 30, 35];

console.log(twoArrayMarch(arr1, arr2));
