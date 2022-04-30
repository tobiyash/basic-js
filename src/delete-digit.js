const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = (n).toString();
  let arr = [str.substring(1)];

  for (let i = 0; i < str.length - 1; i++) {
    let newstr = str.substring(0, i + 1) + str.substring(i + 2);
    arr.push(newstr);
  }

  return Math.max(...arr);

}

module.exports = {
  deleteDigit
};
