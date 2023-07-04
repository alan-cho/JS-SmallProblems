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
