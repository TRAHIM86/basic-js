const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let reverses = [];        //развернуть элементы
  domains.forEach((domain) => {
    let revers = domain.split('.').reverse();
    reverses.push(revers)
    });

  let obj = {};     //создать объект который вернем
  
  reverses.forEach((revers) => {                //для каждого подмассива в массиве
    let prop = '';                              //создать св-во объекта
    for (let i = 0; i < revers.length; i++) {
      prop = `${prop}.${revers[i]}`;            //сво-во = св-во + тек i элемент (.ru + .yandex = .ru.yandex)
      if (!obj.hasOwnProperty(prop)) {          //если св-ва нету, то создать равное 1
        obj[prop] = 1;
      } else {                                  //если св-во есть, то +1
        obj[prop] += 1
      } 
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
