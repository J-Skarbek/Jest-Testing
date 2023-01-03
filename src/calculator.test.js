import { calculator } from './calculator.js';

test('Additon is working correctly', () => {
  expect(calculator.add(45, 7)).toBe(52);
});

test('subtraction is working correctly', () => {
  expect(calculator.subtract(5, 7)).toBe(-2);
});

test('multiplication is working correctly', () => {
  expect(calculator.multiply(11, 9)).toBe(99);
});

test('Additon is working correctly', () => {
  expect(calculator.divide(66, 6)).toBe(11);
});