// import {
//     resolve
// } from "url";

// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.
// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const myObject = {
    number: 55,
    string: "This is a string",
    myArray: [13, 14, 99, "richard"],
    myFunction: function () {
        console.log(this.number);
    }
};

// myObject.myFunction();
// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

const Creator = function (argOne) {
    this.first = argOne;
    this.second = "red";
};

const steve = new Creator("jim");
// console.log(steve);

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.
// 
// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)
// answer: yes

const myName = "Richard";

const printName = function () {
    console.log(myName);
};

// printName();

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// you can either use the dot syntax or the double quote syntax
// const myObject = {
//     number: 55,
//     string: "This is a string",
//     myArray: [13,14,99,"richard"],
//     myFunction: function(){
//         console.log(this.number);
//     }
// };

// console.log(myObject.number);
// console.log(myObject['number']);


// 5.

// What is JSON? Be clear but concise.
// Javascript Object Notation - It a format which is easily recognized by a lot of browsers/languages and is very accessible due to it being in a string format. Data passed from apis/databases is often done via JSON
// 6.

// What is a callback?
// A callback is a fuction that fits the role of an argument in another function
// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.


const consFunc = function (result) {
    console.log(result);
};
const myFunction = function (numOne, numTwo, callBack) {
    const result = numOne + numTwo;
    callBack(result);
};
// myFunction(3,6,consFunc);

// 8.

// Why do we use promises?
// Promises are used when we want to handle asynchronous functions. Meaning when  time comes into play. eg when using fetch to grab a URL. This function returns a Promise, and once that promise is fulfilled we can then process the the data using .then
// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// we can use .then to process the promise once it has been fulfilled. And we can use .catch to catch an error if a promise is not fulfilled

// 10.

// What is the DOM?
// The document object model. We use javascript to manipulate this. It is the global structure of the page before it gets converted to html. By called document.getelementbyid() we can query the document. Without the dom it would not be possible for Javascript to interact with webpages
// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

const newObj = {
    count: 0,
    array: [33, 55, 88, 22, 11],
    func: function () {
        while (this.count < this.array.length) {
            console.log(this.array[this.count]);
            this.count += 1;
        }
    }
};

// newObj.func();
// 12.

// What is NPM? In your brief explanation refer to package.json.
// Npm stands for node package manager. It is used to manage different javascript packages that we install when developing using node. currently or package.json file(which is used to store information about our installed packages) only contains:
// {
//     "name": "jstest",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC"
//   }
// jtest looks like a testing package which is installed by default when you initialize npm in the current directory.
// 13.

// What are Event Listeners? Gives some examples in your response.
// an event listener is a js function which is waiting for an event to happen on the webpage, such as a click or a hover or a scroll. We can then do whatever we want when the event happens. We can create new elements. Edit existing elements. Or just process the event and store it somewhere
// document.getElementById("myBtn").addEventListener("click", displayDate); when you click the element called myBtn, the current date will be displayed.

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const printFunc = (result) => {
    console.log(result);
};

const numMult = (x, y, func) => {
    const result = x * y;
    func(result);
};

// numMult(3,5,printFunc);

// 15.
// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

const addNum = (numOne, numTwo) => {
    return numOne + numTwo;
};

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

const numsPlusFunct = (numOne, numTwo, func) => {
    const myObject = {
        value: func(numOne, numTwo),
        string: "This is a string"
    };
    return myObject;
};



// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

const finalResult = numsPlusFunct(3, 5, addNum);
// console.log(finalResult);

// 16.

// What is Express? What does it help us to do?
// express is a node package which helps to set up routes handle responses etc lol

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 
// synchronous code is code that runs synchronously ie one line after the other. Or in order. Asynch code is when code is run simultaneously as some other code by creating a new thread. If the compiler comes across an async function for example. It will create a new thread dedicated to that function, meanwhile, the first thread will continue running the lines of code that come after the funciton. This is useful when it comes to doing things that require time. Ie retrieving data from an api or database. We might be pulling a huge amount of data from something, and we don't want our code to stop and wait. With async we can continue executing the code that happens after the funciton whilst we wait for that function to finish. Once it has we can use .then to process the resultong promise of that funciton.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// fetch is a function(node-fetch package must be installed) in node which requires at least one argument of a URL or directory. it enables us to retrieve data from apis and websites.
// fetch is asynchronous and returns a Promise.
// fetch('www.mybigassdatabase.com')
//     .then(response)
//     .then(
//         parsed = JSON.parse(response)
//     )
//     .then(
//         console.log(parsed[3])
//     )
//     .catch(function (err) {
//         console.log(err);
//     });

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = {
    location: 'upper',
    crop: 'sorghum',
    watered: false
};
const myVar = southernField.watered;
// console.log(myVar);

// 20.

// a.
// Uncomment the code below.

// let newNum = 1;

// const myFunc = (num, callback) => {
//   newNum *= num;
//   callback(newNum);
// };

// myFunc(10, (sum) => {
//   myFunc(10, (sum) => {
//     myFunc(10, (sum) => {
//       console.log(sum);
//     });
//   });
// });

// b.
// Explain in your own words how this code works. For example you could start with something like:

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of  a number and a callback function in the next line we create a new variable and assign its value to itself times the argument num. On the next line we use callback function arguemnt and pass in the newNum as argument to this function. After creating this myFunc function we then invoke it with the arguments of the number 10 the same function as its own argument. We then repeat these steps twice before console logging the final result. " 

// 21.

// a. Uncomment the code from below

// // this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

// function Person(name) {
//   function sayHi() {
//     console.log('hello');
//   }
//   return {
//     name,
//     sayHi
//   };
// }

// const harrison = Person("harrison");
// // console.log(harrison);

// // b. 
// // What does this function return?
// // an object
// // c.
// // How do you call the sayHi() function?
// harrison.sayHi();
// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
    ageAndHeight(age, height) {
        this.age = age;
        this.height = height;
    }
}

const harrison = new Person("Harrison");
// harrison.sayHi();

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object
harrison.ageAndHeight(26, 171);


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
// console.log(harrison);
// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

const  waitBeforeSum = async (numOne, numTwo) => {
    const result = numOne + numTwo;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 4000);
    });
};

// const result =   waitBeforeSum(5, 10);
// console.log(result);

const accessSum = async(numOne,numTwo) => {
    const sum = await waitBeforeSum(numOne,numTwo);
    console.log(sum);
};

accessSum(3,5);

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.
// resolve
// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?
// .then or another async await function
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