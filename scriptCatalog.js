"use strict"
let top_catalogMenu = document.querySelector(".top_catalogMenu");
let header_menuIcon = document.querySelector(".header_menuIcon");
let menu__close = document.querySelector(".menu__close");

function toggleMenu() {
    top_catalogMenu.classList.toggle("hidden");
}

header_menuIcon.addEventListener("click", toggleMenu);
menu__close.addEventListener("click", toggleMenu);