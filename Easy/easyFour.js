// 1)
/*
Understand the Problem
  Input: Integers
  Output: String

  Explicit: 
    Six numbers has to be inputted.
    A string that expresses whether the last number is within the range of the other five numbers.

  Implicit: 
    The number does not have to be within the series of numbers.

Data Structure 
  The number are stored to a variable first.
  An array is created to store the numbers into one collection.

Algorithm
  Declare and initialize variables to hold the user's input.
  Declare and initialize an array.
  Push the user's input to the array.
  Iterate through the array to find the minimum and maximum number of the first five numbers inputted.
  Check if the number is larger than the minimum number and smaller than the maxium number.
    Return a string that expresses whether the number is included in the range of the minimum and maximum number.
  
Implement the Code

const readline = require("readline-sync");

let numberOne = readline.question("Enter the first number: ");
let numberTwo = readline.question("Enter the second number: ");
let numberThree = readline.question("Enter the third number: ");
let numberFour = readline.question("Enter the fourth number: ");
let numberFive = readline.question("Enter the fifth number: ");
let lastNumber = readline.question("Enter the last number: ");

let numberCollection = [];

function addToCollection(element, collection) {
  collection.push(element);
  return collection;
}

function findMaxAndMin(numCollection) {
  let maxNum = Math.max(...numCollection);
  let minNum = Math.min(...numCollection);
  return [maxNum, minNum];
}

function isWithinRange(maxNum, minNum, lastNumber) {
  if (maxNum >= lastNumber && minNum <= lastNumber) {
    return `${lastNumber} is included.`;
  } else {
    return `${lastNumber} is not included.`;
  }
}

addToCollection(numberOne, numberCollection);
addToCollection(numberTwo, numberCollection);
addToCollection(numberThree, numberCollection);
addToCollection(numberFour, numberCollection);
addToCollection(numberFive, numberCollection);

let [maxNum, minNum] = findMaxAndMin(numberCollection);

console.log(isWithinRange(maxNum, minNum, lastNumber));
*/

//2)
/*
Understand the Problem
  Input: String 
  Output: Boolean

  Explicit: 
    Check if the string inputted is a palindrome.
    Palindrome is a string where the second half is the reversed order of the first half.
    All characters are matter - whitespace, numbers, punctuation.
  Implicit:
    There's no empty strings.

Examples / Test Cases
  isPalindrome('madam');               // true
  isPalindrome('Madam');               // false (case matters)
  isPalindrome("madam i'm adam");      // false (all characters matter)
  isPalindrome('356653');              // true

Data Structure
  A string stores the input value.

Algorithm
  Take the input value.
  Create two new strings - representing the two halves of the string.
  Reverse the second half and compare the two strings.
  Return the comparison.

Implement the Code


const readline = require("readline-sync");

let inputString = readline.question("Enter a string: ");

function createTwoHalves(string) {
  if (string.length % 2 === 1) {
    let firstHalfOdd = string.slice(0, string.length / 2 + 1);
    let secondHalfOdd = string.slice(string.length / 2);
    return [firstHalfOdd, secondHalfOdd];
  } else {
    let firstHalfEven = string.slice(0, string.length / 2);
    let secondHalfEven = string.slice(string.length / 2);
    return [firstHalfEven, secondHalfEven];
  }
}

function compareTwoHalves(firstHalf, secondHalf) {
  let reversalSecondHalf = secondHalf.split("").reverse().join("");
  return firstHalf === reversalSecondHalf;
}

let [firstHalf, secondHalf] = createTwoHalves(inputString);

console.log(compareTwoHalves(firstHalf, secondHalf));
*/

//3)
/*
Understand the Problem
  Input: String
  Output: Boolean
  
  Explicit:
    Check if the string is a palidrome.
    When checking, the conditional is case insensitive and ignore all non-alphanumeric characters.

  Implicit:

Examples / Test Cases
  isRealPalindrome('madam');               // true
  isRealPalindrome('Madam');               // true (case does not matter)
  isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
  isRealPalindrome('356653');              // true
  isRealPalindrome('356a653');             // true
  isRealPalindrome('123ab321');            // false

Data Structure
  Same structure as the previous question!

Algorithm
  Same algorithm except add an extra step to filter out punctuation and whitespace.

Implement the Code

const readline = require("readline-sync");

let inputString = readline.question("Enter a string: ");
let filteredString = inputString
  .toLowerCase()
  .split("")
  .filter((element) => element == /[\W]/gi)
  .join("");

function createTwoHalves(string) {
  if (string.length % 2 === 1) {
    let firstHalfOdd = string.slice(0, string.length / 2 + 1);
    let secondHalfOdd = string.slice(string.length / 2);
    return [firstHalfOdd, secondHalfOdd];
  } else {
    let firstHalfEven = string.slice(0, string.length / 2);
    let secondHalfEven = string.slice(string.length / 2);
    return [firstHalfEven, secondHalfEven];
  }
}

function compareTwoHalves(firstHalf, secondHalf) {
  let reversalSecondHalf = secondHalf.split("").reverse().join("");
  return firstHalf === reversalSecondHalf;
}

let [firstHalf, secondHalf] = createTwoHalves(filteredString);

console.log(compareTwoHalves(firstHalf, secondHalf));
*/

//4)
/*
Understand the Problem
  Input: Integer
  Output: Boolean

  Explicit:
    Checks if the integer is a palindrome.
    Returns a boolean value on whether it's true or false.

  Implicit:
    There will always be a number.
    The input will only be integers.
    The length of the number will be different.

Examples / Test Cases
  isPalindromicNumber(34543);        // true
  isPalindromicNumber(123210);       // false
  isPalindromicNumber(22);           // true
  isPalindromicNumber(5);            // true
  
Data Structure
  Use a string to contain the digits.

Algorithm
  Convert the digits into a string.
  Split the string and compare the two halves.
  Return the result.

Implement the Code

const readline = require("readline-sync");

let integerInput = readline.question("Enter a number: ");

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

console.log(isPalindrome(integerInput));
*/

//5)
