// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const obj = {
    p1: 3, 
    p2: "hello", 
    p3: ["h", "i", 2], 
    p4: function(){
        console.log(obj.p1);
    }
}

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

class Creator{
    constructor(firstAttrib){
        this.firstAttribute = firstAttrib;
        this.colour = "red";
    };
};

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)
const greeting = "hello"

function sayHello(){
    console.log(greeting)
};

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// obj.attribute
// obj["attribute"]

// 5.

// What is JSON? Be clear but concise.
// Javascript object notation. Lightweight way to store data often used in web API's and web interfaces. Is a combination of array's and objects. This data structure is stringified.

// 6.

// What is a callback?
// A function that takes another function as a parameter.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const callback = (arguments) => {
    console.log(arguments)
}

function callingBack(num1, num2, func){
    func(num1 + num2)
}

// console.log(callingBack(1, 2, callback))

// 8.

// Why do we use promises?
// When getting data from an API which may take an unknown amount of time, or when recieving the data is not definite, promises can be used to allow us to begin requesting that data while also being able to perform other things asynchronously. Promises provide feedback on whether that data was successfully retrieved or not, and allow us to build different cases into our code so that it does not break depending on if the data was recieved successfully or not.

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// You can use .fetch and .then
// The functions related to .fetch and .then are: .try and .catch

// 10.

// What is the DOM?
// Domain object model. It is the heirarchical model referring to the organisation of HTML elements and objects in a domain.

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

const obj1 = {count: 2, 
    second: [1, 2, "three", "four", 5, "six"], 
    third: function(){
        obj1.second.forEach(elem => {
            console.log(elem);
        });
    }
}

// console.log(obj1.third())

// 12.

// What is NPM? In your brief explanation refer to package.json.
// Node package manager. Allows us to import packages that allow us to use code without having to write it ourselves, eg if it is repetitive, complicated or used very often. An example is the json package that allows us to convert JSON to/from a string and an object which allows us to manipulate and use the JSON easily.

// 13.

// What are Event Listeners? Gives some examples in your response.
// functions that act on a specific element in the DOM that are activated on particular events and respond dynamically, for example, a button that has an onclick event listener may change colour or perform some function when it is clicked by the user. Or, an onscroll event listener on a page that makes a banner or pop-up appear.

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const callback2 = (multipliedNums) => {
    console.log(multipliedNums)
}

function numMult(num1, num2, func){
    func(num1 * num2);
}

// numMult(4, 2, callback2)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 
const addNum = (num1, num2) => {
    return num1 + num2
}
// console.log(addNum(2, 3))

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

function numsPlusFunct(num1, num2, funct){
    let functOutput = funct(num1, num2);
    return {value: functOutput, string: "string"};
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

// console.log(numsPlusFunct(2, 5, addNum))

// 16.

// What is Express? What does it help us to do?
// It is a package that allows us to easily send HTTP requests when using an API or building a web app.

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 
//Synchronous code runs in the order it is called, with only one function being run at any given time. Asynchronous code allows us to run multiple methods at once. Timeouts can be used to help us deal with asynchronous code, in order to prevent one function from being entirely dependant on another function successfully finishing. This means you can run code simultaneously, and begin running a second function after a certain time.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
// Fetch is a method that returns a promise from an API or web page. This promise may be 'pending', may fail, or may succeed. The data from this promise can then be 'unpacked' using a .then method on the promise. For example, you could write: fetch(www.blah-api.com/blah/blah)

// 19.

// A JS object looks like this:
const southernField = { location: "upper", crop: "sorghum", watered: false }
//Use destructuring to store the value of watered in a variable.

const isWatered = southernField.watered;
// console.log(isWatered)

// 20.

// a.
// Uncomment the code below.

let newNum = 1

const myFunc = (num, callback) => {
  newNum *= num
  callback(newNum)
}

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

// Firstly, the newNum variable is initialized and receives the value of the number 1. 

// Secondly, the myFunc function is invoked. It can take 2 arguments - a number (num) and a callback function. 
// myFunc accumulates the newNum variable by multipliying it by num. 
// myFunc calls the callback function, passing in newNum as an argument, this function simply returns newNum.

// Third, the myFunc function is called and nested within itself three times, each time it is passed the value '10' and the callback function labelled as 'sum'. Each time it is called, myFunc outputs newNum and then passes it back into myFunc again until this has been done three times, leaving newNum equal to 1 * 10 * 10 * 10, or newNum = 1000. On the third call, myFunc console logs the output of sum, which is our callback function, therefore console logging the value of 1000.

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
// not sure which function you mean? 
// the function Person returns an object with two values, the first value will have the key "name", and the value equal to the parameter passed into Person. In this case, 'Harrison'. The second value will have the key 'sayHi' and the value of the 'sayHi' function.
// The function 'sayHi', when called, will console log 'hello';

// c.
// How do you call the sayHi() function?
// Can only be called once the Person function has been called, so you have to call the person function first. eg.
// harrison.sayHi()
// In other words or:
// Person("taya").sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work
// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log("hello")
    }

    addAgeAndHeight(age, height){
        this.age = age;
        this.height = height;
    }

}

// const taya = new Person("taya")
// taya.sayHi()
// taya.addAgeAndHeight(21, 172)
// console.log(taya);

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// function waitBeforeSum(num1, num2){
// // ?????????
//     setTimeout(
//         return num1 + num2
//     )
    
// }

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?
// You can use .then() or you can use ...

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'
async function accessSum(){
    try{
        const result = await waitBeforeSum()
        if (result > 10){
            throw
        }
        else{
            console.log(result);
        }
    }
    catch (error) {
        console.log("the sum was greater than 10")
    }
}
// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

const fetch = require('node-fetch');

// fetch("https://restcountries.eu/rest/v2/all")
// .then(response => response.json())
// .then((data) => {
//     countries = data;
//     countries.forEach(country => {
//         if (country.name === "Australia"){
//             console.log(country.flag);
//         }
//     });
// })

// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

// fetch("https://swapi.co/api/films/1/").then(response => response.json())
// .then((data) => {
//     const allCharacters = data.characters;

//     allCharacters.forEach(character => {
//         fetch(character)
//         .then(info => info.json())
//         .then((details => {
//             console.log(details.name);
//         }))
//     })
// })

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png