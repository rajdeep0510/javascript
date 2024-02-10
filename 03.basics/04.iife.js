//? Immediately invoked Function Expression (IIFE)

(function connectionCheak(){
    console.log(`DB CONECTED`);
})();
/*
* IIFE function is uesd to exicute function imideately. 
* this helps in eleminating pollution from global object 
SEMI-COLONS(;) are 
*/

( (name)  => {
    console.log(`NEXT DB CONECTED ${name}`);
})("rajdeep");
//* to excess a variable do the regular declaration and acess it through second parantheses


