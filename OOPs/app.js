// const person = function(name, age){
//     this.firstname = name;
//     this.age = age;
// }

// person.prototype.introduce = function(){
//     console.log(`Hi, my name is ${this.firstname} and I am ${this.age} years old`);
// }

class person{
    constructor(name,age){
        this.firstName = name;
        this.age = age;
    }
    introduce(){
               console.log(`Hi my name is ${this.firstName} and I am ${this.age} years old`);
    }
}

const person1 = new person("Rajma Chawal" , 20);
person1.introduce();
console.log(person1);