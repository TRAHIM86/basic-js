const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  ch: [],
  
  getLength() {
    return this.ch.length;
  },
  
  addLink(value) {
    this.ch.push(`( ${value} )`);     //добавить в цепь `строку` через обратные кавычки
    return this;                      
  },
  
  removeLink(position) {
    if (position < 1  || position > this.ch.length || typeof position !== 'number') {   //если номер < 1 или больше длинны или не "намбер"
      this.ch = [];                                                                     //очистить цепь
      throw new Error ("You can't remove incorrect link!");
    } else {
      this.ch.splice(position-1, 1)                                                     //или удалить через сплайс
    }
    return this;                                                                        /
  },
  
  reverseChain() {
    this.ch.reverse();  
    return this;
  },
  finishChain() {
    let finishCh = this.ch.join('~~');  //джинить через '~~'
    this.ch = [];                       //очистить цепь
    return finishCh;                    //вернуть созданную цепь
  }
};

module.exports = {
  chainMaker
};
