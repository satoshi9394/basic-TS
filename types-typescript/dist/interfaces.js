"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[ 
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`);
}
let myPic = {
    title: 'Test title',
    date: '2002-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'angel',
    date: '2021-08',
    orientation: PhotoOrientation.Square,
});
function generetePicture(config) {
    const pic = {
        title: 'default',
        date: 'defaul'
    };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generetePicture({});
console.table(picture);
picture = generetePicture({ title: 'Travel pic' });
console.table(picture);
picture = generetePicture({ title: 'Travel pic', date: '2564-05' });
console.table(picture);
let user;
user = {
    id: 10,
    username: 'angel',
    isPro: true
};
console.table(user);
// user.username = 'pedro'; error
// user.id = 20; error
console.table(user);
