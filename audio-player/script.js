const backward = document.querySelector('.backward');
const play = document.querySelector('.play');
const forward = document.querySelector('.forward');
const audio = new Audio();
const progressbar = document.querySelector('.progressbar');
const progressline = document.querySelector('.progressline');
const progressdot = document.querySelector('.progressdot');

let background = document.querySelector('.wrapper');
let cover = document.querySelector('.coverImg');
let trackName = document.querySelector('.track__name');
let trackAuthor = document.querySelector('.track__author');
let isPlay = false;
let playNum = 0;
let player = document.querySelector('.player');
let length = document.querySelector('.length');
let time = document.querySelector('.time');


const tracks = [
  {
    number: 1,
    background:'lonelyShepherd.jpg',
    track:'Lonely_Shepherd.mp3',
    name:'Lonely Shepherd',
    author:'James Last',
  },
  {
    number: 2,
    background:'melodiaDlyFleity.jpg',
    track:'Melodiya_dlya_flejjty.mp3',
    name:'Мелодия для флейты',
    author:'Александр Кэтлин',
  },
  {
    number: 3,
    background:'tolkoMoi.jpg',
    track:'Tolko_mojj.mp3',
    name:'Только мой',
    author:'Александра Радова',
  },
]

function playAudio() {
  if (isPlay === false) {
    audio.play();
    isPlay = true;
    play.classList.toggle('pause');
    cover.classList.toggle('playW');

  } else {
    audio.pause();
    isPlay = false;
    play.classList.toggle('pause');
    cover.classList.toggle('playW');
  }
}

function playPrev() {
  playNum > 0 ? playNum -- : playNum = (tracks.length-1);
  choseTrack(playNum);
  if (isPlay === false) {
    audio.play();
    isPlay = true;
    play.classList.toggle('pause');
    cover.classList.toggle('playW');
  } else {
    audio.play();
  }
};

function playNext() {
  playNum < (tracks.length-1) ? playNum ++ : playNum = 0;
  choseTrack(playNum);
  if (isPlay === false) {
    audio.play();
    isPlay = true;
    play.classList.toggle('pause');
    cover.classList.toggle('playW');
  } else {
    audio.play();
  }
};

backward.addEventListener('click',playPrev);
play.addEventListener('click',playAudio);
forward.addEventListener('click',playNext);

window.addEventListener('load', choseTrack(playNum));

function choseTrack(playNum) {
 trackName.innerHTML = tracks[playNum].name;
 trackAuthor.innerHTML = tracks[playNum].author;
 background.style.background = `url(assets/img/${tracks[playNum].background})center/cover no-repeat`;
cover.src = `assets/img/${tracks[playNum].background}`;
audio.src = `assets/audio/${tracks[playNum].track}`;
}

function progress() {
  const percent = (audio.currentTime / audio.duration) *100;
  progressline.style.width = `${percent}%`;
  progressdot.style.left = `${percent}%`;
  time.innerText = Math.floor(audio.currentTime / 60) + ':' + Math.floor(audio.currentTime % 60)
}
audio.addEventListener('timeupdate', progress);

function rewind(event) {
const totalWidth = progressbar.clientWidth;
const x = event.offsetX;
// console.log(totalWidth, x);
audio.currentTime = (x / totalWidth) * audio.duration;
}
progressbar.addEventListener('click', rewind);

audio.addEventListener('ended', playNext);

function trackLength() {
  length.innerText = Math.floor(audio.duration / 60) + ':' + Math.floor(audio.duration % 60)
  
  console.log(audio.currentTime)
}
audio.addEventListener('loadeddata', trackLength);








