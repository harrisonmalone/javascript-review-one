// You may NOT use Google. These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const obj1 = {
    name: 'moss',
    age: 24,
    hobby: ['game', 'sports'],
    toString: function() {
      return this.name + ',' + this.age + ',' + [...this.hobby]
    }
  }
  
  // 2.
  
  // Write a constructor function (to create objects) that takes one argument. It should use that argument to set the value of the first attribute of the object. There should be a second attribute that stores the value ‘red’.
  
  // class Obj {
  //   constructor(first) {
  //     this.first = first
  //     this.second = 'red'
  //   }
  // }
  function Obj(first) {
    return { first: first, second: 'red' }
  }
  
  // Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along.
  
  // 3.
  
  // Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)
  
  const NAME = 'Moss'
  function show() {
    console.log(NAME)
  }
  // show()
  // 4.
  
  // What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).
  // 5.
  // console.log(obj1.name)
  // console.log(obj1['name'])
  
  // What is JSON? Be clear but concise.
  let q6 =
    'JSON is javascript object notation is the way javascript display object'
  // 6.
  
  // What is a callback?
  // 7.
  let q7 =
    'Callback are function that is passing as an argument and to be call later on it process of it caller function'
  
  // Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.
  // 8.
  const time2 = num => {
    console.log(num)
    return num * 2
  }
  function q8(a, b, time2) {
    return time2(a + b)
  }
  // console.log(q8(1, 2, time2))
  
  // Why do we use promises?
  // 9.
  const q9 = 'to make javascript run in asychonise way'
  
  // What are the two methods at our disposal if we have hold of a promise? What are the names of the functions that are related to these functions (that are called when the promise is fulfilled or fails).
  // 10.
  const q10 = '.then and .catch'
  
  // What is the DOM?
  // 11.
  const q11 =
    'DOM is like a parent and child directory tree of html element and also refer to how javascript see html page'
  
  // Create an object that has three properties. One property is called ‘count’ and will be set to a number, the second will be set to an array, and the third to a function. This function should simply console.log each of the values of the second property on a new line.
  
  // 12.
  
  const obj2 = {
    count: 0,
    array: ['a', 'b', 'c', 'd', 'e', 'f'],
    toString: function() {
      console.log([...this.array].join('\n'))
    }
  }
  // const obj3 = {
  //   count: 0,
  //   array: ['a', 'b', 'c', 'd', 'e', 'f'],
  //   toString: function() {
  //     this.array.forEach(num => {
  //       console.log(num)
  //     })
  //   }
  // }
  // obj2.toString()
  
  // What is NPM? In your brief explanation refer to package.json.
  // 13.
  let q13 =
    'NPM is node package manager is where all the plugin is uploaded to and since it is all in one place in can be easily download as well as update(changing version) when require'
  
  // What are Event Listeners? Gives some examples in your response.
  
  // 14.
  let q14 =
    'Event listener is providen feature to listen to event that happen in dom such as click,change'
  
  // Define a function called numMult that takes two number arguments and a callback. The function will multiply the two numbers and pass the result to the callback as an argument. Now call numMult and in the callback simply console.log out the argument that has been passed through.
  // 15.
  const q15 = num => {
    console.log(num)
  }
  const numMult = (a, b, c) => {
    return c(a * b)
  }
  // numMult(2, 2, q15)
  // a.
  // Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers.
  const addNum = (a, b) => {
    return a + b
  }
  // b.
  // Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string.
  
  const numsPlusFunct = (a, b, c) => {
    return { first: c(a, b), second: 'String' }
  }
  // c.
  // You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument.
  // console.log(numsPlusFunct(1, 2, addNum))
  
  // 16.
  
  // What is Express? What does it help us to do?
  q16 =
    'not really sure what it really is and what it made for but it must be one of javascript framework to help develper in certain or many circumstance where it would help developer develop app faster and easier '
  // 17.
  
  // What is the difference between synchronous and asynchronous code? Name some ways that JS deals with the issue of asynchronous code.
  q17 =
    'synchronous is like running line by line code with out actaully wait for anycode to actaully finish be for executing next line where asynchronous is part code that can will run after previos are resolve '
  
  // 18.
  
  // What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.
  
  q18 =
    'fecth is a new way to retrive api like AJAX it is both  run asynchronisely but fetch return promise'
  // fetch('api.com').then(res => console.log(res))
  
  // 19.
  // A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.
  const southernField = { location: 'upper', crop: 'sorghum', watered: false }
  let { location, crop, watered } = southernField
  // console.log(location, crop, watered)
  
  // 20.
  // a.
  // Uncomment the code below.
  // let newNum = 1
  // const myFunc = (num, callback) => {
  //   newNum *= num
  //   callback(newNum)
  // }
  // myFunc(10, sum => {
  //   myFunc(10, sum => {
  //     myFunc(10, sum => {
  //       console.log(sum)
  //     })
  //   })
  // })
  // b.
  // Explain in your own words how this code works. For example you could start with something like:
  
  // "Firstly, newNum is assign by 1 then the myFunc is initialized . Secondly, the myFunc function is invoked. It received the arguments of 10 and it call back function then newNum = newNum * the num pass and argument which is 10 then a callback function is run taking that newNum and so on (the second call Myfunc is run again)"
  
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
  
  // const harrison = Person('harrison')
  
  // b.
  // What does this function return?
  // { name: 'harrison', sayHi: [Function: sayHi] }
  
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
      this.sayHi = this.sayHi
    }
    sayHi() {
      console.log('hello')
    }
  }
  
  // const harrison = new Person('harrison')
  // console.log(harrison)
  // harrison.sayHi()
  
  // b.
  // Implement another instance method for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object
  
  // console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object
  
  class Person2 extends Person {
    constructor(name, age, height) {
      super(name)
      this.age = age
      this.height = height
    }
  }
  const harrison = new Person2('harrison', 10, 2)
  // // console.log(harrison)
  // harrison.sayHi()
  // 23.
  
  // Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.
  
  function waitBeforeSum(a, b) {
    return new Promise(() => {
      setTimeout(() => {
        return a + b
      }, 4)
    })
  }
  
  // What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.
  // console.log(waitBeforeSum(1, 2))
  
  cosnt q23 = () => {
  console.log(await waitBeforeSum(1, 2))
  }
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
  