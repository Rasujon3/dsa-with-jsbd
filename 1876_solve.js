// 1876. Substrings of Size Three with Distinct Characters

var countGoodSubstrings = function(s) {
    let windowStart = 0;
    let arr = [];
    let countOfGoodSets = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        console.log(s[windowEnd]);
        arr.push(s[windowEnd]); // add to the temp window tracker
        console.log(arr);
        console.log(windowEnd);
        console.log(windowStart);
        if (windowEnd - windowStart === 2) { // when we have a window
            let mySet = new Set(arr); // make a set; (set's only store unique values)
            console.log(mySet);
            console.log(countOfGoodSets);
            console.log(mySet.size);
            if (mySet.size === 3) { // see if the set has 3 values in it stil
                countOfGoodSets += 1
            }
            arr.shift(s[windowStart]);
            console.log(arr);
            console.log(windowStart);
            windowStart++;
            console.log(windowStart);
        }
    }
    console.log(countOfGoodSets);
    return countOfGoodSets;
};

const result = countGoodSubstrings('xyzzaz');
// const result = countGoodSubstrings('aababcabc');
console.log(result);