//npm run train - bilan codni ishga tushiramiz!

//MIT Man-TASK
let getSquareNumbers = (ele: any[]) => {
  let result_store = [];

  for (let i = 0; i < ele.length; i++) {
    result_store.push({ number: ele[i], square: ele[i] * ele[i] });
  }
  return result_store;
};
let result = getSquareNumbers([1, 2, 3]);
console.log(result);
//MIT TASK L
/*
function reverseSentence(str: string) {
  const splittedStr = str.split(" ");
  let reversedStr = [];

  for (const word of splittedStr) {
    reversedStr.push(word.split("").reverse().join(""));
  }

  return reversedStr.join(" ");
}

console.log(reverseSentence("we like Coding!"));

//MIT K TASK
function countVowels(str: string) {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  const strArr: string[] = str.split("");

  const findVowel: string[] = strArr.filter((elem: string) =>
    vowels.includes(elem)
  );

  return findVowel.length;
}

let result = countVowels("string");
console.log("Vowels are: ", result);

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

//function findLongestWord(str: string) {
//  const splitedStr = str.split(" ");

//  let longestWord = splitedStr[0];

//  for (let word of splitedStr) {
//    if (word.length > longestWord.length) longestWord = word;
//  }

//  return longestWord;
//}
//const result = findLongestWord("I come from Uzbekistan");
//console.log("result:", result);

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

/*
Traditional FD => Backend server site rendering (BSSR) => EJS
Modern FD => SPA (Sinfle page application) bu user larni applicationi  => REACT
*/
