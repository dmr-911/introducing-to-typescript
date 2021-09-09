"use strict";
const salary = 45000;
const numbers = [3333, 44444, 5555, 6666];
const friedns = ['mahady', 'Jhankar', 'roshem'];
numbers[0] = 10500;
numbers.push(32001);
// numbers.push('32001');
friedns.push('riad');
// friedns.push(8892);
let number1 = 0;
for (const number of numbers) {
    if (number > number1) {
        number1 = number;
    }
}
