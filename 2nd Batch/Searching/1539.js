var findKthPositive = function(arr, k) {
    console.log(arr);
    console.log(k);
    let missingArray = [];
    let i = 0; // for arr print
    let n = 1; // for missing array
    console.log(i);
    console.log(n);
    console.log(missingArray);

    while(missingArray.length <= k) {
        console.log(i);
        console.log(arr[i]);
        console.log(n);

        if (n == arr[i]) {
            console.log(missingArray);
            i++;
            n++;
            console.log(i);
            console.log(n);
        } else {
            missingArray.push(n);
            console.log(missingArray);
            // i++; // jodi na mele, i barano jabe na, barale oi vlaue r pabo na, na pauya porjon loop chole push hobe, so no problem
            n++;
            console.log(i);
            console.log(n);
        }
        console.log(missingArray);
    }
    return missingArray[missingArray.length - 2];
};

// const arr = [1,2,3,4];
// const k = 2;
const arr = [2,3,4,7,11];
const k = 5

const result = findKthPositive(arr, k);
console.log(result);
