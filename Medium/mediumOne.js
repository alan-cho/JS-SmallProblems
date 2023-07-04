// 1)
/*
Understand the Problem
  Input: Array 
  Output: Array

  Explicit:
    Return a new array that is a mutated verison of the input array.
    Move the first element to the end of the array.
    If the array is empty, return an empty array.
    If the array is not an array, return undefined.

Data Structures
  Array

Algorithms
  rotateArray Function
  If the input is not an array.
    Return undefined.
  Else if the array's length is 0.
    Return an empty array.

  Declare and initialize a new array assigned to the copy of the input array.
  Remove the first element of the array and hold that value.
  Assign that value to the end of the new array.
  Return the new array.  
  

Implement the Code

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return console.log(undefined);
  } else if (array.length === 0) {
    return console.log([]);
  }

  let result = array.slice();
  let firstElement = result.shift();
  result.push(firstElement);
  console.log(result);
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
*/

// 2)
/*
Understand the Problem
  Input: Integer, Integer
  Output: Integer

  Explicit:
    The first inputted integer will be a number.
    The second inputted integer will be an index from the right.
    We use this index to move the element to the end of the number (most right position).

Data Structures
  String -> Array -> String -> Integer

Algorithms
  Initialize and declare a variable assigned a string containing the first input integer.
  Initialize and declare a variable assigned to an array (split the string).
  Select the element that we want to move using the second integer inputted.
  Remove that element from the array, and add it back towards the end of the array.
    Splice -> Push
  Take the array and put it back into a string (join).
  Parse the string as an integer and return the integer.

Implement the Code

function rotateRightmostDigits(number, index) {
  let numberStr = String(number);
  let numberArr = numberStr.split("");
  let numberEle = numberArr[numberArr.length - index];

  numberArr.splice(numberArr.length - index, 1);
  numberArr.push(numberEle);
  numberStr = numberArr.join("");

  return console.log(Number(numberStr));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
*/

// 3)
/*
Understand the Problem
  Input: Integer
  Output: Integer

  Explicit:
    Rotation = Taking the selected digits and placing them at the end of the number.
    Have a series of rotations on the inputted intger:
      Rotate the first number.
      Keep the first number in place.
      Rotate the second number.
      Keep the first two numbers in place.
      Rotate the third number.
      Keep the first three numbers in place.
      And so on...
    Until there are no more unique, viable rotations.
    Return the rotated number.

Data Structures
  Integer -> String -> Array -> String -> Integer

Algorithms
  Initialize and declare the string, array variables and assign them to the integer respective to those data types.
  Iterate through the array.
    The loop of the array determines the index of the element that will be rotated.
    Remove that element from the array.
    Add that element to the end of the array.
  Reassign the string variable to the joined array.
  Coerce the string back into a number.
  Return the number.
Implement the Code

function maxRotation(number) {
  let numberStr = String(number);
  let numberArr = numberStr.split("");

  for (let i = 0; i < numberArr.length; i += 1) {
    let numberEle = numberArr[i];
    numberArr.splice(i, 1);
    numberArr.push(numberEle);
  }
  numberStr = numberArr.join("");
  return console.log(Number(numberStr));
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
*/

// 4)
/*
function minilang(command) {
  let register = 0;
  let stack = [];
  let commands = command.split(" ");
  const COMMAND_FUNCTIONS = [
    "ADD",
    "SUB",
    "MULT",
    "DIV",
    "REMAINDER",
    "N",
    "PUSH",
    "POP",
    "PRINT",
  ];
  //console.log(commands);

  commands.forEach(function (keyWord) {
    //console.log("The keyword is:", keyWord);
    if (!COMMAND_FUNCTIONS.includes(keyWord) || keyWord === "N") {
      //console.log("Invoked N");
      register = +keyWord;
    } else if (keyWord === "ADD") {
      //console.log("Invoked Add");
      register += stack.pop();
    } else if (keyWord === "SUB") {
      //console.log("Invoked Sub");
      register -= stack.pop();
    } else if (keyWord === "MULT") {
      //console.log("Invoked Mult");
      register *= stack.pop();
    } else if (keyWord === "DIV") {
      //console.log("Invoked Div");
      register = Math.trunc(register / stack.pop());
    } else if (keyWord === "REMAINDER") {
      //console.log("Invoked Remainder");
      register = register % stack.pop();
    } else if (keyWord === "POP") {
      //console.log("Invoked Pop");
      register = stack.pop();
    } else if (keyWord === "PUSH") {
      //console.log("Invoked Push");
      stack.push(register);
    } else if (keyWord === "PRINT") {
      //console.log("Invoked Print");
      console.log(register);
    }
  });
  //console.log(stack, register);
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
*/

// 5)
/*
Understand the Problem
  Input: String
  Output: String

  Explicit:
    Input a string that contains words and numbers written as words.
    Replace every number word with its corresponding digit.
    Output the string with the replaced number words.
    The only possible numbers are 0-9.

Data Structures
  String -> Array -> String

Algorithms
  Initialize and declare a constant that contains all of the number words and its appropriate digit.
  Initialize an array and input the words into the array as elements.
  Iterate through the array, checking if the word matches one of the number words in the constant.
    If they do match then replace the number word with its corresponding digit.
  Join the array back into a string and return the string.

Implement the Code
function wordToDigit(string) {
  const numberWords = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  Object.keys(numberWords).forEach((word) => {
    let regex = new RegExp(word, "g");
    string = string.replace(regex, numberWords[word]);
  });
  console.log(string);
}

wordToDigit("Please call me at five five five one two three four. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."
*/

// 6)
/*
Understand the Problem
  Input: Integer
  Output: Integer

  Explicit:
    The input integer represents the amount of digits we are looking for.
    Output would be the first integer the matches the amount of digits we are looking for.
    
Data Structures
  Number and Array

Algorithms
  Initialize and declare an array assigned [1, 1].
  While Loop
    The last two elements from the end of the array, add them together and push it to the array.
    Check if it matches the number of digits from the input.
      Break
  Log the element that matched the number of digits.

Implement the Code
function findFibonacciIndexByLength(digits) {
  let fibonacciArr = [1, 1];
  while (true) {
    let fibonacciNum =
      fibonacciArr[fibonacciArr.length - 2] +
      fibonacciArr[fibonacciArr.length - 1];
    fibonacciArr.push(fibonacciNum);

    if (String(fibonacciNum).split("").length === digits) {
      return console.log(fibonacciNum);
    }
  }
}

findFibonacciIndexByLength(2); // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3); // 1 1 2 3 5 8 13 21 34 55 89 144
*/

// 7)
