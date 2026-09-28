const prompt = require('prompt-sync')();

let num = Number(prompt(`Enter number: `));
if (isNaN(num)) console.log(`Invalid input.`);
// else console.log(num, `^ 2 =`, num ** 2);

else if (num <= 10) console.log(num, `is small.`);
else if (num <= 100) console.log(num, `is medium-size.`);
else console.log(num, `is large.`);