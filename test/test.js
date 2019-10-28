var password = require('pino-password');

var pass = new password();

var username = "john";

var test1 = pass.generatePassword(username);
var test2 = pass.generatePassword(username);
var test3 = pass.generatePassword(username);

// One username, can have more than one correct password
console.log("1st generated: username=john , password=" + test1);
console.log("2nd generated: username=john , password=" + test2);
console.log("3rd generated: username=john , password=" + test3);

// Verify that password
console.log("Verify password-1: " + pass.verifyPassword(username, test1));
console.log("Verify password-2: " + pass.verifyPassword(username, test2));

// Verify with wrong password 
console.log("Verify password-3: " + pass.verifyPassword(username, "abc123"));