var fib = function(n) {
const lastTwo = [0, 1]
let counter = 3

if (n <= 1) {
    return n;
}
if (n == 2) {
    return 1;
}

while (counter <= n) {
    console.log(counter);
    const nextFib = lastTwo[0] + lastTwo[1];
    console.log(nextFib);
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    console.log(lastTwo);
    counter++
    console.log(counter);
}
console.log(lastTwo[0] + lastTwo[1]);
return lastTwo[0] + lastTwo[1]
};

const result = fib(10);
console.log(result);
