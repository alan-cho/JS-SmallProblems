// 1)
/*
Understand the Problem
  Input: String
  Output: Object

  Explicit:
    Input a string and return an object that contains the following properties:
      Percentage of characters in lowercase, uppercase, or neither.
    The string will always contain at least one character.

  Implicit: 
    Whitespace counts as a character.

Data Structures
  String -> Array -> Object

Algorithms
  Initialize an empty object.
  Initialize an array - string.split();
  Initialize a lowercaseCount, uppercaseCount, neitherCount variable.
  Iterate through the array.
    Check if the element is lowercase, uppercase, or neither.
      Add one to their respective variable.
  Add the property with the value of the variable.
  Return the object.
Implement the Code
function letterPercentages(string) {
  let result = {};
  let lowercaseCount = 0,
    uppercaseCount = 0,
    neitherCount = 0;
  let arrayStr = string.split("");
  arrayStr.forEach((ele) => {
    if (!ele.match(/[a-z]+/i)) {
      neitherCount += 1;
    } else if (ele === ele.toLowerCase()) {
      lowercaseCount += 1;
    } else {
      uppercaseCount += 1;
    }
  });

  result["lowercase"] = (lowercaseCount / arrayStr.length) * 100;
  result["uppercase"] = (uppercaseCount / arrayStr.length) * 100;
  result["neither"] = (neitherCount / arrayStr.length) * 100;

  return console.log(result);
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
*/

// 2)
