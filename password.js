const dot = require('dotenv').config();
const md5 = require('md5');
const SECRET_KEY = process.env.SECRET_KEY || "***secret***";

module.exports = function() {

    this.secretKey = SECRET_KEY;

    this.generatePassword = function(str) {
        str = str.padEnd(253, '0');
        str = str + Math.floor(Math.random() * (100 + 1) + 100)
        str = md5(md5(str + SECRET_KEY));
        return str;
    }

    this.verifyPassword = function(user, input) {
        var str;
        for (var i = 100; i <= 200; i++) {
            str = user;
            str = str.padEnd(253, '0');
            str = str + i;
            var pass = md5(md5(str + SECRET_KEY));
            if (pass == input) {
                return true;
            }
        }
        return false;
    }

}