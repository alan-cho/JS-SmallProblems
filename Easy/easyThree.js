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

// 4)
