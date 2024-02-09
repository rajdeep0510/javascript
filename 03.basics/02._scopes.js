// SCOPE 

let a = 300 
if (true) { // the crullay braces '{}' is the scope

    let a = 10 // does't work out of the given scope
    console.log(a);
    // const b = 20 // does't work out of the given scope

    var c = 30  // this speils out of the scope        
}

// console.log(a)
// console.log(b)
console.log(c)

function one(){
    const username = "rajdeep"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //! this statement is out of scope 

    two() 
}
one()

// ? both are inside the scope therefore they got exictued 