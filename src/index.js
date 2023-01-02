import _ from 'lodash';
import { reverseString } from './reverseString';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(reverseString('holiday'));