let menu = document.querySelector(".menu-icon");
let NavBarList = document.querySelector(".main-nav__list");

menu.addEventListener("click", () => {
  NavBarList.classList.toggle("show");
});

// Start Overlay
function validateForm() {
  var cardNumber = document
    .getElementById("card-number")
    .value.replace(/\s+/g, "");
  var cvv = document.getElementById("cvv").value;
  if (!validateCardNumber(cardNumber)) {
    alert("Invalid credit card number.");
    return false;
  }
  if (!validateCVV(cvv)) {
    alert("Invalid CVV.");
    return false;
  }
  return true;
}

function validateCardNumber(cardNumber) {
  var regex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
  return regex.test(cardNumber);
}

function validateCVV(cvv) {
  var regex = /^[0-9]{3}$/;
  return regex.test(cvv);
}
