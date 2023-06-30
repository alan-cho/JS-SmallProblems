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
