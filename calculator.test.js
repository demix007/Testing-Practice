const calculator = require('./calculator.js');

describe('check test', () => {
  test('check the sum of two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('check the sum of two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('check the sum of two numbers', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });

  test('check the subtraction of two numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test('check the subtraction of two numbers', () => {
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  test('check the subtraction of two numbers', () => {
    expect(calculator.subtract(4, 4)).toBe(0);
  });

  test('check the multiplication of two numbers', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
  test('check the multiplication of two numbers', () => {
    expect(calculator.multiply(2, 25)).toBe(50);
  });
  test('check the multiplication of two numbers', () => {
    expect(calculator.multiply(8, 2)).toBe(16);
  });

  test('check the division of two numbers', () => {
    expect(calculator.divide(18, 3)).toBe(6);
  });
  test('check the division of two numbers', () => {
    expect(calculator.divide(25, 5)).toBe(5);
  });
  test('check the division of two numbers', () => {
    expect(calculator.divide(144, 12)).toBe(12);
  });
});
