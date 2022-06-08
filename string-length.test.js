const stringLength = require('./string-length');

test('String length', () => {
  expect(stringLength('Squid')).toBe(5);
});

test('String must not be empty', () => {
  expect(stringLength('')).toBe('Error');
});

test('String must have less than 10 characters', () => {
  expect(stringLength('A string with more than 10 characters')).toBe('Error');
});