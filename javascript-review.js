// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

import { readlinkSync } from "fs";

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

let objWithProperties = {
  number: 1,
  string: 'string',
  array: ['array', 2],
  func: function() {
    return objWithProperties.number;
  }
}

// console.log(objWithProperties.func())


// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question! 

function Car(brand) {
  this.brand = brand;
  this.color = 'red';
}

let carNew = new Car('rolls-royce');

// console.log(carNew);

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// Yes you can. However, we cannot access values created inside a function, outside of its declared scope. For example, if cat was declared in const, let and var, the variable will be restricted to the function scope. If there is the variable declared (except for var) within a loop inside a function, it will be restricted to the block scope. Var is a special case where even declared in the block scope, it is still accessible to the whole function scope. 

const cat = 'neko-neko'

let catSounds = () => {
  console.log(cat)
}

// catSounds()

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// bracket notation and dot notation. 

console.log(carNew['color']);
console.log(carNew.color);

// 5.

// What is JSON? Be clear but concise.

// JavaScript Object Notation is an open source standard file format for transmitting structured data over the network connection. Primarily used to exchange data between server and web applications. The data is structured in attribute-value pairs and arrays data types. 

// 6.

// What is a callback function?

// A callback function is a function that is to be parsed into another function as an argument and be invoked/call back in the other function at a given time during execution.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

function sumOf(num1, num2, callback) {
  total = num1 + num2;
  // console.log(total)
  if (callback) {
    return isItEven(total);
  }

  return total
}

function isItEven(total) {
  if (total % 2 === 0) {
    console.log(`${total} is an even number`)
  }
  else {
    console.log(`${total} is an odd number`)
  }

}

// sumOf(2, 3, isItEven);


// 8.

// Why do we use promises?

// A promise is the eventual completion or failure of an asynchronous function and the resulting value from the function. We use promise to handle asynchronous behaviours in our code. For example, executing code that fetches data from a web api will take some time depending on the network connection and the server of the api. Promise helps to determine whether the fetching has finished or not, and if it was successful.

// to handle async behaviour
// fetch
// .then
// .catch - theres throw before this if we want to print an error.
// .finally


// async awaits
// await === .then
// implicitly return the promise object

// 9.

// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters. 

// They are the resolve and reject functions, also known as the Promise Resolver Function. These functions are the place where we put our logic in to determine whether the promise has finished or not, and if it was successful. Under the resolve(), this is where we write the code to indicate the promise is successfully processed whereas reject() is where we write the logic to indicate the promise is not successfully processed.

// 10.

// What's the different between the rest and spread syntax?

// Rest takes in a set of arguments, condenses them into a new array, whereas spread syntax flattens the arguments by unpacking the values from an array. 

// 11. 

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest. 

function myFunc(num1, num2, ...nums) {
  console.log(nums);
}

// myFunc(1, 2, 3, 4, 5, 6, 7, 8); 

// 12.

// What is a javascript package manager? Name the 2 main package managers

// npm - Node Package Manager

// yarn 

// 13.

// What is a package.json? What is it similar to when comparing it to ruby?

// A file generated by initialising npm/yarn package manager and it stores the dependencies of the packages used in an application. This file is similar to the Gemfile in ruby. 

// 14.

// a. 
// run the following command
// npm init -y

// b. 
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line 

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it

// 17.

// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code. 

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

// 20.

// a.
// Uncomment the code below.

// let newNum = 1

// const myFunc = (num, callback) => {
//   newNum *= num
//   callback(newNum)
// }

// myFunc(10, (sum) => {
//   console.log(sum)
// })

// b.
// Explain in your own words how this code works. For example you could start with something like:

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

// 21.

// You might remember the .times method in ruby

// You could do something like this

// 5.times do 
  // code
// end

// Define a function times() that takes a number and a callback as an argument, the number represents how many times a loop should run, and the callback is the code that is executed each time the loop runs

// Double check the loop is actually running 5 times if you pass in 5 with a console.log in the callback

// You should see 5 outputs

// 22. 

// Define a Person class, the constructor should take name as an argument and set the name to the this, the class should have a prototype method sayHi() that simply outputs console.log("hello")

// Implement another prototype method addAgeAndHeight() for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// Create a new person and pass in name as an argument, console.log the person object

// Call the sayHi() method on the person

// Call the addAgeAndHeight() method passing in the relevant arguments

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different methods we can chain to our promise to avoid getting a pending promise. What are these 2 methods?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

// 24. 

// a. 
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

// c.
// Using the following API endpoint console.log the yoda text generated from this english phrase "Master Obiwan has lost a planet" 
// Hint: you don't need to pay for a subscription 
// => https://funtranslations.com/api/yoda

// 🎉🎉🎉🎉🎉🎉

// Extra challenges

// Only attempt this if you've completely done everything else

// You'll need to globally install mocha

// npm install --global mocha

// You'll also need to uncomment this code

// const assert = require('assert');

// To run the tests use => mocha <filename> from the command line

// 25.

/*
Once
Creates a version of the function that can only be called one time.
Repeated calls to the modified function will have no effect, returning the value
from the original call. Useful for initialization functions, instead of having
to set a boolean flag and then check it later.

Example:
let total = 0
const count = () => ++total;
let countOnce = once(count);
countOnce()
=> 1
countOnce()
=> 1
*/

// describe('Once', () => {
//   it('returns a function', () => {
//     const exampleOnce = once(() => {})
//     assert.equal(typeof exampleOnce, 'function');
//   });
//   it('only runs once', () => {
//     let total = 0;
//     const count = () => {
//       return ++total;
//     }

//     const countOnce = once(count);
//     assert.equal(countOnce(), 1);
//     assert.equal(countOnce(), 1);
//   });
// });

// 26.

/*
Count By
Sorts a list into groups and returns a count for the number of objects in each
group. Similar to groupBy, but instead of returning a list of values, returns a
count for the number of values in that group.

Example:
_.countBy([1, 2, 3, 4, 5], (num) => {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/

// describe('Count By', () => {
//   it('can group true/false', () => {
//     let grouped = countBy([1, 2, 3, 4, 5], (num) => num % 2 === 0);
//     assert.equal(grouped.true, 2);
//     assert.equal(grouped.false, 3);
//   })
//   it('can group lists', () => {
//     const list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//     const grouped = countBy(list, (numWord) => numWord.length);
//     assert.equal(grouped['3'], 4);
//     assert.equal(grouped['4'], 3);
//     assert.equal(grouped['5'], 3);
//   })
// });

// 27.

/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
*/

// let result;
// describe('Find Last Index', () => {
//   it('finds the last index', () => {
//     const objects = [
//       {a: 0, b: 0},
//       {a: 1, b: 1},
//       {a: 2, b: 2},
//       {a: 0, b: 0}
//     ];
//     result = findLastIndex(objects, {a: 0});
//     assert.equal(result, 3);
//   })
//   it('also finds last index', () => {
//     const dogs = [
//       {name: 'tilly', age: 5},
//       {name: 'sally', age: 10},
//       {name: 'rex', age: 10},
//       {name: 'macy', age: 4}
//     ];
//     result = findLastIndex(dogs, {age: 10});
//     assert.equal(result, 2)
//   })
// });