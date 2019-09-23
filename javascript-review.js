// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.
thing = {
    number: 1,
    string: 'words',
    array: [],
    func(arg1, arg2){
        arg1 + arg2
    }
};


// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

class Car {
    constructor(color){
    this.color = color
    this.defaultColor = 'red'
    }
}

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)
const a = 10;
add((arg1)=>{ a + arg1});

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

thing.string
thing['number']

// 5.

// What is JSON? Be clear but concise.

// Json is a language for data files that can be parsed to js and other languages, once parsed you can loop through/call/change now js objects for use/reference in your code, you can also parse js to json to compress data to a more manageble size.

// 6.

// What is a callback?

// to my understanding it is calling a function or object for use in your code and other funtions, call the add function and give in arguments to process, call the add funtion in another so one argument is composed of two already added numbers or call an oject to be made or displayed to the user.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.
function math(arg3, arg4){
    b = arg3 + arg4
    add(console.log(b))
};

// 8.

// Why do we use promises?
// to wait for data to be recived/processed in full before displaying it to the user or useing it in the code. This allows you to display small things on the page, showing loading and aviods looking at a blank screen wondering if their computer has frozen and stops the runing of incomplete data.

// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// I don't know, I was still working with the api stuff... 
// In thinking about it is that the querry and catch an error? I really need to look at this.

// 10.

// What is the DOM?

// "Doe a deer a female deer, ray a drop of golden suuuunnnnn", so sorry umm...
// "oh no, I can feel it just siting their in my brain, sigh... "I'll be back"!!"

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.
const thing1 = {
    count: 0,
    array: [],
    func(){console.log(thing1['count'], thing1['array'])}
}

// 12.

// What is NPM? In your brief explanation refer to package.json.
// okay I really don't know things by name. Note to self make index of terms or flash cards, just somthing!!

// 13.

// What are Event Listeners? Gives some examples in your response.

// event listeners are well waiting for events to happen in order to do some action, such as on click show message or on hover scale up.

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

function numMult(num1, num2){num1 * num2};
//  I don't know, I need to see it.
function numMult(num1, num2, callback){result = num1 * num2, callback = result};//??????
function numMult(num1, num2, callback){function callback(num1, num2){num1 * num2}};//???


// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 
function addNum(num1, num2){num1 + num2}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 
function numsPlusFunct(num1, num2, func){
    func(num1, num2)
    return object = {
        value: func(num1, num2),
        string: "somthing string like"
    }
};

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 
numsPlusFunct(1, 2, addNum())
// 16.

// What is Express? What does it help us to do?

// Get things Quickly???

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// synchronous is code that runs one after another down the code, asynchronous dosen't. To deal with this you can use a promise meaning the block of asynchronous code has to wait for somthing(take your choice of things) before it can run.

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

//  fetch is used to get json from some where and return it to be processed.


// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
const watered = southernFeild['watered']

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

// ... a number and a callback, thirdly the myFunc function takes the initialized newNum and gives it a new value that equals it multipled by the myFunc argument num, then it asigns newNum to the callback. fithly myFunc is being called with the number 10 and undifined function sum as arguments. sixly somthing unknown to me is happen I think thanks to 'sum' until it results in console loging sum which should return null reason being, for my sanity.


// 21.

// a. Uncomment the code from below

// // this is a factory function, it's another syntax for creating objects similar to the constructor function syntax

function Person(name) {
  function sayHi() {
    console.log('hello')
  }
  return {
    name,
    sayHi
  }
}

const harrison = Person("harrison")

// b. 
// What does this function return?

// harrison,hello

// c.
// How do you call the sayHi() function?

harrison['sayHi']//?? it's a trick isn't it, I bet it dosen't work...

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

class Person(name) {
    
}

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