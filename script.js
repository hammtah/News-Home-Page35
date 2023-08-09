const list = document.querySelectorAll("li");
const menuClose = document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

menuIcon.addEventListener("click", function() {
    this.classList.add("hide");
    menuClose.classList.remove("hide");
    nav.classList.add("nav");
    ul.classList.add("nav-ul");

    for (li of list) {
        li.classList.add("nav-ul-li");
    }
})
menuClose.addEventListener("click", function() {
    this.classList.add("hide");
    menuIcon.classList.remove("hide");
    nav.classList.remove("nav");
    ul.classList.remove("nav-ul");
    for (li of list) {
        li.classList.remove("nav-ul-li");
    }
})