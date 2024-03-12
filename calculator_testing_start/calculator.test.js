const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 11250;
    actual = sum(1250,10000)
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -25;
    actual = sum(-22,-3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 42;
    actual = sum(42,0);
    expect(actual).toBe(expected); 
  });

});

describe('subtract', () => {
  test('can subtract 2 numbers to create a positive result', () =>{
    expected = 5;
    actual = subtract(10,5);
    expect(actual).toBe(expected);
  });

  test('can subtract 2 numbers to create a negative result', () => {
    expected = -5;
    actual = subtract(5,10);
    expect(actual).toBe(expected);
  });

  test('can subtract a negative number to create an addition', () => {
    expected = 0;
    actual = subtract(-5,-5);
    expect(actual).toBe(expected);
  });

  test('can subtract a positive number from a negative number', () => {
    expected = -20;
    actual = subtract(-10, 10);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', ()=>{
     expected = 42;
     actual = subtract(42,0);
     expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 300000;
    actual = multiply(500,600)
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 10;
    actual = multiply(-2,-5);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(42,0);
    expect(actual).toBe(expected); 
  });

  test('can multiply two zeroes', () => {
    expected = 0;
    actual = multiply(0,0);
    expect(actual).toBe(expected); 
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(10, 2);
    expect(actual).toBe(expected);
  });

  test('can divide two big positive numbers', () => {
    expected = 5;
    actual = divide(25000, 5000);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 10;
    actual = divide(-30, -3);
    expect(actual).toBe(expected);
  });

  test('can divide a positive number by a negative number', () => {
    expected = -10;
    actual = divide(30, -3);
    expect(actual).toBe(expected);
  });

  test('can divide two numbers to create a float', () => {
    expected = 2.5;
    actual = divide(25, 10);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(25, 0);
    expect(actual).toBe(expected);
  });

  test('can divide two zeroes', () => {
    expected = NaN;
    actual = divide(0, 0);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can do modulus of two positive numbers', () => {
    expected = 3;
    actual = modulus(13, 10);
    expect(actual).toBe(expected);
  });

  test('can do modulus of two numbers with no remainder ', () => {
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);
  });

  test('can do modulus of one negative number and by a positive number ', () => {
    expected = -3;
    actual = modulus(-13, 10);
    expect(actual).toBe(expected);
  });

  test('can do modulus of one positive number and by a negative number ', () => {
    expected = 3;
    actual = modulus(13, -10);
    expect(actual).toBe(expected);
  });

  test('can do modulus of 2 negative numbers ', () => {
    expected = -3;
    actual = modulus(-13, -10);
    expect(actual).toBe(expected);
  });

  test('can do modulus of zero ', () => {
    expected = NaN;
    actual = modulus(-13, 0);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

// positive num
test('can tell if a positive number is even', () => {
  expected = true;
  actual = even(20);
  expect(actual).toBe(expected);
});

test('can tell if a negative number is even', () => {
  expected = true;
  actual = even(-100);
  expect(actual).toBe(expected);
});

test('can tell if zero is even', () => {
  expected = true;
  actual = even(0);
  expect(actual).toBe(expected);
});

});

describe('odd', () => {

});
