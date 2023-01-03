import { analyzeArray } from './analyzeArray.js'

test('Return value of Max is good', () => {
  expect(analyzeArray([1, 5, 10]).max).toBe(10);
});

test('Return value of Min is good', () => {
  expect(analyzeArray([1, 5, 10]).min).toBe(1);
});

test('Return value of Average is good', () => {
  expect(analyzeArray([1, 5, 10]).average).toBe(5);
});

test('Return value of Length is good', () => {
  expect(analyzeArray([1, 5, 10]).length).toBe(3);
});