"use strict";

const sliderBlocks = document.querySelectorAll(".sliderSideBtns");

sliderBlocks.forEach((elem) => {
  let slider = ItcSlider.getInstance(elem);
  elem.querySelector(".itc-slider-btn-prev").addEventListener("click", () => {
    slider.slidePrev();
  });
  elem.querySelector(".itc-slider-btn-next").addEventListener("click", () => {
    slider.slideNext();
  });
});
