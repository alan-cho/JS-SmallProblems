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
