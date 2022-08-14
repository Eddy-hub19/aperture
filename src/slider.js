const swiper1 = new Swiper('.swiper1', {
  spaceBetween: 0,
  autoplay: 1,
  loop: true,
  speed: 300,
});
const swiper2 = new Swiper('.swiper2', {
  spaceBetween: 0,
  speed: 300,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper3 = new Swiper('.swiper3', {
  spaceBetween: 0,
  autoplay: 1,
  loop: true,
  speed: 300,
});
