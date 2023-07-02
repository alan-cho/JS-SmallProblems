// 1)
/*
Understand the Problem
  Input: Integer
  Output: Array

  Explicit:
    We return an array representing lightbulbs that are on.
    These lightbulbs are turned on initially.
    We switch them off through passes that are made iteratively based on the integer given.
    The lightbulbs selected through these passes are dependent on the number of passes we've made:
      2nd Pass - Turn every 2nd switch on/off starting with the second one.
      3rd Pass - Turn every 3rd switch on/off starting with the third one.

  Implicit:
    The remaining, 'on', lightbulbs are the indices that multiply itself (1x1, 2x2, 3x3, etc.).

Data Structures
  Array

Algorithms
  Initialize the array.
  For Loop (i = 1; i < switches; i += 1)
    If (i * i <= switches)
      Push i * i to the array.
    Else
      Break
  Return the array.

Implement the Code

function lightsOn(switches) {
  let result = [];
  for (let i = 1; i < switches; i += 1) {
    if (i * i <= switches) {
      result.push(i * i);
    } else {
      break;
    }
  }

  console.log(result);
}

lightsOn(5); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
*/

// 2)
/*
Understand the Problem
  Input: Integer
  Output: Several Logged Strings

  Explicit:
    The integer will be odd.
    We must output a four-pointed diamond consisting of '*'s.
    The rows of the diamond are based on the inputted integer.

  Implicit:
    The diamond consists of two triangles that are formed together at the base.
      They share the same base.
    Each row will contain an odd number of characters.
    The middle row of the diamond determines the width of the diamond.
      Which is the inputted integer.

Data Structures
  String

Algorithms
  Initialize a string.
  Initialize the middle row string.
  For Loop to Create the Top Half
    Log each row through each iteration.
  Log the middle row string.
  For Loop to Create the Bottom Half
    Log each row through each iteration.
  
Implement the Code

function diamond(rows) {
  let middleRow = "*".repeat(rows);
  createTopHalf(rows);
  console.log(middleRow);
  createBottomHalf(rows);
}

function createTopHalf(rows) {
  let starCount = 1;
  for (i = 1; i <= Math.floor(rows / 2); i += 1) {
    let row = " ".repeat(Math.ceil(rows / 2) - i) + "*".repeat(starCount);
    console.log(row);
    starCount += 2;
  }
}

function createBottomHalf(rows) {
  let starCount = rows - 2;
  for (let i = Math.floor(rows / 2); i >= 1; i -= 1) {
    let row = " ".repeat(Math.ceil(rows / 2) - i) + "*".repeat(starCount);
    console.log(row);
    starCount -= 2;
  }
}

diamond(1);
diamond(3);
diamond(9);
*/

// 3)
/*
Understand the Problem
  Input: String
  Output: Boolean

  Explicit:
    Given a set of blocks:
      B:O   X:K   D:Q   C:P   N:A
      G:T   R:E   F:S   J:W   H:U
      V:I   L:Y   Z:M
    Can we create the inputted string using these blocks only once, without using both letters on the block?
      Return true or false dependening on this question.
    Can't reuse letter blocks.
    Can't use both letters on the block.

  Implicit:
    Case-insensitive.

Data Structures
  Array
    Object
      Key: Letters, haveUsed
      Values: String, Boolean
  Array
    Holds the objects that are used.

Algorithms
  Initialize the nested data structure - set all values to false for the block objects.
  Iterate Through the Word
    Check what block object holds the letter - set it to haveUsed: true
    Add that block object to the holder array.
    Keep checking throughout the word.
      If there's a block that's already has haveUsed: true - return false;
      Else return true;

Implement the Code

function isBlockWord(word) {
  let buildingBlocks = [
    { Letters: ["B", "O"], haveUsed: false },
    { Letters: ["X", "K"], haveUsed: false },
    { Letters: ["D", "Q"], haveUsed: false },
    { Letters: ["C", "P"], haveUsed: false },
    { Letters: ["N", "A"], haveUsed: false },
    { Letters: ["G", "T"], haveUsed: false },
    { Letters: ["R", "E"], haveUsed: false },
    { Letters: ["F", "S"], haveUsed: false },
    { Letters: ["J", "W"], haveUsed: false },
    { Letters: ["H", "U"], haveUsed: false },
    { Letters: ["V", "I"], haveUsed: false },
    { Letters: ["L", "Y"], haveUsed: false },
    { Letters: ["Z", "M"], haveUsed: false },
  ];

  //Loop through the word
  for (let j = 0; j < word.length; j += 1) {
    //Loops through the blocks
    for (let k = 0; k < buildingBlocks.length; k += 1) {
      if (buildingBlocks[k]["Letters"].includes(word[j])) {
        if (buildingBlocks[k]["haveUsed"] === true) {
          return console.log(false);
        }
        buildingBlocks[k]["haveUsed"] = true;
      }
    }
  }
  return console.log(true);
}

isBlockWord("BATCH"); // true
isBlockWord("BUTCH"); // false
isBlockWord("jest"); // true
*/

// 4)
/*
Understand the Problem
  Input: Integer
  Output: Strings

  Explicit:
    Given an integer we output an eight-pointed star using *'s.
    The integer given is at least 7 and it's an odd number.
  Implicit:
    The width of the star is the integer.
    Each row besides the middle will only contain three *'s.
    The spacing between the stars in each row starts from 0 at the middle and increases by 1.

Example / Test Cases
  *  *  *
   * * *
    ***
  *******
    ***
   * * *
  *  *  *

Data Structures
  String

Algorithms
  Initialize and create the middle row.
  Create and log the top half.
  Log the middle row.
  Create and log the bottom half.

Implement the Code

function buildStarRow(spacesBetween, spacesPadding) {
  let asterisks = ["*", "*", "*"];
  let starRow = asterisks.join(" ".repeat(spacesBetween));
  let paddedStarRow = " ".repeat(spacesPadding) + starRow;

  return paddedStarRow;
}

function star(size) {
  let middleIdx = Math.floor(size / 2);

  for (let idx = 0; idx < middleIdx; idx += 1) {
    let spacesBetween = (size - 3) / 2 - idx;
    let spacesPadding = idx;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }

  console.log("*".repeat(size));

  for (let idx = 0; idx < middleIdx; idx += 1) {
    let spacesBetween = idx;
    let spacesPadding = (size - 3) / 2 - idx;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}

star(7);
star(9);
*/
