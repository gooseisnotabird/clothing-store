let filter_left = document.querySelector(".filter_left");
let filter_menu = document.querySelector(".filter_menu");

function toggleMenu() {
    filter_menu.classList.toggle("hidden");
}

filter_left.addEventListener("click", toggleMenu);