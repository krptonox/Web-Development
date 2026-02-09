const accountId = 154332
let accountEmail  = "knox@gmail.com"
var accountPassword = "12132"
accountCity = "Japiur"


console.table([accountId, accountEmail, accountPassword, accountCity])


// Scope — the MOST IMPORTANT concept
// 🔹 var → Function Scope (❌ dangerous)
// 🔹 let → Block Scope (✅ safe)
// 🔹 const → Block Scope (✅ safest)

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError



// Hoisting — what happens “behind the screen”

// JavaScript does not run line by line.

// It has two phases:

// 1. Memory Creation Phase

// 2. Execution Phase

//🔴 var hoisting
console.log(x); // undefined
var x = 10;


var x;        // memory allocated → undefined
console.log(x);
x = 10;


//let and const hoisting (Temporal Dead Zone)
console.log(y); // ❌ ReferenceError
let y1 = 20;



//Re-declaration rules
var x = 10;
var x = 20; // ✅ allowed (BAD)

// let y = 10;
// let y = 20; // ❌ error

const z = 10;
z = 20;     // ❌ error


//const does NOT mean immutable (very important)
const user = { name: "Ghost" };
user.name = "Krptnox"; // ✅ allowed


// Why?
// const locks the reference, not the value
// Object memory location stays same

// ❌ This is NOT allowed:
user = {}; // error


//Example: Frontend Project (React / Vanilla JS)
const API_URL = "https://api.example.com"; // constant

let isLoading = true;  // changes over time
let count = 0;

function increment() {
  count++;
}


//Example: Loops (why let is critical)
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
