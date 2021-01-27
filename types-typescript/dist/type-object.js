"use strict";
// type: object
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'angel',
    fisrtName: 'pablo',
    isPro: true
};
console.table(user);
// Object vs object(Clase de JS vs tipo TS)
// console.log('user.username:', user.username)
const myObject = {
    id: 1,
    username: 'angel',
    fisrtName: 'pablo',
    isPro: true
};
const isInstance = myObject instanceof Object; //clase Object JavaScript
console.log('isInstance:', isInstance);
console.log('myObj.username:', myObject.username);
