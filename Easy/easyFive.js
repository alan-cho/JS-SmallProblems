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
