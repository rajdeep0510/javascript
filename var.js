console.log("rajdeep vala");
const accountId = 14455
let accountEmail = "rajdeepvala"
var accountPassword = "1234"
/*
dont use var due to "scope" issue 
*/
accountCity = "amd"
let accountState;

// accountId = "2"
//console.log(accountId); not allowed to change value of a const


accountEmail = "rajdeep"
accountPassword = "12"
accountCity = "jnd"
console.table([accountId, accountPassword, accountCity, accountState])