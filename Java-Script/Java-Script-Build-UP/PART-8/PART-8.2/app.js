//Singelton Pattern

const user = new Object();
user.name = "Johan";
user.rollNo = 23;
user.location = "germany";
user.fullnmae = {
    userFullname :{
        firstName: "Johan",
        lastName: "Liberert"
    }
}
console.log(user.fullnmae.userFullname.firstName);

const obj1={1: "one",2: "two"}
const obj2={3: "three",4: "four"}

const obj3=Object.assign({},obj1,obj2)

console.log(obj3) // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

const User1 =[
    {
        name: "Johan",
        age: 23
    },
    {
        name: "Liberert",
        age: 25
    },
    {
        name: "Johan Liberert",
    },
]

console.log(User1[0].name) // Johan

console.log(Object.keys(User1[0])) // [ 'name', 'age' ]
console.log(Object.values(User1[0])) // [ 'Johan', 23 ]