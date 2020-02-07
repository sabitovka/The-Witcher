var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
      548: {
          slidesPerView: 2,
      },
    }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});