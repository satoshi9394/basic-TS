"use strict";
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1 // error
var otherVariable = null;
otherVariable = 'test';
console.info('nullVariable', nullVariable);
console.info('otherVariable', otherVariable);
// undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test';  // un error 
var otherUndefined = undefined;
otherUndefined = 'test';
console.info('undefinedVariable', undefinedVariable);
console.info('otherUndefined', otherUndefined);
// null y undefined: Como subtipos
// --strinctNullChecks
var albumName;
// albumName = null;
// albumName = undefined;
