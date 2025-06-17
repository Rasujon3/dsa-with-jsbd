function isPalindrome(s, left, right) {
    console.log(s[left]);
    console.log(s[right]);
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        console.log(s[left]);
        console.log(s[right]);
        
        if (s[left] !== s[right]) {
            // দুটি অপশন চেক করো:
            // 1. left অক্ষরটি ডিলিট করে দেখি
            // 2. right অক্ষরটি ডিলিট করে দেখি
            return isPalindrome(s, left + 1, right) || 
                   isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true; // পুরোটা প্যালিনড্রোম
};

console.log(validPalindrome('"aba"'));
// console.log(validPalindrome('"abca"'));
// console.log(validPalindrome('"abc"'));
