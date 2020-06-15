// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

dog = {
  age: 4,
  name: "Aria",
  favToys: ["tennis ball", "squeaky toy", "socks"],
  noise: function() {
    return "Woof"
  }
}

console.log(dog.noise());

// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’. 

class Car {
  constructor(brand) {
    this.brand = brand;
    this.color = "red"
  }
}

let dreamCar = new Car("G Wagon");
console.log(dreamCar);

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question! 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// Yes you can access a variable if it is defined globally. If it was defined WITHIN the function then you could not access it outside of that function 

const exampleVar = "Emma"

function print() {
  return exampleVar
}

console.log(print());

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// . and also [] with ""

console.log(dog.name);
console.log(dog["favToys"]);

// 5.

// What is JSON? Be clear but concise.

// JavaScript Object Notation which is a data format used for storing and sending data between  server and browser page 
// It is text only and written with key/value pairs. JSON is data is formatted the same as JavaScript object properties 

// 6.

// What is a callback function?

// A callback is a function passed into another function is an argument 

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

function adder(x, y, callback) {
  let result = x + y;
  return result;
  callback()
}

function callback() {
  return "This is the callback"
}

console.log(adder(3,6));


// ***************************************


// I DON'T KNOW HOW TO DO THIS ONE 
// NEED SOME HELP WITH CALLBACKS I JUST DON'T UNDERSTAND 



// ***************************************





// 8.

// Why do we use promises?

// To handle asynchronous code which is code that is run not in order (hoisting or interval/timed) to avoid callback hell 



// 9.

// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters. 

// Resolve, Reject 

// 10.

// What's the different between the rest and spread syntax?


// Rest is used to assign variable values from arrays and objects. 
let dogs = ["Aria", "Buddy", "Mia"];
let [firstDog, secondDog] = dogs;

console.log(firstDog);

// Rest collects the remaining elements in an array whereas spread flattens out (or unpacks) the elements into individual elements. It is also used to copy an array 

// The spread syntax is the opposite of rest 



// 11. 

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest. 

function myRestFunc(...nums) {
  return nums
}

console.log(myRestFunc(3,6,9));

// 12.

// What is a javascript package manager? Name the 2 main package managers

/* 1. npm 
2. yarn

install code written by others into our programs (Like gems in Ruby). Handles install and management of external libraries.. */

// 13.

// What is a package.json? What is it similar to when comparing it to ruby?

// It is similar to Gemfile in Ruby and lists the program's dependencies

// 14.

// a. 
// run the following command
// npm init -y

// b. 
// Install the package that allows us to get user input in node

// I ran: npm i readline-sync 
// also did readline I don't know that that is?

// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line 

/*
const readlineSync = require('readline-sync');

const yourDreamCar = readlineSync.question("What is your dream car :");

console.log(yourDreamCar) */

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

function addNum(a,b) {
  let total = a + b;
  return total
}

console.log(addNum(25,30))

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. 

// STUCK: 
// numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

function numPlusFunct(number1, number2, someFunc) {
  const result = someFunc(number1, number2)
  return {
    result: result,
    maths: "is great"
  }
}

console.log(numPlusFunct(3,31, addNum));

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it

const fs = require('fs');

fs.readFile("./hw.txt", "utf-8", function(err, data) {
  if (err) {
    return console.log(err)
  }
  console.log(data)
})


// 17.

// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code. 

/* Synch code is code that is run in order - one thing is compelted and then program moves onto the next. Whereas asynch is code is when blocks are run not in order but the program is not held up. For example when timers or intervals are used.. while the timer is counting down, the next function of the code will run and then the program goes back to the functions once they are ready and everything else is compelte (callstack is clear)  */

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

/* 
Fetch is a web api which returns a promise. You can use it to make XHR requests. 

fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

*/ 

// 19.

// A JS object looks like this: 
// Use destructuring to store the value of watered in a variable.

const southernField = { 
  location: "upper",
  crop: "sorghum", 
  watered: false }

let isIt = southernField.watered

console.log(isIt);


// 20.

// a.
// Uncomment the code below.

let newNum = 2

const myFunc = (num, callback) => {
  newNum *= num
  callback(newNum)
}

myFunc(25, (sum) => {
  console.log(sum)
})

// b.
// Explain in your own words how this code works. For example you could start with something like:

/* "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

Newnum is given a value, this variable/number used in the below calculations. 
Then a function is declared myFunc which takes parameters of a number and also a callback. 
This function is then invoked and within the body, multiplies newNum by the number passed in as an argument and reassigns it with the resulting value. 

myFunc then passes in the result of that into a callback as an argument and invokes the callback. In the callback function body, where sum represents the newNum after the math calculation performed in above myFunc. And num argument represents 25 

*/

// 21.

// You might remember the .times method in ruby

// You could do something like this

// 5.times do 
  // code
// end

// Define a function times() that takes a number and a callback as an argument, the number represents how many times a loop should run, and the callback is the code that is executed each time the loop runs

const times = (digit, cb) => {
  for (let i = 0; i < digit; i++) {
    cb()
  }
}
  
times(5, () => {
  console.log("Testing 123..");
})

// Double check the loop is actually running 5 times if you pass in 5 with a console.log in the callback
// You should see 5 outputs

// 22. 

// Define a Person class, the constructor should take name as an argument and set the name to the this, the class should have a prototype method sayHi() that simply outputs console.log("hello")

class Person {
  constructor(name) {
    this.name = name, 
    this.sayHi = function sayHi() {
      console.log("hello")
    }
  }
}

// Implement another prototype method addAgeAndHeight() for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

Person.prototype.addAgeandHeight = function(age, height) {
  this.age = age,
  this.height = height
}

// Create a new person and pass in name as an argument, console.log the person object

let me = new Person("Emma");
console.log(me)

// Call the sayHi() method on the person
me.sayHi();

// Call the addAgeAndHeight() method passing in the relevant arguments
// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

me.addAgeandHeight(30, 168)
console.log(me);

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

function waitBeforeSum(digit1, digit2) {
  let sum = (digit1 + digit2)
  return sum
  setTimeout(function() {
    console.log(sum);
  }, 4000)
}

// setTimeout(function waitBeforeSum(digit1, digit2) {
//   // let sum = (digit1 + digit2)
//   console.log("Does this work?");
// }, 4000);

// This is rubbish:
// waitBeforeSum(22, 3);

// function waitBeforeSum(digit1, digit2) {
//   let sum = setTimeout()
// }

// waitBeforeSum(22, 3);


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