# 🧭 Chapter 4: Control Flow

🚦 What is Control Flow?
Control flow decides which code runs, when it runs, and how many times it runs.
It's like decision-making + direction in your JavaScript program.
If operators are the verbs, control flow is the traffic signal.



# 🧱 if, else if, else

if (condition) {
// runs if condition is true
} else if (anotherCondition) {
// runs if first was false, second is true
} else {
// runs if none are true
}

✅ Example:
let marks = 78;
if (marks >= 90) {
console.log("A");
} else if (marks >= 75) {
console.log("B");
} else {
console.log("C");
}

# 🌀 switch-case
Great for checking one variable against many values.

switch (value) {
case value1:
// code
break;
case value2:
// code
break;
default:
// fallback
}

✅ Example:
let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red");
break;
default:
console.log("Unknown");
}


# 🔁 Early Return Pattern
Used in functions to exit early if some condition fails.

function checkAge(age) {
if (age < 18) return "Denied";
return "Allowed";
}

This avoids deep nesting and makes logic cleaner.


# ⚠️ Common Confusions
switch-case executes all cases after a match unless you break

else if chain works top-down — order matters

You can use truthy/falsy values directly in if


# 🧠 Mindset

Control flow = conditional storytelling.

It helps your program make choices and respond differently to different inputs.

Write readable branches. Avoid nesting too deep — use early return if needed.