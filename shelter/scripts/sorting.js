import {petsCards} from "../assets/petsCards.js";

const cards = [...petsCards];

export const shuffleCards = () => {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
