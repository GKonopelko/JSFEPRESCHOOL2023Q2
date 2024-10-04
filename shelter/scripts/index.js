
import {addPopUp} from "./popup.js";
import {addBurger} from "./burger.js";
import {shuffleCards} from "./sorting.js";
import {renderCards} from "./renderCards.js";


window.onload = function()  {
  renderCards();
  addBurger();
  addPopUp();
}


const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const ITEM_ACTIVE = document.querySelector("#item-active");
const NEW_ITEM = ITEM_ACTIVE
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let card5 = document.querySelector("#card5");
let card6 = document.querySelector("#card6");
let card7 = document.querySelector("#card7");
let card8 = document.querySelector("#card8");
let card9 = document.querySelector("#card9");



const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    NEW_ITEM.innerHTML = ITEM_ACTIVE.innerHTML
    ITEM_ACTIVE.innerHTML = ITEM_LEFT.innerHTML;
    ITEM_LEFT.innerHTML = ITEM_RIGHT.innerHTML;
    ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
    
  } else {
    CAROUSEL.classList.remove("transition-right");
    ITEM_ACTIVE.innerHTML = ITEM_RIGHT.innerHTML;
    ITEM_RIGHT.innerHTML = ITEM_LEFT.innerHTML;
    ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;

  }
  
//   const createCardTemplate = () => {
//     const card = card9;
//     return card;
//   }

//   changedItem = card1;
//   for (let i = 0; i < 8; i++) {
//     const card = createCardTemplate();
//     card.innerText = Math.floor(Math.random() * 8);
//     changedItem.appendChild(card);
//   }
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  return NEW_ITEM.innerHTML;
})