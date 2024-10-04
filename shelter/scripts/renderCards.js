import {shuffleCards} from "./sorting.js";

export const testFunc = () => {
  console.log('test');
}

const data = shuffleCards();

export const renderCards = () => {
  if(data) {
    const cardContainer = document.querySelectorAll(".card-container");    
  for (let i = 0; i < cardContainer.length; i++) {
    let j = i;
    if (j >= data.length) {j = 0};
    cardContainer[i].append(new Cards(data[j]).generateCard());
  }
    return cardContainer;
  }
}

export const renderPopUp = (petName) => {
    const popUpContainer = document.querySelector(".popup__bgr"); 
    popUpContainer.innerHTML = '';

    const pet = data.find(function (item) {
      return item.name === petName;
    });

    popUpContainer.append(new Cards(pet).generatePopUp(petName));
    return popUpContainer;
}

export class Cards {
  constructor({name, img, type, breed, description, age, inoculations, diseases,parasites}) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  generateCard() {
    let template = '';
    let card = document.createElement('div');
    card.className = "card";
    card.setAttribute('data-id', this.name);
    this.img &&
    (template += `<img src=${this.img}      alt=${this.name} class="friends__img">
      <p class="friends__name">${this.name}</p>
                                <button class="button friends-card__button">Learn more</button>`);
    card.innerHTML = template;
    return card;
  }

  generatePopUp() {
    let template = '';
    let card = document.createElement('div');
    card.className = "popup__window active";
    template += `<button class="popup_close btn">&times;</button>
                <div class="popup__content">
                <div class="pet-img"><img src="../../assets/images/${this.name}.png" alt="${this.name}" class="popup-img"></div>
                <div class="pet-content">
                    <div class="card-content">
                        <h3 class="pet-name">${this.name}</h3>
                        <h4 class="pet-type"><span class="type">${this.type}</span>&nbsp-&nbsp<span class="breed">${this.breed}</span></h4>
                        <div class="pet-description">${this.description}</div>
                        <ul class="pet-descr-list">
                            <li class="pet-age"> <span class="bold">Age:</span>&nbsp<span class="normal">${this.age}</span></li>
                            <li class="pet-inoculations"><span class="bold">Inoculations:</span>&nbsp<span class="normal">${this.inoculations}</span></li>
                            <li class="pet-diseases"><span class="bold">Diseases:</span>&nbsp<span class="normal">${this.diseases}</span></li>
                            <li class="pet-parasites"><span class="bold">Parasites:</span>&nbsp<span class="normal">${this.parasites}</span></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    card.innerHTML = template;
    return card;    
  }
}
