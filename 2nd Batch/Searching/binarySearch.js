function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let isAsce = true;
    if (arr[start] < arr[end]) {
        isAsce = true;
    } else {
        isAsce = false;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        // 3 steps to check out
            // 1. equal
            // 2. large
            // 3. small

        if (arr[mid] === target) {
            return `${target} found at index  of ${mid}`;
        } else if (arr[mid] < target) {
            if (isAsce) {
                start = mid + 1;   
            } else {
                end = mid - 1;
            }
        } else {
            if (isAsce) {
                end = mid - 1;   
            } else {
                start = mid + 1;
            }
        }
    }
    return `${target} not found.`
}

let arr = [10,20,30,40,50,60,70,80,90,100];
const target = 70;

const result = binarySearch(arr, target);
console.log(result);
// Time complexity: O(log N) 
// Space complexity: O(1) 