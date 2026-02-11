//Arrow Function
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

const user ={
    name: "George Blake",
    age: 30,
    about: function() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
        console.log(this); //In this case, 'this' refers to the 'user' object, so it will log the entire 'user' object to the console.
    }
    
}

user.about();
user.name = "John Smith";
user.about();

console.log(this); //In this case, 'this' refers to the global object (window in browsers), so it will log the global object to the console.

console.log(this.user); //In this case, 'this' refers to the global object (window in browsers), and since there is no 'user' property on the global object, it will return undefined.

const blake = ()=>{
    console.log(this); //In this case, 'this' refers to the global object (window in browsers), so it will log the global object to the console.
    console.log(this.blake); //In this case, 'this' refers to the global object (window in browsers), and since there is no 'blake' property on the global object, it will return undefined.
}

blake();