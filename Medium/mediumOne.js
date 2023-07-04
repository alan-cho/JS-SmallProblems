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
