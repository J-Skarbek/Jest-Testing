import _ from 'lodash';
import { reverseString } from './reverseString';
import { calculator } from './calculator.js';

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