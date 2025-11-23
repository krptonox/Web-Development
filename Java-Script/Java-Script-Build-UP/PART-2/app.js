/* Wait for the HTML document to be fully loaded 
before trying to find elements.
*/
document.addEventListener("DOMContentLoaded", function() {

    // 1. Data Types (Primitive vs. Reference)
    const dataTypesEl = document.getElementById("data-types-output");
    let dataTypesOutput = "";

    // Reference Type Example
    let array = [1, 2, 3, 4, 5];
    let array1 = array; // array1 gets a reference
    dataTypesOutput += "Original Array: " + JSON.stringify(array) + "\n";
    dataTypesOutput += "Referenced Array: " + JSON.stringify(array1) + "\n";
    array1.push(6);
    array.push(7);
    dataTypesOutput += "After Modification - Original Array: " + JSON.stringify(array) + "\n";
    array1.pop(3); // .pop() ignores the '3' and just removes the last element
    dataTypesOutput += "After Modification - Referenced Array: " + JSON.stringify(array1) + "\n";

    dataTypesOutput += "-------------------------\n";

    // Primitive Type Example
    let number = 42;
    let originalNumber = number;
    let copiedNumber = originalNumber; // copiedNumber gets a real copy
    dataTypesOutput += "Original Number: " + originalNumber + "\n";
    dataTypesOutput += "Copied Number: " + copiedNumber + "\n";
    
    dataTypesEl.textContent = dataTypesOutput;

    
    // 2. Strings
    const stringsEl = document.getElementById("strings-output");
    let stringsOutput = "";
    
    let singleQuoteString = 'This is a string in single quotes.';
    let doubleQuoteString = "This is a string in double quotes.";
    let backtickString = `This is a string in backticks.`; // Fixed variable name
    stringsOutput += singleQuoteString + "\n";
    stringsOutput += doubleQuoteString + "\n";
    stringsOutput += backtickString + "\n";

    // Template literals
    let name = "Bob";
    let greeting = `Hello, ${name}! Welcome to JavaScript.`;
    stringsOutput += greeting + "\n";

    stringsOutput += "--- Common string methods ---\n";
    let sampleString = "   JavaScript is awesome!   !";
    stringsOutput += "Original: '" + sampleString + "'\n";
    stringsOutput += "Length: " + sampleString.length + "\n";
    stringsOutput += "Trimmed: '" + sampleString.trim() + "'\n";
    stringsOutput += "Uppercase: " + sampleString.toUpperCase() + "\n";
    stringsOutput += "Lowercase: " + sampleString.toLowerCase() + "\n";
    stringsOutput += "Substring (0, 10): " + sampleString.substring(0, 10) + "\n";
    stringsOutput += "Replace 'awesome' with 'great': " + sampleString.replace("awesome", "great") + "\n";
    
    stringsEl.textContent = stringsOutput;

    
    // 3. Numbers
    const numbersEl = document.getElementById("numbers-output");
    let numbersOutput = "";

    let intNumber = 100;
    let floatNumber = 99.99;
    let scientificNumber = 1.23e5;
    numbersOutput += "Integer: " + intNumber + "\n";
    numbersOutput += "Floating-point Number: " + floatNumber + "\n";
    numbersOutput += "Scientific Notation: " + scientificNumber + "\n";

    numbersOutput += "--- Common number methods ---\n";
    numbersOutput += "floatNumber.toFixed(2): " + floatNumber.toFixed(2) + "\n";
    numbersOutput += "floatNumber.toPrecision(4): " + floatNumber.toPrecision(4) + "\n";
    numbersOutput += "parseInt('42'): " + parseInt("42") + "\n";
    numbersOutput += "parseFloat('3.14'): " + parseFloat("3.14") + "\n";
    numbersOutput += "isNaN('Hello'): " + isNaN("Hello") + "\n";
    numbersOutput += "isFinite(1000): " + isFinite(1000) + "\n";
    numbersOutput += "Math.sqrt(16): " + Math.sqrt(16) + "\n";
    numbersOutput += "Math.random(): " + Math.random() + "\n";
    numbersOutput += "Math.round(4.7): " + Math.round(4.7) + "\n";

    numbersEl.textContent = numbersOutput;

    
    // 4. Booleans
    const booleanEl = document.getElementById("boolean-output");
    let booleanOutput = "";

    let isJavaScriptFun = true;
    let isFishMammal = false;
    booleanOutput += "Is JavaScript fun? " + isJavaScriptFun + "\n";
    booleanOutput += "Is fish a mammal? " + isFishMammal + "\n";

    booleanOutput += "--- Boolean Logic ---\n";
    let a_bool = true; // Renamed to avoid conflict with 'a' from operators example
    let b_bool = false; // Renamed to avoid conflict with 'b' from operators example
    booleanOutput += "a AND b: " + (a_bool && b_bool) + "\n";
    booleanOutput += "a OR b: " + (a_bool || b_bool) + "\n";
    booleanOutput += "NOT a: " + (!a_bool) + "\n";
    booleanOutput += "NOT b: " + (!b_bool) + "\n";

    booleanOutput += "--- Comparison Operators ---\n";
    booleanOutput += "5 > 3: " + (5 > 3) + "\n";
    booleanOutput += "5 < 3: " + (5 < 3) + "\n";
    booleanOutput += "5 == '5': " + (5 == '5') + "\n";
    booleanOutput += "5 === '5': " + (5 === '5') + "\n";
    booleanOutput += "5 != 3: " + (5 != 3) + "\n";

    booleanEl.textContent = booleanOutput;

    
    // 5. Undefined and Null
    const undefNullEl = document.getElementById("undef-null-output");
    let undefNullOutput = "";
    
    let undef;
    let nul = null;
    undefNullOutput += "Undefined variable: " + undef + "\n";
    undefNullOutput += "Null variable: " + nul + "\n";

    undefNullOutput += "--- Checking types ---\n";
    undefNullOutput += "Type of undef: " + (typeof undef) + "\n";
    undefNullOutput += "Type of nul: " + (typeof nul) + "\n"; // This correctly shows 'object'

    undefNullEl.textContent = undefNullOutput;

    
    // 6. Symbol
    const symbolEl = document.getElementById("symbol-output");
    let symbolOutput = "";
    
    let sym1 = Symbol("description");
    let sym2 = Symbol("description");
    symbolOutput += "Symbol 1: " + String(sym1) + "\n"; // Must convert symbol to string to display
    symbolOutput += "Symbol 2: " + String(sym2) + "\n";
    symbolOutput += "Are sym1 and sym2 equal? " + (sym1 === sym2) + "\n";

    symbolOutput += "--- Using symbols as object keys ---\n";
    let symKey = Symbol("key");
    let myObject = {
        [symKey]: "value associated with symbol key"
    };
    symbolOutput += "Object with symbol key: " + myObject[symKey] + "\n";
    
    let d11 = Number.MAX_SAFE_INTEGER;
    symbolOutput += "Number.MAX_SAFE_INTEGER: " + d11 + "\n";

    symbolEl.textContent = symbolOutput;

    
    // 7. Type Conversion
    const typeConvEl = document.getElementById("type-conversion-output");
    let typeConvOutput = "";
    
    typeConvOutput += "'5' + 1 = " + ("5" + 1) + " (String Concatenation)\n";
    typeConvOutput += "'5' - 1 = " + ("5" - 1) + " (Number)\n";
    typeConvOutput += "true - 1 = " + (true - 1) + " (true = 1)\n";
    typeConvOutput += "false - 1 = " + (false - 1) + " (false = 0)\n";
    
    typeConvEl.textContent = typeConvOutput;

});