import _ from 'lodash';
import { reverseString } from './reverseString';
import { calculator } from './calculator.js';
import { encipher, decipher } from './caesarCipher.js';
import { analyzeArray } from './analyzeArray.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(reverseString('holiday'));

console.log(`Addition: ${calculator.add(5, 7)}`);
console.log(`multiplication: ${calculator.multiply(5, 20)}`);
console.log(`subtraction: ${calculator.subtract(50, 20)}`);
console.log(`dividion: ${calculator.divide(55, 11)}`);

let encipheredText = encipher('detroit', 15);

console.log(decipher(encipheredText, 0));

console.log(analyzeArray([4, 5, 6, 7, 55, 300, 599, 1000000, 65, 77, 450]));