const burgerBtn = document.querySelector('.header__menu-btn');
const burgerBar= document.getElementsByClassName("menu-btn__bar");
const modal = document.querySelector('.modal');
const main = document.querySelector('.main');

export const burgerMenu = () => {
  burgerBtn.onclick = () =>{
    burgerBtn.classList.toggle('menu-btn--active');

    // Trigger animation
    if (modal.classList.contains('hidden')) {
      modal.classList.toggle('hidden');
    } else {
      modal.classList.toggle('animateOut');
      setTimeout(() => {
        modal.classList.toggle('hidden'),
        modal.classList.toggle('animateOut');
      }, 399);
    }


    main.classList.toggle('modalActive');
  };
};