// app.js
document.addEventListener("DOMContentLoaded", function() {

    // 1. For Loop
    // Find the HTML element with the id "for-loop-output"
    const forLoopEl = document.getElementById("for-loop-output");
    
    // Create an empty string to build our output
    let forOutput = ""; 
    
    for(let i = 1; i <= 10; i++){
        // Add a line to our string instead of logging
        // We use \n (new line) because <pre> tags understand it
        forOutput += "5 X " + i + " = " + (5 * i) + "\n";
    }
    
    // Set the HTML element's text to our finished string
    forLoopEl.textContent = forOutput;

    
    
    // 2. While Loop
    const whileLoopEl = document.getElementById("while-loop-output");
    let whileOutput = "";
    let j = 1;
    while(j <= 10){
        whileOutput += "7 X " + j + " = " + (7 * j) + "\n";
        j++;
    }
    whileLoopEl.textContent = whileOutput;

    
    
    // 3. Do-While Loop
    const doWhileEl = document.getElementById("do-while-output");
    let doWhileOutput = "";
    let k = 1;
    do{
        doWhileOutput += "9 X " + k + " = " + (9 * k) + "\n";
        k++;
    } while(k <= 10);
    doWhileEl.textContent = doWhileOutput;

    
    
    // 4. For-In Loop
    const forInEl = document.getElementById("for-in-output");
    let person = {
        name: "John",
        age: 30,
        city: "New York"
    };
    let forInOutput = "";
    for(let key in person){
        forInOutput += key + ": " + person[key] + "\n";
    }
    forInEl.textContent = forInOutput;

    
    
    // 5. For-Of Loop
    const forOfEl = document.getElementById("for-of-output");
    let colors = ["Red", "Green", "Blue", "Yellow"];
    let forOfOutput = "";
    for(let color of colors){
        forOfOutput += color + "\n";
    }
    forOfEl.textContent = forOfOutput;

    
    
    // 6. Nested Loop
    const nestedEl = document.getElementById("nested-loop-output");
    let nestedOutput = "";
    for(let m = 1; m <= 3; m++){
        for(let n = 1; n <= 3; n++){
            nestedOutput += "Outer Loop: " + m + ", Inner Loop: " + n + "\n";
        }
    }
    nestedEl.textContent = nestedOutput;

});