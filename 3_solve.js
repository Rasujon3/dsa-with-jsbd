// 3. Longest Substring Without Repeating Characters

/**
 * 1. case for s.length < 2
 * 2. sliding window to track max length substring, length is front-back+1
 * 3. a map to store individual char, key is character, value is index
 * 4. loop through to update front, back index, map, max length
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }
    const map = {}; // this map the key will be the character value & the value will be the character index
    let front = 0, back = 0, maxLength = 0;
    for(;front<s.length;front+=1){
        const exist = map[s[front]]; // value doesn't in the map
        console.log(exist,front,back,maxLength);
        // if the value already in the map - update the back index to make it move
        if (exist !== undefined && back <= exist) {
            back = exist + 1;
            console.log(exist,front,back,maxLength);
        }
        // if not exist, then save the value in the map & update the maximum length
        map[s[front]] = front;
        console.log(exist,front,back,maxLength);
        maxLength = Math.max(front-back+1, maxLength);
        console.log(exist,front,back,maxLength);
    }
    console.log(maxLength);
    return maxLength;
};

// time complexity O(n)
// space complexity O(128)


function longestSubstringWithoutRepeating(s) {
    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const charSet = new Set();
        console.log(charSet);
        let length = 0;
        console.log(length);

        for (let j = i; j < s.length; j++) {
            const currentChar = s[j];
            console.log(currentChar);
            console.log(charSet.has(currentChar));
            console.log(length);

            if (!charSet.has(currentChar)) { // checking repeating character or not
                charSet.add(currentChar);
                length++;
                console.log(length);
                maxLength = Math.max(maxLength, length);
                console.log(maxLength);
            } else {
                break;  // if repeating character found, then exit
            }
        }
    }

    return maxLength;
}

// Example usage:
// const inputString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const inputString = "ioexqzyokiuuiowwegunozbwmycqddzltdimcicmrwibmexsltfzvhxhhaxmfyxzbilfqntjlcmagmstfysa";
const result = longestSubstringWithoutRepeating(inputString);
console.log(result);  // Output: 95 (length of the entire input string without repeating characters)
  

function lengthOfLongestSubstring_bruteforce(s) {
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (maxLength >=95) {
            break;
        }
      for (let j = i + 1; j <= s.length; j++) {
        if (maxLength >=95) {
            break;
        }
        const subStr = s.substring(i, j);
        const hasUniqueChars = new Set(subStr).size === subStr.length;
        if (hasUniqueChars) {
          maxLength = Math.max(maxLength, subStr.length);
        }
      }
    }
  
    return maxLength;
  }
  // Example usage:
const inputStrings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const results = lengthOfLongestSubstring_bruteforce(inputStrings);
console.log(results);  // Output: 95 (length of the entire input string without repeating characters)

function lengthOfLongestSubstring_byMuradVai(s) {
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
        if (maxLength >=95) {
            break;
        }
      for (let j = i + 1; j <= s.length; j++) {
        if (maxLength >=95) {
            break;
        }
        const subStr = s.substring(i, j);
        const hasUniqueChars = new Set(subStr).size === subStr.length;
        if (hasUniqueChars) {
          maxLength = Math.max(maxLength, subStr.length);
        }
      }
    }
  
    return maxLength;
  }
  const inputStringsss = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const resultsss = lengthOfLongestSubstring_bruteforce(inputStringsss);
console.log(resultsss);