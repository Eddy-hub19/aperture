const swiper1 = new Swiper('.swiper1', {
  autoplay: true,
  loop: true,
  speed: 800,
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper2 = new Swiper('.swiper2', {
  autoplay: true,
  loop: true,
  speed: 300,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper3 = new Swiper('.swiper3', {
  autoplay: true,
  loop: true,
  speed: 300,
});
