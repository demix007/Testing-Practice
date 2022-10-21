function stringLength(string) {
  if (stringLength.length === 0 || stringLength.length > 10) {
    return false;
  }

  return string.split('').reduce((length) => length + 1, 0);
}

module.exports = stringLength;