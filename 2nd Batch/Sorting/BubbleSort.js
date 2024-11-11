let arr = [10,5,12,7,8,3,100,60,5,10,8,7];

function bubbleSort(arr) {
    let temp;
    // ascending order
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // swap
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const result = bubbleSort(arr);
console.log(result);
// tc: n^2
// sc: 1
