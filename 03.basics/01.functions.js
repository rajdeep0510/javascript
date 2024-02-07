// * FUNCTION 
function sayMyName(){
    console.log("r");
    console.log("a");
    console.log("j");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");
}

// sayMyName()

// function addTwoNumbers(number1 ,number2){  // names of variable in definition of function are called parameters 
//     console.log(number1 + number2);

// }
// // values in the are argunments 
// addTwoNumbers(3 , 4)// => 7 
// addTwoNumbers(3 , "a")// => 3a
// addTwoNumbers(3, null) //=> 3

function addTwoNumbers(number1 ,number2){ 
    let result = number1 + number2
    return result
}
// *return gives the end value back ; No line on code inside a function is exicuted after the return functon ; return enables us to store the value in function 
const result = addTwoNumbers(2, 3)
 console.log(result);
// ALSO 
function addTwoNumbers(number1 ,number2){
    return number1 + number2
}

//* Ex login message 
function LoginUsedMessage(username){
    if(username === undefined)/*ALSO => if(!username) gives the same outpute */ { 
        console.log("Please enter a user name");
        return
    }
    return `${username} just logied in`
}

console.log(LoginUsedMessage())

