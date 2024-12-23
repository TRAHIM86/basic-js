const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    
  //если не массив вернуть 0  
  if (!Array.isArray(arr)) {return 0;}

  //если массив, d=0
  let d = 0;
  for (let item of arr)       //для каждого item в массиве
      //д = макс (или тек д или вызов метода для массива)
      d = Math.max(d, this.calculateDepth(item));
  return d += 1;  //для каждого вызова метода d + 1, т.е. при тройной вложенности d = 3
  }
}

module.exports = {
  DepthCalculator
};
