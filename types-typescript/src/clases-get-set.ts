export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

//modificadores de accesso get y set

class Picture {
  // propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  //Comportamiento
  public toString() {
    return `
      [id: ${this._id}],
      title: ${this._title},
      orientation: ${this._orientation}`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get pictures() {
    return this._pictures;
  }

  set pictures(pictures: Picture[]) {
    this._pictures = pictures;
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal pictures');
const picture: Picture = new Picture(1, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los miembros publicos
picture.id = 100; // privado // internamente activa el set id(100)
picture.title = 'Another title'; // privado
album.title = 'Personal Activities'; // privado
console.log('album', album);