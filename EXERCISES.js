const prompt = require('prompt-sync')();

let out = `Exercise 1: Write loop to output triangle\n`;
for (let i = `#`; i <= `#######`; i += `#`) out += i + `\n`;

out += `Exercise 2: Print 1-100, except print "Fizz" for / 3, "Buzz" for / 5 but not 3, & "FizzBuzz" for both / 5 & 3\n`;
for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) out += `FizzBuzz\n`; // Same as multiple of 3 & 5
    else if (i % 5 === 0) out += `Buzz\n`;
    else if (i % 3 === 0) out += `Fizz\n`;
    else out += i + `\n`;
}

console.log(out + `Exercise 3: Print variable grid w/ space separators`);
out = ``;
let width = Number(prompt(`Enter grid width: `)), height = Number(prompt(`Enter grid height: `));
if (!isNaN(height) && !isNaN(width)) for (let rows = 0; rows < height; rows++) {
    if (rows % 2 === 0) for (cols = ``; cols.length < width; cols) {
        if (cols.length % 2 === 0) cols += ` `;
        else cols += `#`;
    } else for (cols = ``; cols.length < width; cols) {
        if (cols.length % 2 === 0) cols += `#`;
        else cols += ` `;
    }
    out += cols + `\n`;
}

out += `Exercise 4: Print numbers in ascending order\nAll numbers 1-50\n`;
for (i = 1; i <= 50; i++) out += i + `\n`;
out += `All whole numbers < 25\n`;
for (i = 0; i < 25; i++) out += i + `\n`;
out += `All odd whole numbers < 25\n`;
for (i = 0; i < 25; i++) if (i % 2 !== 0) out += i + `\n`;
out += `All whole numbers / 3 < 25\n`;
for (i = 0; i < 25; i++) if (i % 3 === 0) out += i + `\n`;
out += `Multiples of 5 from 0-50\n`;
for (i = 0; i <= 50; i++) if (i % 5 === 0) out += i + `\n`;
out += `Multiples of 2 or 3, but not both, up to 50\n`;
for (i = 0; i <= 50; i++) if (i % 6 !== 0 && (i % 2 === 0 || i % 3 === 0)) out += i + `\n`; // Multiple of 6: same as 2 & 3
out += `Multiples of 2 & 3, but not 12, up to 100\n`;
for (i = 0; i <= 100; i++) if (i % 6 === 0 && i % 12 !== 0) out += i + `\n`;

out += `Exercise 5: Print numbers in descending order\nAll numbers 1-50\n`;
for (i = 50; i >= 1; i--) out += i + `\n`;
out += `All whole numbers < 25\n`;
for (i = 24; i >= 0; i--) out += i + `\n`;
out += `All odd whole numbers < 25\n`;
for (i = 24; i >= 0; i--) if (i % 2 !== 0) out += i + `\n`;
out += `All whole numbers / 3 < 25\n`;
for (i = 24; i >= 0; i--) if (i % 3 === 0) out += i + `\n`;
out += `Multiples of 5 from 0-50\n`;
for (i = 50; i >= 0; i--) if (i % 5 === 0) out += i + `\n`;
out += `Multiples of 2 or 3, but not both, up to 50\n`;
for (i = 50; i >= 0; i--) if (i % 6 !== 0 && (i % 2 === 0 || i % 3 === 0)) out += i + `\n`;
out += `Multiples of 2 & 3, but not 12, up to 100\n`;
for (i = 100; i >= 0; i--) if (i % 6 === 0 && i % 12 !== 0) out += i + `\n`;

out += `Exercise 6: Multiplication tables\nMultiplication table of 3, from 1-10, in ascending order\n`;
for (i = 1; i <= 10; i++) out += `3 * ` + i + ` = ` + i * 3 + `\n`;
out += `Multiplication table of 17, from 1-10, in ascending order\n`;
for (i = 1; i <= 10; i++) out += `17 * ` + i + ` = ` + i * 17 + `\n`;

console.log(out + `Exercise 7: Calculator w/ options to add, subtract, multiply, divide & quit\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n0. Quit`)
while (true) {
    let opt = Number(prompt(`Enter option: `));
    if (isNaN(opt) || opt < 0 || opt > 4) console.log(`Invalid option.`);
    else if (opt === 0) break;
    else {
        let x = Number(prompt(`Enter first number: `)), y = Number(prompt(`Enter second number: `));
        if (isNaN(x) || isNaN(y)) console.log(`Invalid input(s).`);
        else if (opt === 1) console.log(x, `+`, y, `=`, x + y);
        else if (opt === 2) console.log(x, `-`, y, `=`, x - y);
        else if (opt === 3) console.log(x, `*`, y, `=`, x * y);
        else console.log(x, `/`, y, `=`, x / y);
        break;
    }
}