const reverseString = require('./reverse-string');

test('Reversed string properly', () => {
  expect(reverseString('Hello')).toBe('olleH');
});