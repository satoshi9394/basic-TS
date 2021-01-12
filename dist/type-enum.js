"use strict";
// Orientacion para fotografias
// mundo js
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;
// mundo ts
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.info('landscape:', landscape);
console.info('landscape:', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 25] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 5] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 2] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.table(PictureOrientation);
var Countrys;
(function (Countrys) {
    Countrys["Bolibia"] = "bol";
    Countrys["Colombia"] = "col";
    Countrys["Mexico"] = "mex";
    Countrys["EEUU"] = "usa";
    Countrys["Espana"] = "esp";
})(Countrys || (Countrys = {}));
var country = Countrys.Colombia;
console.log('contry:', country);
