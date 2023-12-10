/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowercaseStr=str.toLowerCase();
  let finalStr='';
  for(let char of lowercaseStr){
    if(char>='a' && char<='z'){
      finalStr+=char;
    }
  }
  //console.log(finalStr);
  let first=0;
  let last=finalStr.length-1;
  while(first<last){
    if(finalStr[first]!=finalStr[last]){
      return false;
    }
    first++;
    last--;
  }
  return true;
}
/*let str="Able, was I ere I saw Elba!";
let res=isPalindrome(str);
console.log(res);
*/



module.exports = isPalindrome;
