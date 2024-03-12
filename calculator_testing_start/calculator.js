const sum = function(a, b){
    return a + b;
};

const subtract = function(a,b){
    return a - b;
};

const multiply = (a,b) => a * b;

const divide = function(a,b){
    return a/b;
};

const modulus = (a,b) => a%b;

const even = function(a){
    return a%2 == 0;
};

const odd = (a) => a%2 != 0;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
