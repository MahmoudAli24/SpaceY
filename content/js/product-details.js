const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log(productId);
fetch("../../services/shop.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data[1]);
    const productDetails = document.querySelector(".product-details");
    const productTemplate = `
      <img src="${data[productId]["src-front"]}" alt="..." />
      <img src="${data[productId]["src-back"]}" alt="..." />
      <span>${data[productId].price}</span>
    `;
    productDetails.innerHTML = productTemplate;
  })
  .catch((error) => console.error(error));

// quantity-input
const quantityInput = document.getElementById("quantity");
const minusBtn = document.querySelector('[data-action="minus"]');
const plusBtn = document.querySelector('[data-action="plus"]');

minusBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = --currentValue;
  }
});

plusBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue < 10) {
    quantityInput.value = ++currentValue;
  }
});
