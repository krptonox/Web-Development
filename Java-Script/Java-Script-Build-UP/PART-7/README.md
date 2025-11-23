🧠 What is an Array?
An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2...).
Arrays help you store multiple values in a single variable — numbers, strings, or even
objects/functions.

️ Creating & Accessing Arrays

Indexing starts from 0
You can access, update, or overwrite values by index

let fruits = ["apple", "banana", "mango"];


let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80; // Update index 2


⚙️ Common Array Methods
🧱 Modifiers (Change original array)

🔍 Extractors (Don't modify original array)

🔄 Iteration Methods
map()
Returns a new array with modified values.

filter()

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add to start
arr.splice(1, 2); // Remove 2 items starting at index 1
arr.reverse(); // Reverse order


let newArr = arr.slice(1, 3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default


let prices = [100, 200, 300];
let taxed = prices.map(p => p * 1.18);

Filters out elements based on a condition.

reduce()
Reduces the array to a single value.

forEach()
Performs an action for each element (but returns undefined).

find(), some(), every()

✂️ Destructuring & Spread
js
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0);


let total = nums.reduce((acc, val) => acc + val, 0);


nums.forEach(n => console.log(n));

nums.find(n => n > 2); // First match
nums.some(n => n > 5); // At least one true
nums.every(n => n > 0); // All true


let [first, second] = ["a", "b", "c"];
let newArr = [...nums, 99]; // Spread to copy & add
28/06/2025, 15:10 Complete JS Course Syllabus



⚠️ Common Confusions
splice changes original array, slice does not
forEach vs map : map returns a new array
sort() converts values to strings unless compareFn is provided:

Use:

🧠 Mindset
Arrays are structured, transformable data.
You loop over them, transform them, filter them, or reduce them — all to control what shows up
in your UI or logic.