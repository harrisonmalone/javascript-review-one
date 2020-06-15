// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.
const newObject = {
  number: 2,
  string: "two",
  arr: [],
  func: () => console.log(newObject.number),
};

newObject.func();

// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’.

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question!

function Car(brand) {
  this.brand = brand;
  this.colour = "red";
}

console.log(new Car("ferrari"));

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

const hello = "Hello";

const scope = () => {
  console.log(hello);
};

scope();

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

newObject.number;
newObject["number"];

// 5.

// What is JSON? Be clear but concise.
// JSON stands for JavaScript Object Notations and is a format in which to store data. It makes use of standard javascript object syntax in order to separate and categories data.

// 6.

// What is a callback function?
// A function that is passed as arguments into another function.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.
const question7 = (num1, num2, cb) => {
  const addition = num1 + num2;
  cb(addition);
};

question7(1, 2, (result) => {
  console.log(result);
});

// 8.

// Why do we use promises?
// So that we can have asynchronous code running without it breaking our program.

// 9.

// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters.
// resolve and reject

// 10.

// What's the different between the rest and spread syntax?
// spread spreads the a variable into several variables while rest groups remaining variables into one.

// 11.

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest.
const myFunc = (...args) => {
  console.log(args);
};
myFunc(1, 2, 3);
// 12.

// What is a javascript package manager? Name the 2 main package managers
// javascript package manager handles external libraries which can be added to our projects.
// the two big package mangers are npm and yarn.

// 13.

// What is a package.json? What is it similar to when comparing it to ruby?
// the package.json stores the configurations and names of the packages that are used by the package manager.
// It is similar to the gemfile in ruby.

// 14.

// a.
// run the following command
// npm init -y

// b.
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line

// var inquirer = require("inquirer");

// let name = "";
// inquirer
//   .prompt({
//     type: "input",
//     name: "name",
//     message: "What is your name?",
//   })
//   .then((answers) => {
//     name = answers.name;
//     console.log(name);
//   });

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers.

const addNum = (num1, num2) => {
  return num1 + num2;
}
// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string.
const numPlusfunct = (num1,num2,cb) => {
  const object = {
    first: cb(num1,num2),
    second: 'a String'
  }
  return object;
}
// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument.
console.log(numPlusfunct(1,2,addNum));

// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it
var fs = require('fs');
console.log(fs.readFileSync('./hello.txt','utf8'));

// 17.

// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code.
// Synchronous code is blocking code meaning each line of code is executed one after each other. Asynchronous is non blocking meaning that several pieces of code could be executed simultaneously.
// Asynchronous code can be done in JS through the use of async and await syntax.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// fetch is an api that allows us to make XHR which simplifies AJAX requests.
// You might use fetch in order to request data from another API.

// fetch will return a Promise object.
const fetch = require('node-fetch');
// fetch("https://pokeapi.co/api/v2/pokemon/zapdos")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// 19.

// A JS object looks like this: 
const southernField = { location: "upper", crop: "sorghum", watered: false } 
// Use destructuring to store the value of watered in a variable.
const {location,crop,watered} = southernField;
console.log(watered);

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
