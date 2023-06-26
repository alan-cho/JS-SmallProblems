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
