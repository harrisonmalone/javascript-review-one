// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

let jsObjP1 = {

property1: "string",
property2: 150,
property3: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
property4: console.log(this.property1)
}




// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

function Student(name) {
    this.name = name;
    this.favColor = red;
}





// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 




// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

let gVar = 5;

function printgVar() {
    console.log(gVar);
}




// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// use dot notation such as student1.name to access the value of the property 
// or use the bracket notation such as student1["name"] to access the value of the property



// 5.

// What is JSON? Be clear but concise.

// JSON is a data storage format which uses JS object notation. JSON itself is a string and it can be easily converted into JS object to facilitate CRUD data manipulation.




// 6.

// What is a callback?

//callback is a lower order function nested within a higher order function. It can be passed into the higher order function without invocation. Later, some code in the higher order function can trigger the invocation of the callback.



// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

function callback(param) {
    console.log(param);
}

function takeNumsAndCb (num_param1, num_param2, callback) {
    let res = num_param1 + num_param2;
    callback(res); 
} 







// 8.

// Why do we use promises?

// When we use promise, what we want is basically to run some asynchorounous operations which are usually associated with runnning a piece of code that takes a long run to get a returned value such as getting the data from most of the WEB API . Using asynchorounous operation can make our program more responsive and faster, by allowing user to run other piece of coding while letting the async code to the background (aka event loop) 


// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// first method is to use .then method
// the second method is to use aync/await 




// 10.

// What is the DOM?

//It is a model to break down html elements into  objects which you can interact with and manipulate with using normal javascript code or other programming language. A key feature of this DOM structure is that it is based on a tree structure just like any complex js objects 



// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

let objEleven = {
count: 11,
property2: arr = [1,2,3],
property3: this.property2.forEach(elem =>
console.log(elem)
    )
}



// 12.

// What is NPM? In your brief explanation refer to package.json.

//It is called node package manager. 




// 13.

// What are Event Listeners? Gives some examples in your response.

// Listener is a method. This method is used to make an html element be responisve to
// some triggers or event defined by BOM/DOM models. The way an html element can be 
// responsive it that when an evnet fires the html can further trigger a function call/or other events.


// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

function numMult (num1, num2, cback) {
    let resInterim = num1 * num2;
    cback(resInterim)
}

function cback(resInterim) {
    console.log(resInterim);
}




// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

function addNum (num1,num2) {
    return num1 + num2;
}



// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

function numsPlusFunct(num1,num2,cbFunct) {
    cbFunct(num1,num2);
    return obj = {
        property1: cbFunct(num1,num2),
        property2: "String"
    }
}




// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

function numsPlusFunct(num1,num2,addNum) {
    addNum(num1,num2);
    return obj = {
        property1: addNum(num1,num2),
        property2: "String"
    }
}



// 16.

// What is Express? What does it help us to do?


//Express is an js library used to server side objects. It helps to create server and http requests and manage the crud operation on the server side.



// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// the greatest feature that divides the synchronous and asynchronous code is that synchronous code needs to be
// executed line by line from top to the end. While asynchronous code can be skipped at the first place and sent to event loop and return a value later after all the synchronous codes finish running.

// In JS, we use: setTimeout, promise, aync/await to handle the js code.



// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

//fetch is a method in JS used to send async request to a WEB API and the offical technical name for this request is called asynchronous javascript xml request. In other words, fetch sends async request to a server.



// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

// 20.

// a.
Uncomment the code below.

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

// It received 10 as its first argument, and an callback function as the second argument. The passed number will be multiplied by 1, and then 10 gets paased to a callback function. The callback function taks 10, and pass 10 to another myFunc function, in the second myFunc function, the first 10 is multiplied by 10 which is the param from the second myFunc to get 100, then 100 gets passed to a third myFunc, the third myFunc will multiply this 100 by 10 as well (because 10 is also its argument). And finially the third myFunc logs out 100. 







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

// it returns an object with name and sayHi as its two property.






// c.
// How do you call the sayHi() function?

harrison.sayHi();



// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work


class Person {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log("Hello");
    }

    getAgeHeight(age,height) {
        this.age = age;
        this.height = height;
    }

}



// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

pNew = new Person("Leonard");

pNew.age = 55;
pNew.height = 190;

console.log(pNew.name,pNew.age,pNew.height);


// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

function waitBeforeSum() {
    
    setTimeout(function(num1,num2) {return num1+num2}
,2000)}

//.then(data => console.log(data))








// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch








// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

const fetch = require('node-fetch')

const res = fetch("https://restcountries.eu/rest/v2/all")

res.then(resp => resp.json()).then(data => data.filter(country => country.name === "Australia")).then(australia => console.log(australia[0].flag))




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