"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usar TS, definimos tipos para parametros
function createPiture(title, data, size) {
    // se crea la foto
    console.info('create Picture using: ', title, data, size);
}
createPiture('abeja', '20/05/10', '500x500');
// createPiture('colombia trip', '02/56/22'); error
// parametros opcionaes en funciones 
function createPitureNew(title, data, size) {
    // se crea la foto
    console.info('create Picture using: ', title, data, size);
}
createPitureNew('abeja', '20/05/10', '100x100');
createPitureNew('abeja', '20/05/10');
createPitureNew('abeja');
// flat array funtion 
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
console.table(createPic('abeja', '25/67/44', '100x100'));
// tipo de retonr con TS 
function handleError(code, msg) {
    // Procesamiento del codigo, msg
    if (msg === 'err') {
        throw new Error(msg + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'OK'); // retorne un sting
    console.info(result);
    result = handleError(400, 'err'); // retorne never
    console.log(result);
}
catch (error) {
    console.log(error);
}
