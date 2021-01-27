"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'Satoshi', 'Angel', true);
const album = new album_1.Album(10, 'PLATZI PICTURE');
const picture = new picture_1.Picture(1, 'photosho', '2020-03', photo_orientation_1.PhotoOrientation.Panorama);
// creamos relaciones en nuestros objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
user.remoceAlbum(album);
console.log('user despues de borrar', user);
