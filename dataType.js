// number => scope{2 to power 53}
// bigint => more scope 
// srting => ""
// boolean => true/false
// null => standalone value {empty}
// undefined => varable is not yet defined 
// symbol => unique


let name = "rajdeep"
let age = "18"
let isLogedIn = true
let temp = null

console.table({isLogedIn, name, age})
console.log(typeof isLogedIn);
console.log(typeof name);
console.log(typeof temp);
