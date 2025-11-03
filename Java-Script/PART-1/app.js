// app.js
document.addEventListener("DOMContentLoaded", function() {

    // 1. Declaration Methods
    const declarationEl = document.getElementById("declaration-output");
    let declarationOutput = "";

    var a_dec = 12;
    declarationOutput += "var a_dec = 12;  // Value: " + a_dec + "\n";
    
    let d_dec = 10;
    declarationOutput += "let d_dec = 10;  // Value: " + d_dec + "\n";
    
    const e_dec = 12;
    declarationOutput += "const e_dec = 12; // Value: " + e_dec + "\n";
    
    declarationOutput += "\n// const s; // This would cause an Error: Missing initializer in const declaration";
    declarationEl.textContent = declarationOutput;


    // 2. 'var' Behavior
    const varEl = document.getElementById("var-output");
    let varOutput = "";
    
    var b_var; // declaration
    b_var = 10; // Initialization
    varOutput += "var b_var; b_var = 10; // Value: " + b_var + "\n";
    
    var a_var = 12; // Initialization and declaration
    varOutput += "var a_var = 12; // Value: " + a_var + "\n";
    
    varOutput += "\n'var' characteristics:\n";
    varOutput += "- Adds to the 'window' object (in browsers)\n";
    varOutput += "- Is function-scoped (not block-scoped)\n";
    varOutput += "- Can be re-declared and re-assigned\n";
    
    var g_var = 30; // Not block-scoped
    varOutput += "\nif(true){ var g_var = 30; } // g_var is accessible globally: " + g_var;
    varEl.textContent = varOutput;

    
    // 3. 'let' Behavior
    const letEl = document.getElementById("let-output");
    let letOutput = "";
    let g7_let = "Not set yet";
    
    if(true){
        let g7 = 30; // block scoped
        g7_let = g7; // We can assign it to an outer variable to show it
    }
    
    letOutput += "'let' characteristics:\n";
    letOutput += "- Is block-scoped (only used inside { } brackets)\n";
    letOutput += "if(true){ let g7 = 30; } // g7 value inside block: " + g7_let + "\n";
    letOutput += "// Accessing 'g7' outside the block would cause a ReferenceError\n";
    letEl.textContent = letOutput;

    
    // 4. Hoisting & Temporal Dead Zone (TDZ)
    const hoistingEl = document.getElementById("hoisting-output");
    let hoistingOutput = "";
    
    hoistingOutput += "// console.log(h); // This would cause a ReferenceError\n";
    hoistingOutput += "// let h = 25;      // 'h' is in the Temporal Dead Zone (TDZ)\n";
    
    hoistingOutput += "\n'var' is hoisted but initialized as 'undefined':\n";
    // We can't actually run the console.log(i) before the var i
    // in this script, but we can demonstrate what it would output.
    hoistingOutput += "// console.log(i); // This would output: undefined\n";
    var i = 15;
    hoistingOutput += "var i = 15;       // After declaration, i is: " + i;
    hoistingEl.textContent = hoistingOutput;
    
    
    // 5. Scope Question 1 (var)
    const scope1El = document.getElementById("scope-q1-output");
    let scope1Output = "";
    var x = 1; // global scope
    scope1Output += "var x = 1; // global scope\n";
    {
        var x = 2; // still global scope, re-assigns x
        scope1Output += "{\n";
        scope1Output += "    var x = 2; // re-assigns global x\n";
        scope1Output += "}\n";
    }
    scope1Output += "console.log(x); // Output: " + x;
    scope1El.textContent = scope1Output;

    
    // 6. Scope Question 2 (let)
    const scope2El = document.getElementById("scope-q2-output");
    let scope2Output = "";
    let a1 = 10; // global scope
    scope2Output += "let a1 = 10; // global scope\n";
    {
        let a1 = 20; // block scope
        scope2Output += "{\n";
        scope2Output += "    let a1 = 20; // new block-scoped a1\n";
        scope2Output += "    console.log(a1); // Output inside block: " + a1 + "\n";
        scope2Output += "}\n";
    }
    scope2Output += "console.log(a1); // Output outside block: " + a1;
    scope2El.textContent = scope2Output;

});