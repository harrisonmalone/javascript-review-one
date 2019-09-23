// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

// 2.

// Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’. 

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along. 

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// 5.

// What is JSON? Be clear but concise.

const json = "JavaScript Object Notation is a condesed javascript based storage file-format that stores data in objects (hashes). Javascript has a variety of methods specifically relating to making and reading json files" 

// 6.

// What is a callback?

const callback = "A callback is when a function is called as if it was an annonymous function from inside some other javascript block."

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

const print = (arg) => {
    console.log(arg)
}

const myFunction = (num1, num2, callback) => {
    const answer = num1 + num2;
    callback(answer)
}

myFunction(1,2,print)

// 8.

// Why do we use promises?



// 9.

// What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).

// 10.

// What is the DOM?

// 11.

// Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.

// 12.

// What is NPM? In your brief explanation refer to package.json.

const npm = "A npm is a dependency which can be installed using 'npm install'. In whichever project an npm is called, it will create a package.json file which stores all the details for every subsequent npm called to the file."

// 13.

// What are Event Listeners? Gives some examples in your response.

const eventListener = "An Event Listener is a tool that will activate a javascript function after a certain 'action' has been recognised, such as the push of a button, or the release of said button. It is used in front end work to call some function based upon the users actions."

// 14.

// Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.

const numMult = (num1, num2, callback) => {
    const answer = num1 * num2;
    callback(answer)
}

numMult(2,4,print)

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers.

const addNum = (num1, num2) => {
    return num1 + num2
}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string.

const numsPlusFunct = (num1, num2, callback) => {
    const object = {
        value: callback(num1,num2),
        string: String(callback(num1,num2))
    }
    return object
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument.

print(numsPlusFunct(3,4,addNum))

// 16.

// What is Express? What does it help us to do?

// 17.

// What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code. 

// 18.

// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = {
    location: "upper",
    crop: "sorghum", 
    watered: false
}

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

const explaination = "Firstly, the letNum variable is initialized and receives the value of the number 1, and is given the properties to change it's value. Secondly, the myFunc function is invoked. It received the arguments of a number (10) and an annonymous function that calls myFunc once more. This second myFunc does the same, and the thrid myFunc's annonymmous function simply calls a console.log on the sum. In this example, 'sum' is the argument in every callback, and in myFunc we see the callback is newNum. Hence, after every myFunc calling, 10 is multiplied to the everincreasing newNum, and after this occuring three times, the final result is called" 

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

const functionReturn = "This function returns a keyless object labeling the persons name and running the funtion sayHi() which somply prints the word 'hello'."

// c.
// How do you call the sayHi() function?

// harrison.sayHi()

// 22. 

// a. 
// Using the code from above as a template, implement the same functionality using the class sugar syntax 
// Note that you'll need to comment out the code from above for this to work

const Person = (name) => {
    const sayHi = () => {
        console.log(`Hello, I'm ${name}`)
    }
    return {
        name,
        sayHi
    }
}

const harrison = Person("harrison")
harrison.sayHi()

// b. 
// Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

const nathan = Person("Nathan")
console.log(nathan)


// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// 23. 

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

// const waitBeforeSum = (num1, num2) => {
//     const printNum = () => {
//         console.log(addNum(num1, num2))
//     }
//     setTimeout(printNum, 4000)
// }

// waitBeforeSum(2,3)

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

const waitBeforeSum = (num1, num2) => {
    const printNum = () => {
        console.log(addNum(num1, num2))
    }
    const returnNum = () => {
        return addNum(num1, num2)
    }
    setTimeout(printNum, 4000)
    setTimeout(returnNum, 4000)
}

waitBeforeSum(2,3)

// When we invoke waitBeforeSum we'll have two different options to avoid getting a pending promise. What are these 2 options?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

const accessSum = () => {
    waitBeforeSum
}

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

// 24. 

// a. 
// run the following commands
// npm init -y
// npm install node-fetch

// b. 
// Using the following API endpoint access the Australian flag svg link and console.log it

const fetch = require('node-fetch')
fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        const resp = response.json()
        return resp;
    })
    .then((contries) => {
        const aus = contries.find((country) => {
            console.log(country.name)
            country.name == 'Australia'
        })
        console.log(aus)
        return contries[1]
    })
    .catch(err => console.log(err))


// c.
// Using the following API endpoint console.log all the characters names, you'll need to perform a nested fetch 
// const films = require('https://swapi.co/api/films/1/')

// 25. 

// a. 
// In this directory create a new folder named dom

// b.
// Inside of the dom directory create these two files index.html and script.js

// c.
// Append the following elements to the body of the index.html using javascript, it should look like this https://dl.dropboxusercontent.com/s/qudmuyn8tpvyhtc/javascript_site.png