/*
const myNumber = 30;
const myName = "Hello world";
console.log("connected with ", myName, 'My number is', myNumber);
*/
let number: number = 50;
const myName: string = 'Mizan';
number = 20;
console.log('My name is ', myName, 'and I have ', number, 'taka only');

function add(first:number, second:number = 10) {
    const result = first + second;
    return result;
}
const result = add(2);
console.log(result);

// function multyply(num1: number | string, num2: number | string) {
//     return num1 + num2;
// }

function multyply(num1: number | string, num2: number | string):void {
    console.log(num1, num2);
}
multyply('mizan', 2);

