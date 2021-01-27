// Explicita
let nullVariable: null;
nullVariable = null;

// nullVariable = 1 // error

let otherVariable = null;
otherVariable = 'test'

console.info('nullVariable', nullVariable);
console.info('otherVariable', otherVariable);

// undefined

let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test';  // un error 
let otherUndefined = undefined;
otherUndefined = 'test';

console.info('undefinedVariable', undefinedVariable);
console.info('otherUndefined', otherUndefined);

// null y undefined: Como subtipos


// --strinctNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;