// 10, '10'
export {}
// Alias de Tipos: ts
type IdUser = number | string;
type UserName = string;

let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar userName dado un ID
function getUserNameById(id: IdUser): UserName {
  // logica de negocio
  return 'angel';
}

getUserNameById(20);
getUserNameById('20');

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; //error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';