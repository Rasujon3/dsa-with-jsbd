function isPrime(number) {
  let count = 0;
  if (number === 1) {
    return true;
    // return `${number} is prime`;
  }
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
    // return `${number} is prime`;
  } else {
    return false;
    // return `${number} is not prime`;
  }
}

let arr = [5, 6, 7, 10, 11, 15, 17, 19, 20];

for (let i = 0; i < arr.length; i++) {
  console.log(isPrime(arr[i]));
}

// T.C = O(n^2)

console.log(isPrime(1));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));
