export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  // propiedades
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  public constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }

  //Comportamiento
  public toString() {
    return `
      [id: ${this.#id}],
      title: ${this.#title},
      orientation: ${this.#orientation}`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(1, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos
// picture.id = 100; // privado
// picture.title = 'Another title'; // privado
// album.title = 'Personal Activities'; // privado
console.log('album', album);