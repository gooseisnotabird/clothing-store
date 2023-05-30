"use strict"

let top_dark = document.querySelector(".top_dark");
let header_menuIcon = document.querySelector(".header_menuIcon");
let menu__close = document.querySelector(".menu__close");

function toggleMenu() {
    top_dark.classList.toggle("hidden");
}

header_menuIcon.addEventListener("click", toggleMenu);
menu__close.addEventListener("click", toggleMenu);

/*
let filter_left = document.querySelector(".filter_left");
let filter_menu = document.querySelector(".filter_menu");

function toggleMenu() {
    filter_menu.classList.toggle("hidden");
}

filter_left.addEventListener("click", toggleMenu);*/