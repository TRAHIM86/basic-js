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
 */  //должна работать быстрее чем пуш всех вариантов, (т.е.
     //чем удалить элемент и пуш оставшегося, затем выбрать наибольший)
     //т.к. проходит по массиву всего один раз
function deleteDigit(n) {
  let nums = n.toString().split('').map(Number);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let isMax = +(nums.slice(0,i).concat(nums.slice(i+1))).join('');
    if (isMax > max) {max = isMax}
  } return max
}

module.exports = {
  deleteDigit
};
