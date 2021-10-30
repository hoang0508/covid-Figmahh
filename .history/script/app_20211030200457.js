const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".header-list");
const menuLink = document.querySelectorAll(".header-link");

menuToggle.addEventListener("click", function (e) {
  menuList.classList.toggle("is-show");
  menuToggle.classList.toggle("fa-times");
  menuToggle.classList.toggle("fa-bars");
});

document.body.addEventListener("click", function (e) {
  if (!menuList.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menuList.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  }
});

[...menuLink].forEach((item) =>
  item.addEventListener("click", function () {
    menuList.classList.remove("is-show");
    menuToggle.classList.remove("fa-times");
    menuToggle.classList.add("fa-bars");
  })
);

/// arrow
const arrowPage = document.querySelector(".arrow");

window.addEventListener("scroll", function (e) {
  if (this.scrollY >= 400) {
    arrowPage.classList.add("active-scroll");
  } else {
    arrowPage.classList.remove("active-scroll");
  }
});

// border
const borderColumn = document.querySelectorAll(".contagion-column");

[...borderColumn].forEach((item) =>
  item.addEventListener("click", function (e) {
    borderColumn.forEach((item) => item.classList.remove("contagion-border"));
    e.currentTarget.classList.add("contagion-border");
  })
);
