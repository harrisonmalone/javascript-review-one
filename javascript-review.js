// import { url } from "inspector";

const fetch = require('node-fetch');

// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.


const clinton = {
    name: "Clinton",
    age: 32,
    hobbies: ["soccer", "guitar", "coding", "beer"],
    function: function logFirst() {console.log(this.name)}
};

console.log(clinton)
clinton.function()


// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’.

function Person(personName) {
    this.name = personName;
    this.hairColour = "red";
};

let pete = new Person("Pete")
console.table(pete)


// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// sure can! 

let accessMe = 0;
console.log(accessMe)
const changeThatVariable = (variableThing) => {
    accessMe = variableThing
};

changeThatVariable(666)
console.log(accessMe)

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

//  3 ways!!

console.log(Object.values(clinton)[0])
console.log(clinton.name)
console.log(clinton["name"])

// 5.

// What is JSON? Be clear but concise.

// Javascript object notation - it is an easily accessible and "lightweight" data structure.

// 6.

// What is a callback?

// A type of function that can be called within a function to run once the first function has completed.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.


const theFunction = (num1, num2, callback) => {
    total = num1 + num2;
    callback(total)
};

const theTotal = (aTotal) => {
    console.log(`the total is ${aTotal}`)
};

theFunction(12,13, theTotal)

// 8.

// Why do we use promises?

// We use promises as a way of sending and recieving data, the promise allows us to wait for the data to be recieved so that we can then use or convert it into an accessible format.  

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

//  try and catch



// 10.

// What is the DOM?

// Document object Model - It is an object that represents the html on a page allowing us to access and manipulate the data in realtime.

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

const pigeons = {
    count: 6000,
    namesOfSome: ["Larry", "Moe", "Roger", "Steve"],
    printNames: function() {this.namesOfSome.forEach(name => {
        console.log(`name: ${name}\n`)
    });}
};

pigeons.printNames()

// 12.

// What is NPM? In your brief explanation refer to package.json.

// Node Package Manager - allows us to download and install packages to be used with Node.js

// 13.

// What are Event Listeners? Gives some examples in your response.

    // event listeners can be added to variables that have been set to an part of the dom. one the event happens you can then call a function to make something happen. Examples: click, mousemove, submit, keyUp, keyDown.

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const numMult = (num1, num2, callback) => {
    answer = num1 * num2 
    callback(answer)
};

const printAnswer = (theAnswer) => {
    console.log(`the answer is ${theAnswer}`)
};

numMult(50, 6023, printAnswer)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

    const addNum = (num1, num2) => {
        return num1 + num2
    };

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numsPlusFunct = (num1, num2, callback) => {
    const result = {
        answer: callback(num1, num2),
        stringThing: `the answer is ${callback(num1, num2)}`
    };
    return result
};


// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

console.log(numsPlusFunct(12, 345, addNum))

// 16.

// What is Express? What does it help us to do?

// express is an NPM package that allows us to create a live server application with Javascript. 

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// Synchronous code is code that happens in a predetermined order as definded by the language you are coding in. 

// Asynchronous code does not happen in a predetermined order as it is awaiting the retrieval of data from an external source before it can properly run. JS uses async and await to wait for the data arrives before moving onto the rest of the code or function. 

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

    // Fetch is a way of retrieving data from an external source via a promise. We can then use ajax to update data on a page without having to reload the entire page. 
        // const theUrl = "www.fake-api.com/data" 
        // fetch(theUrl)
        // .then(response => response.json)
        // .then(data => console.log(data))

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = { location: "upper", crop: "sorghum", watered: false }

const isItWatered = Object.values(southernField)[2]
console.log(isItWatered);

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

// The number 1 is set to the letNum variable. The function is then invoked multiple times which takes in a number and multiplies it by the newNum which is then passed through to the function again. 

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

// b. 
// What does this function return?

// An object containing the name of a person and the function sayHi

// c.
// How do you call the sayHi() function?

    harrison.sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

class Person {
    constructor(name) {
        this.name = name;
        this.sayHi = this.sayHi
    };

    sayHi() {
        console.log("hello")
    }
    addStuff(age, height) {
        this.age = age;
        this.height = height;
    }
}

const harrison = new Person("Harrison")
console.log(harrison)
harrison.addStuff(27, 180)
console.log(harrison)

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

const waitBeforeSum = (num1, num2) => {

    setTimeout(() => {
        let answer = num1 + num2
        console.log(answer)
    }, 4000); 
    
};

waitBeforeSum(1, 1)

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
 const theurl =  "https://restcountries.eu/rest/v2/all"

 const getFlags = async () => {
     const response = await fetch(theurl)
     const data = await response.json()
     data.forEach(element => {
         console.log(element.flag)
     });
 }

 getFlags()

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