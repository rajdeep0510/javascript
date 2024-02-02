const name = "Rajdeep vala"
const age = 18 

console.log(name + age); // this is not a good way of adding or merging string 

//another method =>  backtiks - ${}
console.log(`Hello my nane is ${name}. My age is ${age}`);

const gameName = new String('rajdeep')
console.log(gameName[0]);               // gives the value of index 
console.log(gameName.length);           // gives the length of string
console.log(gameName.toUpperCase());    // gives the string in upper case
console.log(gameName.charAt(2));        // gives to character at the given index 
console.log(gameName.indexOf('e'));     // gives the index of given character 

const newString = gameName.substring(0 ,4)
console.log(newString);
const anotherString = gameName.slice(-7 ,3)
console.log(anotherString);

//trim()
const string3 = "   rajdeep   "
console.log(string3);
console.log(string3.trim());

//replace()
const url = "https://rajdeep.com/rajdeep%20vala"
console.log(url.replace('%20', '-'));


