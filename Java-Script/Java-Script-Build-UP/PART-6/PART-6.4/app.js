//IIFE (Imediately Invoked Function Expression)

//Named IIFE
(function lolo(){
    console.log("George Blake was a big name in spy world");
})();

//Calling a function and now it will do the work it was made for


//Unnamed IIFE
((name) =>{
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
    console.log(`My name is ${name}`);
})("Johan");

