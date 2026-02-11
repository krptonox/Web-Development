// Singelton Pattern - one instance of an object

// Object Literal - more than one instance of an object

const mySym = Symbol("key1");

const jsUser = {
    name: "Johan",
    rollNo: 23,
    [mySym]: "myValue",  // Symbol as key
    location: "germany",
    isLogdin: true,
    lastLogin:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["location"]);
console.log(jsUser[mySym]);  // Symbol as key access

jsUser.rollNo = 45;  // Update existing property

// Object.freeze(jsUser);  // Freeze the object to prevent modifications


jsUser.greet = function(){
    console.log(`Hello, welcome ${this.name}`);
}
console.log(jsUser.greet()); 