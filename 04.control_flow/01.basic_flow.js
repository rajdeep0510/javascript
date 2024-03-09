//* if
const isUserLogedIn = true
const temp = 45

if (isUserLogedIn) {
    // console.log("hello");
}

if (temp>50) {
    // console.log("greater then 50");
} else {
    // console.log("less then 50");
}

// Implicit scope 
const balance = 1500
// if (balance) console.log("test"), console.log("test2"),
// console.log("test3");
//! this syntax is not good practice of writing code 


// mutiple-condition 

const userLogedIn = true
const debitCard = true
const human = true
const logedInfromGoogle = false
const logedInfromEmail = true

// AND
if (userLogedIn && debitCard && human) {
    // console.log("Allowed to buy corse");
}
 
// OR
if (logedInfromGoogle || logedInfromEmail) {
    // console.log("User logged in");
}


// switch 

// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } 

const month = 3
switch (month) {
    case 1: 
        console.log("January");
        break;
    case 2: 
        console.log("Feb");
        break;
    case 3: 
        console.log("March");
        break;
    case 4: 
        console.log("April");
        break;
    case 5: 
        console.log("May");
        break;
    case 6: 
        console.log("January");
        break;

    default: console.log("enter valid value");
        break;
}