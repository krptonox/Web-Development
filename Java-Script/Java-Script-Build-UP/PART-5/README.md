# JavaScript Loops:
This guide provides a quick revision of all looping constructs in JavaScript. Loops are fundamental for executing a block of code repeatedly, saving you from writing the same code over and over.

# 1. The for Loop
Use the for loop when you know how many times you want the loop to run. It's the most common loop for simple, counted iterations.

Its structure consists of three parts, separated by semicolons:

Initialization: Runs once at the very beginning (e.g., let i = 0).

Condition: Checked before each iteration (e.g., i < 5). If true, the loop runs.

Final Expression: Runs after each iteration (e.g., i++).

Example
JavaScript

// This loop will run 5 times (for i = 0, 1, 2, 3, 4)
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4

# 2. The while Loop
Use the while loop when you want to loop as long as a condition is true, but you don't know the exact number of iterations beforehand.

The condition is checked before the code block runs. If the condition is false initially, the loop will never run.

Example
JavaScript

let count = 0;
while (count < 3) {
  console.log("Count is " + count);
  count++; // Don't forget to change the condition, or you'll have an infinite loop!
}

// Output:
// Count is 0
// Count is 1
// Count is 2

# 3. The do...while Loop
This is a variant of the while loop. The key difference is that the code block runs first, and the condition is checked after.

This guarantees that the loop will run at least once, even if the condition is false from the start.

Example
JavaScript

let num = 5;

do {
  console.log("Number is " + num);
  num++;
} while (num < 3); // Condition is false, but the loop ran one time.

// Output:
// Number is 5

# 4. Modern Iteration: for...of (ES6)
This is the modern, preferred way to loop over iterables like Arrays, Strings, Maps, and Sets. It iterates directly over the values of the collection, making it very clean and readable.

Example (Array)
JavaScript

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// apple
// banana
// cherry
Example (String)
JavaScript

const greeting = "Hi";

for (const char of greeting) {
  console.log(char);
}

// Output:
// H
// i

# 5. Iterating Objects: for...in
To loop over the properties of an Object, you use the for...in loop. It iterates over the keys (or property names) of the object.

Example
JavaScript

const user = {
  name: "Alex",
  age: 30,
  isAdmin: true
};

for (const key in user) {
  // 'key' is the string "name", then "age", then "isAdmin"
  // user[key] gets the value associated with that key
  console.log(key + ": " + user[key]);
}

// Output:
// name: Alex
// age: 30
// isAdmin: true

# 🚨 for...in vs. for...of: Key Interview Point
Loop	Use For	Iterates Over...	Example
for...of	Arrays, Strings (Iterables)	The Values ("apple")	for (const val of arr)
for...in	Objects	The Keys ("name")	for (const key in obj)

Warning: Do not use for...in on an Array. It iterates over the indexes as strings ("0", "1",...) and can include other properties added to the array's prototype chain, leading to bugs.

# 6. Loop Control
You can control the flow of a loop from within its code block.

# break
The break statement exits the loop immediately, regardless of the condition.

JavaScript

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break; // Stop the loop entirely
  }
  console.log(i);
}
// Output: 0, 1, 2


# continue
The continue statement skips the current iteration and moves to the next one.

JavaScript

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip this iteration
  }
  console.log(i);
}
// Output: 0, 1, 2, 4  (3 is skipped)