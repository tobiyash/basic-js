const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [[1, str[0]]];
  for (let i = 1; i < str.length; i++) {
      if (str[i] === str [i-1]) {
          res[res.length-1][0]++;
      } else {
          res.push([1, str[i]]);
      }
  }
  res = res.flat(Infinity).join("");
  while (res.includes("1")) {
    res = res.replace("1", "");
  }
  return res;
}

module.exports = {
  encodeLine
};
