// Funcion para mostrar un Fotografia
export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
  console.log(`[ 
    title: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  ]`)
}

let myPic = {
  title: 'Test title',
  date: '2002-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic);
showPicture({
  title: 'angel',
  date: '2021-08',
  orientation: PhotoOrientation.Square,
  // extra: 'test' // error
});

interface PictureConfig {
  title?: string,
  date?: string,
  orientation?: PhotoOrientation
}

function generetePicture( config: PictureConfig) {
  const pic = {
    title: 'default',
    date: 'defaul'
  }
  if(config.title) {
    pic.title = config.title;
  }
  if(config.date) {
    pic.date = config.date;
  }
  return pic;
}

let picture = generetePicture({});
console.table(picture);
picture = generetePicture({ title: 'Travel pic'})
console.table(picture);
picture = generetePicture({ title: 'Travel pic', date: '2564-05'})
console.table(picture);

// interfaz: Usuario
interface User {
  readonly id: number, //solo lectura
  readonly username: string,
  isPro: boolean
}

let user: User;
user = {
  id: 10,
  username: 'angel',
  isPro: true
}
console.table(user);
// user.username = 'pedro'; error
// user.id = 20; error
console.table(user);
