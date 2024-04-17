"use strict";

const promotions = [
  {
    id: 0,
    img: "assets/img/img1.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
  {
    id: 1,
    img: "assets/img/img2.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
  {
    id: 2,
    img: "assets/img/img3.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
  {
    id: 3,
    img: "assets/img/img1.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
  {
    id: 4,
    img: "assets/img/img2.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
  {
    id: 5,
    img: "assets/img/img3.jpg",
    name: "Lorem ipsum dolor sit amet",
    date: "С 18 по 30 марта",
  },
];

const promotionsDiv = document.querySelector(".promotion__items");

promotions.forEach((item) => {
  const promoEl = `
    <div class="promotion-item itc-slider-item">
        <img class="promotion-item__img" src="${item.img}" alt="promotion-image">
        <h3 class="promotion-item__name">${item.name}</h3>
        <p class="promotion-item__price">${item.date}</p>
    </div>
  `;
  promotionsDiv.insertAdjacentHTML("beforeend", promoEl);
});
