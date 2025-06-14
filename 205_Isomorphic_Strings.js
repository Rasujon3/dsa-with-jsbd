var isIsomorphic = function(s, t) {
    // দৈর্ঘ্য আলাদা হলে সাথে সাথে false
    if (s.length !== t.length) return false;

    // দুটি Map দিয়ে দুপাশের ম্যাপিং রাখব
    const charMap = new Map();      // s[i] → t[i]
    const reverseMap = new Map();   // t[i] → s[i]

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        console.log(charMap);
        console.log(reverseMap);
        

        // যদি charS আগে ম্যাপ করা হয়ে থাকে
        if (charMap.has(charS)) {
            if (charMap.get(charS) !== charT) {
                return false; // ভিন্ন অক্ষরে ম্যাপ হচ্ছে → ভুল
            }
        } else {
            // নতুন ম্যাপিং
            charMap.set(charS, charT);
        }

        // এখন reverseMap চেক: t[i] → s[i]
        if (reverseMap.has(charT)) {
            if (reverseMap.get(charT) !== charS) {
                return false; // ভিন্ন s[i] একই t[i]-এ ম্যাপ হচ্ছে → ভুল
            }
        } else {
            reverseMap.set(charT, charS);
        }
    }

    return true; // সব ঠিক আছে
};

// console.log(isIsomorphic("egg", "add")); // true
// console.log(isIsomorphic("foo", "bar")); // false
// console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false

// Time Complexity: O(n) - n হচ্ছে s এবং t এর দৈর্ঘ্য
// Space Complexity: O(n) - ম্যাপের জন্য
