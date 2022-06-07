const reverseString = require('./reverse-string');

it('Reversed string properly', () => {
  expect(reverseString('Hello')).toBe('olleH');
})