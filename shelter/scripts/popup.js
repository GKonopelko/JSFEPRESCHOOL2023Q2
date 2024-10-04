import {renderPopUp} from "./renderCards.js";

let popupOpen = document.querySelectorAll('.card');
let cardName = '1';
let popupBgr = document.querySelector('.popup__bgr');

export const addPopUp = () => {

popupOpen.forEach((card) => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        popupBgr.classList.add('active');
        cardName = card.firstElementChild.attributes["data-id"].nodeValue;
        renderPopUp(cardName);


        let popupCloseBtn = document.querySelector('.popup_close');
        let popupWindow = document.querySelector('.popup__window');
        
        popupCloseBtn.addEventListener('click',() => {
            popupBgr.classList.remove('active');
            popupWindow.classList.remove('active');
        });

        document.addEventListener('click', (e) => {
            if(e.target === popupBgr) {
                popupBgr.classList.remove('active');
                popupWindow.classList.remove('active');
            }
        });

    })
});
return cardName
}