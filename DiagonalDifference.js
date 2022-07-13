// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],          //squareMatrix1[row][column] - so squareMatrix1[1][2] is the second row, 2nd index, which is 6
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    //[0][0], [1][1], [2][2]
    right to left diagonal: 3 + 5 + 9 = 17
    // [0][2], [1][1], [2][0]
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
function diagonalDifference(sqrMatrix) {
    // outer1 is the row and inner1 is the column
    // incrementing outer1 and inner1 since the diagonal indexes will always be [0][0], [1][1], [2][2], etc. 
    let outer1 = 0;
    let inner1 = 0;
    let sum1 = 0;
    while(outer1 < sqrMatrix.length && inner1 < sqrMatrix.length){
        sum1 += sqrMatrix[outer1][inner1]
        outer1++
        inner1++
    }
    // outer2 is the row and inner2 is the column
    // outer2 starts at the beginning of parent array, inner2 starts at last index of last array
    let outer2 = 0;
    let inner2 = sqrMatrix.length - 1;
    let sum2 = 0;
    while(outer2 < sqrMatrix.length && inner2 >= 0){
        sum2 += sqrMatrix[outer2][inner2]
        outer2++
        inner2--
    }
    const difference = Math.abs(sum1-sum2)
    return difference
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));