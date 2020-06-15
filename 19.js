// 19.

// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = { 
  location: "upper",
  crop: "sorghum",
  watered: false 
};

let watered = southernField.watered;

console.log(watered);