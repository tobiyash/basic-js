const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(cats) {
  let count = 0;
  cats = cats.flat(Infinity);
  cats.forEach((item) => {
    if (item === '^^'){
      count += 1;
      
    }
    
  })
  return count;
}

module.exports = {
  countCats
};
