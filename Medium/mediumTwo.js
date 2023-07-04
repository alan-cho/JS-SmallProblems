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
/*
Understand the Problem
  Input: Integer, Integer, Integer
  Output: String

  Explicit:
    Given three sides of a triangle (integers), return the type of triangle (string) or if it's invalid.
    To be considered a valid triangle:
      Two of the shortest sides of the triangle added must be larger than the last side.
      Every side must be larger than 0.
    Equilateral: All three sides are the same length.
    Isosceles: Two sides are the same length.
    Scalene: All sides are different lengths.

Data Structures
  Array

Algorithms
  Initialize an array and assign it the three arguments.
  Sort the array by smallest to largest numerically.
  Check if it makes up a valid triangle.
    Check if all elements are greater than 0.
    Check if the first two elements added are larger than the second element.
  Else
    Return invalid.
  Check what type of triangle it is.
    If all elements are the same.
      Return equilateral.
    If two elements are the same.
      Return isosceles.
    If all elements are unique.
      Return scalene.
Implement the Code
function triangle(sideOne, sideTwo, sideThree) {
  let triangleSides = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);
  let isTriangleValid = true;

  triangleSides.forEach((side) => {
    if (side < 1) {
      isTriangleValid = false;
    }
  });

  if (triangleSides[0] + triangleSides[1] < triangleSides[2]) {
    isTriangleValid = false;
  }

  if (!isTriangleValid) {
    return console.log("Invalid");
  } else if (
    triangleSides[0] === triangleSides[1] &&
    triangleSides[1] === triangleSides[2]
  ) {
    return console.log("Equilateral");
  } else if (
    triangleSides[0] === triangleSides[1] ||
    triangleSides[0] === triangleSides[2] ||
    triangleSides[1] === triangleSides[2]
  ) {
    return console.log("Isosceles");
  } else {
    return console.log("Scalene");
  }
}
triangle(3, 3, 3); // "equilateral"
triangle(3, 3, 1.5); // "isosceles"
triangle(3, 4, 5); // "scalene"
triangle(0, 3, 3); // "invalid"
triangle(3, 1, 1); // "invalid"
*/

// 3)
/*
Understand the Problem
  Input: Integer, Integer, Integer
  Output: String

  Explicit:
    Given three angles of a triangle (integer) return what type of triangle it is (string) or if it's invalid.
    Valid Triangle:
      All angles add up to 180.
      All angles are greater than 0.
    Acute: 90 Angle
    Obtuse: More than 90.
    Acute: Less than 90.

Data Structures
  Array

Algorithms
  Initialize an array and assign it to the array.
  Check if triangle is valid.
    Iterate through array, add all elements. Check if it adds up to 180.
    Check if all elements are larger than 0.
  If valid, check if it has angles larger, smaller, or are 90 degrees.
    Return the corresponding triangle type.

Implement the Code
function triangle(angOne, angTwo, angThree) {
  let triangleAngles = [angOne, angTwo, angThree].sort((a, b) => a - b);
  let totalDegrees = 0;
  let isTriangleValid = true;

  triangleAngles.forEach((angle) => {
    totalDegrees += angle;
    if (angle < 1) {
      isTriangleValid = false;
    }
  });

  if (totalDegrees !== 180) {
    isTriangleValid = false;
  }

  if (!isTriangleValid) {
    return console.log("Invalid");
  } else if (triangleAngles[2] > 90) {
    return console.log("Obtuse");
  } else if (triangleAngles[2] < 90) {
    return console.log("Acute");
  } else {
    return console.log("Right");
  }
}

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
*/

// 4)
/*
Understand the Problem
  Input: Integer
  Output: Integer

  Explicit:
    Given a year (integer) return the amount of fridays that fall on the 13th of a month in that year (integer).
    The year will always be past 1752.

Data Structures
  Array

Algorithms
  Initialize an array of the months in a year.
  Initialize a variable, count, assigned to 0.
  Iterate through the array.
    On each element, find the date (weekday) for that 13th of that month.
    If found, add one to count.
  Return count.

Implement the Code
function fridayThe13ths(year) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = "13";
  let count = 0;

  months.forEach((month) => {
    let date = new Date(`${month} ${day}, ${year}`);
    if (date.getDay() === 5) {
      count += 1;
    }
  });

  return console.log(count);
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
*/

