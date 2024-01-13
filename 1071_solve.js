// 1071. Greatest Common Divisor of Strings

const divise = (strA, strB) => {
    let arry1 = [];
    let arry2 = [];
  
    for (let i = 1; i <= strA.length; i++) {
        console.log( i);
        console.log(strA.length % i);
      if (strA.length % i == 0) {
        arry1.push(i);
        console.log(arry1);
      }
    }
  
    for (let i = 1; i <= strB.length; i++) {
      if (strB.length % i == 0) {
        arry2.push(i);
        console.log(arry2);
      }
    }
  console.log(arry1.filter(value => arry2.includes(value)));
    return arry1.filter(value => arry2.includes(value));
  };
  
  const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) {
      return '';
    }
  
    const commonFactors = divise(str1, str2);
    console.log(commonFactors);
    const maxLength = Math.max(...commonFactors);
    console.log(maxLength);
    console.log(str1.slice(0, maxLength));
  
    return str1.slice(0, maxLength);
  };

const result = divise('ABCABC','ABC');
// const result = countGoodSubstrings('aababcabc');
console.log(result);