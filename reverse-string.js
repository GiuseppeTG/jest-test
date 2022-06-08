function reverseString(string) {
  const reverse = string.split('').reverse().join('');
  return reverse;
}

module.exports = reverseString;