// Reverse The String
const reverseMaker = (word) => {
  //Write Your solution Here
  word = word.split("").reverse().join("");
  console.log(word);
  return word;
};

reverseMaker("GeeksforGeeks");
console.log(reverseMaker("GeeksforGeeks"));
let result = [10, 20, 30].map(parseInt, parseInt);
console.log(result);

const greet = () => {
  console.log("Hello, Iching Lab!");
};

setTimeout(greet, 1000);

const x = 10;

function increment(x) {
  x++;
  console.log(x);
}

increment(x);
console.log(x);
