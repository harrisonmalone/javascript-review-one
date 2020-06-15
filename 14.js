// 14.

// a. 
// run the following command
// npm init -y

// b. 
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line 

const prompt = require('prompt-sync')();

const number = prompt("Enter a number: ");

console.log(number);