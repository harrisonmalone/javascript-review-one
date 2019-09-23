// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1. 
// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.
// let familyObj = {
//         numMembers: 4,
//         familyName: 'Nikolic',
//         familyMembers: ['Jovan', 'Alex', 'Vicky', 'David'],
//         printMembers: function(){
//             console.log(`The number of people in my family are ${this.numMembers}`);
//         }
// }

// familyObj.printMembers()

// 2. 
// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// function Animal(name){
//     // Object.create(Animal); //you only use Object.create() if you want to inherit the methods and attributes from another object
//     let animal = {};
//     animal.name = name;
//     animal.color = 'red';
//     return animal;
// }

// let dog = new Animal('dog');
// console.log(dog);

// let cat = new Animal('cat');
// console.log(cat);



// 3. 
// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

//Yes you can, you just need to define the variable you want to use outside the functions as a global variable
// const y = 10;

// const printXAndY = () => {
//     let x = 20;
//     console.log(x, y);
// }

// printXAndY();


// 4.
// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).
// let obj = {
//     name: 'Jov',
//     age: '22',
//     address: 'Yarrambat'
// }

// console.log(keys(obj));

// you can iterate through and get the objects keys in an array or access them directly if you know them


// What is JSON? Be clear but concise.
// 5. JSON stands for JavaScript Object Notation and is a format for storing data in and object like fashion, where the keys are all strings.


// What is a callback?
// 6. A callback is a call to another function within a function. Callback functions get passed into other functions that utilise them.



// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

// 8. 
// const logNumber = (n) => {console.log(n)}

// const addNums = (n1, n2, logAddition) => {
//     let added = n1 + n2;
//     logAddition(added);
// }

// addNums(5, 10, logNumber);



// Why do we use promises?

// 9. We use promises when we want to perform a task that can take an unknown amount of time to process. When using promises to perform these asynchronous actions, we can temporarily skip passed the promise and perform the next code in the file while we wait for the promise to get data or do something. By using promises we can decrease the amount of time used to execute the code, maximising efficiency


// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// 10. If we have hold of a promise we can use .then to get the response object, or .catch to handle any erros that arise


// What is the DOM?

// 11. DOM stands for document object model



// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

// 12. 
// let countObj = {
//     count: 4,
//     arr: [1, 2, 4, 5],
//     func: function(){
//         this.arr.forEach(n => console.log(n));
//     }
// }

// countObj.func();


// What is NPM? In your brief explanation refer to package.json.

// 13.


// What are Event Listeners? Gives some examples in your response.

// 14. Event listeners allow you to 'listen' to an event or a change in the DOM. If you want certain tasks to perform after a certain event, such as a click of a button, then you use event listeners. An event listener takes as arguments, the event its listening for, and the function to be performed once that event occurs.
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

// 15.
// const numMult = (n1, n2, logNumber) => {
//     let multipliedN = n1*n2;
//     logNumber(multipliedN);
// }

// const logNumber = (n) => {console.log(n)}

// numMult(5, 6, logNumber);


// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 
// const addNum = (n1, n2) => {
//     return n1+n2;
// }

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

// const numsPlusFunct = (n1, n2, add) => {
//     return {number: add(n1, n2), operation: 'addition'};
// }


// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 
// console.log(numsPlusFunct(5, 10, addNum));


// 16.
// What is Express? What does it help us to do?


// 17.
// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

//Synchronous code is code that is executed in the order that it is written. Asynchronous code is code that can occur at a different time than expected because it takes time to execute and recieve a response. JS lets you deal with asynchronous code by using the key term 'await', which will wait for a response before continuing further. 



// 18.
// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
//Fetch is a method that gets some sort of data from an input path, which can be something such as a url or a local image. A fetch will always return a promise, which is why the .then function or await keyword is needed. 
//fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200')
    // .then(resp => resp.json())
    // .then(data => console.log(data))


// 19.
// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
// const southernField = { location: 'upper', crop: 'sorghum', watered: false }
// let warteredBoolean = southernField.watered;
// console.log(warteredBoolean);


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

// "Firstly, the letNum variable is initialized and receives the value of the number 1. Secondly, the myFunc function is invoked. It received the arguments of 10 and a callback function to itself. The myFunc function cascades and the num argument coming in to it is 10 multiplied by the current number continously until the console.log is executed." 



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
// This function returns an object, which can be considered to be an instance of Person.

// c.
// How do you call the sayHi() function?
// harrison.sayHi()



// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log('Hello');
//     }

//     assignHeightAndAge(height, age){
//         this.height = height;
//         this.age = age;
//     }
// }

// jov = new Person('jov');
// jov.assignHeightAndAge(22, 194);
// console.log(jov);
// jov.sayHi()

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object



// 23. 
// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.
// const waitBeforeSum = (n1, n2) => {
//     let sum;
//     setTimeout(console.log('hello'), 4);
//     // console.log(sum);
//     setTimeout()
// }
// waitBeforeSum(10, 10);

// setTimeout(() => console.log('hello'), 4);

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

const fetch = require('node-fetch');


// const getAusFlag = async() => {
//     let response = await fetch('https://restcountries.eu/rest/v2/all');
//     let data = await response.json();

//     let aus = data.filter(country => country.name === 'Australia');
//     console.log(aus[0].flag);

// }

// getAusFlag();


// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// => https://swapi.co/api/films/1/

// const getCharacterNames = async() => {
//     let response = await fetch('https://swapi.co/api/films/1/');
//     let data = await response.json();
//     characters = data.characters;

//     characters.forEach(character => {
//         printName(character);
//     })

// } 

// const printName = async(nameurl) => {
//     characterResp = await fetch(nameurl);
//     characterData = await characterResp.json();
//     console.log(characterData.name);
// }

// getCharacterNames();



// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png