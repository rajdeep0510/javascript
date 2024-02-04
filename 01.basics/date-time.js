//++++++++++++++++++++ Dates +++++++++++++++++++++++++++

let myDate = new Date()
console.log(myDate.toString());  //Sun Feb 04 2024 17:47:37 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //4/2/2024, 5:47:37 pm
console.log(myDate.toLocaleTimeString()); //5:48:40 pm
console.log(myDate.toLocaleDateString()); // 4/2/2024\
console.log(myDate.to()); // 4/2/2024

let newDate = new Date(2024 ,0 ,23) //Get method 
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

let MyTimeStamp = new Date()
console.log(Math.floor(MyTimeStamp.getTime()/1000));


 