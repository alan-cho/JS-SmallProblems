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
