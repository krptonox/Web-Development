
document.addEventListener("DOMContentLoaded", function() {

    // 1. Arithmetic Operators
    const arithmeticEl = document.getElementById("arithmetic-output");
    let arithmeticOutput = ""; // String to hold our output
    let a = 10;
    let b = 5;
    arithmeticOutput += "Initial a: 10, b: 5\n";
    arithmeticOutput += "-------------------------\n";
    arithmeticOutput += "Addition: " + (a + b) + "\n";
    arithmeticOutput += "Subtraction: " + (a - b) + "\n";
    arithmeticOutput += "Multiplication: " + (a * b) + "\n";
    arithmeticOutput += "Division: " + (a / b) + "\n";
    arithmeticOutput += "Modulus: " + (a % b) + "\n";
    arithmeticOutput += "Exponentiation: " + (a ** b) + "\n";
    
    // Note: ++a and --b change the values of a and b for the next sections
    arithmeticOutput += "Increment (++a): " + (++a) + "\n"; 
    arithmeticOutput += "Decrement (--b): " + (--b) + "\n";
    arithmeticEl.textContent = arithmeticOutput;

    
    // 2. Assignment Operators
    const assignmentEl = document.getElementById("assignment-output");
    let assignmentOutput = "";
    let c = 20;
    assignmentOutput += "Initial c: 20\n";
    c += 5; // c = c + 5
    assignmentOutput += "c after += 5: " + c + "\n";
    c -= 10; // c = c - 10
    assignmentOutput += "c after -= 10: " + c + "\n";
    assignmentEl.textContent = assignmentOutput;

    
    // 3. Comparison Operators
    // 'a' is now 11 and 'b' is now 4 from the arithmetic section
    const comparisonEl = document.getElementById("comparison-output");
    let comparisonOutput = "Using a=11 and b=4 (from above)\n";
    comparisonOutput += "-------------------------\n";
    comparisonOutput += "Is a equal to b? (a == b): " + (a == b) + "\n";
    comparisonOutput += "Is a not equal to b? (a != b): " + (a != b) + "\n";
    comparisonOutput += "Is a greater than b? (a > b): " + (a > b) + "\n";
    comparisonOutput += "Is a less than or equal to b? (a <= b): " + (a <= b) + "\n";
    comparisonOutput += "Is a strictly equal to b? (a === b): " + (a === b) + "\n";
    comparisonEl.textContent = comparisonOutput;

    
    // 4. Logical Operators
    const logicalEl = document.getElementById("logical-output");
    let logicalOutput = "";
    let x = true;
    let y = false;
    logicalOutput += "Initial x: true, y: false\n";
    logicalOutput += "-------------------------\n";
    logicalOutput += "x AND y: " + (x && y) + "\n";
    logicalOutput += "x OR y: " + (x || y) + "\n";
    logicalOutput += "NOT x: " + (!x) + "\n";
    logicalOutput += "NOT y: " + (!y) + "\n";
    logicalEl.textContent = logicalOutput;

    
    // 5. Bitwise Operators
    const bitwiseEl = document.getElementById("bitwise-output");
    let bitwiseOutput = "";
    let m = 5; // 0101 in binary
    let n = 3; // 0011 in binary
    bitwiseOutput += "Initial m: 5 (0101), n: 3 (0011)\n";
    bitwiseOutput += "-------------------------\n";
    bitwiseOutput += "m AND n (5 & 3): " + (m & n) + "\n"; // 1
    bitwiseOutput += "m OR n (5 | 3): " + (m | n) + "\n"; // 7
    bitwiseOutput += "m XOR n (5 ^ 3): " + (m ^ n) + "\n"; // 6
    bitwiseOutput += "NOT m (~5): " + (~m) + "\n"; // -6
    bitwiseOutput += "m left shift by 1 (5 << 1): " + (m << 1) + "\n"; // 10
    bitwiseOutput += "m right shift by 1 (5 >> 1): " + (m >> 1) + "\n"; // 2
    bitwiseEl.textContent = bitwiseOutput;

    
    // 6. Ternary Operator
    const ternaryEl = document.getElementById("ternary-output");
    let ternaryOutput = "";
    let age = 18;
    let canVote = (age >= 18) ? "Yes" : "No";
    ternaryOutput += "age = 18\n";
    ternaryOutput += "Can vote? (age >= 18) ? \"Yes\" : \"No\"\n";
    ternaryOutput += "Result: " + canVote + "\n";
    ternaryEl.textContent = ternaryOutput;

});