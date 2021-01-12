"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 20,
    title: 'angel',
    description: 'foto de angel'
};
var pictuere = {
    id: 10,
    title: 'family',
    orientation: PhotoOrientation.Square
};
var newPicture = {};
newPicture.id = 1;
newPicture.title = 'Moon';
console.table(album);
console.table(pictuere);
console.table(newPicture);
