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
// -------------------
// Start QA
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // close all other open accordions
    for (let j = 0; j < acc.length; j++) {
      if (j != i && acc[j].classList.contains("active")) {
        acc[j].classList.remove("active");
        let panel = acc[j].nextElementSibling;
        panel.style.maxHeight = null;
      }
    }
    // toggle the clicked accordion
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// End QA
