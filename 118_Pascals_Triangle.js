var generate = function(numRows) {
    // ফলাফল রাখার জন্য 2D array
    let triangle = [];

    // প্রথম row খালি হলে return empty
    if (numRows === 0) return triangle;

    // প্রথম row হচ্ছে [1]
    triangle.push([1]);
    console.log(triangle);
    

    // বাকি rows তৈরি করা
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1]; // আগের row
        console.log(prevRow);
        
        let currentRow = [1]; // নতুন row, শুরুতে 1
        console.log(currentRow);

        // মাঝের সংখ্যাগুলো যোগ করা
        for (let j = 1; j < prevRow.length; j++) {
            console.log(currentRow[j]);
            console.log(prevRow[j]);
            console.log(prevRow[j - 1]);
            currentRow[j] = prevRow[j] + prevRow[j - 1];
            console.log(currentRow[j]);
            
        }

        // শেষে 1 যোগ করা
        currentRow.push(1);
        console.log(currentRow);

        // triangle-এ row যোগ করা
        triangle.push(currentRow);
        console.log(triangle);
    }

    console.log(triangle);
    return triangle;
};

console.log(generate(4));
