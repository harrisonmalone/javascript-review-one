// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.
// let obj = {
//     num: 1,
//     str: "my string",
//     arr: [1, 2, 3],
//     func: function myfunc() {console.log(this.num)}
// }

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’.


// function Square(width) {
//     this.width = width;
//     this.color = "red"
// }

// let square = new Square(50);
// console.log(square);


// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// let globalVar = 5;

// The global variable 'globalVar' is accessible by the useGlobalVar function, therefore we can say that
// it is within the functions scope
// function useGlobalVar () {
//     return globalVar;
// }

// console.log(useGlobalVar());


// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).
// 1) you can access a property of an object using the dot notation, such as obj.property
// 2) you can access a property of an object using the bracket notation with the key, such as obj["key"]


// 5.

// What is JSON? Be clear but concise.
// JSON is a data format. It stands for Javascript Object Notation. It is represented as a string object and
// can be useful as a standard format for transmitting data across a network in a client server model.


// 6.

// What is a callback?
// a callback is a higher order function which is passed in as a parameter to another function to be 
// 'called back' at a later time. Since it is not evaluated until later, we pass in only the function 
// definition as a parameter and drop the ending brackets. This is possible because functions are objects
// in Javascript. 


// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

// function callB(arg) {
//     console.log(arg)
// }

// function callBackFunc(num1, num22, callB) {
//     let result = num1 + num22;
//     callB(result);
// }

// callBackFunc(5, 8, callB);


// 8.

// Why do we use promises?
// Sometimes we need to get some data from a source, for example a server on a network. This process is not
// instant and it can take some time to fetch the data. Promises are a way to handle this problem and allow
// us to have an object which represents this requested data and continue to do some processing in our 
// program while we wait. Javascript is a single threaded environment but we can process things 
// asyncronously which can allow us to do things like load one part of a web page before another while we
// are waiting for some data to come in. 
// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved.

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).
// promise objects have two methods associated with them: 1) resolve(), 2) reject()
// once we have a promise we can call the .then() method on it to get at what is inside the promise object.
// if the promise is rejected then we can use the .catch() method to catch the error thrown by the reject() function

// 10.

// What is the DOM?
// DOM stands for Document Object Model. It refers to the tree like structure of the document object in 
// in web pages. Each part of the document such as the body or header is represented as a node on the tree
// that can be traversed. In this way the DOM is a hierarchical structure with parent nodes and child nodes,
// each of which is its own object with its own properties.

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

// let myObj2 = {
//     count: 4,
//     arr1: [1, 2, 3],
//     sum: function() {this.arr1.forEach((el) => console.log(el))}
// }


// 12.

// What is NPM? In your brief explanation refer to package.json.
// NPM is the node package manager it is a repository of open-source modules and packages. It is similar to
// the use of gems in ruby programming language and facilitates modular code and resuse. The package.json
// contains the references to your programs dependencies.


// 13.

// What are Event Listeners? Gives some examples in your response.
// you can add event listeners to DOM objects. Event listeners are usually async functions that listen
// for events on a DOM object then perform some process. For example with can put an onclick on a button
// which will listen for when the user makes a click on our button and then it will perform a callback
// function which might do sopmething like display some text on the webpage to the user


// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

// function callBack(result) {
//     console.log(result);
// }

// function numMult(num1, num2, callBack) {
//     let result = num1 * num2;
//     callBack(result);
// }

// numMult(2, 3, callBack);




// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

// function addNum(num1, num2) {
//     if( !(isNaN(num1)) && !(isNaN(num2)) ) {
//         return num1 + num2
//     } else {
//         let err = new Error("invalid input")
//         throw err
//     }
// }

// console.log(addNum(5, 5));


// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

// function numsPlusFunct(num1, num2, callB) {
//     let obj = {};
//     obj.num =  callB(num1, num2);
//     obj.str = "myString";
//     return obj
// }



// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// console.log(numsPlusFunct(5, 5, addNum));

// 16.

// What is Express? What does it help us to do?
// express is a framework that contains modules that enable us to more easily create instances of servers
// in node


// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 
// In a synchronous programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops your program for the time the action takes.
// An asynchronous model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).
// One approach to asynchronous programming is to make functions that perform a slow action take an extra argument, a callback function. The action is started, and when it finishes, the callback function is called with the result. The more succint way of doing this is to use a promise object


// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// fecth an async function that is built into the browser. It is used to obtain data from an endpoint, usually over a network. Fetch returns a promise object. We could for example use it to get some JSON 
// map data from a remote server.
// let endpoint = "https://myendpoint.com/mapsdata"
// fetch(endpoint)
//     .then(result => {
//         result.json
//     })
//     .then(json => {
//         console.log(json);
//     })



// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
// const southernField = { location: "upper", crop: "“sorghum”", watered: false }
// var {watered} = southernField
// console.log(watered);


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

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of..." 
// 1) newNum is initialized in the global scope and assigned the number 1.
// 2) myFunct function is defined and takes two parameters 'num' and a callback function 'callback'
// 3) newNum is multuplied by the argument num and the result assigned back to the newNum variable
// 4) newNum is passed into the callback function
// 5) myFunc is called and each time it is called the result of the first operation is passed into
// the callback as an argument in a nested pattern (callback hell). Finally the resulting sum is logged to
// to the screen



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
// this function returns an object. The name key will contain the name that was passed in as an argument
// the sayHi key will contain the sayHi function definition.
 
// c.
// How do you call the sayHi() function?
// harrison.sayHi()


// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log("hello");
//     }

//     addAgeAndHeight(age, height) {
//         this.age = age;
//         this.height = height;
//     }
// }

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object
// SEE ABOVE


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
// let person = new Person("Harrison");
// person.addAgeAndHeight(27, 187);
// console.log(person);

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

function waitBeforeSum(num1, num2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result = num1 + num2);
        }, 4000)
    })
}

// console.log(waitBeforeSum(5, 3));

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.
// since setTimout is an async function we need another async function to access its value
async function accessSum(callBack, num1, num2) {
    try {
        result = await callBack(num1, num2);
        if(result < 10) {
            console.log(result)
        } else {
            let err = new Error("the sum was greater than 10");
            throw err
        }
    } catch(err) {
        console.log(err);
    }
}

accessSum(waitBeforeSum, 5, 2);

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?
// we can use .then()
// or we can make an async function

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

// cd into dir
// confirm which remote is connected (git remote -v)
// make a new branch (git checkout -b thomas-smith-javascript-rev)
// git add .
// git commit
// git push origin thomas-smith-javascript-rev
// go to github and create a pull request
