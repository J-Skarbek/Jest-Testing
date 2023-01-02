export function reverseString(value) {
  if (typeof value === 'string') {
    let sepLetters = value.split("").reverse();
    let newString = sepLetters.join('').toString();
    return newString;
  }
};