const accountId = 144533
let accountEmail = "syedmdramiz@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;


//accountId = 2 // not allowed

accountEmail = "123@gmail.com"
accountPassword = "456456"
accountCity = "America"

console.log(accountId);


/*
Use let to declare variables but var
becuase of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

