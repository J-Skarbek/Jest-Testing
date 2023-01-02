export function reverseString(value) {
  if (typeof value === 'string') {
    let sepLetters = value.split("").reverse().join('').toString();
    return sepLetters;
  }
};