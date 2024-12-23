const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!"); 

  let newArr = [...arr]; //не менять исходник
  
  //чистим / дублируем
  for (let i = 0; i < arr.length; i ++) {
    if (newArr[i] === '--double-next') {
      if (newArr[i+1]) {newArr[i] = newArr[i+1]} else {newArr.splice(i)}
    } 
    
    else if (newArr[i] === '--double-prev') {
      if (newArr[i-1]) {newArr[i] = newArr[i-1]} else {newArr.splice(i,1)}
    } 
    
    else if (newArr[i] === '--discard-prev') {
      if (newArr[i-1]) {newArr.splice(i-1, 2)} else {newArr.splice(i,1)}
    } 
    
    else if (newArr[i] === '--discard-next') {
      if (newArr[i+1]) {newArr.splice(i, 2)} else {newArr.splice(i)}
    } 
  } 

  //удаляем название методов из массива
  for (let v = 0; v < newArr.length; v++) {
    if (newArr[v] === '--discard-next' || newArr[v] === '--discard-prev' || newArr[v] === '--double-prev' || newArr[v] === '--double-next') {
      newArr.splice(v,1)
    }
  }

  return newArr
}

module.exports = {
  transform
};
