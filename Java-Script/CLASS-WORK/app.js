const arr = [1, 2, 3, 4, 5];
const firstEven = arr.find((num)=> num % 2 == 0);
console.log(firstEven);

const firstEven1 = arr.filter((num)=> num % 2 == 0);
console.log(firstEven1);

const firstEven2 = arr.indexOf((num)=> num % 2==0);
console.log(firstEven2);

const doubleArr = arr.map((num) => num * 2);
console.log(doubleArr);

//Prime Numbers
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
const primeNumbers = array.filter((num) => {
    if(num <= 1) return 
});