# Variables and Declaration

# Imp Ques 1- Why var leaks outside block but let does'nt.
# Ans [
if (true) {
    var a = 1; //functional scoped
    let b = 2; //braces scoped
}
console.log(a);  // true 
console.log(b);  // false (refernce error)
]

# Imp Ques 2- Why const allows changing object propperties.
# Ans [
    const person = { nmae: "Harsh"};
    person.name = "Sharma"; //Allowed
    person = {} //Not Allowed because can not reassign new value but can update in const.
]

# 🧠 What are Variables?
Variables are containers that hold data.
They help us store, reuse, and update information in JavaScript — from simple values like
numbers to complex data like arrays and objects.
Think of a variable as a box with a name on it. You can put something inside it (a value), and later
check or change what's inside.
In JavaScript, you create these boxes using keywords: var , let , or const .

# 🧪 var, let, and const – Line-by-Line Comparison

# 🧓 var – Old and risky
Scoped to functions, not blocks
Can be redeclared and reassigned
Hoisted to the top with undefined value


js
var score = 10;
var score = 20; // OK

# let – Modern and safe
Scoped to blocks ( {} )

let age = 25;
age = 30; // ✅
let age = 40; // ❌ Error (same block)

Can be reassigned but not redeclared
Hoisted, but stays in the Temporal Dead Zone (TDZ)

# 🔐 const – Constant values
Scoped to blocks
Cannot be reassigned or redeclared
Value must be assigned at declaration
TDZ applies here too

👉 But: If const holds an object/array, you can still change its contents:

# 🔥 Scope in Real Life
Block Scope → Code inside {} like in loops, if , etc.
Function Scope → Code inside a function
let and const follow block scope.
var ignores block scope — which leads to bugs.
js

{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError


# 🧨 Hoisting
---> Ek variable ko jab js mein banate hai to vo do hiso mein toot jata hai and uska declare part upar chala jata hai and uska intilization part neeche reh jata hai

JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.
But:
var is hoisted and set to undefined
let and const are hoisted but not initialized — so accessing them early gives
ReferenceError



# ⚠️ Common Confusions (JS Reality Checks)
(1) const doesn't make things fully constant. It protects the variable, not the value.

(2) var is outdated — it's better to use let and const .

(3) let and const behave similarly, but const gives more safety — use it when you're not
planning to reassign.

# 🧠 Mindset Rule
Use const by default. Use let only when you plan to change the value.
Avoid var — it belongs to the past.

# Object.freeze

Object.freeze() is a built-in JavaScript method that makes an object immutable. Once an object is "frozen," you can no longer change it in any way.

This method provides a high level of integrity by locking the object's structure and values. It returns the same object that was passed into it, now in a frozen state.

What a Frozen Object Prevents
When you freeze an object, you are prevented from doing the following:

Adding new properties: You cannot add any new keys to the object.

Deleting existing properties: You cannot remove any existing keys from the object.

Changing existing property values: You cannot assign a new value to an existing property.

Changing property descriptors: You cannot change the configurability or enumerability of properties.

Any attempt to modify a frozen object will either fail silently or, if you are in strict mode, throw a TypeError.

Basic Example
Here’s a simple demonstration:

JavaScript

'use strict'; // Using strict mode to see errors

const user = {
  name: 'Alex',
  age: 30
};

// Freeze the object
Object.freeze(user);

try {
  // 1. Attempt to change a value
  user.name = 'Jamie'; // Throws TypeError

} catch (e) {
  console.error(e); 
  // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
}

try {
  // 2. Attempt to add a property
  user.location = 'USA'; // Throws TypeError

} catch (e) {
  console.error(e);
  // TypeError: Cannot add property location, object is not extensible
}

try {
  // 3. Attempt to delete a property
  delete user.age; // Throws TypeError

} catch (e) {
  console.error(e);
  // TypeError: Cannot delete property 'age' of #<Object>
}

// The object remains unchanged
console.log(user); // { name: 'Alex', age: 30 }
Important: Object.freeze() is Shallow
A crucial point to remember is that Object.freeze() performs a shallow freeze. This means it only freezes the immediate properties of the object itself.

If one of those properties is another object (like a nested object or an array), that nested object is not frozen and can still be modified.

Shallow Freeze Example
JavaScript

const userProfile = {
  id: 1,
  details: {
    theme: 'dark',
    notifications: true
  },
  tags: ['dev', 'js']
};

// Freeze the top-level object
Object.freeze(userProfile);

// ✅ This IS allowed:
// You can modify the nested object's properties
userProfile.details.theme = 'light'; 

// ✅ This IS also allowed:
// You can modify the nested array
userProfile.tags.push('react');

// ❌ But this is NOT allowed:
// You cannot reassign the 'details' property itself
try {
  userProfile.details = { theme: 'light' }; // Throws TypeError
} catch (e) {
  console.error('Failed to reassign property');
}

console.log(userProfile);
/*
Output:
{
  id: 1,
  details: { theme: 'light', notifications: true }, // 'theme' was changed
  tags: [ 'dev', 'js', 'react' ] // 'react' was added
}
*/
To make an entire object and all its nested objects immutable, you would need to create a "deep freeze" function that recursively freezes every object and array within the main object.