const user = {
    username: "rajdeep",
    price: 999,

    welocomeMessage: function() {
        // console.log(`${this.username} , welome to this website`);
        // console.log(this);
    }
}

// user.welocomeMessage()
// user.username = "shradhdha"
// user.welocomeMessage()
// ? this gives the current contex of the function scope    

console.log(this); //! this refers to global object which is empty here inside node enviererment.
//! In browser this function refers to the global object which is (window)

function chai(){
    userName: "rajdeep";
    // console.log(this);
}
chai()

// ? Arrow function 

// const addTwo = (num1 ,num2) => {
    // return num1 + num2
// }
// console.log(addTwo(3, 4))

const addTwo = (num1 ,num2) =>  ( num1 + num2 ) //! when paranthises are used return is not used (*USED IN REACT-JS*)
console.log(addTwo(3, 4))