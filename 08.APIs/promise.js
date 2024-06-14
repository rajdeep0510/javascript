const promiseOne  = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Asinc task is complete");
        resolve();
    }, 1000)
})
promiseOne.then(function(s){
    console.log("promice consumed"); 
})

// all in one ..
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
})


// Promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({ username : "rajdeep0510",})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

// promiseFour
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username: "rajdeep", password: "234"})
        } else {
            reject('ERROR : somithing went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((id) => {
    console.log(id);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log("The promise is resolved or rejected"))

//promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javasrript", password : 123})
        } else{
            reject("ERROR : js went wrong")
        } 
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const reponse = await promiseFive
        console.log(reponse);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async await 

// async function getUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/rajdeep0510')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) { 
//         console.log("E: ", error);
//     }
// }

// getUsers()


fetch('https://api.github.com/users/rajdeep0510')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => {
    console.log(error);
})
