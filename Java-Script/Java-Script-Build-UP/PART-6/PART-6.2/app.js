//Scope
let a = 10;
const b = 20;
var c = 30;

{} //Scope

console.log(a);
console.log(b);
console.log(c);

function one(){
    const username = "John";
    function two(){   
        const wbsite = "www.john.com";
        console.log(username);
    }
    // console.log(wbsite);

    two();
}

one();

addone(5);
function addone(num){
    return num + 1;
}

addTwo(5)

const addTwo = function(num){
    return num + 2;
}