const stringLength = require('./string-length');

it('String length', () => {
  expect(stringLength('Squid')).toBe(5);
})

it('String must not be empty', () => {
  expect(stringLength('')).toBe('Error');
});

it('String must have less than 10 characters', () => {
  expect(stringLength('A string with more than 10 characters')).toBe('Error');
})