// 1)
function isOdd(number) {
  if (Math.abs(number) % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isOdd("3"));

// 2)
function logOddNumbers() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

// logOddNumbers();

// 3)
function logEvenNumbers() {
  for (let i = 2; i <= 98; i += 2) {
    console.log(i);
  }
}

logEvenNumbers();
