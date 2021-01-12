"use strict";
// Tipo explicito
console.group();
var idUser;
idUser = 1; //number
idUser = '1';
// Tipo Inferido
var otherId;
otherId = 1;
otherId = '1';
console.table({ idUser: idUser, otherId: otherId });
var surprice = 'Hola typescript';
// surprice.sayHello();
surprice.substring(6); // posible error de ejecucion
var res = surprice;
console.info({ 'valor de surprice': surprice, 'valor de res': res });
console.groupEnd();
// void es lo opuesto de any y representa la ausencia de tipo
// Comunmente se usa como tipo de retorno en funciones
console.group();
//Void
// Tipo explicito
var showInfo = function (user) {
    console.table({ 'id': user.id, 'name': user.userName });
    // return 'hola' con esto retornaria un tipo string(infiere el tipo de retorno)
    // de lo contrario infiere un void
};
showInfo({ id: 1, userName: 'angel' });
function showFormattedInfo(user) {
    console.group();
    console.info("User info: \n    id: " + user.id + "\n    userName: " + user.userName + "\n  ");
    console.groupEnd();
}
showFormattedInfo({ id: 1, userName: 'angel' });
// tipo void, como tipo de dato en variable
var unusable;
// unusable = null;
// unusable = undefined;
// Tipo: Never
function handleError2(code, msg) {
    // process yoour code here
    // Generate a msg
    throw new Error(msg + ". code: " + code);
}
try {
    handleError2(404, 'Not found');
}
catch (error) {
}
console.groupEnd();
