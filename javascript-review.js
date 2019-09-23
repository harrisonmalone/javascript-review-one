const fetch = require('node-fetch');
// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

function myFunc () {
    console.log(this.number)
}

const myObj = {
    number: 2,
    string: "hello",
    array: [1, 2, 3],
    func: myFunc,
}

myObj.func()

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

function myConstructor (value) {
    const obj = {
        firstVal: value,
        colour: "red"
    }
    return(obj)
}

console.log(myConstructor(2))

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)
//yes
const globalVar = "WOW"

function myOtherFunc () {
    console.log(globalVar)
}

myOtherFunc()
// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).
console.log(myObj["number"])
console.log(myObj.number)
//?

// 5.

// What is JSON? Be clear but concise.
//Javascript Object Notation, a unified syntax for transferring data

// 6.

// What is a callback?
//a function (reference) that you pass into antoher function (or store in an object?) that can then be used/called in the future

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

function one (firstNum, secondNum, callback) {
    callback(firstNum + secondNum)
}

function myCallback (value) {
    console.log(value)
}

one(2, 3, myCallback)
// 8.

// Why do we use promises?
// to handle asyncronous processing (API calls, priority threading etc)

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

//then and except
//? is this the names of the args that you pass in when defining a promise? they can be anything though. If its that then resolve and reject?

// 10.

// What is the DOM?
// Document object model, an object representation of the HTMl heirarchy of a web page. It can be used by javascript to manipulate HTMl elements

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

function moreFunc () {
    this.array.forEach (element => {
        console.log(element)
    })
}
const moreObj = {
    count: 3,
    array: [2, 3, 4],
    func: moreFunc,
}

moreObj.func()
// 12.

// What is NPM? In your brief explanation refer to package.json.
// node package manager, it lets you install dependencies and stores them in your project package.json (not 100% sure on this one tbh)

// 13.

// What are Event Listeners? Gives some examples in your response.
// a loop that waits for an event and responds to it. these can be used to handle asyncrounous messages or timers

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

function myOtherCallback (value) {
    console.log(value)
}
function numMult(numOne, numTwo, callback) {
    callback(numOne * numTwo)
}


numMult(3, 6, myOtherCallback)
// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 
function addNum (one, two) {
    return (one + two)
}
// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 
function numsPlusFunct(one, two, func) {
    const myObj = {
        property: func(one, two),
        string: "yo"
    }
    return(myObj)
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 
console.log(numsPlusFunct(2, 3, addNum))
// 16.

// What is Express? What does it help us to do?
// ? helps on the backend with javascript web server handling? its a framework, maybe

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 
// syncronous code executes one line after another and you can guarantee the ordering of operations
//asyncronous code flows spawn a new thread and both threads operate independently, with no guarantee of relative ordering of operations
// JS has promises which can handle waiting for an async thread to exectue whilst being able to continue processing in the current thread.
// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// AJAX is async xml requests in javascript, but generally refers to requesting and receiving data asyncrounously. 
// fetch is a method that enables ajax processing via HTTP  requests?
// fetch('./api/some.json')
//   .then(onResponse)
//   .catch(onError);

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
//() I googled what is detructuring..) I still dont know the answer :)
// let [firstName, surname] = arr;
// 20.

// a.
// Uncomment the code below.

// let newNum = 1

// const myFunc = (num, callback) => {
//   newNum *= num
//   callback(newNum)
// }

// myFunc(10, (sum) => {
//   myFunc(10, (sum) => {
//     myFunc(10, (sum) => {
//       console.log(sum)
//     })
//   })
// })

// b.
// Explain in your own words how this code works. For example you could start with something like:

//1 * 10 * 10 * 10
//console logs 1000, it is recursively calling a cumulative *10 multiplier

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 

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
// an object = {
    // name: "harrison",
    // sayHi: sayHi
// }
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
        console.log("hello")
    }

    setDetails(age, height) {
        this.age = age
        this.height = height
    }
}

const harrison = new Person("harrison")
harrison.sayHi()
// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object
harrison.setDetails(26, "6ft")
// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
console.log(harrison)

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// function waitBeforeSum (one, two, resolve) {
//     let result;
//     return new Promise((resolve) => {
//         setTimeout((resolve) => {
//             result = one * two
//             resolve(result)
//         }, Math.floor(Math.random() * 4000) + 1) 
//     })   
// }

// console.log(waitBeforeSum(1, 3, function(result) {
//     console.log(result)
// }))
// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.
// promise
//async/await

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?
// await

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

function onResponse(resp) {
    resp.json().then(data => console.log(data))

}

function onError(resp) {

}
fetch('https://restcountries.eu/rest/v2/all')
  .then(onResponse)
  .catch(onError);
// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/
function onResponse(resp) {
    resp.json().then(data => {
        // console.log(data)
        data.characters.forEach(item => {
            console.log(item)
            //fetch here
        })
    })
}

function onError(resp) {

}
fetch('https://swapi.co/api/films/1/')
  .then(onResponse)
  .catch(onError);

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png