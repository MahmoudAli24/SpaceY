// get data
const cartItems = JSON.parse(localStorage.getItem("cartItems"));

// Remove item from cart based on index
function removeItemFromCart(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  location.reload();
}

const cartTable = document.querySelector("tbody");
cartItems.forEach((cartItem, index) => {
  // let subTotal = cartItem.price * quantityInput;

  const cartRow = `
    <tr>
      <td class="product">
        <div class="product-image">
          <img src="${cartItem.imgSrc}" alt="Product Image" />
        </div>
        <div class="product-info">
          <h3 class="product-name">${cartItem.title}</h3>
          <p class="product-size">${cartItem.size}</p>
        </div>
      </td>
      <td class="product-price">$${cartItem.price}</td>
      <td>
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
              value="${cartItem.quantity}"
            />
            <span class="quantity-btn plus" data-action="plus">+</span>
          </div>
          <button onclick="removeItemFromCart(${index})">Remove</button>
        </div>
      </td>
      <td class="product-subtotal"></td>
    </tr>
  `;
  cartTable.innerHTML += cartRow;
  let cartTotal = document.querySelector(".cart-total");

  //

  //
  let productSubtotal = document.querySelectorAll(".product-subtotal");
  let total = 0;
  productSubtotal.forEach((el) => {
    total += +el.textContent;
  });
  cartTotal.textContent = `$ ${total}`;
});
window.addEventListener("load", () => {
  let plusButtons = document.querySelectorAll(".plus");
  let minusButtons = document.querySelectorAll(".minus");

  plusButtons.forEach((plus) => {
    plus.addEventListener("click", () => {
      let inputField = plus.previousElementSibling;
      if (inputField.value < 10) {
        ++inputField.value;
      }
    });
  });

  minusButtons.forEach((minus) => {
    minus.addEventListener("click", () => {
      let inputField = minus.nextElementSibling;
      if (inputField.value > 1) {
        --inputField.value;
      }
    });
  });

  let productSubtotal = document.querySelectorAll(".product-subtotal");
  let quantityInput = document.querySelectorAll("#quantity");
  let productPrice = document.querySelectorAll(".product-price");

  quantityInput.forEach((input, index) => {
    input.addEventListener("change", () => {
      let quantity = input.value;
      let price = parseFloat(productPrice[index].textContent.replace("$", ""));
      let subtotal = quantity * price;
      productSubtotal[index].textContent = "$" + subtotal.toFixed(2);
    });
  });
});
