// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.
const objectOne = {
  numVariable: 2,
  strVariable: "haha!",
  arrVariable: [1, 2, 3, 4],
  display() {
    console.log(this.numVariable);
  }
}

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’.

const fruitConstructor = (name) => {
  return {
    name: name,
    color: "red"
  }
}

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

//Yes, we can access it. 
const counter = 1;
const displayCounter = () => {
  console.log(counter);
}

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).
console.log(objectOne.arrVariable);
console.log(objectOne["arrVariable"]);


// 5.

// What is JSON? Be clear but concise.
// It's a popular and lightweighted way of storing information that's quite human-readable and looks like javascript object.


// 6.

// What is a callback?
// function that's being passed into a function to be used in that function.


// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.
const sum = (num1, num2, displayCallback) => {
  displayCallback(num1 + num2)
  return num1 + num2
}
const display = (result) => {
  console.log(result);
}

sum(1, 2, display);

// 8.

// Why do we use promises?
// because it allows us to run our code asycronously and our application won't be bottleneck-ed by a slow internet speed or huge background processing.

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).
//then & await(given that the function is declared as async function).

// 10.

// What is the DOM?
// the HTML file that being rendered. It provides a library of function that allows developer to select element from the document and manipulate the document itself. 


// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.
const objectTwo = {
  count: 2,
  array: [2, 2, 2, 2],
  display() {
    console.log(this.count);
    console.log(this.array);
  }
}

// 12.

// What is NPM? In your brief explanation refer to package.json.
// Node package manager, it is application that stores all of the node packages in the internet and simplify and improves it accessibility to developer. It documents and maintain the node package versions, the developers have the freedom to choose which version of node packages they want to use in their application. package.json is text file thats generated when npm is initialised. package.json stores application information, dependencies, scripts.

// 13.

// What are Event Listeners? Gives some examples in your response.
// Event listener is a function that monitors the event that happens in the browser, that allows the user to add a callback whenever a particular event is triggered.
// example: 
// const example = document.querySelector("#example");
// example.addEventListener('click', myCallback);

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.
const numMult = (num1, num2, displayCallback) => {
  result = num1 * num2;
  displayCallback(result);
}

numMult(3, 3, display);

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers.

const addNum = (num1, num2) => {
  return num1 + num2
}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numPlusFunct = (num1, num2, callback) => {
  return {
    result: callback(num1, num2),
    ranString: "Yahaha! You found me!"
  }
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 
console.log(numPlusFunct(2, 2, addNum));

// 16.

// What is Express? What does it help us to do?
// Express is a node package that simplfy the routing process. It allows us to specify the routes and the method related to that route.

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code.

// sychronous code will run the line by line from top to bottom and will not proceed if the previous line of code is not fully processed.
// asychronous code will generate a new thread in the processor to handle the asychronous code. this allows the application to simultanously to finish the sychronous code without having to wait for the asychronous code to finish.
// The catch of asynchronous code is that there's a lot of external factor that may cause it to fail, such as internet connection, corrupted file, bad API server, etc... To overcome this Javascript created Promise object that allows the developer to specify the sucess and failure scenario.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// fetch is a pre-built function that allows application to send a request to an API through AJAX engine that returns a Promise object. Before fetch, developer had to use XMLHttpRequest and it does not use AJAX engine.
// fetch("url")
// .then(resp => resp.json)
// .then(json => console.log(json));

// 19.

// A JS object looks like this:
const southernField = {
  location: "upper",
  crop: "sorghum”",
  watered: false
}
// Use destructuring to store the value of watered in a variable.
const watered = southernField.watered;
console.log(watered);
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

// 1. the newNum variable is initialized and receives the value of the number 1
// 2. the myFunc function is invoked. It received the arguments of 10 and multiply the variable newNum with the provided argument (10) and invoked the callback. (newNum = 10)
// 3. Second level nesting myFunc function is invoked. It received the argument of 10 and multiply the variable newNum with the provided argument and invoked the callback. (newNum = 100)
// 4. Third level nesting myFunc function is invoked. It received the argument of 10 and multiply the variale newNum with the provided argument and invoked the callback. (newNum = 1000)
// 5. callback invoked, display the sum / newNum

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

const harrison = Person("harrison")

// b. 
// What does this function return?
// Object that contains a string and a function
// c.
// How do you call the sayHi() function?
// harrison.sayHi();

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

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