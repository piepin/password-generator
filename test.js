var password = require('./password');

var pass = new password();

console.log("Secret key: " + pass.secretKey);
console.log("Password generated: " + pass.generatePassword("password"));
console.log("Is comparison match: " + pass.verifyPassword("password", "6940d48eb55288690bb2930619c38833"));