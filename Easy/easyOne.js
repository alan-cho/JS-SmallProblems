// 1)
/*
function isOdd(number) {
  if (Math.abs(number) % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd("3"));
*/

// 2)
/*
function logOddNumbers() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

logOddNumbers();
*/

// 3)
/*
function logEvenNumbers() {
  for (let i = 2; i <= 98; i += 2) {
    console.log(i);
  }
}

logEvenNumbers();
*/

// 4)
/*
const readline = require("readline-sync");
const METER_TO_FEET_CONVERSION = 10.7639;
let length = readline.question(
  "Please enter the length of the room in meters: "
);
let width = readline.question("Please enter the width of the room in meters: ");

function calculateRoomArea(length, width) {
  let areaSqMeters = length * width;
  let areaSqFeet = length * width * METER_TO_FEET_CONVERSION;
  console.log(
    `The area of your room is ${areaSqMeters.toFixed(
      2
    )} square meters or ${areaSqFeet.toFixed(2)} square feet.`
  );
}

calculateRoomArea(length, width);
*/

// 5)
/*
const readline = require("readline-sync");
let bill = readline.question("Please enter the bill: ");
let tipPercentage = readline.question(
  "Please enter how much you'd like to tip (as a percentage): "
);

function calculateTotalBill(bill, tip) {
  bill = Number(bill);
  tip = Number(tip);
  let tipAmount = (tip / 100) * bill;
  let totalBill = bill + tipAmount;
  console.log(`The tip is $${tipAmount.toFixed(2)}`);
  console.log(`The total bill is $${totalBill.toFixed(2)}`);
}

calculateTotalBill(bill, tipPercentage);
*/

// 6)
/*
const readline = require("readline-sync");
let inputNumber = readline.question(
  "Please enter an integer greater than zero: "
);
let arithmeticInput = readline
  .question("Would you like to use addition or multiplication (A/M): ")
  .toUpperCase();

function calculateConsecutiveIntegers(targetNumber, operator) {
  if (operator === "A") {
    let result = 0;
    for (let i = 1; i <= targetNumber; i += 1) {
      result += i;
    }
    console.log(
      `The sum of integers between 1 and ${targetNumber} is ${result}.`
    );
  } else {
    let result = 1;
    for (let i = 1; i <= targetNumber; i += 1) {
      result *= i;
    }
    console.log(
      `The product of integers between 1 and ${targetNumber} is ${result}.`
    );
  }
}

calculateConsecutiveIntegers(inputNumber, arithmeticInput);
*/

// 7)
/*
function shortLongShort(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) {
    console.log(stringTwo + stringOne + stringTwo);
  } else {
    console.log(stringOne + stringTwo + stringOne);
  }
}

shortLongShort("abc", "defgh");
shortLongShort("abcde", "fgh");
shortLongShort("", "xyz");
*/

// 8)
/*
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(true);
      } else {
        console.log(false);
      }
    } else {
      console.log(true);
    }
  } else {
    console.log(false);
  }
}

isLeapYear(2016);
isLeapYear(2015);
isLeapYear(2100);
isLeapYear(2400);
*/

// 9)
