"use strict";
console.log('hello word');
// Number
// explicito
let phone;
phone = 33245322454;
// phone = 'hola'; //error
//inferido
let phoneNumber = 423562345;
// phoneNumber = false // error
let hex = 0xf00d;
let bin = 0b0101010;
let octal = 0o7423;
console.info(`El telefono es: ${phone} y el segundo es ${phoneNumber}`);
// Tipo: bolean
let isPro = false;
let isUserPro = false;
isUserPro = true;
// isUserPro = 1234 // error
//Tipo: string
let myName = 'Angel';
let myLastName = 'Santillan';
// myLastName = 42353; // error
//Tipo String template String
let msj;
msj = `
  Mi nombre es: ${myName} ${myLastName} 
  con telefono: ${phone}
  `;
console.info(msj);
