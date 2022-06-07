function stringLength(string) {
  let result = string.length;
  if (result < 1 || result > 10) {
    return 'Error'
  }
  return result;
}

module.exports = stringLength;