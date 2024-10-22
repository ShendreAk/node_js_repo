console.log('Starting with Node.js today');

const fs = require('fs');
let x = 10;
let y = 20;

let sum = x + y;
let product = x * y;

let data = `sum of the variables is ${sum} and the product of the variables is ${product}`

console.log(data);

fs.writeFile('firstOutput.txt', data, (error)=>{if (error) throw error;
  else console.log(`data added to file`)
}); 