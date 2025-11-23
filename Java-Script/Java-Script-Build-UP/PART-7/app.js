//construcion of arrays

let marks = [10,20,30,90];

console.log(marks);

console.log(marks[2]); // geting array element by index


marks[2] = 2000;   // Modification of array
console.log(marks[2]);


//============================Push Method===============================
marks.push(7000);
console.log(marks);    // push added a new elemnt by making object and increase the size of array



//============================pop method===============================
marks.pop();          // pop method remove last element from last
console.log(marks);


//============================shift method=============================
marks.shift();         // it remove element from first 
console.log(marks);

//============================Unshift method=============================
marks.unshift(0);     // it add element from first index
console.log(marks);

//============================Splice Method==============================
marks.splice(1,2);  
console.log(marks); // it trim array from index given and till number of element

marks.push(23,34,133,35,25,68);
console.log("-----");
console.log("-----");
console.log("-----");

//===========================slice method===============================
let newarr = marks.slice(0,4);
console.log(newarr);       // it slice array from index to till you want to slice and it gives a new array 
console.log(marks);        // And your array will remain same as it was

//===========================Reverse Method===========================
marks.reverse();
console.log(marks);

//==========================Sort Method==================================
marks.sort(function(a,b){
    return a - b;              //It takes a function and it sorts array in asscending oreder from a - b
})
console.log(marks);



marks.sort(function(a,b){
    return b - a;           //It takes a function and it sort array in descending order from b - a
})
console.log(marks);

marks.sort();
console.log("only sort "+marks);  //Don't Know what does it do


//===========================map Method======================================
//it used as a function and it takes a single value
//map tab use kerna jab apko ek naYA array banana hai purane array ka us kere

marks.map(function(val){
    if(val%2!=0){
          console.log(val);
    }
})


console.log("=====++++++++++++++===========");

//===========================For_Each=====================================
marks.forEach(function(val){
    console.log(val);            //har ek index pe jata hai or fir tum ussko use ker sakte hai manupilat eker ke
})
console.log("=====++++++++++++++===========");

//=======================filter Method=========================================
// it also create a new array

marks.filter(function(val){
    if(val < 4) return true;
})

console.log(marks);


//=====================================reduce method============================
//accumulatior apni value yadd rkhta hai or bad mein jese use kerna ho vese ker sakta hai
let ans  = marks.reduce(function(accumulator,val){
    return accumulator +  val;
}, 0);


//=====================================find method=====================================

let va = marks.find(function(val){
        return val === 34;
})

console.log("Value found "+va);


//============================================Any+++method==============================
let arr = [1,2,3,3,4,5,5];

let [a,b] = arr;

