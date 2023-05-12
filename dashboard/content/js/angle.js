let sidebar = document.querySelector(".sidebar");
let angel = document.querySelector(".angle");
let sidebarContent = document.querySelector(".sidebar__content");
let sidebarHead = document.querySelector(".sidebar__head");
let content = document.querySelector(".content");
let linkPage = document.querySelectorAll(".link-page");

angel.addEventListener("click", () => {
  angel.classList.toggle("rotate-180");
  sidebar.classList.toggle("small");
  sidebarContent.classList.toggle("m-10");
  sidebarHead.classList.toggle("flex-column");
  content.classList.toggle("ml-75");
  content.classList.toggle("mr-15");
  linkPage.forEach((e) => {
    e.classList.toggle("d-none");
  });
});
