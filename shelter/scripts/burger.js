const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


export const addBurger = () => {
  if (iconMenu) { 
    iconMenu.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        overlay.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
addScrollOnClick()
};


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

const addScrollOnClick = () => {
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
          if(menuLink){
          menuLink.scrollIntoView({ block: "center", behavior: "smooth" });
            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                overlay.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
}



