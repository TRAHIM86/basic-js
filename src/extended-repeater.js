const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newstr;
  
  //если options.addition === false чтобы не кидало ошибку
  if (options.addition === undefined) {
    newstr = ''
  } else {
    newstr = String(options.addition);  //приведем false к строке 'false'
  }
    
  //склеить второй разделитель
  let res = '';
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    newstr = newstr + (options.additionSeparator || '|') + String(options.addition) || '';
  }

  res = str + newstr  //строка для старта = стринг + 2-ой разделитель

  //собрать всю строку с повторениями
  for (let i = 1; i < options.repeatTimes; i++) {
    res = res + (options.separator || '+') + str + newstr
  }
  
 return res;
}

module.exports = {
  repeater
};
