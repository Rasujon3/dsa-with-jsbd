// 1. Write a program to print out the summation of the following series

// 5+10+15+25+30+35+45....+105
// 5+10+15+25+30+35+45+55+65+75+85+90+95+105
// 0  1  2  3  4  5  6  7  8  9 10 11  12 13
//         10          10       10         10

function calculateSeriesSum() {
  let sum = 0;
  let num = 5;

  let arr = [];
  arr.unshift(num);
  while (num <= 105) {
    if (num === 15 || num === 35 || num === 55 || num === 75 || num === 95) {
      num = num + 10;
      arr.push(num);
    } else {
      num = num + 5;
      arr.push(num);
    }
    // sum = sum + num;
  }
  arr.pop();
  console.log(arr.length);
  console.log(arr);
  console.log(sum);
  for (const x of arr) {
    sum = sum + x;
    console.log(sum);
  }
  let sum2 = arr.reduce(function (accumulator, curValue) {
    return accumulator + curValue;
  }, 0);
  console.log(sum);
  console.log(sum2);
  return sum;
}

const seriesSum = calculateSeriesSum();
console.log("Sum of the series:", seriesSum);
