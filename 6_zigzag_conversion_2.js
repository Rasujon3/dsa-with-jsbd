function convert(s, numRows) {
    // যদি শুধু 1 row থাকে, তাহলে zigzag হবে না, স্ট্রিং একই থাকবে
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // প্রতিটি row-এর জন্য একটি array রাখবো
    let rows = new Array(numRows).fill('').map(() => []);

    let currentRow = 0;      // বর্তমান row
    let goingDown = false;   // নিচে যাচ্ছি কি না

    // স্ট্রিংয়ের প্রতিটি অক্ষরের জন্য
    for (let char of s) {
        // বর্তমান row-তে character যোগ করি
        rows[currentRow].push(char);

        // যদি আমরা top row (0) থেকে নিচের দিকে যাচ্ছি,
        // অথবা bottom row এ পৌঁছেছি এবং up দিকে ঘুরেছি
        
        if (currentRow === 0) {
            goingDown = true; // নিচে যাওয়া শুরু করি
        } else if (currentRow === numRows - 1) {
            goingDown = false; // উপরে উঠতে শুরু করি
        }
        console.log('numRows - 1',currentRow, numRows - 1, goingDown);

        // currentRow আপডেট
        currentRow = (goingDown) ? (currentRow + 1) : (currentRow - 1); // যদি নিচে যাচ্ছি, তাহলে +1, নাহলে -1
        console.log(`Current Row: ${currentRow}, Going Down: ${goingDown}`);
        
    }

    // সব row মার্জ করে ফাইনাল স্ট্রিং তৈরি
    let result = '';
    for (let row of rows) {
        result += row.join('');
    }

    return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));              // Output: "A"

/*
    1. Calculate & set rows
    2. push 1st value on 1sr row
    3. Calculate currentRow & isGoingDown
    4. Finally, join all rows & return.
 */