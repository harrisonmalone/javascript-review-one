// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

const number = 10;

let multiply = function(multiplier) {
  return number * multiplier
};

console.log(multiply(2));