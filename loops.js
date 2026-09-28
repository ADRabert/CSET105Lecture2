/* const prompt = require('prompt-sync')();

console.log(1 + `\n` + 2 + `\n` + 3 + `\n` + 4 + `\n` + 5);

let num = Number(prompt(`Enter start value: `)), end = Number(prompt(`Enter end value: `));
while (!isNaN(num) && !isNaN(end)) {
    if (num <= end) for (num; num <= end; num++) console.log(num);
    else for (num; num >= end; num--) console.log(num);
    // else if (num < end) while (num <= end) console.log(num++);
    // else while (num >= end) console.log(num--);
    num = Number(prompt(`Enter start value: `)), end = Number(prompt(`Enter end value: `));
}

for (let num = 0; num <= 10; num += 2) {
    console.log(num);
    if (num == 6) break;
}

const outer = Number(prompt(`Enter outer value: `)), inner = Number(prompt(`Enter inner value: `));
if (isNaN(outer) || isNaN(inner)) console.log(`Invalid input(s).`);
else for (let o = 0; o <= outer; o++) for (i = 0; i <= inner; i++) console.log(`o =`, o + `, i =`, i);

Practice */
for (let o = 5; o <= 10; o++) for (i = 1; i <= 5; i++) console.log(`o =`, o + `, i =`, i);