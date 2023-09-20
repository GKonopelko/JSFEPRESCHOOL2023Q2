// const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

// function audioPlay() {
//   audio.play();
//   // audio.currentTime = 0;
// }



// play.addEventListener('click',audioPlay);
// pause.addEventListener('click',audioStop);

const audio = new Audio();
let isPlay = false;

function playAudio() {
  audio.src = 'assets/audio/Melodiya_dlya_flejjty.mp3'
  audio.currentTime = 0;
  if (isPlay === false) {
    audio.play();
    isPlay = true;
  } else {
    audio.pause();
    isPlay = false;
  }
  
}

// function audioStop() {
  

// }

play.addEventListener('click',playAudio);
pause.addEventListener('click',audioStop);


