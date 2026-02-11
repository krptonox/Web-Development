console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);


console.log(typeof []);
console.log(typeof null);
console.log(typeof 123);


console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy


console.log(5 == "5"); 
console.log(5 === "5"); 

//Memory 

//Stack (primitive data types) and Heap (reference data types)

//In stack , value give copy of the value to another variable
let a = 10;
let b = a;
console.log(a); // 10

let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1); // [1, 2, 3]

arr1.push(4);
console.log(arr1);
console.log(arr2); // [1, 2, 3, 4] because arr1 and arr2 reference the same array in heap


