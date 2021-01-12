"use strict";
console.log('hello word');
// Number
// explicito
var phone;
phone = 33245322454;
// phone = 'hola'; //error
//inferido
var phoneNumber = 423562345;
// phoneNumber = false // error
var hex = 0xf00d;
var bin = 42;
var octal = 3859;
console.info("El telefono es: " + phone + " y el segundo es " + phoneNumber);
// Tipo: bolean
var isPro = false;
var isUserPro = false;
isUserPro = true;
// isUserPro = 1234 // error
//Tipo: string
var myName = 'Angel';
var myLastName = 'Santillan';
// myLastName = 42353; // error
//Tipo String template String
var msj;
msj = "\n  Mi nombre es: " + myName + " " + myLastName + " \n  con telefono: " + phone + "\n  ";
console.info(msj);
