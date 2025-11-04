console.log("Hello Sir");
const name = document.getElementById("title");
name.textContent = "Griffith";


//===============================SET TIME INTERVAL FUNCTION================================
let count2 = 10;

const name1 = document.getElementById("title");

const FATMAN = setInterval(() => {
    console.log`Tick! Tick! ${count2}`
    if(count2 === 0) { 
        console.log("KABOOOOMMMMMMMMMMMMMMMMM");
        clearInterval(FATMAN);
    }
    count2--;
},1000);
