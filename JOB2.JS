{/* 
<ul>
	<li>If i is a multiple of both 3 and 5, print <em>FizzBuzz</em>.</li>
	<li>If i is a multiple of 3 (but not 5), print <em>Fizz</em>.</li>
	<li>If i is a multiple of 5 (but not 3), print <em>Buzz</em>.</li>
	<li>If i is not a multiple of 3&nbsp;or 5, print the value of <em>i</em>.</li>
</ul> 
*/}

function fizzBuzz(n) {
    // Write your code here
    console.log(n);
    let output = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz\n"; // Add FizzBuzz and a newline
        } else if (i % 3 === 0) {
            output += "Fizz\n"; // Add Fizz and a newline
        } else if (i % 5 === 0) {
            output += "Buzz\n"; // Add Buzz and a newline
        } else {
            output += i + "\n"; // Add the number and a newline
        }
    }
    console.log(output);
    return output.trim();

}

const result = fizzBuzz(15);
console.log(result);