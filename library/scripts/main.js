(function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const container = document.querySelector('.burger__container');
  burger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    container.classList.toggle('burger__container_active')
  });
  document.addEventListener('click', (e) => {
    const clickBurger = e.composedPath().includes(burger);
    if (!clickBurger) {
      menu.classList.remove('menu_active');
      container.classList.remove('burger__container_active')
    }
  });
}());