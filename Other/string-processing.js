// 1)
/*
function isUppercase(string) {
  return console.log(string.toUpperCase() === string);
}

isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true
*/

// 2)
/*
function removeVowels(array) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];

  array.forEach(function (string) {
    let characters = string.split("");
    console.log(characters);
    characters = characters.filter(
      (char) => !vowels.includes(char.toLowerCase())
    );
    result.push(characters.join(""));
  });

  console.log(result);
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
*/

// 3)
/*
function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].match(/[^a-z]/i)) {
      result["neither"] += 1;
    } else if (string[i] === string[i].toUpperCase()) {
      result["uppercase"] += 1;
    } else {
      result["lowercase"] += 1;
    }
  }

  console.log(result);
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
*/

// 4)
