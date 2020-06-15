// 16.

// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it

const fs = require('fs');s

let content = fs.readFileSync('./16.txt', {encoding:'utf8'});

console.log(content);