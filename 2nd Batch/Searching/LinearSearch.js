let arr = [10, 20, 5, 15, 25, 45, 100];
const target = 45;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        if (element === target) {
            return `${target} is found at index ${i}`;
        }
    }
    return 'Not found.';
}

const result = linearSearch(arr, target);
console.log(result);