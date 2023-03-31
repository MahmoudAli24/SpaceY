let menu = document.querySelector(".menu-icon");
let NavBarList = document.querySelector(".main-nav__list");

menu.addEventListener("click", () => {
  NavBarList.classList.toggle("show");
});

function countUp(targetElement, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = (range / duration) * 10;
  const element = document.querySelector(targetElement);
  const timer = setInterval(() => {
    current += increment;
    element.textContent = Math.floor(current);
    if (current >= end) {
      clearInterval(timer);
      element.textContent = end;
    }
  }, 10);
}
let client = document.querySelector(".client").textContent;
let project = document.querySelector(".project").textContent;
let employe = document.querySelector(".employe").textContent;
let years = document.querySelector(".years").textContent;
countUp(".client", 0, client, 2000);
countUp(".project", 0, project, 3000);
countUp(".employe", 0, employe, 1000);
countUp(".years", 0, years, 1500);
