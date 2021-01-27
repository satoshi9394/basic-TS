export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  // propiedades
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  //Comportamiento
  public toString() {
    return `
      [id: ${this.id}],
      title: ${this.title},
      orientation: ${this.orientation}`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(1, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos
picture.id = 100; // publico
picture.title = 'Another title'; // publico
album.title = 'Personal Activities'; // publico
console.log('album', album);