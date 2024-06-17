const user = {
    username : "rajdeep0510",
    isLoggedIn : true,

    getUserDetails : function(){
        console.log("This are details");
        console.log(`${this.username}`);
        console.log(`${this}`);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User (username, age, isLoggedIn) {
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("rajdeep", 19, true)
const userTwo = new User("shradhdha", 25, false)

console.log(userOne instanceof User);

// console.log(userOne);
console.log(userTwo);

