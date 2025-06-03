function swap(arr , i, k) {
    temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

function frontBackPointer(arr) {
    console.log(arr);
    i = 0
    k = arr.length - 1;
    while (i < k) {
        swap(arr, i, k);
        i++;
        k--;
    }
    return arr;
}

const arr = [5,7,6,3,10,1];

const result = frontBackPointer(arr);
console.log(result);