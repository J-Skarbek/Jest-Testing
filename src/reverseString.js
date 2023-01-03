export function reverseString(value) {
  if (typeof value === 'string') {
    let newString = value.split("").reverse().join('').toString();
    return newString;
  }
};