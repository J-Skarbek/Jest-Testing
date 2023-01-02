import { capitalize } from './capitalize.js';
// import { createTestScheduler } from 'jest';

// let word = 'prison';

test('Word gets capitalized', () => {
  expect(capitalize('prison')).toBe('Prison');
});