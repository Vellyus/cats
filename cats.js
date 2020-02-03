const numOfCats = 27;
let cats = [];

class Cat {
  constructor() {
    this.src;
    this.unused = true;
  }
}

function getCats() {
  for (let i = 0; i < numOfCats; i++) {
    cats[i] = new Cat();
    cats[i].src = `img/cat${i}.jpg`;
  }
}

getCats();

