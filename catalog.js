"use strict";

const catalog = [
  {
    id: 0,
    section: "Лубриканты",
    products: [
      {
        id: 0,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 1,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 2,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 3,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 4,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 5,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
    ],
  },
  {
    id: 1,
    section: "Эротическое бельё",
    products: [
      {
        id: 0,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 1,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 2,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 3,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 4,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 5,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
    ],
  },
  {
    id: 2,
    section: "Портупеи",
    products: [
      {
        id: 0,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 1,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 2,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 3,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 4,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 5,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
    ],
  },
  {
    id: 3,
    section: "Игрушки",
    products: [
      {
        id: 0,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 1,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 2,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 3,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 4,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
      {
        id: 5,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800,
      },
    ],
  },
];

const productsSections = document.querySelector(".catalog");

catalog.forEach((item) => {
  const sectionEl = `
    <div class="sliderSideBtns" slider-id="${item.id}">
        <div class="nav">
            <h3>${item.section}</h3>
            <div class="btns">
                <button class="itc-slider-btn itc-slider-btn-prev"></button>
                <button class="itc-slider-btn itc-slider-btn-next"></button>
            </div>
        </div>
        <div class="slider__items">
            <div class="slider__wrapper">
            </div>
        </div>
    </div>`;

  productsSections.insertAdjacentHTML("beforeend", sectionEl);
  const products = document.querySelectorAll(".slider__wrapper");

  item.products.forEach((product) => {
    const productEl = `
                <div class="slider__item">
                    <img class="product__img" src="${product.img}" alt="product-image">
                    <h4 class="product-item__name">${product.name}</h4>
                    <p class="product-item__price">От ${product.price}&#8381;</p>
                </div>`;
    products.forEach((element) => {
      element.insertAdjacentHTML("beforeend", productEl);
    });
  });
});
