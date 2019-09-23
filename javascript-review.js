// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const fourPropObj = {
  firstKey: 10,
  secondKey: 'This is a string',
  thirdKey: ['string', 20],
  fourthKey: function() {
    return this.firstKey
  }
}
// console.log(fourPropObj.fourthKey())

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

function Dog(name) {
  return {
    name
  }
}

// console.log(Dog('Spot'))

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

const globalNumber = 10

const addFive = (num) => num + 5

// console.log(addFive(globalNumber))

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// someObj.property
// someObj["property"]

// 5.

// What is JSON? Be clear but concise.

"Javascript Object Notation. JSON is a data format (the most prevelant format) for sending information over the internet. It is lightweight as it is just a string, which looks like a JS object"

// 6.

// What is a callback?

"A callback is a function which you pass in to another function as an argument"

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const logfunc = (val) => console.log(val)

const addTwoNumbers = (num1, num2, callBackFunction) => {
  result = num1 + num2
  callBackFunction(result)
}

// addTwoNumbers(20, 20, logfunc)

// 8.

// Why do we use promises?

"Promises are used for asynchronus javascript. Not everything in coding is instant. A promise allows us to wait for the task to complete before continuing the rest of the code within the current scope. Code outside the scope can continue to execute whilst waiting for the promise to resolve"


// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).


"If we are holding a promise we can either use '.then()' or we can use the async/await method and  'await 'promise''. Promises have the 'resolve' and 'reject' methods available to us that are called when the promise is fulfilled or fails, or we can invoke ourselves if we creating promises rather than consuming"

// 10.

// What is the DOM?

"The Document Object Model is a tree like structure of all the nodes in the page. A simple way to think of it is that it is all of the html elements of a page, they all represent nodes. They all reside within a 'document' node."

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.


randomObjQ11 = {
  count: 1,
  arr: ["arrVal1", "arrVal2"],
  logFunction: function() {
    this.arr.forEach(val => console.log(val))
  }
}

// randomObjQ11.logFunction()

// 12.

// What is NPM? In your brief explanation refer to package.json.

"Node Package Manager. NPM is a package manager as 'gem' is to ruby. Initialising npm will create a package.json file. Installing a npm package will also create a package.json file, which sets out the dependencies for the application"

// 13.

// What are Event Listeners? Gives some examples in your response.

"Event listeners listen for things happening in the application, most of them to do with the DOM. They essentially flag when a certain 'event' is true or false and allow us to do something with that."

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

// const logfunc = (val) => console.log(val)

const numMult = (num1, num2, callBackFunction) => {
  result = num1 * num2
  callBackFunction(result)
}

// numMult(20, 20, logfunc)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

const addNum = (num1, num2) => num1 + num2

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numsPlusFunct = (num1, num2, callBackFunction) => {
  result = {
    firstKey: callBackFunction(num1, num2),
    secondKey: "Some random string"
  }
  return result
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// console.log(numsPlusFunct(10, 20, addNum))

// 16.

// What is Express? What does it help us to do?

"Javascript is a client side scripting language. Express allows us to create our own server, allowing us to connect a database and write server side code"

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

"Synchronous code runs chronologically (top to bottom); asynchronous code runs asynchronously. This is extremely use as it allows JS to continue executing code whilst awaiting for something that can't execute instantly - once it is returned JS will can then execute the related code, then go straight back to where it was in it's execution previously."

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

"fetch() is the (fairly recently) built in JS method that allows us to write vanilla JS to send a HTTP Request to an API. It relates to AJAX as it returns a promise which resolves to the response returned from the API"

// const url = "https://something.com/blah/"

// fetch(url)
//   .then(res => res.json())

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

southernField = { location: "upper", crop: "sorghum", watered: false }
let watered = southernField.watered

// 20.

// a.
// Uncomment the code below.

let newNum = 1

const myFunc = (num, callback) => {
  newNum *= num
  callback(newNum)
}

myFunc(10, (sum) => {
  myFunc(10, (sum) => {
    myFunc(10, (sum) => {
      console.log(sum)
    })
  })
})

// b.
// Explain in your own words how this code works. For example you could start with something like:

"Firstly, the let newNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of a parameter passed in when the the function is called (a number) and a callback. From there, the function calls 'newNum' in from the global scope and sets it's value equal to the multiplication of the 'num' argument passed in and the 'newNum' value. The return value of this arithmetic is passed in to 'callback' as a parameter. 'myFunc' is then invoked with 3 times nested one within the other. This then has effect of multiplying the return value by the number passed in (10) 3 times"  

// 21.

// a. Uncomment the code from below

// // this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

// function Person(name) {
//   function sayHi() {
//     console.log('hello')
//   }
//   return {
//     name,
//     sayHi
//   }
// }

// const harrison = Person("harrison")
// console.log(harrison)

// b. 
// What does this function return?

"This function return a 'Person' object"

// c.
// How do you call the sayHi() function?

// harrison.sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

class Person {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log('Hello')
  }

  addAgeAndHeight(age, height) {
    this.age = age
    this.height = height
  }
}

const harrison = new Person('Harrison')
console.log(harrison)
harrison.sayHi()

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

harrison.addAgeAndHeight(28, 175)

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
console.log(harrison)

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png