// 5)
/*
Understand the Problem
  Input: Integer
  Output: Integer

  Explicit:
    Given a number (integer input), return the next largest unique integer (output).
    Valid Unique Number:
      Must be odd.
      Must be divisible by 7.
      Every digit in the number must be unique.
    If there's no more valid larger unique numbers, return invalid.
    The largest possible value is 9876543201.

Data Structures
  Array

Algorithms
  Initialize an empty array.
  Initialize a isOdd, isMultipleOfSeven, isAllDigitsUnique variable.
  Initialize a CONST LARGEST_UNIQUE_NUMBER;
  Initialize a count variable assigned to inputted integer.
  While Loop 
    If count is equal to largest number.
      Return invalid.
    If count is divisible by seven.
      isMultipleOfSeven = true;
    If count is odd.
      isOdd = true;
    If all digits are unique.
      isAllDigitsUnique = true;

    If isOdd, isMultipleOfSeven, isAllDigitsUnique are true.
      Return count.
    
    Add one to count.

  Check if all digits are unique.
    Change count to a string, and split it into an array.
    Iterate through the array.
      Splice the array to remove the element that we're iterating over.
      If the element is still in the array - isAllDigitsUnique = false. 
Implement the Code
function featured(number) {
  const LARGEST_UNIQUE_NUMBER = 9876543201;
  let isOdd = false,
    isMultipleOfSeven = false,
    isAllDigitsUnique = false;
  let count = number;

  while (true) {
    if (count === LARGEST_UNIQUE_NUMBER) {
      return console.log("Invalid");
    }
    if (count % 2 === 1) {
      isOdd = true;
    }

    if (count % 7 === 0) {
      isMultipleOfSeven = true;
    }

    if (checkUniqueDigits(count)) {
      isAllDigitsUnique = true;
    }

    if (
      isOdd === true &&
      isMultipleOfSeven === true &&
      isAllDigitsUnique === true &&
      count > number
    ) {
      return console.log(count);
    }

    count += 1;
    isOdd = false;
    isMultipleOfSeven = false;
    isAllDigitsUnique = false;
  }
}

function checkUniqueDigits(number) {
  let digits = String(number).split("");
  let result = true;
  digits.forEach((digit) => {
    let copyOfDigits = digits.slice();
    copyOfDigits.splice(copyOfDigits.indexOf(digit), 1);
    if (copyOfDigits.includes(digit)) {
      result = false;
    }
  });

  return result;
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."
*/

// 6)
/*
Understand the Problem
  Input: Integer
  Output: Integer

  Explicit:
    Given a number, find the difference between these two numbers (X represents the inputted integer):
      Sum of the numbers of the first X numbers, squared.
      Sum of the squared numbers of the first X numbers.
    Return the difference.

Data Structures
  Array

Algorithms
  Initialize and declare an array, assigned to the numbers: 1 to Input.
  Initialize variables, sumOfNumbers and sumOfSquaredNumbers.
  Iterate through the array.
    Add each number to sumOfNumbers.
    Add each number, squared, to sumOfSquaredNumbers.
  Return sumOfNumbers, squared, - sumOfSquaredNumbers.

Implement the Code
function sumSquareDifference(number) {
  let arrayNum = [];
  let sumOfNumbers = 0,
    sumOfSquaredNumbers = 0;

  for (let i = 1; i <= number; i += 1) {
    arrayNum.push(i);
  }

  arrayNum.forEach((num) => {
    sumOfNumbers += num;
    sumOfSquaredNumbers += num ** 2;
  });

  return console.log(sumOfNumbers ** 2 - sumOfSquaredNumbers);
}
sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
*/

// 7)
