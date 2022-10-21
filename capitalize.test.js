const capitalize = require('./capitalize.js');

test('check for capitalization', () => {
  expect(capitalize('abidemi')).toBe('Abidemi');
});

test('check for capitalization', () => {
  expect(capitalize('ayodeji')).toBe('Ayodeji');
});