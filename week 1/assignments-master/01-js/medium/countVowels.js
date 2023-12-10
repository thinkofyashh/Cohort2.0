/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let numberVowels=0;
    let lowerCaseStr=str.toLowerCase().split('');
    for(let char of lowerCaseStr){
      if(char=='a' || char=='e' || char =='i' || char =='o' || char =='u'){
        numberVowels++;
      }
    }
    return numberVowels;
}

/*let str="Coding is fun!!!";
let result =countVowels(str);
console.log(result);
*/




module.exports = countVowels;