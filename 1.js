// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

let object1 = {
  number: 10,
  string: "test",
  array: [1,2,3],
  shout: function() {
    console.log(this.number);
  },
};

object1.shout();