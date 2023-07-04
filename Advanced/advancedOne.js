// 1) SKIPPED

// 2)
/*
Understand the Problem
  Input: Nested Array
  Output: Nested Array

  Explicit:
    Given a matrix, return a transposed matrix.
    Matrix:
      Nested Array or 2-D Array.
    Transpose:
      Swap the rows of the matrix with the columns.

Data Structures
  Array and Nested Array

Algorithms
  Initialize variables that hold rows and columns of the new matrix.
  Iterate through the nested arrays.
    Every first element of the nested array is the first row of the new matrix.
    Every second element is the second row of the new matrix.
    Every third element is the third row of the new matrix.
  Push every row to the new matrix.
  Return the matrix.

Implement the Code
function transpose(matrix) {
  let firstRow = [];
  let secondRow = [];
  let thirdRow = [];
  let transposedMatrix = [];

  matrix.forEach((array) => {
    firstRow.push(array[0]);
    secondRow.push(array[1]);
    thirdRow.push(array[2]);
  });

  transposedMatrix.push(firstRow, secondRow, thirdRow);
  return transposedMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
*/

// 3)
/*
function transpose(matrix) {
  let transposedMatrix = [];
  for (
    let matrixElement = 0;
    matrixElement < matrix[0].length;
    matrixElement += 1
  ) {
    let row = [];
    for (let matrixRows = 0; matrixRows < matrix.length; matrixRows += 1) {
      row.push(matrix[matrixRows][matrixElement]);
    }
    transposedMatrix.push(row);
  }
  return console.log(transposedMatrix);
}

transpose([[1, 2, 3, 4]]); // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]); // [[1]]

transpose([
  [1, 2, 3, 4, 5],
  [4, 3, 2, 1, 0],
  [3, 7, 8, 6, 2],
]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
*/

// 4)
/*
function rotate90(matrix) {
  let transposedMatrix = [];
  for (
    let matrixElement = 0;
    matrixElement < matrix[0].length;
    matrixElement += 1
  ) {
    let row = [];
    for (let matrixRows = 0; matrixRows < matrix.length; matrixRows += 1) {
      row.push(matrix[matrixRows][matrixElement]);
    }
    transposedMatrix.push(row.reverse());
  }
  return transposedMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
*/

// 5)
/*
function merge(arrayOne, arrayTwo) {
  let mergedArray = [];
  let arrayOneCopy = arrayOne.slice();
  let arrayTwoCopy = arrayTwo.slice();

  if (arrayOne.length === 0) {
    mergedArray = mergedArray.concat(arrayTwo);
    return console.log(mergedArray);
  } else if (arrayTwo.length === 0) {
    mergedArray = mergedArray.concat(arrayOne);
    return console.log(mergedArray);
  }

  while (true) {
    if (arrayOneCopy[0] < arrayTwoCopy[0]) {
      mergedArray.push(arrayOneCopy[0]);
      arrayOneCopy.splice(0, 1);
    } else if (arrayOneCopy[0] > arrayTwoCopy[0]) {
      mergedArray.push(arrayTwoCopy[0]);
      arrayTwoCopy.splice(0, 1);
    }

    if (arrayOneCopy.length === 0 && arrayTwoCopy.length !== 0) {
      mergedArray = mergedArray.concat(arrayTwoCopy);
      break;
    } else if (arrayOneCopy.length !== 0 && arrayTwoCopy.length === 0) {
      mergedArray = mergedArray.concat(arrayOneCopy);
      break;
    } else if (arrayOneCopy.length === 0 && arrayTwoCopy.length === 0) {
      break;
    }
  }
  return console.log(mergedArray);
}

merge([1, 5, 9], [2, 6, 8]); // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]); // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]); // [1, 4, 5]
merge([1, 4, 5], []); // [1, 4, 5]
*/

// 6 - 8) SKIPPED
