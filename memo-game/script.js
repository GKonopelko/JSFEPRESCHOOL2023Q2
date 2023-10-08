
let cards = document.querySelectorAll('.card');
const page = document.querySelector('.body');
const clock = document.querySelector('.clock');
let visible = false;
let wait = false;
let first;
let second;
let pairs = 0;
let pairsTotal = (cards.length/2);
let newGame_button = document.querySelector('.newGame');
let moves_div = document.querySelector('.moves');
let pairs_div = document.querySelector('.pairs');
let gameOver_div = document.querySelector('.gameOver');
let score = 0;
let key = 0;
let overText = document.querySelector('.overText');
let overResults = document.querySelector('.overResults');
let beg_btn = document.querySelector('.beg');
let prof_btn = document.querySelector('.prof');

// let beginner = document.querySelectorAll('.beginner');

// cards = beginner;

// function profOn () {
//   prof_btn.classList.add('on');
//   beg_btn.classList.remove('on');
//   cards = document.querySelectorAll('.card');
//   cards.forEach(card => card.classList.remove('pro'));
// };

// prof_btn.addEventListener('click', profOn);
// beg_btn.addEventListener('click', onOff);


key = ((+localStorage.getItem('resultNumber')) + 1);
// console.log(key);

newGame_button.addEventListener('click', reload);
function reload() {
  document.location.reload();
  newGame_button.classList.remove('glowing');
}

showPairs();
gameOver_div.classList.remove('visible');

function isOver() {
if (pairs === pairsTotal) {
localStorage.setItem('resultNumber', key);
localStorage.setItem(key, score);
  gameOver_div.classList.add('visible');
  overText.innerHTML = `Игра окончена! Найдено ${pairs} пар за ${score} ходов`;
  for (let i = 10; i > 1; i--) { 
    let div = document.createElement('div');
    div.className = "resuts";
    div.innerHTML = `${(+localStorage.getItem(i))}     ходов`;
    overResults.append(div);
    }
    newGame_button.classList.add('glowing');
  };
}

          //проходим по всем карточкам
function rotate() {
  score++;
showScore();
// console.log('rotate: ' +'rotate');
// console.log('this class: ' +this.classList);
  if (wait) return;
  if (this === first)  return;

  this.classList.add('rotate');
          //первый раз нажимаем карточку
  if (!visible) { 
    // console.log(visible);
    visible = true;
    first = this;
          // console.log('visible: ' + visible);
          // console.log('first:' + first);
    return;
  } 
   
  second = this;
          // console.log('second:'+ second);
  clock.classList.add('visible');
  page.classList.add('color');
  
  if (first.dataset.abc === second.dataset.abc) {
    pairs++;
    showPairs()
    removeListener();
  } else {
    rotateBack();
  }
}

function showScore() {
  moves_div.innerHTML = `Ходов: ${score}`;
}

function showPairs() {
  pairs_div.innerHTML = `Найдено пар: ${pairs}/${pairsTotal}`;
  isOver();
}




function removeListener() {
  first.removeEventListener('click', rotate);
  second.removeEventListener('click', rotate);
  initialState();
}

function rotateBack() {
  wait = true;
  setTimeout(() => {
    // console.log('first class: ' +first.classList);
    first.classList.remove('rotate');
    second.classList.remove('rotate');
    clock.classList.remove('visible');
    page.classList.remove('color');
    initialState();
  }, 1500);
}

function initialState() {
  visible = 0;
  wait = 0;
  first = 0;
  second = 0;
  clock.classList.remove('visible');
  page.classList.remove('color');
}

//случайный номер картинки
function generateOrder(){ 
  cards.forEach(element =>{
    element.style.order = Math.floor(Math.random() * cards.length); 
  })
};
window.onload = () => generateOrder();

cards.forEach(card => card.addEventListener('click', rotate));