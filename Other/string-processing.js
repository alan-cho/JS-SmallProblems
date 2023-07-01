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
/*
function wordCap(string) {
  let result = string
    .split(" ")
    .map(function (word) {
      word = word.slice(0, 1).toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ");

  console.log(result);
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
*/

// 5)
/*
function swapCase(string) {
  let result = "";

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i].toLowerCase()) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }

  console.log(result);
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
*/

// 6)
/*
function staggeredCase(string) {
  return console.log(
    string
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("")
  );
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
*/

// 7) SKIPPED

// 8)
/*
function wordLengths(string) {
  let result = [];
  if (string === undefined || !string) {
    return console.log(result);
  }
  string.split(" ").forEach((word) => result.push(`${word} ${word.length}`));
  return console.log(result);
}

wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
*/

// 9)
