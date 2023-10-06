const cards = document.querySelectorAll('.card');
const page = document.querySelector('.body');
const clock = document.querySelector('.clock');
let visible = false;
let wait = false;
let first;
let second;
let score = 0;
let pairs = 0;
let pairsTotal = (cards.length/2);
let newGame_button = document.querySelector('.newGame');
let moves_div = document.querySelector('.moves');
let pairs_div = document.querySelector('.pairs');
let gameOver_div = document.querySelector('.gameOver');

showPairs();
gameOver_div.classList.remove('visible');


function isOver() {
if (pairs === pairsTotal) {
  gameOver_div.classList.add('visible');
  gameOver_div.innerHTML = `Игра окончена! Найдено ${pairs} пар за ${score} ходов`;
}
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
          console.log('visible: ' + visible);
          console.log('first:' + first);
    return;
  } 
   
  second = this;
          console.log('second:'+ second);
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
    console.log('first class: ' +first.classList);
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