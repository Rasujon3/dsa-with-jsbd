var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }
    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }

    for (let i = 0; i < s.length; i++) {
        let row = i % (2 * numRows - 2);
        console.log("row: ", row);

        if (row >= numRows) {
            row = 2 * numRows - 2 - row;
        }
        console.log("row: ", row);

        rows[row].push(s[i]);
    }

    let result = "";
    for (let i = 0; i < numRows; i++) {
        result += rows[i].join("");
    }

    return result;

};

let result = convert("PAYPALISHIRING", 3);
console.log(result);

// result = convert("PAYPALISHIRING", 4);
// console.log(result);

// result = convert("A", 1);
// console.log(result);

// result = convert("AB", 1);
// console.log(result);

// result = convert("AB", 2);
// console.log(result);

// result = convert("ABC", 2);
// console.log(result);

// result = convert("ABCD", 2);
// console.log(result);

// result = convert("ABCD", 3);
// console.log(result);

// result = convert("ABCD", 4);
// console.log(result);

// Time Complexity = O(n)
// Space Complexity = O(n)