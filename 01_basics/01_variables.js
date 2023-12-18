const accountId = 144553
let accountEmail = "kaustav.majumdar96@gmail.com"
var accountPassword = "12345"
accountCity = "Baroda"
let accountState;

// accountId = 2  // Not allowed

accountEmail = "kaus@google.com";
accountPassword = "212345";
accountCity = "kolkata";

console.log(accountId);

/*
 Prefer no to use var
 because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
