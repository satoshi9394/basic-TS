"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tip> // Angle Bracket syntax
var username;
username = 'angel santillan';
// tenemos una cadena, TS confia en mi!
var msg = username.length > 5 ? "Welcome " + username : 'Username is to short';
console.log('msg', msg);
var userNameWithId = 'luisavile 1';
// Como obtener el userName?
username = userNameWithId.substring(0, 9);
console.log('Username only', username);
// Sintaxis "as"
msg = username.length > 5 ? "Welcome " + username : 'Username is to short';
console.log('msg: ', msg);
var helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username: ', username);
