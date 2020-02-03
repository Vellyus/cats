let catList = [
  {
    src: 'img/cat0.jpg',
    unused: true
  },
  {
    src: 'img/cat1.jpg',
    unused: true
  },
  {
    src: 'img/cat2.jpg',
    unused: true
  },
  {
    src: 'img/cat3.jpg',
    unused: true
  },
  {
    src: 'img/cat4.jpg',
    unused: true
  },
  {
    src: 'img/cat5.jpg',
    unused: true
  },
  {
    src: 'img/cat6.jpg',
    unused: true
  },
  {
    src: 'img/cat7.jpg',
    unused: true
  },
  {
    src: 'img/cat8.jpg',
    unused: true
  },
  {
    src: 'img/cat9.jpg',
    unused: true
  },
  {
    src: 'img/cat10.jpg',
    unused: true
  },
  {
    src: 'img/cat11.jpg',
    unused: true
  },
  {
    src: 'img/cat12.jpg',
    unused: true
  },
  {
    src: 'img/cat13.jpg',
    unused: true
  },
  {
    src: 'img/cat14.jpg',
    unused: true
  },
  {
    src: 'img/cat15.jpg',
    unused: true
  },
  {
    src: 'img/cat16.jpg',
    unused: true
  },
  {
    src: 'img/cat17.jpg',
    unused: true
  },
  {
    src: 'img/cat18.jpg',
    unused: true
  },
  {
    src: 'img/cat19.jpg',
    unused: true
  },
  {
    src: 'img/cat20.jpg',
    unused: true
  },
  {
    src: 'img/cat21.jpg',
    unused: true
  },
  {
    src: 'img/cat22.jpg',
    unused: true
  },
  {
    src: 'img/cat23.jpg',
    unused: true
  },
  {
    src: 'img/cat24.jpg',
    unused: true
  },
  {
    src: 'img/cat25.jpg',
    unused: true
  },
  {
    src: 'img/cat26.jpg',
    unused: true
  },
]

let imgs = [];
let random;

for (let i = 0; i < 12; i++) {
  do {
    random = Math.floor(Math.random() * 27);
  } while (catList[random].unused === false);

  imgs[i] = document.createElement('img');
  imgs[i].setAttribute('src', catList[random].src);
  imgs[i].style.width = '350px';
  imgs[i].style.margin = '20px';
  imgs[i].style.boxSizing = 'border-box';
  imgs[i].style.border = 'solid lightgrey 1px';
  imgs[i].style.boxShadow = '8px 8px 16px lightgrey';
  imgs[i].style.cursor = 'pointer';
  imgs[i].addEventListener('onmousemove', () => { console.log('moew') });
  document.querySelector('body').style.textAlign = 'center';
  document.querySelector('body').appendChild(imgs[i]);
  if (catList[random].unused === true) {
    catList[random].unused = false;
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