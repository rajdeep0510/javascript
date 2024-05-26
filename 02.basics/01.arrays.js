// array 

const myArra = [0, 1, 2, 3, 4, 5]
const myHero = ["Rajdeep" , "Shradhdha"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArra[1]);
console.log(myHero[1]);

// array method 

myArra.push(6)
myArra.push(7)
myArra.pop()


myArra.shift() // removes the first element from an array 
myArra.unshift(9) // adds any element in the beggning of an array
console.log(myArra);

// method that returns Boolean
console.log(myArra.includes(9));
console.log(myArra.indexOf(3));

const array1 = myArra.join() // joins and converts into string 
console.log(array1);

// slice and splice 
console.log("A ", myArra)

const newArray1 = myArra.slice(1, 3)
console.log("B ", newArray1);


const newArray2 = myArra.splice(1, 3) // splice changes the orignial array 
console.log("C", newArray2);
 
console.log("I am back !!!!");




 


