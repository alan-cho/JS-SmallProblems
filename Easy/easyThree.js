// 1)
/*
function crunch(string) {
  let result = "";
  let uniqueChar = "";
  for (let i = 0; i <= string.length - 1; i += 1) {
    if (uniqueChar !== string[i]) {
      result += string[i];
      uniqueChar = string[i];
    } else {
      continue;
    }
  }
  return result;
}

console.log(crunch("ddaaiillyy ddoouubbllee"));
console.log(crunch("4444abcabccba"));
console.log(crunch("ggggggggggggggg"));
console.log(crunch("a"));
console.log(crunch(""));
*/

// 2)
/*
function logInBox(string) {
  let message = " " + string + " ";
  let width = message.length;
  let horizontalBorder = `+${"-".repeat(width)}+`;
  let verticalBorder = `|${" ".repeat(width)}|`;
  let messageLine = `|${message}|`;
  return `${horizontalBorder}\n${verticalBorder}\n${messageLine}\n${verticalBorder}\n${horizontalBorder}`;
}

console.log(logInBox("To boldly go where no one has gone before."));
console.log(logInBox(""));
*/

// 3)
/*
function stringy(length) {
  let result = "";
  let isOne = true;
  for (let i = 0; i < length; i += 1) {
    if (isOne) {
      result += "1";
    } else {
      result += "0";
    }
    isOne = !isOne;
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
*/

// 4) Moved to medium difficulty problems - skipped.

// 5)
/*
function triangle(base) {
  result = "";
  for (let i = 1; i < base + 1; i += 1) {
    if (i === base) {
      result += `\n${"*".repeat(i)}`;
    } else {
      result += `\n${" ".repeat(base - i)}${"*".repeat(i)}`;
    }
  }
  return result;
}

console.log(triangle(5));
console.log(triangle(9));
*/

// 6)
/*
const readline = require("readline-sync");

function madLibs(noun, verb, adjective, adverb) {
  return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\nThe ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;
}

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(madLibs(noun, verb, adjective, adverb));
*/

// 7)
/*
function twice(digits) {
  let stringDigits = digits.toString();
  if (stringDigits.length % 2 !== 0) {
    console.log(digits * 2);
  } else if (
    stringDigits.slice(0, stringDigits.length / 2) ===
    stringDigits.slice(stringDigits.length / 2)
  ) {
    console.log(digits);
  } else {
    console.log(digits * 2);
  }
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
*/

// 8)
/*
function getGrade(gradeOne, gradeTwo, gradeThree) {
  let average = (gradeOne + gradeTwo + gradeThree) / 3;
  if (90 <= average && average <= 100) {
    console.log("A");
  } else if (80 <= average && average <= 89) {
    console.log("B");
  } else if (70 <= average && average <= 79) {
    console.log("C");
  } else if (60 <= average && average <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}

getGrade(95, 90, 93);
getGrade(50, 50, 95);
*/

// 9)
