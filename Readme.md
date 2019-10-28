# Password Generator for NodeJS
### Generates encrypted passwords from username.

This module will generate encrypted password from an username, so the application can verify password without run any query to the database, just compare username and encrypted password.

This password generator use simple method: `md5` with secret-key stored in `.env` file.

This password generator will be very useful for authentication with passwords or api-key or token in API systems that require fast access.

#### Example:
```javascript
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

```

This is example with `expressjs` when verifying username and password (no database needed).

User must store the password in their client application.

#### ExpressJS Example:
```javascript
var express = require('express');
var password = require('pino-password');

var app = express();
var pass = new password();

app.get('/api/users', function(req, res) {
  var username = req.param('username');
  var password = req.param('password');

  var result = pass.verifyPassword(username, password);

  res.send(username + ' ' + password + ' ' + result);
});

```


