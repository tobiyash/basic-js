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
  const mines = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      mines[i][j] = 0;
    } 
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        let arr = [[i, j+1], [i, j-1], [i-1, j], [i+1, j], [i-1, j-1], [i-1, j+1], [i+1, j-1], [i+1, j+1]];
        for (el of arr) {
          if(el[0] >= 0 && el[1] >= 0 && el[0] <= arr.length && el[1] <= arr[0].length) {
            mines[el[0]][el[1]]++;
          }
        }
      }
    } 
  }
  return mines;
}

module.exports = {
  minesweeper
};
