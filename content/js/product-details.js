const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log(productId);
fetch("../../services/shop.json")
  .then((response) => response.json())
  .then((data) => {
    const productDetails = document.querySelector(".product-details__content");
    console.log(data[productId].title);
    const productTemplate = `
    <div class="product-details__content__img">
      <img src="${data[productId]["src-front"]}" alt="..." />
    </div>
    <div class="product-details__content__text">
      <div class="header">
        <h3>${data[productId].title}</h3>
        <p>$${data[productId].price}</p>
      </div>
      <hr />
      <div class="fabric">
        <p>Fabric Content:</p>
        <ul>
          <li><span>Small-2X: 70% Cotton / 30% Polyester</span></li>
          <li><span>3X-5X: 50% Cotton / 50% Polyester</span></li>
        </ul>
      </div>
      <form>
        <div class="size">
          <span>Size:</span>
          <select class="size-select">
            <option value="X">X</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2X" selected>2X</option>
            <option value="3X">3X</option>
            <option value="4X">4X</option>
            <option value="5X">5X</option>
          </select>
        </div>
        <div class="quantity">
          <span>Quantity:</span>
          <div class="quantity-input">
            <span class="quantity-btn minus" data-action="minus">-</span>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="10"
              value="1"
            />
            <span class="quantity-btn plus" data-action="plus">+</span>
          </div>
        </div>
        <div class="submit">
          <button type="submit">ADD TO CART</button>
        </div>
      </form>
    </div>
    `;
    productDetails.innerHTML = productTemplate;

    // const productTemplate = `
    //   <img src="${data[productId]["src-front"]}" alt="..." />
    //   <img src="${data[productId]["src-back"]}" alt="..." />
    //   <span>${data[productId].price}</span>
    // `;
  })
  .catch((error) => console.error(error));

// quantity-input

window.addEventListener("load", function () {
  let plus = document.querySelector(".plus");
  let minus = document.querySelector(".minus");
  let quantityInput = document.querySelector("#quantity");

  plus.addEventListener("click", () => {
    if (quantityInput.value < 10) {
      ++quantityInput.value;
    }
  });
  minus.addEventListener("click", () => {
    if (quantityInput.value > 1) {
      --quantityInput.value;
    }
  });
});
