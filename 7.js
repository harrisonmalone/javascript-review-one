// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

let addition = function (x, y, callback) {
  result = x + y
  callback(result);
};

let callBack = function(arg) {
  console.log(arg);
};

addition(10, 20, callBack);
