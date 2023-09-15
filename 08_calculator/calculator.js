const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(numbers) {
  let sum = 0;
	numbers.forEach( num => {
    sum += num;
  })
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach( num => {
    product *= num;
  })
  return product;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let factorial = 1;
	for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
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
