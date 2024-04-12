

async function getPopularProducts() {
  try {
    const response = await fetch("assets/json/popularProducts.json");
    if (!response.ok) {
      throw new Error("Не удалось получить сведения из data.json");
    }
    const data = await response.json();
    const popularProductsDiv = document.querySelector(".top-content__products");

    data.forEach(({ img, name, price }) => {
      const itemEl = `
                  <div class="product-item itc-slider-item">
                    <img class="product-item__img" src="${img}" alt="product-image">
                    <h4 class="product-item__name">${name}</h4>
                    <p class="product-item__price">От ${price}&#8381;</p>
                  </div>
                  `;
      popularProductsDiv.insertAdjacentHTML("beforeend", itemEl);
    });
  } catch (error) {
    console.log(error);
  }
}

getPopularProducts();
