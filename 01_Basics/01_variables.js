const accountId = 12345
let accountEmail = "sahilpajwani@google.com"
var accountPassword = "322332"
accountCity = "Jaipur"
let accountState;

//accountId = 2

accountEmail = "sp@sp.in"
accountPassword = "3432432"
accountCity = "Bangalore"

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);