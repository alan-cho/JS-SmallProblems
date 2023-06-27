// 1)
/*
function repeater(string) {
  let result = "";
  for (let index in string) {
    result += string[index] + string[index];
  }
  console.log(result);
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
*/

// 2 - 3) SKIPPED

// 4)
/*
function sequence(integer) {
  let result = [];
  for (let i = 1; i <= integer; i += 1) {
    result.push(i);
  }
  console.log(result);
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
*/

// 5)
/*
function swapName(name) {
  let result = name.split(" ");
  console.log(result[1], result[0]);
}
swapName("Joe Roberts"); // "Roberts, Joe"
*/

// 6)
/*
function sequence(count, multiple) {
  let result = [];
  if (count === 0) {
    return console.log([]);
  }

  for (let i = 1; i <= count; i += 1) {
    result.push(multiple * i);
  }
  console.log(result);
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
*/

// 7)
function reverseSentence(string) {
  return console.log(string.split(" ").reverse().join(" "));
}

reverseSentence(""); // ""
reverseSentence("Hello World"); // "World Hello"
reverseSentence("Reverse these words"); // "words these Reverse"

// 8)
