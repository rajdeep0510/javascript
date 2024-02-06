// more on objects 
// const trueUser = new Object() // * this is a singleton object 

const newUser = {}
newUser.id = "123abc"
newUser.name = "Rajdeep"


// console.log(newUser);

const user1 = {
    email : "someone@mail.com",
    name : {
        firstName : "rajdeep",
        lastName : "vala"
    }
}
//  console.log(user1?.name.lastName);  // * ? => protection if the value does not exict
  
// merging object => Object.assine  
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj1, obj2); // returns object into object 
// console.log(obj3);

// ALSO 
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const user = [
    {
        id : 1,
        email : "mail@gmail.com"
    },
    {
        id : 1,
        email : "mail@gmail.com"
    },
    {
        id : 1,
        email : "mail@gmail.com"
    },
    {
        id : 1,
        email : "mail@gmail.com"
    }
]
// console.log(user[1].email);

// other property 
console.log(newUser);

console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(newUser.hasOwnProperty(newUser));

