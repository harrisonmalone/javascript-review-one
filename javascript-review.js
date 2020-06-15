// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const obj = {
  objNum: 4,
  objString: "hello",
  objArray: [1, 3, 5],
  objFunc: () => {console.log("Hello")}
};

// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question! 

function Car(brand) {
  this.brand = brand;
  this.colour = "red";
};

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

let name = "Guy" // name is in global scope
const func = (location) => {
  console.log(name + " is in " + location); // and is accessed here within a function
}
func("Melbourne");

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

obj.objString
obj["objString"]

// 5.

// What is JSON? Be clear but concise.

// JavaScript Object Notation is a way of storing data as a string, making it easy to send data from servers to webpages, but also able to hold complex data structures. It is also easy to convert between JSON and native javascript objects.

// 6.

// What is a callback function?

// This is a function that takes another function as one of it's arguments

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const addingNumbers = (num1, num2, cb) => {
  return cb(num1 + num2);
}

const logNum = (val) => {
  console.log(val);
}

addingNumbers(5, 7, logNum);

// 8.

// Why do we use promises?

// promises are used to handle multiple asynchronous operations without leading to callback hell. This allows for much more readable code and subsequenly easier to manage codebases 

// 9.

// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters. 

// resolve and reject

// 10.

// What's the different between the rest and spread syntax?

// The spread syntax allows for an object to be copied no matter it's length
// The rest syntax is useful for excluding items from being copied

// 11. 

// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest. 

const myFunc = (...args) => {
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
}
myFunc(2, 3, 6)

// 12.

// What is a javascript package manager? Name the 2 main package managers

// Yarn and NPM

// 13.

// What is a package.json? What is it similar to when comparing it to ruby?

// It is similar to the ruby gemfile, in this file it keeps track of all the dependencies of the project

// 14.

// a. 
// run the following command
// npm init -y

// b. 
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line 

const readline = require('readline-sync');
let userName = readline.question('Enter a name ')
console.log(userName)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

const addNum = (num1, num2) => {
  return num1 + num2
}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 
  
const numPlusFunct = (num1, num2, cb) => {
  return {val1: cb(num1, num2), val2: "a string"}
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

numPlusFunct(4, 16, addNum);

// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it

const fs = require('fs'); 
fs.readFile('hello.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

// 17.

// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code. 

// synchronous code happens as you see it in the text editor, whereas asynchronous code happens out of order, and it depends on when the code is finished executing. JS can handle this code by using promises.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

// fetch is a method used to call api's, this method returns a promise

const fetch = require('node-fetch');

fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => console.log(data.value))
  .catch(err => console.log(err));

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
const southernField = { location: "upper", crop: "sorghum", watered: false };
let something = southernField.watered

// 20.

// a.
// Uncomment the code below.

let newNum = 1

const myFuncAha = (num, callback) => {
  newNum *= num
  callback(newNum)
}

myFuncAha(10, (sum) => {
  console.log(sum)
})

// b.
// Explain in your own words how this code works. For example you could start with something like:

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

// newNum is initialized with 1, then a function is defined mulitplying the newNum variable by a number passed into the function and then that number is passed to a callback function. below this definition, the function is called with the number 10 and then the resultant number is logged using the callback function.

// 21.

// You might remember the .times method in ruby

// You could do something like this

// 5.times do 
  // code
// end

// Define a function times() that takes a number and a callback as an argument, the number represents how many times a loop should run, and the callback is the code that is executed each time the loop runs

// Double check the loop is actually running 5 times if you pass in 5 with a console.log in the callback

// You should see 5 outputs

const times = (num, cb) => {
  for(let i = 0; i<num; i++){
    cb();
  }
}

times(5, () => {console.log("yes")});   

// 22. 

// Define a Person class, the constructor should take name as an argument and set the name to the this, the class should have a prototype method sayHi() that simply outputs console.log("hello")


// Implement another prototype method addAgeAndHeight() for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// Create a new person and pass in name as an argument, console.log the person object

// Call the sayHi() method on the person

// Call the addAgeAndHeight() method passing in the relevant arguments

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

class Person {
  constructor(name){
    this.name = name;
  }
  sayHi() {
    console.log("hello");
  }
  addAgeandHeight(age, height){
    this.age = age;
    this.height = height;
  }
}

let guy = new Person("Guy");
guy.sayHi;
guy.addAgeandHeight(20, 186);
console.log(guy);


// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different methods we can chain to our promise to avoid getting a pending promise. What are these 2 methods?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

const waitBeforeSum = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        let answer = num1 + num2;

        if (isNaN(answer)) {
            reject(new Error("Input needs to be a number"));
        }

        resolve(answer);
    }, 4000);
});
}

waitBeforeSum(7, 10)
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)});

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

fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {return response.json()})
  .then((response) => {getAustralia(response)})
  .catch(err => console.log(err));

const getAustralia = (object) => {
  for(let i = 0; i < object.length; i++){
    if(object[i]["name"] === 'Australia'){
      console.log(object[i]["flag"]);
    }
  }
}

fetch("https://funtranslations.com/api/yoda", 
{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: "Master Obiwan has lost a planet"
})
  .then((response) => {console.log(response)})
  .catch(err => console.log(err));

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