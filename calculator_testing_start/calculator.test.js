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

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
