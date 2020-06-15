// 11. 

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest. 

function myFunc(x, y, ...args) {
  console.log(...args);
};

myFunc(1,2,3,4,5,6,7);