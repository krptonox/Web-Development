# 🧠 Chapter 2: Data Types + Type System


# 📦 What Are Data Types?
>>>In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.
There are two categories:

Primitive types – stored directly.
Reference types – stored as memory references.


# Primitive Data Types
. String → Text
"hello" , 'Sheryians'

. Number → Any numeric value
3 , -99 , 3.14

. Boolean → True or false
true , false

. Undefined → Variable declared but not assigned
let x; → x is undefined

. Null → Intentional empty value
let x = null;

. Symbol → Unique identifier (rarely used)

. BigInt → Very large integers
123456789012345678901234567890n


# Reference Data Types
>>Object → { name: "Harsh", age: 26 }

>>Array → [10, 20, 30]

>>Function → function greet() {}
These are not copied directly, but by reference.

# Dynamic typing-
In js there is no static typing there is Dynamic typing means yhou can change data , because of dynamic data type

In JS we don;t declare data type while declaring a variable and data type can be change afterward.


# 🔍 typeof Operator
Used to check the data type of a value:

typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"


# 🔁 Type Coercion (Auto-Conversion)
JavaScript auto-converts types in some operations:

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN


# 🚨 Loose vs Strict Equality
Always prefer === for accurate comparisons.

== compares value with type conversion
=== compares value + type (no conversion)

5 == "5" // true
5 === "5" // false


# 🧪 NaN – Not a Number

typeof NaN // "number"

Even though it means “Not a Number”, NaN is actually of type number .
This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
just an invalid one.


# 🔦 Truthy and Falsy Values
Falsy values:
false , 0 , "" , null , undefined , NaN
Everything else is truthy, including:
"0" , "false" , [] , {} , function(){}

Example: 
if ("0") {
console.log("Runs"); // "0" is a non-empty string = truthy
}

# 🧠 Mindset
JavaScript will often auto-convert types behind the scenes.
Always stay aware of what data type you’re working with.

❓ Common Confusions
typeof null is "object" — this is a bug.
undefined means the variable was never assigned.
null means you intentionally set it to "nothing".
'5' + 1 is "51" but '5' - 1 is 4 .


# 🧪 Practice Zone
. Predict the output:

. Check types:

. Truthy or Falsy?

console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);


console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);


. Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
. Compare with loose vs strict:
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy


console.log(5 == "5"); // ?
console.log(5 === "5"); // ?



