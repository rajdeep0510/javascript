// number 
const score = 400 
console.log(score);

const balance = new Number(180)
console.log(balance);

console.log(balance.toString().length); // length is a function of string, to use it in number it has to be concerted into string.

const otherNumber = 23.12321
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(2));

// to print number in indian number system 
const hunderds = 1000000 
console.log(hunderds.toLocaleString('en-IN')); // gives the number in indian number system 


 
//============================math====================================================

console.log(Math);
console.log(Math.abs(-4)); // returns any value as a positive value 
console.log(Math.round(4.5)); // returns round offed value 
console.log(Math.ceil(4.3)); // returns the highrst round offed value
console.log(Math.floor(4.9)); // returns the lowest round offed value
console.log(Math.max(4 ,2 ,5 ,8 ,23)); //returns the max value 
console.log(Math.min(4 ,2 ,5 ,8 ,23)); //returns the min value 

console.log(Math.random());
console.log((Math.random() * 10)  + 1  );
console.log(Math.floor((Math.random() * 10)  + 1 ) );


// To get a random value between min and max value 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ));