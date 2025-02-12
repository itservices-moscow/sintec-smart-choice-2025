document.addEventListener('DOMContentLoaded', function() {
  const productsContentSlider = document.querySelector('.products-content__slider');
  if (productsContentSlider&&window.Swiper) {
    new Swiper(productsContentSlider, {
      slidesPerView: 'auto',
      spaceBetween: 20,
    })
  }
})