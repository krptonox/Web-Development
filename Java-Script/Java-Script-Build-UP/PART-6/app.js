//Creating a function and giving a name lolo
//This is Known as FUNCTION DECLARTION....................................
function lolo(){
    console.log("George Blake was a big name in spy world");
}

lolo(); //Calling a function and now it will do the work it was made for


//--------------------------------------------------------------------------------------------------------------------

//==================================THIH is Function Expression==========================
const fnc = function() {  //creating a variable fnc and storing a function in it
    console.log("George Blake was a spy for MI6 (England's Secert Service Agency");
}

fnc(); // again using this variable as a code


//===================================ARROW FUNCTION======================================================

let fnc1 = () => {
     console.log("But then George Blake Cheated MI6 and then he joined KGB");
}

fnc1();

//===========================================================================================


//Function using Parameters................................

const dance = (animal) =>{
    console.log(`${animal} nach rah hai`);
}

dance("trijal");
dance("Animaesh");
dance("Lucky");


const add = (num1,num2) => console.log(num1+num2); //num1,num2 are parameters

add(5,5);  // Inside add(5,5) are Arguments

//============================================================================================================

//Alredy declaring value in function

const abcd = (...val) =>{
        console.log(val);
}


const abcd1 = (a,b,c,...val) =>{
        console.log(a,b,c,val);
}

abcd(1,2,3,4,5,6,7,8,9,10);

abcd1(1,2,3,4,5,6,7,8,9,10);

// jab arguments kai sare ho to hamien utne hi partameter bananae padehnege , issey bachne keliye
//hum rest k ause kerte hai rest(...)  agr rest function ke parameter space 
//mein lage to wo rest operator hai and agr wo arrays and object smein lage 
//to wo spread operator

//============================================================================================================

//First Class function means -->  function ko value ki trh a treat kerna 

let johan = function(){
    console.log("JOHAN LIBERERT");
}

johan();


//========================HIGHER ORDER FUNCTION==============================================

//wo function jo return kre functoin ,, ya fir accept kare ek function apne parameter Mein..


//1st way
function A(val){   //higher order function accept ker rha hai function parameter mein

}

A(function(){      //Taking a function as argument

})

//2nd way
function B(val){  
     return function(){  // return kere ek function

     }
}

B();


//============================================CLOUSRES=============================================
//clousere => ek esa functoin jo return kre ek or function aur return hone wal
// function humesha use krega parent fnc k akoi variable

function AB(){
    let a = 12;
    return function(){
        console.log(a);  //using var a from function AB() and printing it
    }
}



//TASK-1 BMI calculator------------------------------
const BMI = (w,h) => {
    return w / (h*h);
}

console.log(BMI(69,1.7).toFixed(2));



//TASK-2 REUSABLE Discount Calculator----------------------
const Discountcalcu = (discount) =>{
    return function(price){
            return price - price * (discount / 100);
    };
}

let discounter = Discountcalcu(10);

const discountedPrice = discounter(200);

console.log(discountedPrice);

