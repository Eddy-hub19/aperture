const swiper1 = new Swiper('.swiper1', {
  spaceBetween: 0,
  autoplay: 1,
  loop: true,
  speed: 300,
});
const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// const swiper3 = new Swiper('.swiper3', {
//   spaceBetween: 30,
//   pagination: {
//     el: '.swiper-pagination3',
//     clickable: true,
//   },
// });
