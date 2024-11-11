let arr = [10,5,12,7,8,3,100,60,5,10,8,7];

function selectionSort(arr) {
    // ascending order
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            // find minimum value & store index
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

const result = selectionSort(arr);
console.log(result);
// tc: n^2
// sc: 1
