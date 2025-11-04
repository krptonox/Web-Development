# FUNCTION

Fuction are used to create conditions which helps to use and store a pice of code or instructions which can you  be further you used in various way and can be used again and again ehen called..


# FUNCTION

Fuction are used to create conditions which helps to use and store a pice of code or instructions which can you  be further you used in various way and can be used again and again ehen called..



🧠 What are Functions?
Functions are blocks of reusable logic.
Instead of repeating the same task again and again, wrap it in a function and reuse it with
different inputs.
Think of a function like a vending machine:
Input: you give money + item code
Output: it gives you the item
Logic: hidden inside

# Function Declarations

function greet() {
console.log("Welcome to Sheryians!");
}
greet();

You define it once, then call it whenever needed.


🧾 Parameters vs Arguments

function greet(name) {
console.log("Hello " + name);
}
greet("Harsh");

name is a parameter
"Harsh" is the argument you pass

🌀 Return Values

function sum(a, b) {
return a + b;
}
let total = sum(5, 10); // total is 15


return sends back a result to wherever the function was called
After return , function exits


🧰 Function Expressions

const greet = function () {
console.log("Hello!");
};

Functions stored in variables
Cannot be hoisted (you can’t call them before they’re defined)



🏹 Arrow Functions

const greet = () => {
console.log("Hi!");
};


Cleaner syntax
No own this , no arguments object


🧂 Default + Rest + Spread

function multiply(a = 1, b = 1) {
return a * b;
}
function sum(...nums) {
return nums.reduce((acc, val) => acc + val, 0);
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread


a = 1 → default parameter
...nums → rest parameter
...nums (in call) → spread operator


🎯 First-Class Functions
JavaScript treats functions as values:
Assign to variables
Pass as arguments
Return from other functions

function shout(msg) {
return msg.toUpperCase();
}
function processMessage(fn) {
console.log(fn("hello"));
}
processMessage(shout);


🧠 Higher-Order Functions (HOF)
Functions that accept other functions or return functions.

function createMultiplier(x) {
return function (y) {
return x * y;
};
}
let double = createMultiplier(2);
console.log(double(5)); // 10


🔐 Closures & Lexical Scope
Closures = when a function remembers its parent scope, even after the parent has finished.

function outer() {
let count = 0;
return function () {
count++;
console.log(count);
};
}
let counter = outer();
counter(); // 1
counter(); // 2

Even after outer is done, counter still remembers count .



⚡ IIFE – Immediately Invoked Function Expression

(function () {
console.log("Runs immediately");
})();

Used to create private scope instantly.



🚀 Hoisting: Declarations vs Expressions

hello(); // works
function hello() {
console.log("Hi");
}

greet(); // error
const greet = function () {
console.log("Hi");
};

Declarations are hoisted
Expressions are not


⚠️ Common Confusions
Arrow functions don’t have their own this
You can’t break out of forEach
Closures often trap old variable values
Return vs console.log – don't mix them up


🧠 Mindset
Functions are your logic blocks + memory holders (via closure).
They keep your code clean, DRY, and reusable.


🧪 Practice Zone
. Write a BMI calculator function
. Create a greet function with default name
. Sum all numbers using rest parameter
. Create a closure counter function
. Write a function that returns another function
. Use a function to log even numbers in array
. Create a pure function to add tax                                                                                                                                                  
. Use IIFE to show welcome message
. Write a discount calculator (HOF style)
. Make a toUpperCase transformer using HOF