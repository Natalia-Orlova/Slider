"use strict";

const popularProducts = [
    {
        id: 0,
        img: "assets/img/img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 1,
        img: "assets/img/img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 2,
        img: "assets/img/img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 3,
        img: "assets/img/product-img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 4,
        img: "assets/img/product-img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 5,
        img: "assets/img/product-img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    }
];

const newProducts = [
    {
        id: 0,
        img: "assets/img/product-img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 1,
        img: "assets/img/product-img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 2,
        img: "assets/img/product-img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 3,
        img: "assets/img/product-img1.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 4,
        img: "assets/img/product-img2.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    },
    {
        id: 5,
        img: "assets/img/product-img3.jpg",
        name: "Lorem ipsum dolor sit amet",
        price: 800
    }
];

const popularProductsDiv = document.querySelector(".popular__products");
const newProductsDiv = document.querySelector(".new__products");

popularProducts.forEach(product => {
    const popularEl = `
                  <div class="product-item itc-slider-item">
                    <img class="product-item__img" src="${product.img}" alt="product-image">
                    <h4 class="product-item__name">${product.name}</h4>
                    <p class="product-item__price">От ${product.price}&#8381;</p>
                  </div>
                  `;
    popularProductsDiv.insertAdjacentHTML("beforeend", popularEl);
});

newProducts.forEach(product => {
    const newEl = `
                  <div class="product-item itc-slider-item">
                    <img class="product-item__img" src="${product.img}" alt="product-image">
                    <h4 class="product-item__name">${product.name}</h4>
                    <p class="product-item__price">От ${product.price}&#8381;</p>
                  </div>
                  `;
    newProductsDiv.insertAdjacentHTML("beforeend", newEl);
})