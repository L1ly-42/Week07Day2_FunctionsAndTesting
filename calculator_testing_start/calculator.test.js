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

  test.skip('can add zero', () => {
    
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
