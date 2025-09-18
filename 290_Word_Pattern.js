var wordPattern = function(pattern, s) {
    console.log(pattern, s);
    let arr = s.split(" ");
    console.log(arr);
    if (pattern.length !== arr.length) return false;
    // 
    let map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        console.log(char);
        
        let word = arr[i];
        console.log(word);
        console.log(map);
        
        if (!map.has(char)) {
            map.set(char, word);
            console.log(map);
        } else if (map.get(char) !== word) {
            return false;
        }
    }
    console.log(map);
    let values = Array.from(map.values());
    console.log(values);
    
    if(values.every(val => val === values[0])) {
        return false;
    }
    let hasDuplicates = new Set(values).size !== values.length;
    if(hasDuplicates) {
        return false;
    }
    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abc", "dog cat dog")); // false
