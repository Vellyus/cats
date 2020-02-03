const numOfCats = 27;
let cats = [];
let imgs = [];

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
let random;

for (let i = 0; i < 12; i++) {
  do {
    random = Math.floor(Math.random() * 27);
  } while (cats[random].unused === false);

  imgs[i] = document.createElement('img');
  imgs[i].setAttribute('src', cats[random].src);
  imgs[i].style.width = '350px';
  imgs[i].style.margin = '20px';
  imgs[i].style.boxSizing = 'border-box';
  imgs[i].style.border = 'solid lightgrey 1px';
  imgs[i].style.boxShadow = '8px 8px 16px lightgrey';
  imgs[i].style.cursor = 'pointer';
  imgs[i].addEventListener('onmousemove', () => { console.log('moew') });
  document.querySelector('body').style.textAlign = 'center';
  document.querySelector('body').appendChild(imgs[i]);
  if (cats[random].unused === true) {
    cats[random].unused = false;
  }
}

const audio = document.createElement('audio');
audio.style.display = 'none';
document.querySelector('body').appendChild(audio);

for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', () => {
    audio.src = "audio/meow.mp3";
    audio.play();
  })
  imgs[i].addEventListener('mouseenter', () => {
    setTimeout(() => {
      audio.src = "audio/purr.mp3";
      // audio.setAttribute('loop', true);
      audio.play();
    }, 3000)
  })
  imgs[i].addEventListener('mouseout', () => {
    setTimeout(() => {
      audio.pause();
    }, 3000)
  })
}