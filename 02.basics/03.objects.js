// objects 
// data is stored in key value pair

const JsUser = {
    name : "rajdeep",
    age : 18,
    location : "Ahmd",
    IsLogedIn : false,
    LastLoginDay : ["Monday", "Tusday", ]
}

console.log(JsUser.name); // !not a good method 
console.log(JsUser["age"]);
console.log(JsUser["LastLoginDay"]);

// to overwrite data in object 
JsUser.IsLogedIn = true
console.log(JsUser["IsLogedIn"]);

JsUser.greeting = function() {
    console.log("hello world");
}
JsUser.greetingTwo = function() {
    console.log(`hello world ,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());