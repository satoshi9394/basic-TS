import { User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation } from './photo-orientation';

const user = new User(1, 'Satoshi', 'Angel', true);
const album = new Album(10, 'PLATZI PICTURE');
const picture = new Picture(1, 'photosho', '2020-03', PhotoOrientation.Panorama);
// creamos relaciones en nuestros objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

user.remoceAlbum(album);
console.log('user despues de borrar', user);
