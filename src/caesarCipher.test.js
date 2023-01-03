import { encipher, decipher } from './caesarCipher.js';

test('encipher is working correctly', () => {
  let encipheredText = encipher('detroit', 15);
  expect(encipheredText).toBe('stigdxi');
});

test('decipher is working correctly', () => {
  let encipheredText = encipher('detroit', 15);
  expect(decipher(encipheredText, 15)).toBe('detroit');
});

test('encipher works through an a-z split', () => {
  let encipheredText = encipher('tuvwxyzabcdefg', 20);
  expect(encipheredText).toBe('nopqrstuvwxyza');
});

test('decipher works through an a-z split', () => {
  let encipheredText = encipher('tuvwxyzabcdefg', 20);
  expect(decipher(encipheredText, 19)).not.toBe('tuvwxyzabcdefg');
});

// test('encipher works with punctuation', () => {
//   let encipheredText = encipher("They'll be hell'ta pay", 7);
//   expect(encipheredText).toBe("aolf'ss il olss'ah whf");
// });

// test('decipher works with punctuation', () => {
//   let encipheredText = encipher("They'll be hell'ta pay", 7);
//   expect(decipher(encipheredText, 7)).toBe("aolf'ss il olss'ah whf");
// });





