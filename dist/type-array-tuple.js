"use strict";
// Corchetes []
// Tipo explicito
let users;
users = ['Luixaviles', 'paparazzi', 'lensquee'];
// users = ['fsd', 1, true]; // un errror
// Tipo inferido
let otherUsers = ['Luixaviles', 'paparazzi', 'lensquee'];
// otherUsers = ['fsd', 1, true]; // error
// Array<Tipo>
let pictureTitle;
pictureTitle = ['Luixaviles', 'paparazzi', 'lensquee'];
// pictureTitle = ['fsd', 1, true]; // error
// Accediendo a los valiores en un array
console.log('segundo usuario:', users[1]);
console.log('primer titulo:', users[0]);
// Propiedades en Array
console.log('users.length:', users.length);
// uso de funciones en array
users.push('platzi');
users.sort();
console.table(users);
// tuplas
// ejemplo [1, 'user']
let userNew;
userNew = [1, 'angel'];
console.table(userNew);
console.log('username:', userNew[1]);
console.log('index:', userNew[0]);
console.log('username.length:', userNew[1].length);
// tuplas con varios valores
// id, username, isPro
let userInfo;
userInfo = [2, 'pedro', true];
console.table(userInfo);
//Arreglo de Tuplas
let array = [];
array.push([1, 'luis']);
array.push([2, 'pedro']);
array.push([3, 'angel']);
console.table(array);
// Uso de funciones Array
// angel -> angel001
array[2][1] = array[2][1].concat('001');
console.table(array);
