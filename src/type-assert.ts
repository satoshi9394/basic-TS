export {}
// <tip> // Angle Bracket syntax
let username: any;
username = 'angel santillan';

// tenemos una cadena, TS confia en mi!
let msg: string = (<string>username).length > 5 ? `Welcome ${username}` : 'Username is to short';

console.log('msg', msg);


let userNameWithId: any = 'luisavile 1';

// Como obtener el userName?
username = (<string>userNameWithId).substring(0,9)
console.log('Username only', username);

// Sintaxis "as"

msg = (username as string).length > 5 ? `Welcome ${username}` : 'Username is to short';
console.log('msg: ', msg);

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username: ', username);