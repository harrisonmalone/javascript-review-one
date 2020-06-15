// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers. 

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string. 

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument. 

function addNum(x, y) {
  return x + y
};

function numsPlusFunct(x, y, funct) {
  return {
    firstProperty: (funct(x, y)),
    secondProperty: "",
  }
};

console.log(numsPlusFunct(2,4,addNum));

