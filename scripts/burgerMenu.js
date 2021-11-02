const burgerBtn = document.querySelector('.header__menu-btn');
const burgerBar= document.getElementsByClassName("menu-btn__bar");

export const burgerMenu = () => {
  burgerBtn.onclick = () =>{
    burgerBtn.classList.toggle('menu-btn--active')
  };
};