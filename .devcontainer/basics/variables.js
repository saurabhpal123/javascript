const accountId = 144553
let accountEmail = "saurabh@gmail.com"
var accountPassword = "saut123"
accountCity = "Delhi"

//accountId = 2

accountEmail = "hc@gmail.com"
accountPassword = "assf123"
accountCity = "Noida"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
