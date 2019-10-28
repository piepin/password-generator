# Password Generator for NodeJS
### Generates encrypted passwords from username.

This module will generate encrypted password from username, so the application can verify password without run any query to the database. 

This will be very useful for checking passwords in APIs that require fast access.

Usage:
```javascript
var password = require('./password');

var pass = new password();

console.log("Secret key: " + pass.secretKey);
console.log("Password generated: " + pass.generatePassword("john"));
console.log("Is password match: " + pass.verifyPassword("john", "6940d48eb55288690bb2930619c38833"));

```


