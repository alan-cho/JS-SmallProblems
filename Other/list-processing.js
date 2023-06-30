// 1)
/*
function sum(num) {
  let string = num.toString();
  let array = string.split("");
  let runningTotal = 0;
  array.forEach(function (number) {
    runningTotal += Number(number);
  });
  console.log(runningTotal);
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45
*/

// 2)
/*
function alphabeticNumberSort(array) {
  return console.log(array.sort((a, b) => a - b));
}

alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/

// 3)
/*
function multiplyAllPairs(arrayOne, arrayTwo) {
  let result = [];
  arrayTwo.forEach(function (number) {
    result.push(number * arrayOne[0]);
    result.push(number * arrayOne[1]);
  });
  result.sort((a, b) => a - b);
  console.log(result);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
*/

// 4)
/*
function leadingSubstrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    result.push(string.slice(0, i + 1));
  }

  console.log(result);
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/

// 5)
/*
function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    let counterIndex = 0;
    for (let j = i; j < string.length; j += 1) {
      result.push(string.slice(i, j + 1));
    }
  }

  console.log(result);
}
substrings("abcde");

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
*/

// 6) SKIPPED

// 7)
/*
function sumOfSums(array) {
  let runningTotal = 0;
  for (let i = 1; i <= array.length; i += 1) {
    array.slice(0, i).forEach((number) => (runningTotal += number));
  }

  console.log(runningTotal);
}

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
*/

// 8)
/*
function buyFruit(fruits) {
  let result = [];
  fruits.forEach(function (array) {
    let [fruit, number] = array;
    for (let i = 0; i < number; i += 1) {
      result.push(fruit);
    }
  });

  console.log(result);
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/

// 9)
/*
function transactionsFor(id, purchase) {
  let result = purchase
    .map(function (object) {
      if (object["id"] === id) {
        return object;
      }
    })
    .filter((element) => element !== undefined);

  console.log(result);
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/

// 10)
