let myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
console.log(typeof myDate);

let myDate2 = new Date(2020, 11, 31);
let myTimeStamp = Date.now();

console.log(myDate2.getTime());
console.log(Math.floor(myTimeStamp/1000));