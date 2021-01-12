console.log('hello word');

// Number
// explicito

let phone: number;
phone = 33245322454;
// phone = 'hola'; //error

//inferido
let phoneNumber = 423562345;
// phoneNumber = false // error

let hex: number = 0xf00d;
let bin: number = 0b0101010;
let octal: number = 0o7423;
console.info(`El telefono es: ${phone} y el segundo es ${phoneNumber}`)

// Tipo: bolean

let isPro: boolean = false;
let isUserPro = false;
isUserPro = true;
// isUserPro = 1234 // error

//Tipo: string
let myName: string = 'Angel';
let myLastName = 'Santillan'
// myLastName = 42353; // error

//Tipo String template String
let msj: string
msj = `
  Mi nombre es: ${myName} ${myLastName} 
  con telefono: ${phone}
  `
console.info(msj);

