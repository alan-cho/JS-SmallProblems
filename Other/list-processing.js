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
