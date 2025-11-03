# 🔄 Chapter 3: Operators

# 🔧 What are Operators?
Operators are special symbols or keywords in JavaScript used to perform operations on values
(operands).
You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
Think of them as the verbs of your code — they act on data.

# ➕ Arithmetic Operators
Used for basic math.
js
+ // addition
- // subtraction
* // multiplication
/ // division
% // modulus (remainder)
** // exponentiation (power)

Example:
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8

# 🧮 Assignment Operators
Assign values to variables.

= // assigns value
+= // a += b => a = a + b
-= // a -= b
*=, /=, %=

Example:
let score = 5;
score += 2; // score = 7

# 🧾 Comparison Operators
Used in condition checks.

== // equal (loose)
=== // equal (strict – value + type)
!= // not equal (loose)
!== // not equal (strict)
> < >= <=

Example:
console.log(5 == "5"); // true
console.log(5 === "5"); // false

# ✅ Logical Operators
Used to combine multiple conditions.

&& // AND – both must be true
|| // OR – either one true
! // NOT – negates truthiness

Example:
let age = 20, hasID = true;
if (age >= 18 && hasID) {
console.log("Allowed");
}


# 🌀 Unary Operators
Used on a single operand.

+ // tries to convert to number
- // negates
++ // increment
-- // decrement
typeof // returns data type

Example:
let x = "5";
console.log(+x); // 5 (converted to number)


# ❓ Ternary Operator (Conditional)
Shorthand for if...else

condition ? valueIfTrue : valueIfFalse

Example:
let score = 80;
let grade = score > 50 ? "Pass" : "Fail";


# 🧪 typeof Operator

typeof 123 // "number"
typeof "hi" // "string"
typeof null // "object" (JS bug)
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"


# 🧠 Mindset
Operators make logic happen.
They help you make decisions, combine values, and create expressions.
Try to:
Use === instead of == to avoid type bugs.
Use ternary for quick decisions, not complex ones.
Think in truthy/falsy when using && , || , ! .



# ❓ Common Confusions
"5" + 1 is "51" (string concat), but "5" - 1 is 4 (number subtract)
!!value is a quick trick to convert anything into a boolean
Pre-increment ( ++i ) vs post-increment ( i++ ) return different results


