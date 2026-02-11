const score = 400
console.log(score)

const balance = new Number(1000)
console.log(balance)

const othreNum = 23.233
console.log(othreNum.toFixed(1)) // toFixed is a method of number object that rounds the number to specified decimal places
console.log(othreNum.toPrecision(2)) // toPrecision is a method of number object that formats the number to specified length

const hundred = 10000000000
console.log(hundred.toLocaleString()) // toLocaleString is a method of number object that formats the number according to the locale
console.log(hundred.toLocaleString("en-US")) // toLocaleString can also take a locale as an argument to format the number according to that locale
console.log(hundred.toLocaleString("en-IN")) // toLocaleString can also take a locale as an argument to format the number according to that locale


//NaN (Not a Number) is a special value in JavaScript that represents an invalid number. It is the result of an operation that cannot produce a valid number, such as dividing zero by zero or trying to parse a non-numeric string as a number.

console.log(0 / 0);
console.log(Number("hello")); // NaN
console.log(isNaN(NaN));
console.log(isNaN("hello")); // true because "hello" cannot be converted to a number


//+++++++++++++++++++++++MATH OBJECT+++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.abs(-5));

Math.random() // returns a random number between 0 and 1
Math.random() * 10 // returns a random number between 0 and 10
Math.floor(Math.random() * 10) // returns a random integer between 0 and 9
Math.ceil(Math.random() * 10) // returns a random integer between 1 and 10
Math.round(Math.random() * 6) // returns a random integer between 0 and 6 (inclusive) because Math.round rounds to the nearest integer, so it can round down to 0 or up to 6 depending on the random number generated.


const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1) + min) // returns a random integer between min and max (inclusive) because it generates a random number between 0 and 1, multiplies it by the range (max - min + 1), and then adds the minimum value to shift the range to the desired interval. Finally, Math.floor rounds it down to the nearest integer, ensuring that the result is within the specified range.

console.log(randomNum)