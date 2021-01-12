// Orientacion para fotografias

// mundo js

// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

// mundo ts
enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1,
  Square = 2,
  Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.info('landscape:', landscape);
console.info('landscape:', PhotoOrientation[landscape])

enum PictureOrientation {
  Landscape = 10,
  Portrait = 25,
  Square = 5,
  Panorama = 2
}

console.table(PictureOrientation);

enum Countrys {
  Bolibia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  Espana = 'esp'
}

const country: Countrys = Countrys.Colombia;
console.log('contry:', country)