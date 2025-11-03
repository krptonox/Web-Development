var name = "Alice";
var name = "Bob";

console.log(name);


//-------------- IMPLICIT RETURN ----AND---ARROW FUNCTION----------------------------------
const ans = (num) => num%2==0 ? "true" : "false";
console.log(ans(5));

const ans1 = (num) => num%2 == 0;
console.log(ans1(6));

//----------------------EXAMPLE OF IMPLICIT FUNCTION-----------------------------------

//.....1
const greet = (name) => console.log("Hello, "+ name +"|");
greet("Aryan");

//.....2
const add = (a,b) => a+b;
console.log(add(5,5));

//....3
const isEven = (num) => num%2==0;
console.log(isEven(5));

//-------------------------------------------------------------------------------------


//-----------------------USE ARROWS FUNCTION wITH ARRAYS----------------------------------------
const number = [1,2,3,4,5];
const squares = number.map(num => num*num);
console.log(squares);
//------------------------------------------------------------------------------------------


//Template LITEARLS-----------------------------------------------------------------------
const name1 = "Aryan";
const age = "18";

const message = `Hello my name is ${name1} and i am ${age} years old`;
console.log(message);
console.log("\n");
//--------------------------------------------------------------------------------------------



//-------------------------------------OBJECTS------------------------------------------------

const person = {
    pname : "Johan Liberert",
    age : 21,
    city : "Germany",
    year : "April 7, 1978",
    introduce : function (){
        console.log`Hi i am ${this.pname} and i am ${this.age} year old and I live in ${this.city}`;
    },
};

console.log(person.pname +" "+person.age);

console.log(person.city);

console.log(person.introduce);

person.introduce();

const hisAge = "age";
console.log(person[hisAge]);


person.birthYear = (pname,year) => console.log`${pname} was born on ${year}`;

person.birthYear(person.pname,person.year);

console.log(person.year);


//------------------------------Destructuring of Arrays----------------------------------------------------------------
const fruits = ["apple",'banana',"kiwi","mango"];

const [firstFruit,,thirdFruit] = fruits;
console.log(firstFruit);
console.log(thirdFruit);

const Even = [2,4,6,8,20];
const [,secondNum,,,fifthNum] = Even;

console.log(secondNum);
console.log(fifthNum);
//------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------Deastructuring of Objects---------------------------------------------

const  Person = {
    name : "Johan",
    age : 21
};

const {name : firstName, age : umr} = Person;
console.log(firstName,umr);

const arr = [1,2,3,4,5,6,7,8,9];
const [first,second,...rest] = arr; //----============== Rest (to put everthing in rest array)===================================
console.log(first);
console.log(second);
console.log(rest);

const arr2 = [10,11,12,13];

const farr = "Concatination of array "+arr.concat(arr2);
console.log(farr);

console.log(typeof(farr));

const result = [...arr,...arr2];//=======================Spread (to conacat two arrays)===========================================
console.log(result);


const nam = "Sasuke";
const Age = 18;
const sperson = {
    name : nam,
    age : Age,
}
//---------------------------------------------------------------------------------------------------------------------------------


//===============================================SET TIMEOUT FUNCTION=============================================================

console.log(10);
console.log(20);
console.log(30);
setTimeout(()=> console.log("I am Johan Liberet"),2000);
console.log(40);
console.log(50);
console.log(60);
//---------------------------------------------------------------------------------------------------------------------------------


//=================================================    SET INTERVAL   ================================================================
let count = 1;

const timer = setInterval(() => {
    console.log("Hello "+count);s
    count++;
    if(count > 5) clearInterval(timer);
},1000);


//Task: TIME BOMB (FATMAN) Going to be dropped on hiroshima and nagasaki;

let count2 = 10;

const FATMAN = setInterval(() => {
    console.log`Tick! Tick! ${count2}`
    if(count2 === 0) { 
        console.log("KABOOOOMMMMMMMMMMMMMMMMM");
        clearInterval(FATMAN);
    }
    count2--;
},1000);
