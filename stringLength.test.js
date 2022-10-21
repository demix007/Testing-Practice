const stringLength = require('./stringLength.js');

test('test the length of the String', () => {
  expect(stringLength('Full Stack')).toBe(10);
});

test('test the length of the String', () => {
  expect(stringLength('Developer')).toBe(9);
});