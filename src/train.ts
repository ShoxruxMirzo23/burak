//npm run train - bilan codni ishga tushiramiz!

//MIT J Task
/*
function findLongestWord(str: string) {
  const splitedStr = str.split(" ");

  let longestWord = splitedStr[0];

  for (let word of splitedStr) {
    if (word.length >= longestWord.length) longestWord = word;
  }

  return longestWord;
}

console.log(findLongestWord("I am from  Namangan"));
*/

function findLongestWord(str: string) {
  const splitedStr = str.split(" ");

  let longestWord = splitedStr[0];

  for (let word of splitedStr) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;
}
const result = findLongestWord("I come from Uzbekistan");
console.log("result:", result);

//MIT Task I
/*function getDigits(str: string) {
  const digits = str.match(/\d/g);

  return digits?.join("");
}
console.log(getDigits("i12g2a"));
*/
/*
function getHighestIndex(nums: number[]) {
  let highestNums = 0;
  let maxIndex = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > highestNums) {
      highestNums = nums[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

let test = [3, 5, 9, 12];

console.log(getHighestIndex(test));
*/
// TASK H
/*
function getPositive(arr: number[]) {
  let positiveNums = "";

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      positiveNums += arr[i];
    }
  }

  return positiveNums;
}

console.log(getPositive([4, -8, 6, -2, 7]));
*/

/*  Project Standards:
    -Logging Standards
    -Naming Standards
       function, method, variable => camelCase
       class => PascalCase
       folder => kebab-case
       css => snake_case
    -Error handling   
*/

/*
Traditional API
Rest API
GraphQL API
*/
