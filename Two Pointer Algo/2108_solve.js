function arrayPalindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (isPalindrome(element)) {
      return element;
    }
  }
  return "";
}

function isPalindrome(str) {
  let i = 0;
  let k = str.length - 1;

  while (i <= k) {
    if (str[i] != str[k]) {
      return false;
    }
    i++;
    k--;
  }
  return true;
}

console.log(arrayPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(arrayPalindrome(["notapalindrome", "racecar"]));
console.log(arrayPalindrome(["def", "ghi"]));
