export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number,
  title: string,
}

interface Album extends Entity {
  // copia de los atributos
  description: string
}

interface Picture extends Entity{
  orientation: PhotoOrientation
}

const album: Album = {
  id: 20,
  title: 'angel',
  description: 'foto de angel'
}

const pictuere: Picture = {
  id: 10,
  title: 'family',
  orientation: PhotoOrientation.Square
}

let newPicture = {} as Picture;
newPicture.id = 1;
newPicture.title = 'Moon';

console.table(album);
console.table(pictuere);
console.table(newPicture);