export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

// superClase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title
  }
  get id() {
    return this._id;
  }

//  set id(id: number) {
//    this._id = id;
//  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}

class Picture extends Item{
  public static photoOrientation = PhotoOrientation;
  // propiedades
  private _orientation: PhotoOrientation;

  public constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    super(id, title);
    this._orientation = orientation;
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

class Album extends Item{
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
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
// picture.id = 100; // privado // internamente activa el set id(100) // ahora se volvio solo lectura
picture.title = 'Another title'; // privado
album.title = 'Personal Activities'; // privado
console.log('album', album);

// const item = new Item(1, 'Test title'); bloqueado por ser clase abstracta
// console.log('item', item);

// Probar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);