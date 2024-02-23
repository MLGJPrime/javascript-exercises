const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, current) => product * current)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
