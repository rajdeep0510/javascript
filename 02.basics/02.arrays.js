const marvel_heros = ["Thor", "Ironman", "spiderman", "Capten America"]
const dc_heros = ["Superman", "Batman", "Flach", "Wonder Women "]

marvel_heros.push(dc_heros)
console.log(marvel_heros[4][2]);
//! This method is not good in practice 

//concat method - 
const newArray = marvel_heros.concat(dc_heros)
console.log(newArray);

// spread method 
// *syntax => const varName = [...01arrayName, ...02arrayName,]
const anotherArray =[...marvel_heros, ...dc_heros]
console.log(anotherArray);

console.log(Array.isArray("rajdeep"));
console.log(Array.from("rajdeep")); // *converts anything into an array 


