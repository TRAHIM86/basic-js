const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode) { this.mode = mode } 

  encrypt(text, code) {
    if (!text || !code) {throw new Error("Incorrect arguments!")};
    let textArr = text.toUpperCase().split('');
    let codeArr = code.toUpperCase().split('');
    //console.log(textArr, codeArr)
    let j = 0;
    for (let i = 0; i < textArr.length; i++) {
      
      
      if (textArr[i].charCodeAt() < 65 || textArr[i].charCodeAt() > 90) {
            textArr[i] = textArr[i];
      } else {
        if ((textArr[i].charCodeAt() + codeArr[j].charCodeAt()) > 155) {
          textArr[i] = textArr[i].charCodeAt() + codeArr[j].charCodeAt() - 91;
          textArr[i] = String.fromCharCode(textArr[i]);
        } else {
          textArr[i] = textArr[i].charCodeAt() + codeArr[j].charCodeAt() - 65;
          textArr[i] = String.fromCharCode(textArr[i]);
        } j++
      }
      if (j === codeArr.length) {j = 0}
    }
    return this.mode === false ? textArr.reverse().join('') : textArr.join('');
  }

  decrypt(text, code) {
    if (!text || !code) {throw new Error("Incorrect arguments!")};
    let textArr = text.toUpperCase().split('');
    let codeArr = code.toUpperCase().split('');
    let j = 0;
    for (let i = 0; i < textArr.length; i++) {
      if (textArr[i].charCodeAt() < 65 || textArr[i].charCodeAt() > 90) {
        textArr[i] = textArr[i];
      } else {
        if ((textArr[i].charCodeAt() - codeArr[j].charCodeAt()) >= 0) {
          textArr[i] = textArr[i].charCodeAt() - codeArr[j].charCodeAt() + 65;
          textArr[i] = String.fromCharCode(textArr[i]);
        } else {
          textArr[i] = textArr[i].charCodeAt() - codeArr[j].charCodeAt() + 91;
          textArr[i] = String.fromCharCode(textArr[i]);
        } 
        j++;
      }
      if (j === codeArr.length) {j = 0}
    }
    return this.mode === false ? textArr.reverse().join('') : textArr.join(''); 
  }
}

module.exports = {
  VigenereCipheringMachine
};
