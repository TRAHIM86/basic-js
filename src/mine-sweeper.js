const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  let feeld = [];

  for (let r = 0; r < row; r++) {
    feeld[r] = [];
    for (let c = 0; c < col; c++) {
      feeld[r].push(0)
    }
  }

  for (let r = 0; r < feeld.length; r++) {
    for (let c = 0; c < feeld[0].length; c++) {
      if (matrix[r][c] === true) {
        if (r === 0) {
          if (c === 0) {
            feeld[r][c+1] +=1;
            feeld[r+1][c+1] +=1;
            feeld[r+1][c] +=1;
          } else if (c === feeld[0].length-1) {
            feeld[r][c-1] +=1;
            feeld[r+1][c-1] +=1;
            feeld[r+1][c-2] +=1;
          }
        } else if (r === feeld.length) {
          if (c === 0) {
            feeld[r][c+1] +=1;
            feeld[r-1][c+1] +=1;
            feeld[r-1][c+2] +=1;
          } else if (c === feeld[0].length-1) {
            feeld[r][c-1] +=1;
            feeld[r-1][c-1] +=1;
            feeld[r-1][c] +=1;
          }
        } else {
            feeld[r-1][c-1] +=1;
            feeld[r-1][c] +=1;
            feeld[r-1][c+1] +=1;
            feeld[r][c-1] +=1;
            feeld[r][c+1] +=1;
            feeld[r+1][c-1] +=1;
            feeld[r+1][c] +=1;
            feeld[r+1][c+1] +=1;
        }
      }
    }
  }
  return feeld
}

module.exports = {
  minesweeper
};
