// 1)
/*
function greetings(arr, obj) {
  return `Hello, ${arr.join(" ")}! Nice to have a ${obj.title} ${
    obj.occupation
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
*/

// 2)
/*
const readline = require("readline-sync");

function greeting(name) {
  if (name.includes("!")) {
    console.log(
      `HELLO ${name
        .slice(0, name.length - 1)
        .toUpperCase()}, WHY ARE WE SCREAMING?`
    );
  } else {
    console.log(`Hello ${name}.`);
  }
}

let name = readline.question("Please state your name: ");
greeting(name);
*/

// 3)
/*
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

console.log(multiply(5, 3) === 15);
*/

// 4)
/*
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function square(number) {
  return multiply(number, number);
}

console.log(square(-5) === 25);
*/

// 5)
/*
const readline = require("readline-sync");

function arithmeticCalculator(firstNum, secondNum) {
  console.log(
    `==> ${firstNum} + ${secondNum} = ${
      firstNum + secondNum
    } \n==> ${firstNum} - ${secondNum} = ${
      firstNum - secondNum
    } \n==> ${firstNum} * ${secondNum} = ${
      firstNum * secondNum
    } \n==> ${firstNum} / ${secondNum} = ${Math.floor(
      firstNum / secondNum
    )} \n==> ${firstNum} % ${secondNum} = ${
      firstNum % secondNum
    } \n==> ${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`
  );
}

let firstNum = Number(readline.question("Please enter the first number: "));
let secondNum = Number(readline.question("Please enter the second number: "));

arithmeticCalculator(firstNum, secondNum);
*/

// 6)
/*
function penultimate(string) {
  let array = string.split(" ");
  return array[array.length - 2];
}

console.log(penultimate("last word") === "last");
console.log(penultimate("Launch School is great!") === "is");
*/

// 7)
/*
function xor(operandOne, operandTwo) {
  if (operandOne) {
    if (operandTwo == false) {
      return true;
    } else {
      return false;
    }
  } else if (operandTwo) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true); 
console.log(xor(1, 1) === false); 
console.log(xor(true, true) === false);
*/

// 8)
/*
function oddities(array) {
  let result = [];
  for (let i = 0; i <= array.length - 1; i += 2) {
    result.push(array[i]);
  }
  return result;
}

console.log(oddities([2, 3, 4, 5, 6]));
console.log(oddities([1, 2, 3, 4, 5, 6]));
console.log(oddities(["abc", "def"]));
console.log(oddities([123]));
console.log(oddities([]));
*/

// 9)
/*
function teddy() {
  let age = Math.floor(Math.random() * 120);
  if (age < 20) {
    age += 20;
  }
  return `Teddy is ${age} years old!`;
}

console.log(teddy());
*/

// 10)
/*
const readline = require("readline-sync");

function retire(initialAge, finalAge) {
  let currentYear = new Date().getFullYear();
  let ageDifference = finalAge - initialAge;
  return `It's ${currentYear}. You will retire in ${
    currentYear + ageDifference
  }!\nYou have only ${ageDifference} years left to go!`;
}

let initialAge = readline.question("Enter your age: ");
let finalAge = readline.question("Enter the age you'd like to retire: ");

console.log(retire(initialAge, finalAge));
*/

// 11)
/*
function centerOf(string) {
  if (string.length % 2 === 0) {
    return string[string.length / 2 - 1] + string[string.length / 2];
  } else {
    return string[Math.floor(string.length / 2)];
  }
}

console.log(centerOf("I Love JavaScript"));
console.log(centerOf("Launch School")); 
console.log(centerOf("Launch"));
console.log(centerOf("Launchschool"));
console.log(centerOf("x"));
*/

// 12)
/*
function returnNegative(number) {
  if (number < 0) {
    return number;
  } else {
    return -number;
  }
}

console.log(returnNegative(5));
console.log(returnNegative(-3));
console.log(returnNegative(0));
*/
