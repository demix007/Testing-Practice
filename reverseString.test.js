const reverseString = require('./reverseString.js');

test('reverse String ', () => {
  expect(reverseString).toBeDefined();
});

test('check the reverse string ', () => {
  expect(reverseString('Microverse')).toEqual('esrevorcim');
});