var singleNumber = function(nums) {
    let map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    
};

// console.log(singleNumber([2,2,3,2])); // 3
console.log(singleNumber([0,1,0,1,0,1,99])); // 99

// Time Complexity: O(n)
// Space Complexity: O(n)