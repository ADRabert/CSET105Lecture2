const prompt = require('prompt-sync')();
/* let value = prompt(`Enter value: `);
console.log(`You entered:`, value); */

// console.log(`Max of 2 & 4 is:`, Math.max(2, 4) + `\nMin of 2 & 4 + 100 is:`, Math.min(2, 4) + 100 + `\nAverage of 37, 69, 42, 87: ${(37 + 69 + 42 + 87) / 4}`);

/* Practice
let firstName = prompt(`Enter first name: `), lastName = prompt(`Enter last name: `);
console.log(`Welcome to the program,`, firstName, lastName + `.`);
let petName = prompt(`Enter your pet's name: `);
console.log(petName, `is a cute name!`); */

let num1 = Number(prompt(`Enter first number: `)), num2 = Number(prompt(`Enter second number: `));
console.log(num1, `+`, num2, `=`, num1 + num2);