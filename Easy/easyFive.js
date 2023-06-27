// 1)
/*
Understand the Problem
  Input: Floating Point Number
  Output: String

  Explicit:
    Given a floating point number, return a string that represents the degrees, minutes, and seconds.
    The number represents degrees between 0-360.
    There are 60 minutes in a degree, and 60 seconds in a minute.

Data Structures
  String

Algorithms
  Divide the degree into the largest possible degrees.
  The remainder should be divided into the largest possible minutes.
  And the remainder of that should be divided into the largest possible seconds.
  Return all the values in a string.

Implement the Code 

const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) *
      SECONDS_PER_DEGREE
  );

  return console.log(
    String(degreesInt) +
      DEGREE +
      padZeroes(minutes) +
      "'" +
      padZeroes(seconds) +
      '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
*/

//2)
/*
Understand the Problem
  Input: Two Arrays
  Output: One Merged Array

  Explicit:
    The returned array must have no duplicates.
    Inputs will always be arrays.

  Implicit:
    The elements are integers.

Data Structures
  Array

Algorithms
  Copy the first array.
  Iterate through the second array.
  Check if the first array includes the element in the second array.
  Add the element to the copied array if it's unique, otherwise skip it.
  Return the copied array.

Implement the Code

function union(arrayOne, arrayTwo) {
  let result = arrayOne.slice();
  arrayTwo.forEach(function (element) {
    if (!arrayOne.includes(element)) {
      result.push(element);
    }
  });
  return console.log(result);
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
*/

//3)
/*
Understand the Problem
  Input: Array
  Output: Nested Array

  Explicit:
    Return a nested array containing two elements:
      Two separate arrays
    The nested arrays are the two halves of the inputted array.
    If the input array length is odd, then put the middle element in the first nested array.

Data Structures
  Array

Algorithms
  Find the middle element of the input array.
  Create a return array.
  Iterate through the input array up until the middle element.
    Create a new array that saves these elements.
  Repeat for the second half of the input array.
  Push both new arrays into the return array.
  Return the return array.

Implement the Code

function halvsies(array) {
  let result = [];
  let isArrayEven = checkEven(array);
  let middleIndex = findMiddleIndex(array, isArrayEven);

  let firstHalf = createArray(array, 0, middleIndex);
  let secondHalf = createArray(array, middleIndex + 1, array.length - 1);

  result.push(firstHalf, secondHalf);
  return console.log(result);
}

function checkEven(array) {
  return array.length % 2 === 0;
}

function findMiddleIndex(array, isEven) {
  if (isEven) {
    return array.length / 2 - 1;
  } else {
    return Math.floor(array.length / 2);
  }
}

function createArray(array, startIndex, endIndex) {
  let result = [];
  for (let i = startIndex; i <= endIndex; i += 1) {
    result.push(array[i]);
  }
  return result;
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
*/

//4)
/*
Understand the Problem
  Input: Array
  Output: Integer

  Explicit:
    Given a random, unordered array containing integers only.
    There will be only one integer that occurs twice.
    Find the duplicate integer.

  Implicit:
    There is no limit to how large the array is.

Data Structures
  Array

Algorithms
  Create a copy of the input array.
  Iterate through the copied array.
  Count the amount of duplicates there are for an element when iterating through the copied array.
  If the count amount is 2, return that element.

Implement the Code

function findDup(array) {
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        count += 1;
      }

      if (count === 2) {
        return console.log(array[j]);
      }
    }
  }
}

findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73
*/

//5)
/*
Understand the Problem
  Input: Two Arrays
  Output: One Array

  Explicit:
    Takes two arrays as input - these arrays may contain anything.
    Return an array that combines the two arrays.
    This combination specifies the adding elements in alteration to the return array.

  Implicit:
    The two arrays are the same length.

Data Structures
  Array

Algorithms
  Create an array.
  Iterate through an array.
  Add the element to every odd indices.
  Iterate through the other array.
  Add the element to every even indices.

Implement the Code

function interLeave(arrayOne, arrayTwo) {
  let result = [];

  let evenIndices = 0;
  for (let i = 0; i < arrayOne.length; i += 1) {
    result[evenIndices] = arrayOne[i];
    evenIndices += 2;
  }

  let oddIndices = 1;
  for (let j = 0; j < arrayTwo.length; j += 1) {
    result[oddIndices] = arrayTwo[j];
    oddIndices += 2;
  }

  return console.log(result);
}

interLeave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
*/

//6)
