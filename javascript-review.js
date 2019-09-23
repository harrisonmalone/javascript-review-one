// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const coolObject = {
  number: 5,
  myString: 'Hello',
  myArr: [1, 2, 3],
  myFunction: () => {
    console.log(coolObject.number)
  }
};

coolObject.myFunction()

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

const objectConstruct = (attribute) => {
  // object = {};
  this.attribute = attribute;
  this.secondAttribute = 'red';
  return this;
}

myThing = objectConstruct('yes');
console.log(myThing);
// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// Yes
let bestGlobal = 'Hello';
const scoping = () => {
  console.log(bestGlobal + ' ' + 'World!');
}
scoping();
// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

object1 = {
  thing1: 1,
  thing2: 2,
  thing3: 3
}

console.log(object1.thing1);
console.log(object1['thing1']);
// 5.

// What is JSON? Be clear but concise.

// JSON is a data format used commonly in web api's that emulates the 'structure' of javascript objects. A JSON file is always a simple text document that must be parsed by some parser to convert it to proper javascript. It is a data formatting convention that organises data in an efficient and javascripty manner.

// 6.

// What is a callback?

// Callback is when you call one function as an argument to another function including anonymous functions
const logStuff = (stuff) => {
  console.log(stuff);
};

const logStuffAndHi = (stuff) => {
  console.log(stuff);
  console.log('hi');
}

const coolFunc = (stuff, loggingFunc) => {
  loggingFunc(stuff);
}

coolFunc('always', logStuff)
coolFunc('all day', logStuffAndHi)
// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const sumLog = (num1, num2, aFunc) => {
  aFunc(num1 + num2);
}
sumLog(4, 5, logStuff);

// 8.

// Why do we use promises?

// Promises are used for getting data from a request. Promises allow for javascript to use asynchronous functions so the page loads other javascript functionality that does not require data from a promise. Without promises pages would wait until all resources are loaded before any javascript functionality occurs.

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// .then and .catch
// .then is called when the promise is fulfilled and .catch is called if it fails

// 10.

// What is the DOM?

// The Document Object Model is a modelling of the html structure of the application in javascript before rendering. It is this stage that allows dynamic functionality via manipulation of the DOM. Elements can be created and removed, attributes can be added or deleted and content can be expanded on.

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

const someObject = {
  count: 1,
  coolArr: [1, 2, 3],
  anotherFunc: () => {
    someObject.coolArr.forEach(number => {
      console.log(number);
    })
  }
}

someObject.anotherFunc();

// 12.

// What is NPM? In your brief explanation refer to package.json.

// Node Package Module is the organisational program that tracks and stores any and all dependencies of an application. It stores these dependencies in the package.json file as JSON text. 

// 13.

// What are Event Listeners? Gives some examples in your response.

// Event listeners are client side methods that wait for user input or other events before calling a callback function in response. The following event listener will wait for a user to press any letter on the keyboard and then log the actual event in the browser console.

// window.addEventListener('keydown', (e) => {
//   console.log(e);
// })

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const numMult = (num1, num2, otherFunc) => {
  otherFunc(num1 * num2);
}
numMult(5, 4, (sum) => {
  console.log(sum);
})
// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 
const addNum = (num1, num2) => {
  return num1 + num2;
}
// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 
const numsPlusFunct = (num1, num2, someFunc) => {
  return {
    value: someFunc(num1, num2),
    string: 'Hello'
  }
}
// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 
console.log(numsPlusFunct(4, 2, addNum));

// 16.

// What is Express? What does it help us to do?

// Express is a framework

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// synchronous code is code that runs line by line executing one at a time. Asynchronous code is multiple sections of code that run parallel to each other at the same time. Promises is a clear example of where asynchronous code is used and the inbuilt methods of .then and .catch enable code to be run only when data is received.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

// fetch is a request to a server and returns a promise. If successful it contains data that can then be used when ready. This example assumes json will be apart of the promise object and logs the data

// fetch(url).then(response => {
  // return response.json();
// }).then(data => {
//   console.log(data);
// })

// 19.

// A JS object looks like this: 
const southernField = { location: "upper", crop: "sorghum", watered: false }//. Use destructuring to store the value of watered in a variable.
const water = southernField.watered
console.log(water);

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

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

// This is a recursive pattern that uses itself in the callback function.
// Starting with globalScope newNum = 1 the myFunc is called with the argument of 10 and itself.
// This will then callback itself with the value of sum = newNum * num or 1 * 10
// This will then take 10 and sum and callback again with the value of newNum = 100
// this will then take 10 and sum and log the value of their product, 1000

// 21.

// a. Uncomment the code from below

// this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

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
// b. 
// What does this function return?

// It returns an object of two attributes, name and sayHi function

// c.
// How do you call the sayHi() function?

// harrison.sayHi();

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log('hello');
  }
  stats(age, height) {
    this.age = age;
    this.height = height;
  }
}

const harrison = new Person('harrison');
console.log(harrison);
harrison.sayHi()


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
harrison.stats(26, 181);
console.log(harrison);

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// const waitBeforeSum = async (num1, num2) => {
//   return await setTimeout((num1, num2) => {
//     return num1 + num2;
//   }, 4000)
// }
// waitBeforeSum(5, 7).then(data => {
//   console.log(data);
// })


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

const fetch = require('node-fetch')

// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     const index = data.findIndex((a, b, index) => {
//       return a['name'] === "Australia"
//     })
//     console.log(data[index].flag);
//   })
//   .catch(err => {
//     console.log("OH NO")
//   })


// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

// fetch('https://swapi.co/api/films/1/')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     data.characters.forEach(characterLink => {
//       fetch(characterLink)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           console.log(data.name)
//         })
//     })
//   })
//   .catch(err => {
//     console.log("Ahh")
//   })

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png


// go back to: 19