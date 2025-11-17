// const person = {
//     name: "Abishek",
// };

// function sayHi(){
//     console.log("Hi , this.name");
// }

// person.sayHi();



//=================================================
//-----------------use of CALL---------------------
function greet(greeting){
    console.log(greeting, this.name);
}

const user = {
    name : "Rajma Chawal",
};

greet.call(user,"Hello");


//==================================================
//----------------use of BIND-----------------------

const luf = {
    code: "LH",
    numPlanes:20,
};

const indigo = {
    code: "IN",
    numPlanes:25,
};

const buyPalnes = function(num){
    this.numPlanes+=num;
};


const lufBuy = buyPalnes.bind(luf);
lufBuy(20);
console.log(luf);

const Induu_kharedo = buyPalnes.bind(indigo);
Induu_kharedo(5);
console.log(indigo);