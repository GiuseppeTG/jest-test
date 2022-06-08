const calculator = require('./calculator');

describe('add two numbers', () => {
  test('test 1', () => {
    expect(new calculator.Calculator(2, 3).add()).toBe(5);
  });

  test('test 2', () => {
    expect(new calculator.Calculator(4, 4).add()).toBe(8);
  });

  test('test 3', () => {
    expect(new calculator.Calculator(-1, 0).add()).toBe(-1);
  });
});

describe('substract two numbers', () => {
  test('test 1', () => {
    expect(new calculator.Calculator(2, 3).substract()).toBe(-1);
  });

  test('test 2', () => {
    expect(new calculator.Calculator(4, 4).substract()).toBe(0);
  });

  test('test 3', () => {
    expect(new calculator.Calculator(-1, 0).substract()).toBe(-1);
  });
});

describe('multiply two numbers', () => {
  test('test 1', () => {
    expect(new calculator.Calculator(2, 3).multiply()).toBe(6);
  });

  test('test 2', () => {
    expect(new calculator.Calculator(4, 4).multiply()).toBe(16);
  });

  test('test 3', () => {
    expect(new calculator.Calculator(1, 0).multiply()).toBe(0);
  });
});

describe('divide two numbers', () => {
  test('test 1', () => {
    expect(new calculator.Calculator(8, 2).divide()).toBe(4);
  });

  test('test 2', () => {
    expect(new calculator.Calculator(4, 4).divide()).toBe(1);
  });

  test('test 3', () => {
    expect(new calculator.Calculator(-10, 2).divide()).toBe(-5);
  });
});
